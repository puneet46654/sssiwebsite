export const translations = {
  IN: {
    events: "Events",
    investors: "Investors",
    contact: "Contact Us",
    country: "India",
    searchPlaceholder: "Search SSI",

    technology: "Technology",
    ssiMantra: "SSI Mantra",
    ssiMudra: "SSI Mudra",
    ssiMaya: "SSI Maya",
    telesurgery: "Telesurgery",

    healthcareProfessional: "Healthcare Professional",
    surgeryWithSSI: "Surgery with SSI",
    trainingEducation: "Training and Education",
    clinicalPartners: "Clinical Partners",

    patients: "Patients",
    patientEducation: "Patient Education",
    clinicalApplications: "Clinical Applications",

    company: "Company",
    aboutSSI: "About SSI",
    newsMedia: "News and Media",
    publications: "Publications",
    careers: "Careers",

    demo: "Demo",
    loginPortal: "Login / Portal",
    noResults: "No results found. Try another keyword.",
  },

  US: {
    events: "Events",
    investors: "Investors",
    contact: "Contact Us",
    country: "USA",
    searchPlaceholder: "Search SSI",

    technology: "Technology",
    ssiMantra: "SSI Mantra",
    ssiMudra: "SSI Mudra",
    ssiMaya: "SSI Maya",
    telesurgery: "Telesurgery",

    healthcareProfessional: "Healthcare Professional",
    surgeryWithSSI: "Surgery with SSI",
    trainingEducation: "Training and Education",
    clinicalPartners: "Clinical Partners",

    patients: "Patients",
    patientEducation: "Patient Education",
    clinicalApplications: "Clinical Applications",

    company: "Company",
    aboutSSI: "About SSI",
    newsMedia: "News and Media",
    publications: "Publications",
    careers: "Careers",

    demo: "Demo",
    loginPortal: "Login / Portal",
    noResults: "No results found. Try another keyword.",
  },

  JP: {
    events: "イベント",
    investors: "投資家",
    contact: "お問い合わせ",
    country: "日本",
    searchPlaceholder: "SSIを検索",

    technology: "テクノロジー",
    ssiMantra: "SSI Mantra",
    ssiMudra: "SSI Mudra",
    ssiMaya: "SSI Maya",
    telesurgery: "遠隔手術",

    healthcareProfessional: "医療従事者",
    surgeryWithSSI: "SSIによる手術",
    trainingEducation: "トレーニングと教育",
    clinicalPartners: "臨床パートナー",

    patients: "患者様",
    patientEducation: "患者教育",
    clinicalApplications: "臨床応用",

    company: "会社情報",
    aboutSSI: "SSIについて",
    newsMedia: "ニュース・メディア",
    publications: "出版物",
    careers: "採用情報",

    demo: "デモ",
    loginPortal: "ログイン / ポータル",
    noResults: "結果が見つかりません。別のキーワードをお試しください。",
  },

  AE: {
    events: "الفعاليات",
    investors: "المستثمرون",
    contact: "اتصل بنا",
    country: "الإمارات",
    searchPlaceholder: "ابحث في SSI",

    technology: "التكنولوجيا",
    ssiMantra: "SSI Mantra",
    ssiMudra: "SSI Mudra",
    ssiMaya: "SSI Maya",
    telesurgery: "الجراحة عن بُعد",

    healthcareProfessional: "المتخصصون في الرعاية الصحية",
    surgeryWithSSI: "الجراحة باستخدام SSI",
    trainingEducation: "التدريب والتعليم",
    clinicalPartners: "الشركاء السريريين",

    patients: "المرضى",
    patientEducation: "تثقيف المرضى",
    clinicalApplications: "التطبيقات السريرية",

    company: "الشركة",
    aboutSSI: "حول SSI",
    newsMedia: "الأخبار والإعلام",
    publications: "المنشورات",
    careers: "الوظائف",

    demo: "عرض توضيحي",
    loginPortal: "تسجيل الدخول / البوابة",
    noResults: "لم يتم العثور على نتائج. جرّب كلمة أخرى.",
  },
} as const;

export type CountryCode = keyof typeof translations;
export type TranslationKey = keyof typeof translations.IN;
