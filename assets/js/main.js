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
      'nav.dashboard': 'Dashboard',
      'nav.more': 'More',
      'nav.theme': 'Dark Mode',
      'nav.support': 'Support a project',

      'announcement.tag': 'Update',
      'announcement.text': 'Community Service Day this Saturday, 9:00 AM – Bab Touma.',
      'announcement.cta': 'See details',

      'footer.name': 'St. Ephrem Patriarchal Syriac Scouts – Damascus',
      'footer.tagline': 'A church-based scout troop fostering faith, leadership, and service.',

      // Home
      'home.hero.title': 'St. Ephrem Patriarchal Syriac Scouts – Damascus',
      'home.hero.subtitle': 'Faith, Service, and Brotherhood in the Heart of Damascus',
      'home.hero.scroll': 'Learn more',
      'home.hero.about': 'About the Troop',
      'home.hero.join': 'Join Us',
      'home.hero.secondary': 'Explore our programs',
      'home.hero.description': 'Generations of Syriac youth growing through prayer, outdoor skills, music, and service in Damascus.',
      'home.hero.pill1': 'Since 1965',
      'home.hero.pill2': 'Bab Touma · Damascus',
      'home.hero.stat1': 'Youth mentored',
      'home.hero.stat2': 'Active units',
      'home.hero.stat3': 'Service hours yearly',
      'home.hero.media': 'White Helmets mentors guide our rovers through emergency response drills.',
      'home.story.eyebrow': 'Who we serve',
      'home.story.cta': 'Experience our story',
      'home.story.card1.label': 'Faith & formation',
      'home.story.card1.title': 'Rooted in Syriac spirituality',
      'home.story.card1.body': 'Daily prayer, Scripture, and liturgy anchor every meeting, camp, and visit we lead.',
      'home.story.card2.label': 'Service footprint',
      'home.story.card2.title': 'Serving Bab Touma & beyond',
      'home.story.card2.body': 'From hospitals to heritage streets, our patrols partner with neighbors and the White Helmets.',
      'home.story.card3.label': 'Band & culture',
      'home.story.card3.title': 'Music that lifts every procession',
      'home.story.card3.body': 'Trumpets, drums, and chants preserve Syriac memory while rallying today’s youth.',
      'home.who.title': 'Who We Are',
      'home.who.body': 'We are a church-based Syriac Orthodox scout troop serving youth and families in Damascus. Our community fosters faith, character, and brotherhood through scouting traditions, service, and joyful witness.',
      'home.mission.title': 'Our Mission',
      'home.mission.li1': 'Grow in faith, prayer, and Christian values.',
      'home.mission.li2': 'Live the scouting spirit: leadership, teamwork, and responsibility.',
      'home.mission.li3': 'Serve our parish, neighborhood, and wider community.',
      'home.mission.li4': 'Form resilient, joyful youth ready to lead.',
      'home.impact.eyebrow': 'Impact',
      'home.impact.title': 'Faithful service in numbers',
      'home.impact.subtitle': 'Every badge, procession, and neighborhood visit is powered by families, alumni, and partners who refuse to let hope fade from Damascus.',
      'home.impact.cta': 'Support a service project',
      'home.impact.metric1': 'Youth mentored',
      'home.impact.metric2': 'Community visits yearly',
      'home.impact.metric3': 'Major feasts animated',
      'home.impact.metric4': 'Leaders under 30',
      'home.units.subtitle': 'From beavers to band',
      'home.units.body': 'Each age group receives a tailored rhythm of prayer, outdoor adventure, and community service. Tap a unit to see how faith and skill-building come alive.',
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
      'home.highlights.eyebrow': 'Stories & highlights',
      'home.highlights.title': 'Stories, events, and next steps',
      'home.highlights.subtitle': 'Catch the latest field notes, service campaigns, and ways to plug in this season.',
      'home.highlights.cta': 'See all updates',
      'home.highlights.card1.badge': 'Holy Week',
      'home.highlights.card1.title': 'Good Friday pioneer work returns',
      'home.highlights.card1.body': 'Rovers and leaders rebuilt the blazing cross installation while youth choirs led Taize prayers.',
      'home.highlights.card1.cta': 'Read recap',
      'home.highlights.card2.badge': 'Camp',
      'home.highlights.card2.title': 'Summer camp registrations are open',
      'home.highlights.card2.body': 'Families can now reserve spots for August’s joint Cubs + Guides camp with White Helmets workshops.',
      'home.highlights.card2.cta': 'View schedule',
      'home.highlights.card3.badge': 'Join',
      'home.highlights.card3.title': 'Mentors & sponsors needed',
      'home.highlights.card3.body': 'Help underwrite uniforms, instruments, or share vocational skills with our teens.',
      'home.highlights.card3.cta': 'Partner with us',
      'home.events.title': 'Upcoming Events',
      'home.events.e1.title': 'Community Service Day',
      'home.events.e1.text': 'Join us in a neighborhood clean-up and visit to seniors.',
      'home.events.e2.title': 'Advent Prayer Night',
      'home.events.e2.text': 'An evening of hymns and reflection as we prepare for Christmas.',
      'home.events.e3.title': 'Band Rehearsal Open Day',
      'home.events.e3.text': 'Come try instruments and meet the band team.',
      'home.gallery.title': 'Featured Gallery',
      'home.gallery.viewall': 'View all',
      'home.gallery.eyebrow': 'Gallery',
      'home.gallery.caption1': 'Good Friday fire tableau',
      'home.gallery.caption2': 'Cubs learn first aid',
      'home.gallery.caption3': 'Sister troop visit',
      'home.gallery.caption4': 'Easter Sunday procession',
      'home.cta.title': 'Want to join the troop?',
      'home.cta.text': 'We welcome youth who seek faith, friendship, and service. Become part of our family.',
      'home.cta.button': 'Join Us',
      'home.cta.badge': 'Take the next step',
      'home.cta.subtitle': 'Leaders will follow up with parents, share schedules, and invite you to the next open meeting.',
      'home.cta.contact': 'Talk with a leader',

      // About
      'about.title': 'About Us',
      'about.lead': 'Learn our story, identity, and vision as a Syriac Orthodox scout troop serving Damascus.',
      'about.story.eyebrow': 'Origins',
      'about.story.title': 'Our Story',
      'about.story.body': 'Founded to serve the youth of our parish in the heart of Damascus, our troop grew from a small circle of friends into a vibrant community. We blend scouting traditions—camps, hikes, skills—with parish life, liturgy, and service. Over the years, countless young people have discovered leadership, teamwork, and faith through our activities.',
      'about.identity.title': 'Spiritual Identity',
      'about.identity.body': 'We belong to the Syriac Orthodox Patriarchate and walk in the footsteps of St. Ephrem the Syrian—our patron and guide in faith and wisdom. Our spirituality is rooted in prayer, Scripture, and the sacramental life of the Church, inspiring us to serve with humility and joy.',
      'about.identity.quote': 'We are inspired by St. Ephrem the Syrian—poet of the Church and teacher of love and service.',
      'about.timeline.title': 'Milestones',
      'about.timeline.start.year': '1965',
      'about.timeline.start.title': 'Founded in Old Damascus',
      'about.timeline.start.body': 'Volunteers from St. George Cathedral formed the first patrols to accompany liturgies and support families rebuilding after turbulence.',
      'about.timeline.expand.year': '1982',
      'about.timeline.expand.title': 'Generations of leadership',
      'about.timeline.expand.body': 'Guides and Rovers launched formation camps empowering young women and men to spearhead parish ministries.',
      'about.timeline.rebuild.year': '2015',
      'about.timeline.rebuild.title': 'Rebuilding after war',
      'about.timeline.rebuild.body': 'Alongside the White Helmets, our troop doubled down on relief visits, trauma-healing circles, and community drives.',
      'about.service.title': 'Where we serve',
      'about.service.body': 'Bab Touma, Bab Sharqi, and Sayda Zainab welcome our patrols for catechesis, music, and social outreach every month.',
      'about.service.metric1': '3 partner parishes',
      'about.service.metric1.body': 'Weekly coordination meetings.',
      'about.service.metric2': '12 schools visited',
      'about.service.metric2.body': 'Safety workshops & choir tours.',
      'about.service.metric3': '800 families',
      'about.service.metric3.body': 'Care packages and visits yearly.',
      'about.service.cta': 'Request a visit or collaboration',
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
      'units.detail.beavers.age': 'Ages 5–6',
      'units.detail.beavers.focus': 'Wonder & welcome',
      'units.detail.beavers.body': 'Faith-themed playtimes introduce the scout promise through songs, crafts, and games with parents nearby.',
      'units.detail.beavers.point1': 'Gentle prayer moments with simple motions.',
      'units.detail.beavers.point2': 'Nature walks to learn colors, seasons, and care.',
      'units.detail.beavers.point3': 'Monthly family gatherings and badge celebrations.',
      'units.detail.cubs.age': 'Ages 7–10',
      'units.detail.cubs.focus': 'Teamwork & imagination',
      'units.detail.cubs.body': 'Cubs discover stories of saints, survival basics, and community service through quests and themed meetings.',
      'units.detail.cubs.point1': 'Sixers lead prayer corners and pledges.',
      'units.detail.cubs.point2': 'STEM crafts and pioneering mini-builds.',
      'units.detail.cubs.point3': 'Visits to elders, hospitals, and partner troops.',
      'units.detail.scouts.age': 'Ages 11–14',
      'units.detail.scouts.focus': 'Patrol leadership',
      'units.detail.scouts.body': 'Patrols rotate through pioneering, first aid, and gospel service projects that culminate in weekend camps.',
      'units.detail.scouts.point1': 'Quarterly camps with hiking and night prayers.',
      'units.detail.scouts.point2': 'Service shifts at parish clinics and kitchens.',
      'units.detail.scouts.point3': 'Merit-badge mentorship with Rovers.',
      'units.detail.guides.age': 'Ages 11–14',
      'units.detail.guides.focus': 'Sisterhood & creativity',
      'units.detail.guides.body': 'Guides blend liturgical arts, service visits, and outdoor exploration tailored to empower young women.',
      'units.detail.guides.point1': 'Choir leadership and liturgical dance.',
      'units.detail.guides.point2': 'Creative workshops with local artisans.',
      'units.detail.guides.point3': 'Mentorship circles on spirituality and vocation.',
      'units.detail.rovers.age': 'Ages 18+',
      'units.detail.rovers.focus': 'Mentorship & service',
      'units.detail.rovers.body': 'Rovers drive relief operations, lead camps, and receive coaching to support careers and vocations.',
      'units.detail.rovers.point1': 'Emergency response certifications.',
      'units.detail.rovers.point2': 'Monthly outreach to seniors and refugees.',
      'units.detail.rovers.point3': 'Coaching younger patrol leaders.',
      'units.detail.band.age': 'Ages 12+',
      'units.detail.band.focus': 'Music & liturgy',
      'units.detail.band.body': 'Youth learn brass, percussion, and chant to animate parish feasts, civic processions, and relief fundraisers.',
      'units.detail.band.point1': 'Sectionals led by alumni musicians.',
      'units.detail.band.point2': 'Weekly theory & ear-training labs.',
      'units.detail.band.point3': 'Joint appearances with partner choirs.',

      // Band
      'band.title': 'Band',
      'band.lead': 'Bringing joy to feasts, processions, and parish celebrations.',
      'band.hero.eyebrow': 'Music ministry',
      'band.hero.title': 'St. Ephrem Brass & Percussion',
      'band.hero.body': 'Youth musicians animate every major feast, procession, and outreach event with disciplined marching, hymnody, and cultural pieces.',
      'band.hero.stat1': '60+ active players',
      'band.hero.stat2': '8 sections',
      'band.about.title': 'About the Band',
      'band.about.body': 'The troop’s brass band unites youth through music and discipline. Our ensemble typically includes trumpets, drums, cymbals, and other instruments. We rehearse regularly and support parish and community events.',
      'band.what.title': 'What We Do',
      'band.reh.title': 'Rehearsals',
      'band.reh.body': 'Weekly schedule (placeholder): Fridays 6:00–8:00 PM, Parish Music Room. New members are welcome to observe and try instruments.',
      'band.values.point1': 'Palm Sunday, Holy Week, and Patriarchal visits.',
      'band.values.point2': 'Christmas, Easter, and parish jubilees.',
      'band.values.point3': 'City festivals, relief fundraisers, and ecumenical events.',
      'band.schedule.title': 'Rehearsal rhythm',
      'band.schedule.item1': 'Fridays 18:00–20:00 · Parish Music Room.',
      'band.schedule.item2': 'Sectionals on Mondays for brass & percussion.',
      'band.schedule.item3': 'Monthly liturgy prep with choir directors.',
      'band.join.title': 'Join the Band',
      'band.join.body': 'If you are interested in learning an instrument and serving with the band, we’d love to meet you.',
      'band.join.button': 'Apply to Join',
      'band.media.title': 'Media',

      // Events
      'events.title': 'Events',
      'events.lead': 'Upcoming events and past highlights.',
      'events.upcoming': 'Upcoming',
      'events.past': 'Past Highlights',
      'events.cta': 'Partner or host an event',
      'events.featured.cta': 'View details',
      'events.featured1.meta': 'Dec 10 · Bab Touma',
      'events.featured2.meta': 'Dec 18 · Parish Hall',
      'events.featured3.meta': 'Jan 7 · Music Room',
      'events.timeline.title': 'Past highlights',
      'events.timeline.item1.meta': 'Nov 2025',
      'events.timeline.item2.meta': 'Nov 2025',
      'events.timeline.item3.meta': 'Oct 2025',
      'events.partners.title': 'Host the troop',
      'events.partners.body': 'Parishes, schools, and civic groups invite our patrols for safety workshops, music, and service learning. Share your idea and we’ll tailor a program.',

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
      'join.error': 'Unable to submit. Please try again.',

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
      'contact.success': 'Thank you! We received your note.',
      'contact.error': 'Unable to send your message. Please try again.',
      // Auth
      'login.title': 'Media Portal Sign In',
      'login.lead': 'Admins, leaders, and media team can sign in to manage news stories and featured images.',
      'login.email': 'Email',
      'login.password': 'Password',
      'login.submit': 'Sign in',
      'login.error': 'Invalid credentials. Please try again.',
      'login.note': 'Access is limited to authorized roles: admin, leaders, media-admin.',
      'login.validation.email': 'Please enter a valid email.',
      'login.validation.password': 'Enter your password.',
      'admin.title': 'Media & Admin Control Center',
      'admin.subtitle': 'Edit news cards, update featured images, and publish announcements.',
      'admin.logout': 'Log out',
      'admin.refresh': 'Refresh',
      'admin.reset': 'Reset',
      'admin.login_required': 'Please sign in to continue.',
      'admin.news.title': 'News Manager',
      'admin.news.subtitle': 'Edit an existing card or publish a new post.',
      'admin.news.form.title': 'Title',
      'admin.news.form.date': 'Date',
      'admin.news.form.body': 'Summary',
      'admin.news.form.image': 'Card image',
      'admin.news.form.imageHint': 'Select from the gallery or upload via the API.',
      'admin.news.form.save': 'Save Post',
      'admin.featured.title': 'Featured Imagery',
      'admin.featured.subtitle': 'Update hero and gallery highlights.',
      'admin.validation.title': 'Enter a title.',
      'admin.validation.date': 'Select a date.',
      'admin.validation.body': 'Write a short summary.',
      'admin.inline.save': 'Save changes',
      'admin.inline.cancel': 'Cancel',
      'admin.edit': 'Edit',
      'forms.spam': 'Submission blocked. Please try again.',
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
      'nav.dashboard': 'لوحة التحكم',
      'nav.more': 'المزيد',
      'nav.theme': 'الوضع الداكن',
      'nav.support': 'ادعم مبادرة',

      'announcement.tag': 'تنبيه',
      'announcement.text': 'يوم خدمة المجتمع هذا السبت الساعة 9:00 صباحًا في باب توما.',
      'announcement.cta': 'اطلع على التفاصيل',

      'footer.name': 'فوج مار أفرام السرياني البطريركي – دمشق',
      'footer.tagline': 'فوج كشفي كنسي يعزّز الإيمان والقيادة والخدمة.',

      // Home
      'home.hero.title': 'فوج مار أفرام السرياني البطريركي',
      'home.hero.subtitle': 'إخلاص - مساعدة - طاعة',
      'home.hero.scroll': 'اكتشف المزيد',
      'home.hero.about': 'نبذة عن الفوج',
      'home.hero.join': 'انضم إلينا',
      'home.hero.secondary': 'استكشف برامجنا',
      'home.hero.description': 'أجيال من الشبيبة السريانية ينمون بالصلاة والمهارات الكشفية والموسيقى والخدمة في دمشق.',
      'home.hero.pill1': 'منذ 1965',
      'home.hero.pill2': 'باب توما · دمشق',
      'home.hero.stat1': 'شابات وشبان رافقناهم',
      'home.hero.stat2': 'وحدات ناشطة',
      'home.hero.stat3': 'ساعات خدمة سنوية',
      'home.hero.media': 'يدرب الدفاع المدني السوري (الخوذ البيضاء) جوالتنا على الاستجابة للطوارئ.',
      'home.story.eyebrow': 'من نخدم',
      'home.story.cta': 'تعرّف إلى قصتنا',
      'home.story.card1.label': 'إيمان وتربية',
      'home.story.card1.title': 'متجذّرون في الروحانية السريانية',
      'home.story.card1.body': 'الصلاة اليومية والكتاب المقدس والليتورجيا ترافق كل اجتماع ومخيّم وزيارة نقودها.',
      'home.story.card2.label': 'أثر الخدمة',
      'home.story.card2.title': 'نخدم باب توما وما بعده',
      'home.story.card2.body': 'من المستشفيات إلى الشوارع التراثية، تعمل سرايانا مع الجيران والخوذ البيضاء.',
      'home.story.card3.label': 'الفرقة والثقافة',
      'home.story.card3.title': 'موسيقى ترفع كل زياحة',
      'home.story.card3.body': 'الأبواق والطبول والأناشيد تحفظ ذاكرتنا السريانية وتجمع شبيبة اليوم.',
      'home.who.title': 'من نحن',
      'home.who.body': 'نحن فوج كشفي تابع للكنيسة السريانية الأرثوذكسية نخدم الشبيبة والعائلات في دمشق. نسعى إلى تنمية الإيمان وبناء الشخصية وروح الأخوّة عبر تقاليد الكشفية والخدمة والشهادة الفَرِحة.',
      'home.mission.title': 'رسالتنا',
      'home.mission.li1': 'النمو في الإيمان والصلاة والقيم المسيحية.',
      'home.mission.li2': 'عيش الروح الكشفية: القيادة والعمل الجماعي والمسؤولية.',
      'home.mission.li3': 'خدمة رعيتنا وحيّنا والمجتمع الأوسع.',
      'home.mission.li4': 'تكوين شباب فرحين ثابتين مستعدين للقيادة.',
      'home.mission.eyebrow': 'وعدُنا',
      'home.impact.eyebrow': 'الأثر',
      'home.impact.title': 'خدمة أمينة بأرقام واضحة',
      'home.impact.subtitle': 'كل شارة وزياحة وزيارة ميدانية تغذّيها العائلات والخريجون والشركاء الذين يرفضون أن ينطفئ الرجاء في دمشق.',
      'home.impact.cta': 'ادعم مشروع خدمة',
      'home.impact.metric1': 'شبيبة رافقناهم',
      'home.impact.metric2': 'زيارات مجتمعية سنويًا',
      'home.impact.metric3': 'أعياد كبرى نحييها',
      'home.impact.metric4': 'قادة دون الثلاثين',
      'home.units.subtitle': 'من القنادس إلى الفرقة',
      'home.units.body': 'تختبر كل وحدة مزيجًا خاصًا من الصلاة والمغامرة والخدمة. تعرّف على إيقاع كل عمر وكيف يعيش الإيمان والمهارات معًا.',
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
      'home.highlights.eyebrow': 'قصص ومحطات',
      'home.highlights.title': 'قصص وأحداث وخيارات الانضمام',
      'home.highlights.subtitle': 'اطلعوا على آخر المذكرات الميدانية وحملات الخدمة وسبل المشاركة هذا الموسم.',
      'home.highlights.cta': 'شاهد كل المستجدات',
      'home.highlights.card1.badge': 'أسبوع الآلام',
      'home.highlights.card1.title': 'عودة أعمال الرائد في جمعة الآلام',
      'home.highlights.card1.body': 'أعاد الجوالة والقادة بناء صليب النار فيما قادت الجوقات ترانيم تايزي.',
      'home.highlights.card1.cta': 'اقرأ التقرير',
      'home.highlights.card2.badge': 'المخيّم',
      'home.highlights.card2.title': 'فتح التسجيل لمخيّم الصيف',
      'home.highlights.card2.body': 'بإمكان العائلات حجز أماكن لمخيّم آب المشترك للأشبال والمرشدات مع ورشات الخوذ البيضاء.',
      'home.highlights.card2.cta': 'شاهد البرنامج',
      'home.highlights.card3.badge': 'انضمام',
      'home.highlights.card3.title': 'بحاجة إلى رعاة ومرشدين',
      'home.highlights.card3.body': 'ساهموا في تأمين الزيّ والآلات أو شاركوا خبراتكم المهنية مع المراهقين.',
      'home.highlights.card3.cta': 'شاركنا الدعم',
      'home.events.title': 'الفعاليات القادمة',
      'home.events.e1.title': 'يوم خدمة المجتمع',
      'home.events.e1.text': 'انضموا إلينا في حملة تنظيف الحي وزيارة المسنين.',
      'home.events.e2.title': 'أمسية صلاة المجيء',
      'home.events.e2.text': 'أمسية تراتيل وتأمل استعدادًا للميلاد.',
      'home.events.e3.title': 'يوم مفتوح لتجربة الفرقة',
      'home.events.e3.text': 'جرّبوا الآلات وتعرّفوا على فريق الفرقة.',
      'home.gallery.title': 'معرض مختار',
      'home.gallery.viewall': 'عرض الكل',
      'home.gallery.eyebrow': 'المعرض',
      'home.gallery.caption1': 'لوحة النار في الجمعة العظيمة',
      'home.gallery.caption2': 'الأشبال يتعلمون الإسعاف الأولي',
      'home.gallery.caption3': 'زيارة فوج سيدة البشارة',
      'home.gallery.caption4': 'زياحة الفصح',
      'home.cta.title': 'هل ترغب بالانضمام إلى الفوج؟',
      'home.cta.text': 'نرحّب بكل شاب وشابة يبحثون عن الإيمان والصداقة والخدمة. كونوا جزءًا من عائلتنا.',
      'home.cta.button': 'انضم إلينا',
      'home.cta.badge': 'الخطوة التالية',
      'home.cta.subtitle': 'سيتواصل القادة مع الأهل، يشاركون البرامج، ويدعونكم إلى الاجتماع المفتوح المقبل.',
      'home.cta.contact': 'تحدث مع قائد',

      // About
      'about.title': 'نبذة عنا',
      'about.lead': 'تعرّفوا على قصتنا وهويتنا ورؤيتنا كفوج كشفي سرياني أرثوذكسي يخدم دمشق.',
      'about.story.eyebrow': 'البدايات',
      'about.story.title': 'قصتنا',
      'about.story.body': 'تأسس فوجنا لخدمة شباب الرعية في قلب دمشق، ونما من حلقة صغيرة من الأصدقاء إلى جماعة حيّة. نمزج تقاليد الكشفية — المخيمات والرحلات والمهارات — مع حياة الرعية والليتورجيا والخدمة، فتعرف كثيرون عبر أنشطتنا القيادة والعمل الجماعي والإيمان.',
      'about.identity.title': 'هويتنا الروحية',
      'about.identity.body': 'ننتمي إلى البطريركية السريانية الأرثوذكسية، ونسير على خطى القديس مار أفرام السرياني — شفيعنا وملهمنا في الإيمان والحكمة. روحانيتنا متجذّرة في الصلاة والكتاب المقدس والحياة السرائرية في الكنيسة، فتدفعنا إلى الخدمة بتواضع وفرح.',
      'about.identity.quote': 'نستلهم روح القديس مار أفرام السرياني، شاعر الكنيسة ومعلم المحبة والخدمة.',
      'about.timeline.title': 'محطات أساسية',
      'about.timeline.start.year': '1965',
      'about.timeline.start.title': 'انطلاقة في دمشق القديمة',
      'about.timeline.start.body': 'متطوعون من كاتدرائية مار جرجس أسسوا أولى السرايا لمواكبة الليتورجيا ومساندة العائلات بعد الاضطرابات.',
      'about.timeline.expand.year': '1982',
      'about.timeline.expand.title': 'أجيال من القيادة',
      'about.timeline.expand.body': 'أطلقت المرشدات والجوالة مخيمات تكوين متخصصة فمكّنت الشابات والشبان من قيادة خدمات الرعية.',
      'about.timeline.rebuild.year': '2015',
      'about.timeline.rebuild.title': 'نهوض بعد الحرب',
      'about.timeline.rebuild.body': 'بالشراكة مع الخوذ البيضاء ضاعف الفوج زيارات الإغاثة ودوائر الدعم والمعونات.',
      'about.service.title': 'مجال خدمتنا',
      'about.service.body': 'باب توما وباب شرقي والسيدة زينب تستقبل سرايانا للصلاة والتعليم والخدمة كل شهر.',
      'about.service.metric1': '3 رعايا شريكة',
      'about.service.metric1.body': 'اجتماعات تنسيق أسبوعية.',
      'about.service.metric2': '12 مدرسة نزورها',
      'about.service.metric2.body': 'ورشات أمان وجولات تراتيل.',
      'about.service.metric3': '800 عائلة',
      'about.service.metric3.body': 'طرود وزيارات سنوية.',
      'about.service.cta': 'اطلبوا زيارة أو تعاونًا',
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
      'units.detail.beavers.age': 'أعمار 5–6',
      'units.detail.beavers.focus': 'دهشة ودفء عائلي',
      'units.detail.beavers.body': 'نقدّم لقاءات لعب إيمانية تعرّف الوعد الكشفي عبر الأناشيد والأشغال والقصص بمشاركة الأهل.',
      'units.detail.beavers.point1': 'لحظات صلاة بسيطة مع حركات سهلة.',
      'units.detail.beavers.point2': 'جولات في الطبيعة لتعلّم المواسم والحفاظ عليها.',
      'units.detail.beavers.point3': 'لقاءات عائلية شهرية وتوزيع الشارات.',
      'units.detail.cubs.age': 'أعمار 7–10',
      'units.detail.cubs.focus': 'عمل جماعي وخيال',
      'units.detail.cubs.body': 'يكتشف الأشبال قصص القديسين والأساسيات الكشفية والخدمة عبر مغامرات موضوعية.',
      'units.detail.cubs.point1': 'قادة السداسيات يقودون صلاة الوعد.',
      'units.detail.cubs.point2': 'أعمال حرفية ومشاريع رائدة صغيرة.',
      'units.detail.cubs.point3': 'زيارات للمسنين والمستشفيات والفرق الصديقة.',
      'units.detail.scouts.age': 'أعمار 11–14',
      'units.detail.scouts.focus': 'قيادة الطلائع',
      'units.detail.scouts.body': 'تتدرّب الطلائع على الريادة والإسعاف والخدمة الإنجيلية وتنطلق في مخيمات نهاية الأسبوع.',
      'units.detail.scouts.point1': 'مخيمات ربع سنوية مع صلوات ليلية.',
      'units.detail.scouts.point2': 'مناوبات خدمة في العيادات والمطابخ.',
      'units.detail.scouts.point3': 'إرشاد في شارات الاستحقاق مع الجوالة.',
      'units.detail.guides.age': 'أعمار 11–14',
      'units.detail.guides.focus': 'أخوّة وإبداع',
      'units.detail.guides.body': 'تدمج المرشدات الفنون الليتورجية والخدمة والاستكشاف الخارجي بطريقة تمكّن الشابات.',
      'units.detail.guides.point1': 'قيادة الجوقات ورقص تعبيري ليتورجي.',
      'units.detail.guides.point2': 'ورشات إبداعية مع حرفيين محليين.',
      'units.detail.guides.point3': 'دوائر مرافقة حول الروحانية والرسالة.',
      'units.detail.rovers.age': '18+ قيادة',
      'units.detail.rovers.focus': 'خدمة وإرشاد',
      'units.detail.rovers.body': 'الجوالة يقودون حملات الإغاثة والمخيمات ويتلقون مرافقة مهنية وروحية.',
      'units.detail.rovers.point1': 'شهادات استجابة للطوارئ.',
      'units.detail.rovers.point2': 'زيارات شهرية للمسنين واللاجئين.',
      'units.detail.rovers.point3': 'تدريب قادة الطلائع الأصغر سنًا.',
      'units.detail.band.age': 'أعمار 12 وما فوق',
      'units.detail.band.focus': 'الموسيقى والليتورجيا',
      'units.detail.band.body': 'يتعلّم الشباب آلات النفخ والإيقاع والتراتيل لإحياء الأعياد والمواكب والمبادرات.',
      'units.detail.band.point1': 'تمارين مقطعية يقودها خرّيجون موسيقيون.',
      'units.detail.band.point2': 'مختبرات نظرية وأذن موسيقية أسبوعية.',
      'units.detail.band.point3': 'حفلات مشتركة مع جوقات صديقة.',

      // Band
      'band.title': 'الفرقة النحاسية',
      'band.lead': 'ننشر الفرح في الأعياد والزياحات واحتفالات الرعية.',
      'band.hero.eyebrow': 'خدمة موسيقية',
      'band.hero.title': 'الفرقة النحاسية والإيقاعية',
      'band.hero.body': 'شبيبتنا يحيون كل عيد وزياحة ومبادرة خيرية بانضباط موسيقي وأناشيد تراثية.',
      'band.hero.stat1': 'أكثر من 60 عازفًا',
      'band.hero.stat2': '8 أقسام موسيقية',
      'band.about.title': 'عن الفرقة',
      'band.about.body': 'تجمع الفرقة النحاسية الشبيبة على الموسيقى والانضباط، وتضم عادةً أبواقًا وطبولًا وصنوجًا وغيرها. نتمرّن بانتظام ونخدم في مناسبات الرعية والمجتمع.',
      'band.what.title': 'ماذا نفعل',
      'band.reh.title': 'التمارين',
      'band.reh.body': 'البرنامج الأسبوعي (افتراضي): الجمعة 6:00–8:00 مساءً في غرفة الموسيقى. نرحّب بالمهتمين للحضور وتجربة الآلات.',
      'band.values.point1': 'أسبوع الآلام وزيارات البطريرك.',
      'band.values.point2': 'الميلاد والفصح ويوبيلات الرعية.',
      'band.values.point3': 'مهرجانات المدينة وحملات الإغاثة.',
      'band.schedule.title': 'إيقاع التمارين',
      'band.schedule.item1': 'الجمعة 6:00–8:00 مساءً · قاعة الموسيقى.',
      'band.schedule.item2': 'تمارين مقطعية يوم الإثنين للنفخ والإيقاع.',
      'band.schedule.item3': 'إعداد ليتورجي شهري مع قادة الجوقات.',
      'band.join.title': 'انضم إلى الفرقة',
      'band.join.body': 'إن كنت مهتمًا بتعلّم آلة موسيقية وخدمة الرعية مع الفرقة، يسعدنا التعرّف عليك.',
      'band.join.button': 'قدّم طلب انضمام',
      'band.media.title': 'وسائط',

      // Events
      'events.title': 'الفعاليات',
      'events.lead': 'الفعاليات القادمة وأبرز الأحداث السابقة.',
      'events.upcoming': 'القادمة',
      'events.past': 'أبرز الأحداث السابقة',
      'events.cta': 'تعاون معنا أو استضف نشاطًا',
      'events.featured.cta': 'اكتشف التفاصيل',
      'events.featured1.meta': '10 كانون الأول · باب توما',
      'events.featured2.meta': '18 كانون الأول · قاعة الرعية',
      'events.featured3.meta': '7 كانون الثاني · غرفة الموسيقى',
      'events.timeline.title': 'محطات ماضية',
      'events.timeline.item1.meta': 'تشرين الثاني 2025',
      'events.timeline.item2.meta': 'تشرين الثاني 2025',
      'events.timeline.item3.meta': 'تشرين الأول 2025',
      'events.partners.title': 'استضيفوا الفوج',
      'events.partners.body': 'ترحّب بنا الرعايا والمدارس والهيئات المدنية لتقديم ورشات أمان، موسيقى، وخدمة تعليمية. حدّثونا عن فكرتكم لنصمّم برنامجًا مناسبًا.',

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
      'join.error': 'تعذر إرسال الطلب، يرجى المحاولة مجددًا.',

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
      'contact.success': 'شكرًا لكم! استلمنا رسالتكم.',
      'contact.error': 'تعذر إرسال الرسالة، يرجى المحاولة مجددًا.',
      // Auth
      'login.title': 'تسجيل دخول بوابة الإعلام',
      'login.lead': 'يمكن للإدارة والقادة وفريق الإعلام تسجيل الدخول لإدارة الأخبار والصور المميزة.',
      'login.email': 'البريد الإلكتروني',
      'login.password': 'كلمة المرور',
      'login.submit': 'تسجيل الدخول',
      'login.error': 'بيانات الاعتماد غير صحيحة. حاول مجددًا.',
      'login.note': 'الدخول محصور بالأدوار المخولة: الإدارة، القادة، مسؤولو الإعلام.',
      'login.validation.email': 'يرجى إدخال بريد إلكتروني صالح.',
      'login.validation.password': 'يرجى إدخال كلمة المرور.',
      'admin.title': 'مركز التحكم الإعلامي والإداري',
      'admin.subtitle': 'عدّل بطاقات الأخبار وحدث الصور المميزة وانشر الإعلانات.',
      'admin.logout': 'تسجيل الخروج',
      'admin.refresh': 'تحديث',
      'admin.reset': 'مسح',
      'admin.login_required': 'يرجى تسجيل الدخول للمتابعة.',
      'admin.news.title': 'إدارة الأخبار',
      'admin.news.subtitle': 'عدّل بطاقة موجودة أو أنشر خبراً جديداً.',
      'admin.news.form.title': 'العنوان',
      'admin.news.form.date': 'التاريخ',
      'admin.news.form.body': 'الملخص',
      'admin.news.form.image': 'صورة البطاقة',
      'admin.news.form.imageHint': 'اختر من المعرض أو ارفع عبر الواجهة البرمجية.',
      'admin.news.form.save': 'حفظ الخبر',
      'admin.featured.title': 'الصور المميزة',
      'admin.featured.subtitle': 'حدّث صور الواجهة والمعرض.',
      'admin.validation.title': 'أدخل العنوان.',
      'admin.validation.date': 'اختر تاريخًا.',
      'admin.validation.body': 'أدخل ملخصًا.',
      'admin.inline.save': 'حفظ التعديلات',
      'admin.inline.cancel': 'إلغاء',
      'admin.edit': 'تعديل',
      'forms.spam': 'تم حجب الطلب. يرجى المحاولة مجددًا خلال لحظات.',
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
    login: {
      en: 'Login – St. Ephrem Patriarchal Syriac Scouts – Damascus',
      ar: 'تسجيل الدخول – فوج مار أفرام السرياني البطريركي – دمشق'
    },
    admin: {
      en: 'Admin Dashboard – St. Ephrem Patriarchal Syriac Scouts – Damascus',
      ar: 'لوحة التحكم – فوج مار أفرام السرياني البطريركي – دمشق'
    },
    notfound: {
      en: 'Page Not Found – St. Ephrem Patriarchal Syriac Scouts – Damascus',
      ar: 'الصفحة غير موجودة – فوج مار أفرام السرياني البطريركي – دمشق'
    }
  };
  const AUTH_STORAGE_KEY = 'sps-auth';
  const getAuthState = () => {
    try {
      const raw = localStorage.getItem(AUTH_STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (err) {
      return null;
    }
  };
  const hasEditorRole = () => {
    const role = getAuthState()?.role;
    return role === 'admin' || role === 'media-admin';
  };
  const MIN_FORM_TIME = 2000;
  const setFormTimestamp = (form) => {
    const ts = form?.querySelector('[data-timestamp]');
    if (ts) ts.value = Date.now().toString();
  };
  const isSpamAttempt = (form) => {
    const honeypot = form?.querySelector('[data-honeypot]');
    if (honeypot && honeypot.value.trim() !== '') return true;
    const ts = form?.querySelector('[data-timestamp]');
    if (ts) {
      const start = parseInt(ts.value || '0', 10);
      if (!start || Date.now() - start < MIN_FORM_TIME) return true;
    }
    return false;
  };
  const showAlert = (el, message) => {
    if (!el) {
      alert(message);
      return;
    }
    el.textContent = message;
    el.classList.remove('d-none');
    if (el.hasAttribute('tabindex') && typeof el.focus === 'function') {
      el.focus();
    }
  };
  const hideAlert = (el) => {
    if (el) el.classList.add('d-none');
  };
  const submitFormData = async (form) => {
    const endpoint = form.dataset.endpoint || form.getAttribute('action');
    if (!endpoint) throw new Error('missing_endpoint');
    const formData = new FormData(form);
    formData.append('form_name', form.getAttribute('data-form-name') || form.id || 'web-form');
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: formData,
    });
    if (!response.ok) throw new Error('request_failed');
    return response;
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
    const error = document.getElementById('joinError');
    if (!form) return;
    setFormTimestamp(form);

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      e.stopPropagation();
      const lang = getLang();
      hideAlert(error);

      const phone = document.getElementById('phone');
      const email = document.getElementById('email');
      const hasContact = (phone?.value || '').trim() !== '' || (email?.value || '').trim() !== '';
      const contactMessage = t('join.contact_requirement', lang);
      if (phone && email) {
        if (!hasContact) {
          phone.setCustomValidity(contactMessage);
          email.setCustomValidity(contactMessage);
        } else {
          phone.setCustomValidity('');
          email.setCustomValidity('');
        }
      }

      form.classList.add('was-validated');
      if (!form.checkValidity()) return;
      if (isSpamAttempt(form)) {
        showAlert(error, t('forms.spam', lang));
        return;
      }

      try {
        await submitFormData(form);
        form.reset();
        form.classList.remove('was-validated');
        setFormTimestamp(form);
        if (success) {
          success.textContent = t('join.success', lang);
          success.classList.remove('d-none');
          success.focus();
          setTimeout(() => success.classList.add('d-none'), 5000);
        }
      } catch (err) {
        showAlert(error, t('join.error', lang));
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

  const initContactForm = () => {
    const form = document.getElementById('contactForm');
    const success = document.getElementById('contactSuccess');
    const error = document.getElementById('contactError');
    if (!form) return;
    setFormTimestamp(form);

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      e.stopPropagation();
      const lang = getLang();
      hideAlert(error);
      form.classList.add('was-validated');
      if (!form.checkValidity()) return;

      if (isSpamAttempt(form)) {
        showAlert(error, t('forms.spam', lang));
        return;
      }

      try {
        await submitFormData(form);
        form.reset();
        form.classList.remove('was-validated');
        setFormTimestamp(form);
        if (success) {
          success.textContent = t('contact.success', lang);
          success.classList.remove('d-none');
          if (typeof success.focus === 'function') success.focus();
          setTimeout(() => success.classList.add('d-none'), 5000);
        }
      } catch (err) {
        showAlert(error, t('contact.error', lang));
      }
    });
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

  const updateAuthLinks = () => {
    const link = document.querySelector('[data-auth-link]');
    if (!link) return;
    const lang = getLang();
    const state = getAuthState();
    const loginHref = link.dataset.loginHref || link.getAttribute('href');
    const dashboardHref = link.dataset.dashboardHref || loginHref;
    if (state?.token) {
      link.href = dashboardHref;
      link.textContent = t('nav.dashboard', lang);
    } else {
      link.href = loginHref;
      link.textContent = t('nav.login', lang);
    }
  };

  const secureJsonRequest = async (url, payload) => {
    const auth = getAuthState();
    if (!auth?.token) {
      throw new Error(t('admin.login_required', getLang()));
    }
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${auth.token}`,
      },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      throw new Error(data.message || 'Request failed');
    }
    return response.json();
  };

  const initNewsInlineEditor = () => {
    if (!hasEditorRole()) return;
    const cards = document.querySelectorAll('[data-news-card]');
    cards.forEach(card => {
      card.classList.add('editable');
      const btn = card.querySelector('[data-edit-news-card]');
      if (!btn) return;
      btn.classList.remove('d-none');
      btn.addEventListener('click', () => {
        let form = card.querySelector('form.inline-editor');
        if (form) {
          form.classList.toggle('d-none');
          return;
        }
        form = document.createElement('form');
        form.className = 'inline-editor needs-validation';
        form.innerHTML = `
          <div class="row g-2">
            <div class="col-md-6">
              <label class="form-label">${t('admin.news.form.title', getLang())}</label>
              <input class="form-control" name="title" required value="${card.dataset.newsTitle || ''}">
            </div>
            <div class="col-md-3">
              <label class="form-label">${t('admin.news.form.date', getLang())}</label>
              <input class="form-control" name="published_at" type="date" required value="${card.dataset.newsDate || ''}">
            </div>
            <div class="col-12">
              <label class="form-label">${t('admin.news.form.body', getLang())}</label>
              <textarea class="form-control" name="body" rows="3" required>${card.dataset.newsBody || ''}</textarea>
            </div>
            <div class="col-12 d-flex gap-2 justify-content-end">
              <button type="button" class="btn btn-reset-ghost" data-inline-cancel>${t('admin.inline.cancel', getLang())}</button>
              <button type="submit" class="btn btn-gold">${t('admin.inline.save', getLang())}</button>
            </div>
          </div>`;
        card.appendChild(form);
        form.addEventListener('click', (evt) => {
          if (evt.target?.matches('[data-inline-cancel]')) {
            form.classList.add('d-none');
          }
        });
        form.addEventListener('submit', async (evt) => {
          evt.preventDefault();
          evt.stopPropagation();
          form.classList.add('was-validated');
          if (!form.checkValidity()) return;
          const payload = Object.fromEntries(new FormData(form));
          try {
            await secureJsonRequest(`/api/media/news/${card.dataset.newsId}`, payload);
            card.dataset.newsTitle = payload.title;
            card.dataset.newsDate = payload.published_at;
            card.dataset.newsBody = payload.body;
            card.querySelector('[data-news-title]').textContent = payload.title;
            card.querySelector('[data-news-date]').textContent = payload.published_at;
            card.querySelector('[data-news-body]').textContent = payload.body;
            form.classList.add('d-none');
          } catch (err) {
            alert(err.message);
          }
        });
      });
    });
  };

  const initUnitTabs = () => {
    const container = document.querySelector('[data-unit-tabs]');
    if (!container) return;
    const buttons = container.querySelectorAll('[data-unit-tab]');
    const panels = container.querySelectorAll('[data-unit-panel]');
    const activate = (target) => {
      buttons.forEach(btn => {
        btn.classList.toggle('is-active', btn.dataset.unitTab === target);
      });
      panels.forEach(panel => {
        panel.classList.toggle('is-active', panel.dataset.unitPanel === target);
      });
    };
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        activate(btn.dataset.unitTab);
      });
    });
    const initial = container.querySelector('[data-unit-tab].is-active')?.dataset.unitTab || buttons[0]?.dataset.unitTab;
    if (initial) activate(initial);
  };

  const initNavState = () => {
    const nav = document.querySelector('[data-nav]');
    if (!nav) return;
    const handle = () => {
      const scrolled = window.scrollY > 30;
      document.body.classList.toggle('navbar-scrolled', scrolled);
    };
    handle();
    window.addEventListener('scroll', handle, { passive: true });
  };

  // Apply language immediately to avoid flash of default text
  enforceStoredLangPreference();
  const initialLang = getLang();
  applyI18n(initialLang);
  updateAuthLinks();
  document.documentElement.classList.remove('i18n-pending');

  document.addEventListener('DOMContentLoaded', () => {
    setActiveNav();
    initJoinForm();
    initContactForm();
    initGalleryFilters();
    initLogoSwap();
    applyLangLinks();
    updateAuthLinks();
    initNewsInlineEditor();
    initUnitTabs();
    initNavState();
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
  window.addEventListener('storage', (event) => {
    if (event.key === AUTH_STORAGE_KEY) {
      updateAuthLinks();
      initNewsInlineEditor();
    }
  });
  window.addEventListener('sps-auth-update', () => {
    updateAuthLinks();
    initNewsInlineEditor();
  });
})();
