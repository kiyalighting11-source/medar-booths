/* ============================================
   MEDAR BOOTHS — i18n (EN / AR)
   ============================================ */

(function () {
  const STORAGE_KEY = 'medar-lang';

  const translations = {
    en: {
      /* ===== NAV ===== */
      'nav.work': 'Work',
      'nav.videos': 'Videos',
      'nav.gallery': 'Gallery',
      'nav.about': 'About',
      'nav.contact': 'Contact',

      /* ===== HERO (index) ===== */
      'hero.stamp': 'Available for Q1 2026',
      'hero.eyebrow': 'Exhibition Design Studio',
      'hero.t1': 'We craft',
      'hero.t2': 'spaces that',
      'hero.t3': 'command attention.',
      'hero.sub': 'From concept to construction — MEDAR BOOTHS builds immersive exhibition experiences for brands that refuse to blend in.',
      'hero.cta1': 'View Work',
      'hero.cta2': 'Get in Touch',

      /* ===== STATS ===== */
      'stats.booths': 'Booths Delivered',
      'stats.years': 'Years Experience',
      'stats.countries': 'Countries Served',
      'stats.retention': 'Client Retention',

      /* ===== WORK SECTION (index) ===== */
      'work.tag': 'Selected Work',
      'work.t1': 'Projects that',
      'work.t2': 'speak louder',
      'work.t3': 'than words.',
      'work.cta': 'View Full Gallery',

      /* ===== ABOUT ===== */
      'about.tag': 'The Studio',
      'about.q1': "We don't build booths.",
      'about.q2': 'We build lasting impressions.',
      'about.p1': 'MEDAR BOOTHS is a full-service exhibition design & build studio headquartered in Dubai. From the first sketch to the final light fixture, we own every detail.',
      'about.p2': "Our in-house team blends architecture, fabrication, and digital experience to deliver booths that don't just hold attention — they command the room.",
      'about.btn': 'More about us',
      'about.storyTag': 'Our Story',

      'about.t1': 'A studio built on',
      'about.t2': 'craft, not templates.',
      'about.sub': "We're a team of architects, fabricators, and designers who believe every booth should earn its square meters. No filler. No fluff. Just work that commands the room.",
      'about.process': 'What we do',

      'about.p1t': 'Design',
      'about.p1d': 'Concept, 3D visualization, and brand integration from day one.',
      'about.p2t': 'Fabrication',
      'about.p2d': 'In-house production with premium materials and precision.',
      'about.p3t': 'Installation',
      'about.p3d': 'On-site build, AV integration, and show-time support.',

      /* ===== TIMELINE ===== */
      'timeline.tag': 'Milestones',
      'timeline.t1': 'Twelve years',
      'timeline.t2': 'in the making.',
      'timeline.y1t': 'The Studio Is Born',
      'timeline.y1d': 'MEDAR BOOTHS opens its doors in Al Quoz with a three-person team and a single workshop.',
      'timeline.y2t': 'First 100 Booths',
      'timeline.y2d': 'We deliver our 100th booth at GITEX, cementing our reputation across the Gulf region.',
      'timeline.y3t': 'Going International',
      'timeline.y3d': 'Our first projects outside the GCC — Riyadh, Cairo, and Doha become regular fixtures.',
      'timeline.y4t': 'In-House Fabrication',
      'timeline.y4d': 'We open a 4,000 sqm production facility, bringing every step of the build under one roof.',
      'timeline.y5t': 'Digital & Interactive',
      'timeline.y5d': 'Full AV and interactive division launched — LED walls, holograms, and touch experiences.',
      'timeline.y6t': '450 Booths & Counting',
      'timeline.y6d': "We cross 450 delivered booths across 28 countries — and we're just getting started.",

      /* ===== PROCESS ===== */
      'process.tag': 'How we work',
      'process.t1': 'From first sketch',
      'process.t2': 'to show floor.',
      'process.p1t': 'Design',
      'process.p1d': 'Concept, 3D visualization, and brand integration from day one. We sketch, iterate, and render until the vision is undeniable.',
      'process.p2t': 'Fabrication',
      'process.p2d': 'In-house production with premium materials and precision. CNC routing, joinery, metalwork, and finish — all under our roof.',
      'process.p3t': 'Installation',
      'process.p3d': 'On-site build, AV integration, and show-time support. Our crew works through the night so the booth is flawless by opening.',

      /* ===== VALUES ===== */
      'values.tag': 'What we stand for',
      'values.t1': 'Principles behind',
      'values.t2': 'every build.',
      'values.v1t': 'Craft over shortcuts',
      'values.v1d': 'Every joint, every finish, every detail matters. We build as if the booth will stand for a decade — not a week.',
      'values.v2t': 'Design with purpose',
      'values.v2d': "Beauty alone isn't enough. Every element earns its place by moving visitors toward a goal.",
      'values.v3t': 'One team, one vision',
      'values.v3d': 'Designers, engineers, and builders sit in the same room. No handoffs. No surprises.',
      'values.v4t': 'Delivered on time',
      'values.v4d': "Expos don't wait. We plan for the worst, deliver on the dot, and stay on-site until lights out.",

      /* ===== TEAM ===== */
      'team.tag': 'The people',
      'team.t1': 'The minds behind',
      'team.t2': 'the builds.',
      'team.m1n': 'Ahmed Hassan',
      'team.m1r': 'Founder & Creative Director',
      'team.m2n': 'Layla Mansour',
      'team.m2r': 'Lead Architect',
      'team.m3n': 'Omar Khalil',
      'team.m3r': 'Head of Production',
      'team.m4n': 'Sara Nabil',
      'team.m4r': 'Design Director',

      /* ===== TESTIMONIALS ===== */
      'testimonials.tag': 'What clients say',
      'testimonials.t1': 'Trusted by',
      'testimonials.t2': 'brands worldwide.',
      'testimonials.c1n': 'Sarah Mitchell',
      'testimonials.c1r': 'Marketing Director · Vertex',
      'testimonials.c1d': 'The MEDAR team delivered a booth that stopped traffic at GITEX. Every detail was considered.',
      'testimonials.c2n': 'Khalid Al Mansouri',
      'testimonials.c2r': 'CEO · Nova Motors',
      'testimonials.c2d': "We've worked with agencies across the Gulf. Nobody comes close to MEDAR's level of craft.",
      'testimonials.c3n': 'Dr. Amira Hassan',
      'testimonials.c3r': 'Director · MediCore Labs',
      'testimonials.c3d': 'Professional from first sketch to final install. The booth became the talk of Arab Health.',
      'testimonials.c4n': 'James Okonkwo',
      'testimonials.c4r': 'Brand Lead · Aurora Foods',
      'testimonials.c4d': 'They understood our brand better than we did. The result was unforgettable.',
      'testimonials.c5n': 'Layla Farsi',
      'testimonials.c5r': 'Founder · Lumia Jewelry',
      'testimonials.c5d': 'Luxurious, precise, on time. Exactly what you want from a booth partner.',
      'testimonials.c6n': 'Roberto Silva',
      'testimonials.c6r': 'Head of Events · Quanta',
      'testimonials.c6d': 'Perfect execution under pressure. The install crew worked all night to make it happen.',

      /* ===== SERVICES ===== */
      'services.tag': 'Services',
      'services.t1': 'Everything under',
      'services.t2': 'one roof.',
      'services.s1': 'Custom Booth Design',
      'services.s1d': 'Bespoke concepts tailored to your brand DNA.',
      'services.s2': '3D Visualization',
      'services.s2d': 'Photo-real renders before a single panel is cut.',
      'services.s3': 'Production & Build',
      'services.s3d': 'Precision fabrication in our dedicated facility.',
      'services.s4': 'AV & Interactive',
      'services.s4d': 'LED walls, touchscreens, holograms, and sound.',
      'services.s5': 'Event Management',
      'services.s5d': 'Logistics, permits, and on-site coordination.',

      /* ===== CTA BLOCK ===== */
      'cta.t1': "Let's build",
      'cta.t2': 'something bold',
      'cta.t3': 'together.',
      'cta.sub': "Tell us about your next expo. We'll come back with a concept, timeline, and a plan.",
      'cta.btn': 'Start a project',

      /* ===== GALLERY STRIP (index) ===== */
      'galleryStrip.tag': 'Recent Shots',
      'galleryStrip.t1': 'A peek at',
      'galleryStrip.t2': 'our craft.',
      'galleryStrip.viewAll': 'View all 41 images',

      /* ===== GALLERY PAGE ===== */
      'gallery.t1': 'A gallery of',
      'gallery.t2': 'craftsmanship.',
      'gallery.sub': '41 booth builds + 20 behind-the-scenes videos from expos around the world.',
      'gallery.images': 'Photography · 41 shots',
      'gallery.imagesTitle': 'Booths in',
      'gallery.imagesTitle2': 'full color.',
      'gallery.videos': 'Behind the scenes · 12 videos',
      'gallery.videosTitle': 'Booths in',
      'gallery.videosTitle2': 'motion.',
      'gallery.filter.all': 'All Work',
      'gallery.filter.tech': 'Tech',
      'gallery.filter.auto': 'Automotive',
      'gallery.filter.health': 'Healthcare',
      'gallery.filter.fmcg': 'FMCG',
      'gallery.filter.luxury': 'Luxury',
      'gallery.cta.t1': 'Your booth',
      'gallery.cta.t2': 'belongs here.',
      'gallery.cta.sub': "Have an upcoming expo? Let's design something visitors won't forget.",

      /* ===== VIDEOS PAGE ===== */
      'videos.t1': 'Work in',
      'videos.t2': 'motion.',
      'videos.sub': "Behind-the-scenes videos from 13 partner companies we've built booths for.",
      'videos.cta.t1': 'Your booth',
      'videos.cta.t2': 'could be next.',
      'videos.cta.sub': "Have an upcoming expo? Let's build something worth filming.",
      'videos.modal.cat': 'MEDAR BOOTHS · Portfolio',
      'videos.modal.full': 'View full page',

      /* ===== VIDEO PAGE (single) ===== */
      'video.expo': 'Expo',
      'video.size': 'Booth size',
      'video.company': 'Company',
      'video.cta': 'Build something like this',
      'video.allVideos': 'All videos',
      'video.prev': 'Previous',
      'video.next': 'Next',
      'video.copy': 'Copy link',
      'video.copied': 'Copied ✓',
      'video.moreTag': 'More videos',
      'video.moreT1': 'More from',
      'video.moreT2': 'the studio.',
      'video.notFound': 'Video not found',

      /* ===== CONTACT ===== */
      'contact.t1': "Let's talk about",
      'contact.t2': 'your next expo.',
      'contact.sub': "Tell us about the event, the size, and the vibe. We'll come back within 24 hours with a plan and a ballpark.",
      'contact.email': 'Email',
      'contact.phone': 'Phone',
      'contact.studio': 'Studio',
      'contact.hours': 'Hours',
      'contact.hours.fri': 'Friday by appointment',
      'form.name': 'Your name',
      'form.company': 'Company',
      'form.email': 'Email',
      'form.phone': 'Phone',
      'form.service': 'Service',
      'form.service.design': 'Booth Design',
      'form.service.build': 'Build & Install',
      'form.service.full': 'Full Service',
      'form.service.other': 'Something else',
      'form.budget': 'Budget range',
      'form.message': 'Tell us about the project',
      'form.submit': 'Send message',
      'form.status': "We'll get back to you within 24 hours.",
      'studio.t1': 'Come see',
      'studio.t2': 'where we build.',
      'studio.p': 'Our warehouse and design studio sit side by side in Al Quoz — the creative heart of Dubai. Drop by for a coffee and a walk-through.',

      /* ===== FOOTER ===== */
      'footer.tag': 'Exhibition design & build studio based in Dubai, working worldwide.',
      'footer.nav': 'Navigate',
      'footer.social': 'Social',
      'footer.contact': 'Contact',
      'footer.copy': '© 2025 MEDAR BOOTHS. All rights reserved.'
    },

    ar: {
      /* ===== NAV ===== */
      'nav.work': 'أعمالنا',
      'nav.videos': 'فيديوهات',
      'nav.gallery': 'المعرض',
      'nav.about': 'من نحن',
      'nav.contact': 'تواصل',

      /* ===== HERO (index) ===== */
      'hero.stamp': 'متاحون للربع الأول ٢٠٢٦',
      'hero.eyebrow': 'استوديو تصميم أجنحة المعارض',
      'hero.t1': 'نصنع',
      'hero.t2': 'مساحات',
      'hero.t3': 'تفرض حضورها.',
      'hero.sub': 'من الفكرة إلى التنفيذ — ميدار بوثس تصمم تجارب معارض غامرة لعلامات ترفض أن تكون عادية.',
      'hero.cta1': 'شاهد أعمالنا',
      'hero.cta2': 'تواصل معنا',

      /* ===== STATS ===== */
      'stats.booths': 'جناح تم تسليمه',
      'stats.years': 'سنوات من الخبرة',
      'stats.countries': 'دولة حول العالم',
      'stats.retention': 'نسبة ولاء العملاء',

      /* ===== WORK SECTION (index) ===== */
      'work.tag': 'أعمال مختارة',
      'work.t1': 'مشاريع',
      'work.t2': 'تتحدث',
      'work.t3': 'أعلى من الكلمات.',
      'work.cta': 'شاهد المعرض كامل',

      /* ===== ABOUT ===== */
      'about.tag': 'الاستوديو',
      'about.q1': 'نحن لا نبني أجنحة فقط.',
      'about.q2': 'نصنع انطباعات تبقى.',
      'about.p1': 'ميدار بوثس هو استوديو متكامل لتصميم وتنفيذ أجنحة المعارض، يقع في دبي. من أول رسمة إلى آخر إضاءة، نتحكم في كل تفصيلة.',
      'about.p2': 'فريقنا الداخلي يجمع بين العمارة والتصنيع والتجربة الرقمية لتقديم أجنحة لا تلفت الانتباه فقط — بل تسيطر على القاعة بالكامل.',
      'about.btn': 'اعرف أكتر عننا',
      'about.storyTag': 'قصتنا',

      'about.t1': 'استوديو مبني على',
      'about.t2': 'الحرفية، لا القوالب.',
      'about.sub': 'إحنا فريق من المعماريين والصنّاع والمصممين مؤمنين إن كل جناح لازم يستحق كل متر فيه. بدون حشو. بدون كلام فاضي. بس شغل يسيطر على القاعة.',
      'about.process': 'اللي بنعمله',

      'about.p1t': 'التصميم',
      'about.p1d': 'الفكرة، التصوير ثلاثي الأبعاد، ودمج الهوية من اليوم الأول.',
      'about.p2t': 'التصنيع',
      'about.p2d': 'إنتاج داخلي بخامات فاخرة ودقة عالية.',
      'about.p3t': 'التركيب',
      'about.p3d': 'تركيب في الموقع، دمج صوتيات، ودعم أثناء المعرض.',

      /* ===== TIMELINE ===== */
      'timeline.tag': 'محطات',
      'timeline.t1': 'اثنا عشر عامًا',
      'timeline.t2': 'من الإبداع.',
      'timeline.y1t': 'ميلاد الاستوديو',
      'timeline.y1d': 'ميدار بوثس يفتح أبوابه في القوز بفريق من ثلاثة أفراد وورشة واحدة.',
      'timeline.y2t': 'أول ١٠٠ جناح',
      'timeline.y2d': 'نسلّم جناحنا المائة في جيتكس، ورسّخنا سمعتنا في منطقة الخليج.',
      'timeline.y3t': 'التوسع الدولي',
      'timeline.y3d': 'أول مشاريعنا خارج دول الخليج — الرياض والقاهرة والدوحة أصبحوا محطات دائمة.',
      'timeline.y4t': 'التصنيع الداخلي',
      'timeline.y4d': 'نفتح منشأة إنتاج بمساحة ٤٠٠٠ متر مربع، لتجميع كل خطوة تحت سقف واحد.',
      'timeline.y5t': 'الرقمي والتفاعلي',
      'timeline.y5d': 'إطلاق قسم كامل للصوتيات والتفاعل — شاشات LED، هولوجرام، وتجارب لمسية.',
      'timeline.y6t': '٤٥٠ جناحًا والمزيد',
      'timeline.y6d': 'نتجاوز ٤٥٠ جناحًا تم تسليمها في ٢٨ دولة — وما زلنا في البداية.',

      /* ===== PROCESS ===== */
      'process.tag': 'كيف نعمل',
      'process.t1': 'من أول رسمة',
      'process.t2': 'لأرض المعرض.',
      'process.p1t': 'التصميم',
      'process.p1d': 'الفكرة، والتصوير ثلاثي الأبعاد، ودمج الهوية من اليوم الأول. نرسم ونكرر حتى تصبح الرؤية واضحة.',
      'process.p2t': 'التصنيع',
      'process.p2d': 'إنتاج داخلي بخامات فاخرة ودقة عالية. تفريز CNC، أعمال خشبية، معادن، وتشطيبات — كلها تحت سقفنا.',
      'process.p3t': 'التركيب',
      'process.p3d': 'تركيب في الموقع، دمج صوتيات، ودعم أثناء المعرض. فريقنا يعمل طوال الليل ليخرج الجناح مثاليًا يوم الافتتاح.',

      /* ===== VALUES ===== */
      'values.tag': 'اللي بنؤمن بيه',
      'values.t1': 'مبادئ ورا',
      'values.t2': 'كل جناح.',
      'values.v1t': 'الحرفية قبل الاختصارات',
      'values.v1d': 'كل وصلة، كل لمسة، كل تفصيلة مهمة. بنبني كأن الجناح هيفضل واقف عشر سنين — مش أسبوع.',
      'values.v2t': 'تصميم بهدف',
      'values.v2d': 'الجمال لوحده مش كفاية. كل عنصر بياخد مكانه لأنه بيحرّك الزائر ناحية هدف.',
      'values.v3t': 'فريق واحد، رؤية واحدة',
      'values.v3d': 'المصممين والمهندسين والصنّاع في نفس الأوضة. بدون تسليمات. بدون مفاجآت.',
      'values.v4t': 'التسليم في الميعاد',
      'values.v4d': 'المعارض مبتستناش. بنخطط للأسوأ، بنسلّم في الميعاد بالظبط، وبنفضل في الموقع لحد ما الإضاءة تقفل.',

      /* ===== TEAM ===== */
      'team.tag': 'الفريق',
      'team.t1': 'العقول وراء',
      'team.t2': 'كل جناح.',
      'team.m1n': 'أحمد حسن',
      'team.m1r': 'المؤسس والمدير الإبداعي',
      'team.m2n': 'ليلى منصور',
      'team.m2r': 'المهندسة المعمارية الرئيسية',
      'team.m3n': 'عمر خليل',
      'team.m3r': 'مدير الإنتاج',
      'team.m4n': 'سارة نبيل',
      'team.m4r': 'مديرة التصميم',

      /* ===== TESTIMONIALS ===== */
      'testimonials.tag': 'آراء العملاء',
      'testimonials.t1': 'موثوقون من',
      'testimonials.t2': 'علامات حول العالم.',
      'testimonials.c1n': 'سارة ميتشل',
      'testimonials.c1r': 'مديرة التسويق · فيرتكس',
      'testimonials.c1d': 'فريق ميدار قدّم جناحًا أوقف الزحام في جيتكس. كل تفصيلة كانت مدروسة.',
      'testimonials.c2n': 'خالد المنصوري',
      'testimonials.c2r': 'الرئيس التنفيذي · نوفا موتورز',
      'testimonials.c2d': 'اشتغلنا مع وكالات كتير في الخليج. مفيش حد يوصل لمستوى ميدار في الحرفية.',
      'testimonials.c3n': 'د. أميرة حسن',
      'testimonials.c3r': 'المديرة · ميديكور لابس',
      'testimonials.c3d': 'احترافية من أول رسمة لآخر تركيب. الجناح بقى حديث Arab Health كلها.',
      'testimonials.c4n': 'جيمس أوكونكو',
      'testimonials.c4r': 'قائد العلامة · أورورا فودز',
      'testimonials.c4d': 'فهموا علامتنا أحسن مننا. النتيجة كانت لا تُنسى.',
      'testimonials.c5n': 'ليلى فارسي',
      'testimonials.c5r': 'المؤسسة · لوميا جويلري',
      'testimonials.c5d': 'فخامة، دقة، والتزام بالمواعيد. ده بالظبط اللي عايزه من شريك معارض.',
      'testimonials.c6n': 'روبرتو سيلفا',
      'testimonials.c6r': 'مدير الفعاليات · كوانتا',
      'testimonials.c6d': 'تنفيذ مثالي تحت الضغط. فريق التركيب اشتغل طول الليل عشان يخلص في الميعاد.',

      /* ===== SERVICES ===== */
      'services.tag': 'خدماتنا',
      'services.t1': 'كل ما تحتاجه',
      'services.t2': 'تحت سقف واحد.',
      'services.s1': 'تصميم أجنحة مخصص',
      'services.s1d': 'أفكار مبتكرة مصممة خصيصًا لهوية علامتك.',
      'services.s2': 'تصوير ثلاثي الأبعاد',
      'services.s2d': 'صور واقعية قبل البدء في التنفيذ.',
      'services.s3': 'الإنتاج والتنفيذ',
      'services.s3d': 'تصنيع دقيق في مصنعنا المخصص.',
      'services.s4': 'الصوتيات والتفاعل',
      'services.s4d': 'شاشات LED، شاشات لمس، هولوجرام، وصوت.',
      'services.s5': 'إدارة الفعاليات',
      'services.s5d': 'اللوجستيات، التصاريح، والتنسيق في الموقع.',

      /* ===== CTA BLOCK ===== */
      'cta.t1': 'يلا نبني',
      'cta.t2': 'حاجة جسورة',
      'cta.t3': 'مع بعض.',
      'cta.sub': 'احكيلنا عن معرضك القادم. هنرجعلك بفكرة وجدول زمني وخطة كاملة.',
      'cta.btn': 'ابدأ مشروعك',

      /* ===== GALLERY STRIP ===== */
      'galleryStrip.tag': 'لقطات حديثة',
      'galleryStrip.t1': 'لمحة عن',
      'galleryStrip.t2': 'شغلنا.',
      'galleryStrip.viewAll': 'شاهد كل الصور (٤١)',

      /* ===== GALLERY PAGE ===== */
      'gallery.t1': 'معرض',
      'gallery.t2': 'الإبداع.',
      'gallery.sub': '٤١ جناح + ٢٠ فيديو من كواليس المعارض حول العالم.',
      'gallery.images': 'صور · ٤١ لقطة',
      'gallery.imagesTitle': 'أجنحة',
      'gallery.imagesTitle2': 'بألوانها الكاملة.',
      'gallery.videos': 'كواليس · ١٢ فيديو',
      'gallery.videosTitle': 'أجنحة',
      'gallery.videosTitle2': 'في حركة.',
      'gallery.filter.all': 'كل الأعمال',
      'gallery.filter.tech': 'تقنية',
      'gallery.filter.auto': 'سيارات',
      'gallery.filter.health': 'صحة',
      'gallery.filter.fmcg': 'استهلاكي',
      'gallery.filter.luxury': 'فخامة',
      'gallery.cta.t1': 'جناحك',
      'gallery.cta.t2': 'مكانه هنا.',
      'gallery.cta.sub': 'عندك معرض قريب؟ يلا نصمم حاجة الزوار مش هينسوها.',

      /* ===== VIDEOS PAGE ===== */
      'videos.t1': 'شغلنا',
      'videos.t2': 'في حركة.',
      'videos.sub': 'فيديوهات من كواليس شغلنا مع ١٣ شركة شريك.',
      'videos.cta.t1': 'جناحك',
      'videos.cta.t2': 'ممكن يكون التالي.',
      'videos.cta.sub': 'عندك معرض قريب؟ يلا نبني حاجة تستحق التصوير.',
      'videos.modal.cat': 'ميدار بوثس · بورتفوليو',
      'videos.modal.full': 'افتح الصفحة الكاملة',

      /* ===== VIDEO PAGE (single) ===== */
      'video.expo': 'المعرض',
      'video.size': 'مساحة الجناح',
      'video.company': 'الشركة',
      'video.cta': 'ابنِ حاجة زي دي',
      'video.allVideos': 'كل الفيديوهات',
      'video.prev': 'السابق',
      'video.next': 'التالي',
      'video.copy': 'انسخ الرابط',
      'video.copied': 'تم النسخ ✓',
      'video.moreTag': 'فيديوهات أخرى',
      'video.moreT1': 'المزيد من',
      'video.moreT2': 'الاستوديو.',
      'video.notFound': 'الفيديو غير موجود',

      /* ===== CONTACT ===== */
      'contact.t1': 'يلا نتكلم عن',
      'contact.t2': 'معرضك القادم.',
      'contact.sub': 'احكيلنا عن الفعالية، المساحة، والجو العام. هنرجعلك خلال ٢٤ ساعة بخطة وتقدير مبدئي.',
      'contact.email': 'الإيميل',
      'contact.phone': 'التليفون',
      'contact.studio': 'الاستوديو',
      'contact.hours': 'ساعات العمل',
      'contact.hours.fri': 'الجمعة بموعد مسبق',
      'form.name': 'اسمك',
      'form.company': 'الشركة',
      'form.email': 'الإيميل',
      'form.phone': 'التليفون',
      'form.service': 'الخدمة',
      'form.service.design': 'تصميم جناح',
      'form.service.build': 'تنفيذ وتركيب',
      'form.service.full': 'خدمة كاملة',
      'form.service.other': 'حاجة تانية',
      'form.budget': 'الميزانية',
      'form.message': 'احكيلنا عن المشروع',
      'form.submit': 'ابعت الرسالة',
      'form.status': 'هنرجعلك خلال ٢٤ ساعة.',
      'studio.t1': 'تعالى شوف',
      'studio.t2': 'مكان اللي بنبنيه.',
      'studio.p': 'المخزن واستوديو التصميم جنب بعض في القوز — قلب دبي الإبداعي. عدّي علينا لفنجان قهوة وجولة سريعة.',

      /* ===== FOOTER ===== */
      'footer.tag': 'استوديو تصميم وتنفيذ أجنحة معارض في دبي، نعمل حول العالم.',
      'footer.nav': 'تنقل',
      'footer.social': 'تابعنا',
      'footer.contact': 'تواصل',
      'footer.copy': '© ٢٠٢٥ ميدار بوثس. جميع الحقوق محفوظة.'
    }
  };

  const savedLang = localStorage.getItem(STORAGE_KEY) || 'en';

  function applyLanguage(lang) {
    if (!translations[lang]) lang = 'en';

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('data-lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
      if (el.closest('.loader')) return;
      if (el.closest('.page-transition')) return;
      if (el.closest('.page-transition__logo')) return;

      const key = el.getAttribute('data-i18n');
      const value = translations[lang][key];
      if (value !== undefined) {
        el.textContent = value;
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const value = translations[lang][key];
      if (value !== undefined) {
        el.setAttribute('placeholder', value);
      }
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      const value = translations[lang][key];
      if (value !== undefined) {
        el.setAttribute('aria-label', value);
      }
    });

    document.querySelectorAll('[data-lang-label]').forEach(el => {
      el.textContent = lang === 'ar' ? 'EN' : 'ع';
    });

    localStorage.setItem(STORAGE_KEY, lang);

    window.dispatchEvent(new CustomEvent('languagechange', { detail: { lang } }));
  }

  window.toggleLanguage = function () {
    const current = localStorage.getItem(STORAGE_KEY) || 'en';
    const next = current === 'en' ? 'ar' : 'en';
    applyLanguage(next);
  };

  window.t = function (key) {
    const lang = localStorage.getItem(STORAGE_KEY) || 'en';
    return translations[lang][key] || key;
  };

  function init() {
    applyLanguage(savedLang);

    document.querySelectorAll('[data-lang-toggle]').forEach(btn => {
      if (btn.dataset.langBound === '1') return;
      btn.dataset.langBound = '1';

      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        window.toggleLanguage();
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();