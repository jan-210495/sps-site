(function () {
  const STORAGE_KEY = 'sps-auth';
  const API_BASE = '/api';

  const readState = () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (err) {
      return null;
    }
  };
  const writeState = (data) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    window.dispatchEvent(new Event('sps-auth-update'));
  };
  const clearState = () => {
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new Event('sps-auth-update'));
  };
  const getToken = () => readState()?.token || null;
  const getRole = () => readState()?.role || null;
  const requiresRole = (allowed = []) => {
    const role = getRole();
    return role && allowed.includes(role);
  };

  const fetchJSON = async (url, options = {}) => {
    const token = getToken();
    const headers = Object.assign(
      {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      options.headers || {}
    );
    if (token) headers.Authorization = `Bearer ${token}`;
    const response = await fetch(`${API_BASE}${url}`, Object.assign({}, options, { headers }));
    if (!response.ok) {
      const payload = await response.json().catch(() => ({}));
      const message = payload?.message || response.statusText || 'Request failed';
      throw new Error(message);
    }
    return response.json();
  };

  const fetchFormData = async (url, formData, options = {}) => {
    const token = getToken();
    const headers = Object.assign({}, options.headers || {});
    if (token) headers.Authorization = `Bearer ${token}`;
    const response = await fetch(`${API_BASE}${url}`, Object.assign({}, options, { headers, body: formData }));
    if (!response.ok) {
      const payload = await response.json().catch(() => ({}));
      const message = payload?.message || response.statusText || 'Request failed';
      throw new Error(message);
    }
    return response.json();
  };

  const setTimestamp = (form) => {
    const ts = form?.querySelector('[data-timestamp]');
    if (ts) ts.value = Date.now().toString();
  };

  const initLogin = () => {
    const form = document.querySelector('[data-login-form]');
    if (!form) return;
    const error = document.getElementById('loginError');
    setTimestamp(form);
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      e.stopPropagation();
      form.classList.add('was-validated');
      if (!form.checkValidity()) return;
      const trap = form.querySelector('[data-honeypot]');
      const ts = form.querySelector('[data-timestamp]');
      const threshold = 1500;
      if ((trap && trap.value.trim() !== '') || (ts && Date.now() - parseInt(ts.value || '0', 10) < threshold)) {
        if (error) error.classList.remove('d-none');
        return;
      }
      const payload = {
        email: form.loginEmail.value.trim(),
        password: form.loginPassword.value,
      };
      try {
        const data = await fetchJSON('/auth/login', {
          method: 'POST',
          body: JSON.stringify(payload),
        });
        writeState({ token: data.token, role: data.role, name: data.name });
        const dashboard = form.getAttribute('data-dashboard') || 'admin.html';
        window.location.href = dashboard;
      } catch (err) {
        if (error) {
          error.textContent = err.message;
          error.classList.remove('d-none');
        } else {
          alert(err.message);
        }
      }
    });
  };

  const renderAlert = (container, type, message) => {
    if (!container) return;
    container.innerHTML = `<div class="alert alert-${type}" role="alert">${message}</div>`;
  };

  const buildNewsCard = (news) => {
    return `
      <div class="col-md-4">
        <div class="card h-100 shadow-sm">
          <div class="card-body d-flex flex-column">
            <h3 class="h5">${news.title}</h3>
            <p class="news-meta mb-2">${news.published_at || ''}</p>
            <p class="flex-grow-1">${news.body || ''}</p>
            <button class="btn btn-reset-ghost mt-2" data-edit-news="${news.id}">Edit</button>
          </div>
        </div>
      </div>
    `;
  };

  const populateGalleryOptions = (select, images = []) => {
    if (!select) return;
    select.innerHTML = '<option value="">--</option>';
    images.forEach((img) => {
      const option = document.createElement('option');
      option.value = img.path;
      option.textContent = img.label || img.path;
      select.appendChild(option);
    });
  };

  const initAdminDashboard = () => {
    const dashboard = document.querySelector('[data-admin-dashboard]');
    if (!dashboard) return;
    const role = getRole();
    if (!role) {
      window.location.href = 'login.html';
      return;
    }
    const badge = document.getElementById('roleBadge');
    if (badge) badge.textContent = role;
    const alerts = document.getElementById('adminAlerts');
    const newsList = dashboard.querySelector('[data-news-list]');
    const gallerySelect = dashboard.querySelector('[data-gallery-select]');
    const newsForm = dashboard.querySelector('[data-news-form]');
    const logoutBtn = document.getElementById('logoutBtn');

    const loadNews = async () => {
      try {
        renderAlert(alerts, 'info', 'Loading...');
        const data = await fetchJSON('/media/dashboard');
        renderAlert(alerts, 'success', 'Data synced.');
        if (newsList) newsList.innerHTML = data.news.map(buildNewsCard).join('');
        populateGalleryOptions(gallerySelect, data.gallery || []);
      } catch (err) {
        renderAlert(alerts, 'danger', err.message);
      }
    };

    dashboard.addEventListener('click', (e) => {
      const editId = e.target?.getAttribute('data-edit-news');
      if (editId && newsForm) {
        e.preventDefault();
        const card = e.target.closest('.card');
        newsForm.dataset.editingId = editId;
        newsForm.newsTitle.value = card.querySelector('h3').textContent.trim();
        newsForm.newsDate.value = card.querySelector('.news-meta').textContent.trim();
        newsForm.newsBody.value = card.querySelector('p.flex-grow-1').textContent.trim();
        window.scrollTo({ top: newsForm.offsetTop - 80, behavior: 'smooth' });
      }
      if (e.target?.matches('[data-refresh-news]')) {
        loadNews();
      }
      if (e.target?.matches('[data-clear-news]')) {
        newsForm?.reset();
        delete newsForm?.dataset.editingId;
      }
    });

    if (newsForm) {
      newsForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        e.stopPropagation();
        newsForm.classList.add('was-validated');
        if (!newsForm.checkValidity()) return;
        const payload = {
          title: newsForm.newsTitle.value.trim(),
          published_at: newsForm.newsDate.value,
          body: newsForm.newsBody.value.trim(),
          image: newsForm.newsImage.value,
        };
        const editingId = newsForm.dataset.editingId;
        try {
          if (editingId) {
            await fetchJSON(`/media/news/${editingId}`, {
              method: 'PUT',
              body: JSON.stringify(payload),
            });
          } else {
            await fetchJSON('/media/news', {
              method: 'POST',
              body: JSON.stringify(payload),
            });
          }
          renderAlert(alerts, 'success', 'News saved.');
          newsForm.reset();
          newsForm.classList.remove('was-validated');
          delete newsForm.dataset.editingId;
          loadNews();
        } catch (err) {
          renderAlert(alerts, 'danger', err.message);
        }
      });
    }

    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => {
        clearState();
        window.location.href = 'login.html';
      });
    }

    loadNews();
  };

  document.addEventListener('DOMContentLoaded', () => {
    initLogin();
    initAdminDashboard();
  });

  window.SPSAuth = {
    getState: readState,
    getRole,
    getToken,
    clear: clearState,
    requiresRole,
  };
})();
