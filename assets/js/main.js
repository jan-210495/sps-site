// Main JS for St. Ephrem Scouts – Damascus
// - Sets active nav link
// - Handles Join form validation
// - Handles simple gallery filtering

(function() {
  // --- i18n dictionary ---
  const i18n = {
    en: {
      'nav.brand': 'St. Ephrem Scouts',
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.units': 'Units',
      'nav.band': 'Band',
      'nav.events': 'Events',
      'nav.gallery': 'Gallery',
      'nav.news': 'News',
      'nav.join': 'Join Us',
      'nav.contact': 'Contact',
      'nav.login': 'Login',
      'nav.more': 'More',
      'nav.theme': 'Dark Mode',

      'footer.name': 'St. Ephrem Patriarchal Syriac Scouts – Damascus',
      'footer.tagline': 'A church-based scout troop fostering faith, leadership, and service.',

      // Home
      'home.hero.title': 'St. Ephrem Patriarchal Syriac Scouts – Damascus',
      'home.hero.subtitle': 'Faith, Service, and Brotherhood in the Heart of Damascus',
      'home.hero.scroll': 'Learn more',
      'home.hero.about': 'About the Troop',
      'home.hero.join': 'Join Us',
      'home.who.title': 'Who We Are',
      'home.who.body': 'We are a church-based Syriac Orthodox scout troop serving youth and families in Damascus. Our community fosters faith, character, and brotherhood through scouting traditions, service, and joyful witness.',
      'home.mission.title': 'Our Mission',
      'home.mission.li1': 'Grow in faith, prayer, and Christian values.',
      'home.mission.li2': 'Live the scouting spirit: leadership, teamwork, and responsibility.',
      'home.mission.li3': 'Serve our parish, neighborhood, and wider community.',
      'home.mission.li4': 'Form resilient, joyful youth ready to lead.',
      'home.units.title': 'Our Units',
      'home.units.beavers.title': 'Beavers',
      'home.units.beavers.text': 'Our youngest section building curiosity, teamwork, and care through play.',
      'home.units.cubs.title': 'Cubs',
      'home.units.cubs.text': 'Youngest adventurers learning teamwork and faith through games and discovery.',
      'home.units.scouts.title': 'Scouts',
      'home.units.scouts.text': 'Outdoor skills, service, and personal growth with strong friendships.',
      'home.units.guides.title': 'Guides',
      'home.units.guides.text': 'Sisterhood, leadership, creativity, and service to parish and city.',
      'home.units.rovers.title': 'Rovers',
      'home.units.rovers.text': 'Young adults leading projects, mentorship, and impactful service.',
      'home.units.band.title': 'Band',
      'home.units.band.text': 'Trumpets, drums, and cymbals bringing joy to feasts and processions.',
      'home.learnmore': 'Learn more',
      'home.events.title': 'Upcoming Events',
      'home.events.e1.title': 'Community Service Day',
      'home.events.e1.text': 'Join us in a neighborhood clean-up and visit to seniors.',
      'home.events.e2.title': 'Advent Prayer Night',
      'home.events.e2.text': 'An evening of hymns and reflection as we prepare for Christmas.',
      'home.events.e3.title': 'Band Rehearsal Open Day',
      'home.events.e3.text': 'Come try instruments and meet the band team.',
      'home.gallery.title': 'Featured Gallery',
      'home.gallery.viewall': 'View all',
      'home.cta.title': 'Want to join the troop?',
      'home.cta.text': 'We welcome youth who seek faith, friendship, and service. Become part of our family.',
      'home.cta.button': 'Join Us',

      // About
      'about.title': 'About Us',
      'about.lead': 'Learn our story, identity, and vision as a Syriac Orthodox scout troop serving Damascus.',
      'about.story.title': 'Our Story',
      'about.story.body': 'Founded to serve the youth of our parish in the heart of Damascus, our troop grew from a small circle of friends into a vibrant community. We blend scouting traditions—camps, hikes, skills—with parish life, liturgy, and service. Over the years, countless young people have discovered leadership, teamwork, and faith through our activities.',
      'about.identity.title': 'Spiritual Identity',
      'about.identity.body': 'We belong to the Syriac Orthodox Patriarchate and walk in the footsteps of St. Ephrem the Syrian—our patron and guide in faith and wisdom. Our spirituality is rooted in prayer, Scripture, and the sacramental life of the Church, inspiring us to serve with humility and joy.',
      'about.identity.quote': 'We are inspired by St. Ephrem the Syrian—poet of the Church and teacher of love and service.',
      'about.mv.title': 'Mission & Vision',
      'about.mission': 'Mission',
      'about.vision': 'Vision',
      'about.mission.li1': 'Form youth in faith, character, and service.',
      'about.mission.li2': 'Foster leadership, responsibility, and solidarity.',
      'about.mission.li3': 'Support families and the parish community.',
      'about.vision.li1': 'A generation rooted in Christ, courageous and compassionate.',
      'about.vision.li2': 'A scout family that welcomes and empowers every young person.',
      'about.vision.li3': 'Witness to hope in Damascus through service and friendship.',
      'about.leadership.title': 'Leadership',
      'about.leadership.troop': 'Troop Leader',
      'about.leadership.band': 'Band Leader',
      'about.leadership.units': 'Unit Leaders',
      'about.emblem.title': 'Our Emblem & Symbols',
      'about.emblem.body': 'Our emblem reminds us of St. Ephrem’s faith and the call to serve. It weaves together our Syriac heritage, the scout fleur-de-lis, and symbols of Damascus. The colors reflect sacrifice, joy, and hope.',
      'about.pillars.title': 'What guides us',
      'about.pillar.community.title': 'Community-first',
      'about.pillar.community.body': 'Rooted in parish life and Damascus neighborhoods.',
      'about.pillar.service.title': 'Service and outreach',
      'about.pillar.service.body': 'Serving through prayer, visits, camps, and parish projects.',
      'about.pillar.leadership.title': 'Leadership formation',
      'about.pillar.leadership.body': 'Mentoring youth to lead with courage, empathy, and faith.',

      // Units
      'units.title': 'Scouting Units',
      'units.lead': 'Explore our units and their activities.',
      'units.beavers': 'Beavers',
      'units.cubs': 'Cubs',
      'units.scouts': 'Scouts',
      'units.guides': 'Guides',
      'units.rovers': 'Rovers',
      'units.leaders': 'Leaders',
      'units.leaders.text': 'Adult leaders and mentors guiding our youth with care and experience.',
      'units.age': 'Age Range:',
      'units.activities': 'Activities:',
      'units.join': 'Join',
      'units.volunteer': 'Volunteer',

      // Band
      'band.title': 'Band',
      'band.lead': 'Bringing joy to feasts, processions, and parish celebrations.',
      'band.about.title': 'About the Band',
      'band.about.body': 'The troop’s brass band unites youth through music and discipline. Our ensemble typically includes trumpets, drums, cymbals, and other instruments. We rehearse regularly and support parish and community events.',
      'band.what.title': 'What We Do',
      'band.reh.title': 'Rehearsals',
      'band.reh.body': 'Weekly schedule (placeholder): Fridays 6:00–8:00 PM, Parish Music Room. New members are welcome to observe and try instruments.',
      'band.join.title': 'Join the Band',
      'band.join.body': 'If you are interested in learning an instrument and serving with the band, we’d love to meet you.',
      'band.join.button': 'Apply to Join',
      'band.media.title': 'Media',

      // Events
      'events.title': 'Events',
      'events.lead': 'Upcoming events and past highlights.',
      'events.upcoming': 'Upcoming',
      'events.past': 'Past Highlights',

      // Gallery
      'gallery.title': 'Gallery',
      'gallery.lead': 'Processions, camps, band, and meetings.',
      'gallery.all': 'All',
      'gallery.processions': 'Processions',
      'gallery.camps': 'Camps',
      'gallery.band': 'Band',
      'gallery.meetings': 'Meetings',

      // News
      'news.title': 'News',
      'news.lead': 'Updates and stories from our troop.',
      'news.post1.title': 'Troop Launches Winter Drive',
      'news.post1.body': 'We are collecting warm clothing and blankets for families in need across Damascus. Thank you for your generosity and support.',
      'news.post2.title': 'Band Welcomes New Members',
      'news.post2.body': 'After a lively open day, the band is excited to welcome new musicians to our weekly rehearsals.',
      'news.post3.title': 'Guide Unit Craft Workshop',
      'news.post3.body': 'The Guides spent the afternoon crafting gifts and cards for parish seniors, sharing joy and creativity.',
      'news.readmore': 'Read more',
      // Not found
      'notfound.code': 'Error 404',
      'notfound.title': 'We couldn’t find that page',
      'notfound.body': 'The link may be wrong or the page was moved. Head back home or reach out if you need help.',
      'notfound.cta': 'Back to homepage',
      'notfound.contact': 'Contact us',

      // Join
      'join.title': 'Join Us',
      'join.lead': 'Interested in scouting or the band? Fill out the form and we will reach out.',
      'join.success': 'Thank you! Your interest has been recorded. We will contact you soon.',
      'join.name': 'Name',
      'join.age': 'Age',
      'join.unit': 'Preferred unit',
      'join.unit.cubs': 'Cubs (أشبال)',
      'join.unit.scouts': 'Scouts',
      'join.unit.guides': 'Guides',
      'join.unit.rovers': 'Rovers (جوالة)',
      'join.unit.band': 'Band (الفرقة النحاسية)',
      'join.phone': 'Phone / WhatsApp',
      'join.phone.ph': '+963 ...',
      'join.email': 'Email',
      'join.email.ph': 'name@example.com',
      'join.msg': 'Message / Notes',
      'join.msg.ph': 'Tell us about yourself...',
      'join.submit': 'Submit',
      'join.reset': 'Reset',
      'join.contact_requirement': 'Please provide a phone or an email.',
      'join.option.placeholder': 'Choose...',
      'join.validation.name': 'Please enter your name.',
      'join.validation.age': 'Please provide a valid age.',
      'join.validation.unit': 'Please select a unit.',
      'join.validation.contact': 'Please enter a phone or email.',
      'join.validation.email': 'Please enter a valid email or phone.',

      // Contact
      'contact.title': 'Contact',
      'contact.lead': 'Reach us for questions or to collaborate.',
      'contact.details': 'Details',
      'contact.address': 'Address:',
      'contact.address.value': 'Patriarchal Cathedral of St. George, Bab Touma, Old Damascus',
      'contact.email': 'Email:',
      'contact.email.value': 'info@sps-damascus.org',
      'contact.phone': 'Phone / WhatsApp:',
      'contact.phone.value': '+963 944 555 120',
      'contact.form.title': 'Send a Message',
      'contact.form.name': 'Name',
      'contact.form.email': 'Email',
      'contact.form.message': 'Message',
      'contact.form.send': 'Send',
      'contact.validation.name': 'Please enter your name.',
      'contact.validation.email': 'Please enter a valid email.',
      'contact.validation.message': 'Please enter a message.',
    },
    ar: {
      'nav.brand': 'فوج مار أفرام السرياني',
      'nav.home': 'الرئيسية',
      'nav.about': 'نبذة',
      'nav.units': 'الوحدات',
      'nav.band': 'الفرقة',
      'nav.events': 'الفعاليات',
      'nav.gallery': 'المعرض',
      'nav.news': 'الأخبار',
      'nav.join': 'انضم إلينا',
      'nav.contact': 'اتصل بنا',
      'nav.login': 'تسجيل الدخول',
      'nav.more': 'المزيد',
      'nav.theme': 'الوضع الداكن',

      'footer.name': 'فوج مار أفرام السرياني البطريركي – دمشق',
      'footer.tagline': 'فوج كشفي كنسي يعزّز الإيمان والقيادة والخدمة.',

      // Home
      'home.hero.title': 'فوج مار أفرام السرياني البطريركي',
      'home.hero.subtitle': 'إخلاص - مساعدة - طاعة',
      'home.hero.scroll': 'اكتشف المزيد',
      'home.hero.about': 'نبذة عن الفوج',
      'home.hero.join': 'انضم إلينا',
      'home.who.title': 'من نحن',
      'home.who.body': 'نحن فوج كشفي تابع للكنيسة السريانية الأرثوذكسية نخدم الشبيبة والعائلات في دمشق. نسعى إلى تنمية الإيمان وبناء الشخصية وروح الأخوّة عبر تقاليد الكشفية والخدمة والشهادة الفَرِحة.',
      'home.mission.title': 'رسالتنا',
      'home.mission.li1': 'النمو في الإيمان والصلاة والقيم المسيحية.',
      'home.mission.li2': 'عيش الروح الكشفية: القيادة والعمل الجماعي والمسؤولية.',
      'home.mission.li3': 'خدمة رعيتنا وحيّنا والمجتمع الأوسع.',
      'home.mission.li4': 'تكوين شباب فرحين ثابتين مستعدين للقيادة.',
      'home.units.title': 'وحداتنا',
      'home.units.beavers.title': 'مستعمرة القنادس',
      'home.units.beavers.text': 'أصغر وحداتنا، ينمون الفضول والعمل الجماعي والرعاية عبر اللعب.',
      'home.units.cubs.title': 'قطيع الجراميز',
      'home.units.cubs.text': 'أصغر المغامرين يتعلمون العمل الجماعي والإيمان عبر الألعاب والاكتشاف.',
      'home.units.scouts.title': 'الكشافين',
      'home.units.scouts.text': 'مهارات خارجية وخدمة ونمو شخصي ضمن صداقات متينة.',
      'home.units.guides.title': 'المرشدات',
      'home.units.guides.text': 'أخوّة وقيادة وإبداع وخدمة للرعية والمدينة.',
      'home.units.rovers.title': 'الجوالة',
      'home.units.rovers.text': 'شباب يقودون مبادرات وإرشادًا وخدمة مؤثرة.',
      'home.units.band.title': 'الفرقة النحاسية',
      'home.units.band.text': 'أبواق وطبول وصنوج تُدخل الفرح في الأعياد والزياحات.',
      'home.learnmore': 'اعرف المزيد',
      'home.events.title': 'الفعاليات القادمة',
      'home.events.e1.title': 'يوم خدمة المجتمع',
      'home.events.e1.text': 'انضموا إلينا في حملة تنظيف الحي وزيارة المسنين.',
      'home.events.e2.title': 'أمسية صلاة المجيء',
      'home.events.e2.text': 'أمسية تراتيل وتأمل استعدادًا للميلاد.',
      'home.events.e3.title': 'يوم مفتوح لتجربة الفرقة',
      'home.events.e3.text': 'جرّبوا الآلات وتعرّفوا على فريق الفرقة.',
      'home.gallery.title': 'معرض مختار',
      'home.gallery.viewall': 'عرض الكل',
      'home.cta.title': 'هل ترغب بالانضمام إلى الفوج؟',
      'home.cta.text': 'نرحّب بكل شاب وشابة يبحثون عن الإيمان والصداقة والخدمة. كونوا جزءًا من عائلتنا.',
      'home.cta.button': 'انضم إلينا',

      // About
      'about.title': 'نبذة عنا',
      'about.lead': 'تعرّفوا على قصتنا وهويتنا ورؤيتنا كفوج كشفي سرياني أرثوذكسي يخدم دمشق.',
      'about.story.title': 'قصتنا',
      'about.story.body': 'تأسس فوجنا لخدمة شباب الرعية في قلب دمشق، ونما من حلقة صغيرة من الأصدقاء إلى جماعة حيّة. نمزج تقاليد الكشفية — المخيمات والرحلات والمهارات — مع حياة الرعية والليتورجيا والخدمة، فتعرف كثيرون عبر أنشطتنا القيادة والعمل الجماعي والإيمان.',
      'about.identity.title': 'هويتنا الروحية',
      'about.identity.body': 'ننتمي إلى البطريركية السريانية الأرثوذكسية، ونسير على خطى القديس مار أفرام السرياني — شفيعنا وملهمنا في الإيمان والحكمة. روحانيتنا متجذّرة في الصلاة والكتاب المقدس والحياة السرائرية في الكنيسة، فتدفعنا إلى الخدمة بتواضع وفرح.',
      'about.identity.quote': 'نستلهم روح القديس مار أفرام السرياني، شاعر الكنيسة ومعلم المحبة والخدمة.',
      'about.mv.title': 'الرسالة والرؤية',
      'about.mission': 'الرسالة',
      'about.vision': 'الرؤية',
      'about.mission.li1': 'تكوين الشبيبة على الإيمان وبناء الشخصية والخدمة.',
      'about.mission.li2': 'تنمية القيادة والمسؤولية والتضامن.',
      'about.mission.li3': 'دعم العائلات وخدمة جماعة الرعية.',
      'about.vision.li1': 'جيل متجذّر في المسيح، شجاع ومتعاطف.',
      'about.vision.li2': 'عائلة كشفية ترحّب بكل شاب وتمكّنه.',
      'about.vision.li3': 'شهادة رجاء في دمشق عبر الخدمة والصداقة.',
      'about.leadership.title': 'القيادة',
      'about.leadership.troop': 'قائد الفوج',
      'about.leadership.band': 'قائد الفرقة',
      'about.leadership.units': 'قادة الوحدات',
      'about.emblem.title': 'الشعار والرموز',
      'about.emblem.body': 'يذكّرنا الشعار بإيمان مار أفرام والدعوة إلى الخدمة، ويجمع تراثنا السرياني وزنار الزنبق الكشفي ورموز دمشق. وتعكس الألوان التضحية والفرح والرجاء.',
      'about.pillars.title': 'ما يوجّهنا',
      'about.pillar.community.title': 'مجتمعنا أولاً',
      'about.pillar.community.body': 'متجذّرون في حياة الرعية وأحياء دمشق.',
      'about.pillar.service.title': 'الخدمة والانفتاح',
      'about.pillar.service.body': 'نخدم بالصلاة والزيارات والمخيّمات ومشاريع الرعية.',
      'about.pillar.leadership.title': 'تنمية القيادة',
      'about.pillar.leadership.body': 'نرافق الشباب ليقودوا بشجاعة وتعاطف وإيمان.',

      // Units
      'units.title': 'وحدات الفوج',
      'units.lead': 'تعرّفوا على وحداتنا وأنشطتها.',
      'units.beavers': 'مستعمرة القنادس',
      'units.cubs': 'قطيع الجراميز',
      'units.scouts': 'الكشافين',
      'units.guides': 'المرشدات',
      'units.rovers': 'الجوالة',
      'units.leaders': 'القادة',
      'units.leaders.text': 'قادة بالغون يرافقون شبابنا بخبرتهم ورعايتهم.',
      'units.age': 'الفئة العمرية:',
      'units.activities': 'الأنشطة:',
      'units.join': 'انضم',
      'units.volunteer': 'تطوّع',

      // Band
      'band.title': 'الفرقة النحاسية',
      'band.lead': 'ننشر الفرح في الأعياد والزياحات واحتفالات الرعية.',
      'band.about.title': 'عن الفرقة',
      'band.about.body': 'تجمع الفرقة النحاسية الشبيبة على الموسيقى والانضباط، وتضم عادةً أبواقًا وطبولًا وصنوجًا وغيرها. نتمرّن بانتظام ونخدم في مناسبات الرعية والمجتمع.',
      'band.what.title': 'ماذا نفعل',
      'band.reh.title': 'التمارين',
      'band.reh.body': 'البرنامج الأسبوعي (افتراضي): الجمعة 6:00–8:00 مساءً في غرفة الموسيقى. نرحّب بالمهتمين للحضور وتجربة الآلات.',
      'band.join.title': 'انضم إلى الفرقة',
      'band.join.body': 'إن كنت مهتمًا بتعلّم آلة موسيقية وخدمة الرعية مع الفرقة، يسعدنا التعرّف عليك.',
      'band.join.button': 'قدّم طلب انضمام',
      'band.media.title': 'وسائط',

      // Events
      'events.title': 'الفعاليات',
      'events.lead': 'الفعاليات القادمة وأبرز الأحداث السابقة.',
      'events.upcoming': 'القادمة',
      'events.past': 'أبرز الأحداث السابقة',

      // Gallery
      'gallery.title': 'المعرض',
      'gallery.lead': 'زياحات ومخيّمات والفرقة واجتماعات.',
      'gallery.all': 'الكل',
      'gallery.processions': 'زياحات',
      'gallery.camps': 'مخيّمات',
      'gallery.band': 'الفرقة',
      'gallery.meetings': 'اجتماعات',

      // News
      'news.title': 'الأخبار',
      'news.lead': 'تحديثات وقصص من الفوج.',
      'news.post1.title': 'إطلاق حملة شتوية للفوج',
      'news.post1.body': 'نجمع ملابس وأغطية دافئة للعائلات المحتاجة في دمشق. شكرًا لكرمكم ودعمكم.',
      'news.post2.title': 'الفرقة ترحّب بأعضاء جدد',
      'news.post2.body': 'بعد يوم مفتوح مفعم بالحياة، تتطلع الفرقة إلى استقبال موسيقيين جدد في التمارين الأسبوعية.',
      'news.post3.title': 'ورشة أشغال يدوية لوحدة المرشدات',
      'news.post3.body': 'أمضت المرشدات فترة بعد الظهر في صنع هدايا وبطاقات لكبار السن في الرعية، بمشاركة الفرح والإبداع.',
      'news.readmore': 'اقرأ المزيد',
      // Not found
      'notfound.code': 'خطأ 404',
      'notfound.title': 'لم نعثر على هذه الصفحة',
      'notfound.body': 'قد يكون الرابط غير صحيح أو تم نقل الصفحة. عودوا إلى الصفحة الرئيسية أو تواصلوا معنا للمساعدة.',
      'notfound.cta': 'عودة إلى الرئيسية',
      'notfound.contact': 'تواصل معنا',

      // Join
      'join.title': 'انضم إلينا',
      'join.lead': 'مهتمون بالكشفية أو الفرقة؟ املؤوا الطلب وسنتواصل معكم.',
      'join.success': 'شكرًا لكم! تم تسجيل اهتمامكم وسنتواصل معكم قريبًا.',
      'join.name': 'الاسم',
      'join.age': 'العمر',
      'join.unit': 'الوحدة المفضلة',
      'join.unit.cubs': 'الأشبال',
      'join.unit.scouts': 'الكشّاف',
      'join.unit.guides': 'المرشدات',
      'join.unit.rovers': 'الجوالة',
      'join.unit.band': 'الفرقة النحاسية',
      'join.phone': 'الهاتف / واتساب',
      'join.phone.ph': '+963 ...',
      'join.email': 'البريد الإلكتروني',
      'join.email.ph': 'name@example.com',
      'join.msg': 'رسالة / ملاحظات',
      'join.msg.ph': 'عرّفنا عن نفسك...',
      'join.submit': 'إرسال',
      'join.reset': 'مسح',
      'join.contact_requirement': 'يرجى إدخال رقم هاتف أو بريد إلكتروني.',
      'join.option.placeholder': 'اختر...',
      'join.validation.name': 'يرجى إدخال الاسم.',
      'join.validation.age': 'يرجى إدخال عمر صالح.',
      'join.validation.unit': 'يرجى اختيار وحدة.',
      'join.validation.contact': 'يرجى إدخال رقم هاتف أو بريد إلكتروني.',
      'join.validation.email': 'يرجى إدخال بريد إلكتروني أو هاتف صالح.',

      // Contact
      'contact.title': 'اتصل بنا',
      'contact.lead': 'تواصلوا معنا للاستفسار أو للتعاون.',
      'contact.details': 'التفاصيل',
      'contact.address': 'العنوان:',
      'contact.address.value': 'كاتدرائية القديس جاورجيوس البطريركية، باب توما، دمشق القديمة',
      'contact.email': 'البريد الإلكتروني:',
      'contact.email.value': 'info@sps-damascus.org',
      'contact.phone': 'الهاتف / واتساب:',
      'contact.phone.value': '+963 944 555 120',
      'contact.form.title': 'أرسل رسالة',
      'contact.form.name': 'الاسم',
      'contact.form.email': 'البريد الإلكتروني',
      'contact.form.message': 'الرسالة',
      'contact.form.send': 'إرسال',
      'contact.validation.name': 'يرجى إدخال الاسم.',
      'contact.validation.email': 'يرجى إدخال بريد إلكتروني صالح.',
      'contact.validation.message': 'يرجى إدخال الرسالة.',
    }
  };

  const titles = {
    home: {
      en: 'Home – St. Ephrem Patriarchal Syriac Scouts – Damascus',
      ar: 'الرئيسية – فوج مار أفرام السرياني البطريركي – دمشق'
    },
    about: {
      en: 'About – St. Ephrem Patriarchal Syriac Scouts – Damascus',
      ar: 'نبذة – فوج مار أفرام السرياني البطريركي – دمشق'
    },
    units: {
      en: 'Units – St. Ephrem Patriarchal Syriac Scouts – Damascus',
      ar: 'الوحدات – فوج مار أفرام السرياني البطريركي – دمشق'
    },
    band: {
      en: 'Band – St. Ephrem Patriarchal Syriac Scouts – Damascus',
      ar: 'الفرقة – فوج مار أفرام السرياني البطريركي – دمشق'
    },
    events: {
      en: 'Events – St. Ephrem Patriarchal Syriac Scouts – Damascus',
      ar: 'الفعاليات – فوج مار أفرام السرياني البطريركي – دمشق'
    },
    gallery: {
      en: 'Gallery – St. Ephrem Patriarchal Syriac Scouts – Damascus',
      ar: 'المعرض – فوج مار أفرام السرياني البطريركي – دمشق'
    },
    news: {
      en: 'News – St. Ephrem Patriarchal Syriac Scouts – Damascus',
      ar: 'الأخبار – فوج مار أفرام السرياني البطريركي – دمشق'
    },
    join: {
      en: 'Join Us – St. Ephrem Patriarchal Syriac Scouts – Damascus',
      ar: 'انضم إلينا – فوج مار أفرام السرياني البطريركي – دمشق'
    },
    contact: {
      en: 'Contact – St. Ephrem Patriarchal Syriac Scouts – Damascus',
      ar: 'اتصل بنا – فوج مار أفرام السرياني البطريركي – دمشق'
    },
    notfound: {
      en: 'Page Not Found – St. Ephrem Patriarchal Syriac Scouts – Damascus',
      ar: 'الصفحة غير موجودة – فوج مار أفرام السرياني البطريركي – دمشق'
    }
  };

  const getStoredLang = () => {
    try {
      return localStorage.getItem('lang');
    } catch (err) {
      return null;
    }
  };
  const setStoredLang = (lang) => {
    try {
      localStorage.setItem('lang', lang);
    } catch (err) {
      /* ignore storage issues */
    }
  };
  const getDefaultLang = () => document.documentElement.dataset.defaultLang || 'ar';
  const getLang = () => getStoredLang() || getDefaultLang();
  const getPathLang = () => (window.location.pathname.split('/').includes('en') ? 'en' : 'ar');
  const t = (key, lang) => (i18n[lang] && i18n[lang][key]) || i18n.en[key] || key;
  const getTheme = () => (localStorage.getItem('theme') === 'dark' ? 'dark' : 'light');

  const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    const toggle = document.getElementById('themeToggle');
    if (toggle) {
      toggle.setAttribute('data-theme', theme);
      toggle.setAttribute('aria-pressed', theme === 'dark');
    }
  };

  const applyI18n = (lang) => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // Toggle button states
    document.querySelectorAll('[data-lang]')?.forEach(btn => {
      const is = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', is);
      btn.setAttribute('aria-pressed', is ? 'true' : 'false');
    });

    // Text nodes
    document.querySelectorAll('[data-i18n]')?.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (!key) return;
      el.textContent = t(key, lang);
    });
    // Attributes
    document.querySelectorAll('[data-i18n-attr]')?.forEach(el => {
      const spec = el.getAttribute('data-i18n-attr');
      if (!spec) return;
      spec.split(',').map(s => s.trim()).forEach(pair => {
        const [attr, key] = pair.split(':').map(s => s.trim());
        if (attr && key) {
          el.setAttribute(attr, t(key, lang));
        }
      });
    });

    // Titles per page
    const page = document.body.getAttribute('data-page');
    if (page && titles[page] && titles[page][lang]) {
      document.title = titles[page][lang];
    }
  };
  const setActiveNav = () => {
    const path = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
    const links = document.querySelectorAll('.navbar a.nav-link, .navbar .dropdown-menu a');
    links.forEach(link => {
      const href = (link.getAttribute('href') || '').toLowerCase();
      const isIndex = (path === '' || path === '/' || path === 'index.html') && (href === 'index.html' || href === './' || href === '#');
      const match = isIndex || href.endsWith(path);
      if (match) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });
    document.querySelectorAll('.navbar .dropdown').forEach(drop => {
      const toggle = drop.querySelector('.nav-link.dropdown-toggle');
      const activeChild = drop.querySelector('.dropdown-menu .active');
      if (toggle) toggle.classList.toggle('active', !!activeChild);
    });
  };

  const goToLang = (lang) => {
    const parts = window.location.pathname.split('/');
    const file = parts.pop() || 'index.html';
    const inEn = parts.includes('en');
    if (lang === 'en') {
      const target = inEn ? file : `en/${file}`;
      window.location.href = target;
    } else {
      const target = inEn ? `../${file}` : file;
      window.location.href = target;
    }
  };

  const enforceStoredLangPreference = () => {
    const stored = getStoredLang();
    if (!stored) return;
    if (stored !== getPathLang()) {
      goToLang(stored);
    }
  };

  const applyLangLinks = () => {
    const parts = window.location.pathname.split('/');
    const file = parts.pop() || 'index.html';
    const inEn = parts.includes('en');
    document.querySelectorAll('.lang-toggle [data-lang]')?.forEach(link => {
      const lang = link.getAttribute('data-lang');
      if (lang === 'en') {
        link.setAttribute('href', inEn ? file : `en/${file}`);
      } else {
        link.setAttribute('href', inEn ? `../${file}` : file);
      }
      const isActive = (!inEn && lang === 'ar') || (inEn && lang === 'en');
      link.classList.toggle('active', isActive);
      link.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  };

  const initJoinForm = () => {
    const form = document.getElementById('joinForm');
    const success = document.getElementById('joinSuccess');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      e.stopPropagation();

      // At least one contact method (phone or email)
      const phone = document.getElementById('phone');
      const email = document.getElementById('email');
      const hasContact = (phone?.value || '').trim() !== '' || (email?.value || '').trim() !== '';
      if (phone && email) {
        const lang = getLang();
        const msg = t('join.contact_requirement', lang);
        if (!hasContact) {
          phone.setCustomValidity(msg);
          email.setCustomValidity(msg);
        } else {
          phone.setCustomValidity('');
          email.setCustomValidity('');
        }
      }

      if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return;
      }
      // Simulate successful submission (no backend per README)
      form.reset();
      form.classList.remove('was-validated');
      if (success) {
        success.textContent = t('join.success', getLang());
        success.classList.remove('d-none');
        success.focus();
        setTimeout(() => success.classList.add('d-none'), 5000);
      } else {
        alert(t('join.success', getLang()));
      }
    });
  };

  const initGalleryFilters = () => {
    const container = document.querySelector('[data-gallery]');
    if (!container) return;

    const buttons = container.querySelectorAll('[data-filter]');
    const items = container.querySelectorAll('.gallery-item');

    const setPressed = (activeBtn) => {
      buttons.forEach(btn => {
        btn.setAttribute('aria-pressed', btn === activeBtn ? 'true' : 'false');
      });
    };

    const applyFilter = (filter) => {
      items.forEach(item => {
        const cat = item.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          item.classList.remove('d-none');
        } else {
          item.classList.add('d-none');
        }
      });
    };

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        setPressed(btn);
        applyFilter(filter);
      });
    });

    if (buttons.length) {
      const activeBtn = Array.from(buttons).find(b => b.classList.contains('active')) || buttons[0];
      setPressed(activeBtn);
      applyFilter(activeBtn.getAttribute('data-filter') || 'all');
    } else {
      applyFilter('all');
    }
  };

  // Swap logo PNG if available; otherwise keep PDF embed visible
  const initLogoSwap = () => {
    const candidates = [
      { img: document.getElementById('brandLogoImg'), pdf: document.getElementById('brandLogoPdf') },
      { img: document.getElementById('heroLogoImg'), pdf: document.getElementById('heroLogoPdf') },
    ];
    candidates.forEach(pair => {
      if (!pair || !pair.img) return;
      const test = new Image();
      const src = pair.img.getAttribute('data-src') || pair.img.getAttribute('src');
      if (!src) return;
      test.onload = () => {
        pair.img.src = src;
        pair.img.classList.remove('d-none');
        if (pair.pdf) pair.pdf.classList.add('d-none');
      };
      test.onerror = () => {
        // keep PDF visible if provided
        pair.img.classList.add('d-none');
        if (pair.pdf) pair.pdf.classList.remove('d-none');
      };
      test.src = src;
    });
  };

  // Apply language immediately to avoid flash of default text
  enforceStoredLangPreference();
  const initialLang = getLang();
  applyI18n(initialLang);
  document.documentElement.classList.remove('i18n-pending');

  document.addEventListener('DOMContentLoaded', () => {
    setActiveNav();
    initJoinForm();
    initGalleryFilters();
    initLogoSwap();
    applyLangLinks();
    // Language toggle
    document.querySelectorAll('.lang-toggle [data-lang]')?.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = btn.getAttribute('data-lang');
        setStoredLang(lang);
        goToLang(lang);
      });
    });
    // Hero scroll cue
    const cue = document.querySelector('.scroll-cue');
    if (cue) {
      cue.addEventListener('click', () => {
        const section = document.querySelector('main, section, .page, .hero + *');
        if (section && typeof section.scrollIntoView === 'function') {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }

    // Theme toggle
    applyTheme(getTheme());
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') || 'light';
        const theme = current === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', theme);
        applyTheme(theme);
      });
    }
  });
})();
