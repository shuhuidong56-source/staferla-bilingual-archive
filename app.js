const translations = {
  zh: {
    navSeminars: "研讨班",
    navAnnexes: "附录文献",
    navZizek: "齐泽克",
    eyebrow: "Jacques Lacan / Freud 双语研读资料",
    heroTitle: "拉康与弗洛伊德双语资料馆",
    heroText: "一个面向中文读者的非官方研读网站：重整 Staferla 原站的拉康研讨班、弗洛伊德文集、附录文献与齐泽克阅读入口，提供可搜索索引、中英界面和持续推进的中英译文。目前 S1 已人工翻译到第 810 段，其余文档保留原站链接与译文框架。",
    statSeminars: "研讨班",
    statDocs: "文档入口",
    statLangs: "界面语言",
    progressKicker: "Project status",
    progressTitle: "当前进度",
    manualCountLabel: "人工译文页面",
    manualCountNote: "S1 已人工翻译到第 810 段。",
    draftCountLabel: "草稿占位页面",
    draftCountNote: "已抽取文本并生成框架，但正文仍待翻译。",
    indexedCountLabel: "索引条目",
    indexedCountNote: "研讨班、Freud 文集与 Lacan 附录均已纳入检索。",
    searchLabel: "搜索",
    searchPlaceholder: "标题、编号、作者...",
    filterAll: "全部",
    filterSeminar: "研讨班",
    filterFreud: "Freud",
    filterLacan: "Lacan",
    filterZizek: "Žižek",
    seminarKicker: "Seminars I-XXVII",
    seminarTitle: "Lacan 研讨班",
    annexKicker: "Annex documents",
    annexTitle: "Freud 与 Lacan 附录文献",
    zizekKicker: "Žižek reading list",
    zizekTitle: "齐泽克专题",
    footerText: "资料来源为 staferla.free.fr 及公开出版社/书目信息；本站是非官方学习索引与翻译整理项目，源文件链接保留原站地址。",
    source: "原文标题",
    sourcePage: "源页面",
    noResults: "没有匹配结果。",
    word: "Word 文档",
    pdf: "PDF 文档",
    html: "HTML 文档",
    publisher: "出版社页面",
    translationHtml: "中英译文",
    manualTranslation: "人工译文",
    draftTranslation: "草稿框架",
    paragraphUnit: "段",
    draftNote: "待翻译",
    original: "原站",
    external: "外部",
    rightsNote: "版权限制：本站不公开托管这份 PDF，只提供书目信息与合法阅读入口。"
  },
  en: {
    navSeminars: "Seminars",
    navAnnexes: "Annexes",
    navZizek: "Žižek",
    eyebrow: "Jacques Lacan / Freud bilingual study archive",
    heroTitle: "A bilingual Lacan and Freud reading archive",
    heroText: "An unofficial study site for Chinese and English readers: it reorganizes the Staferla archive into a searchable index for Lacan's seminars, Freud collections, annex texts, and Žižek reading entries, with bilingual interface labels and ongoing Chinese-English translations. S1 has been manually translated through paragraph 810; the remaining documents keep source links and translation shells.",
    statSeminars: "seminars",
    statDocs: "document links",
    statLangs: "interface languages",
    progressKicker: "Project status",
    progressTitle: "Current Progress",
    manualCountLabel: "manual translation page",
    manualCountNote: "S1 has been manually translated through paragraph 810.",
    draftCountLabel: "draft shell pages",
    draftCountNote: "Text has been extracted and page shells exist, but body translation remains.",
    indexedCountLabel: "indexed entries",
    indexedCountNote: "Seminars, Freud collections, and Lacan annexes are searchable.",
    searchLabel: "Search",
    searchPlaceholder: "Title, number, author...",
    filterAll: "All",
    filterSeminar: "Seminars",
    filterFreud: "Freud",
    filterLacan: "Lacan",
    filterZizek: "Žižek",
    seminarKicker: "Seminars I-XXVII",
    seminarTitle: "Lacan Seminars",
    annexKicker: "Annex documents",
    annexTitle: "Freud and Lacan annex texts",
    zizekKicker: "Žižek reading list",
    zizekTitle: "Žižek",
    footerText: "Content is sourced from staferla.free.fr and public publisher/bibliographic pages; this is an unofficial study index and translation project that preserves links to original sources.",
    source: "Original title",
    sourcePage: "Source page",
    noResults: "No matching results.",
    word: "Word document",
    pdf: "PDF document",
    html: "HTML document",
    publisher: "Publisher page",
    translationHtml: "Chinese-English translation",
    manualTranslation: "Manual translation",
    draftTranslation: "Draft shell",
    paragraphUnit: "paragraphs",
    draftNote: "pending",
    original: "Original",
    external: "External",
    rightsNote: "Copyright note: this site does not publicly host the PDF; it lists bibliographic information and legal reading entry points."
  }
};

const seminarTitles = [
  ["S1", "Séminaire 1 : Ecrits techniques", "研讨班 1：技术文稿", "Seminar 1: Technical Writings", "S1/S1 Ecrits techniques.jpg", "S1/S1.htm", "S1/S1 Ecrits techniques"],
  ["S2", "Séminaire 2 : Le moi", "研讨班 2：自我", "Seminar 2: The Ego", "S2/S2 LE MOI.jpg", "S2/S2.htm", "S2/S2 LE MOI"],
  ["S3", "Séminaire 3 : Psychoses", "研讨班 3：精神病", "Seminar 3: Psychoses", "S3/S3 PSYCHOSES.jpg", "S3/S3.htm", "S3/S3 PSYCHOSES"],
  ["S4", "Séminaire 4 : La relation", "研讨班 4：关系", "Seminar 4: The Relation", "S4/S4 LA RELATION.jpg", "S4/S4.htm", "S4/S4 LA RELATION"],
  ["S5", "Séminaire 5 : Formations", "研讨班 5：无意识的形成", "Seminar 5: Formations of the Unconscious", "S5/S5 FORMATIONS .jpg", "S5/S5.htm", "S5/S5 FORMATIONS "],
  ["S6", "Séminaire 6 : Le désir", "研讨班 6：欲望", "Seminar 6: Desire", "S6/S6 LE DESIR.jpg", "S6/S6.htm", "S6/S6 LE DESIR"],
  ["S7", "Séminaire 7 : L'éthique", "研讨班 7：精神分析伦理", "Seminar 7: The Ethics of Psychoanalysis", "S7/S7 L'ETHIQUE.jpg", "S7/S7.htm", "S7/S7 L'ETHIQUE"],
  ["S8", "Séminaire 8 : Le transfert", "研讨班 8：移情", "Seminar 8: Transference", "S8/S8 LE TRANSFERT.jpg", "S8/S8.htm", "S8/S8 LE TRANSFERT"],
  ["S9", "Séminaire 9 : L'identification", "研讨班 9：认同", "Seminar 9: Identification", "S9/S9 L'IDENTIFICATION.jpg", "S9/S9.htm", "S9/S9 L'IDENTIFICATION"],
  ["S10", "Séminaire 10 : L'Angoisse", "研讨班 10：焦虑", "Seminar 10: Anxiety", "S10/S10 L'ANGOISSE.jpg", "S10/S10.htm", "S10/S10 L'ANGOISSE"],
  ["S11", "Séminaire 11 : Fondements", "研讨班 11：精神分析的四个基本概念", "Seminar 11: The Four Fundamental Concepts", "S11/S11 FONDEMENTS.jpg", "S11/S11.htm", "S11/S11 FONDEMENTS"],
  ["S12", "Séminaire 12 : Problèmes", "研讨班 12：精神分析的关键问题", "Seminar 12: Crucial Problems for Psychoanalysis", "S12/S12 PROBLEMES.jpg", "S12/S12.htm", "S12/S12 PROBLEMES"],
  ["S13", "Séminaire 13 : L'objet", "研讨班 13：精神分析的客体", "Seminar 13: The Object of Psychoanalysis", "S13/S13 L'OBJET.jpg", "S13/S13.htm", "S13/S13 L'OBJET"],
  ["S14", "Séminaire 14 : Logique", "研讨班 14：幻象的逻辑", "Seminar 14: The Logic of Fantasy", "S14/S14 LOGIQUE.jpg", "S14/S14.htm", "S14/S14 LOGIQUE"],
  ["S15", "Séminaire 15 : L'acte", "研讨班 15：精神分析行动", "Seminar 15: The Psychoanalytic Act", "S15/S15 L'ACTE.jpg", "S15/S15.htm", "S15/S15 L'ACTE"],
  ["S16", "Séminaire 16 : D'un autre ...", "研讨班 16：从一个他者到另一个他者", "Seminar 16: From an Other to the other", "S16/S16 D'UN AUTRE... .jpg", "S16/S16.htm", "S16/S16 D'UN AUTRE... "],
  ["S17", "Séminaire 17 : L'envers", "研讨班 17：精神分析的反面", "Seminar 17: The Other Side of Psychoanalysis", "S17/S17 L'ENVERS.jpg", "S17/S17.htm", "S17/S17 L'ENVERS"],
  ["S18", "Séminaire 18 : D'un discours ...", "研讨班 18：论一种并非假装的言说", "Seminar 18: On a Discourse That Might Not Be a Semblance", "S18/S18 D'UN DISCOURS...jpg", "S18/S18.htm", "S18/S18 D'UN DISCOURS.."],
  ["S19", "Séminaire 19 : ... Ou pire", "研讨班 19：……或者更糟", "Seminar 19: ... Or Worse", "S19/S19...OU PIRE.jpg", "S19/S19.htm", "S19/S19...OU PIRE"],
  ["S19b", "Séminaire 19b : Le savoir du psychanalyste", "研讨班 19b：精神分析家的知识", "Seminar 19b: The Knowledge of the Psychoanalyst", "S19b/S19b Le savoir du psychanalyste.jpg", "S19b/S19b.htm", "S19b/S19b Le savoir du psychanalyste"],
  ["S20", "Séminaire 20 : Encore", "研讨班 20：再来", "Seminar 20: Encore", "S20/S20 ENCORE.jpg", "S20/S20.htm", "S20/S20 ENCORE"],
  ["S21", "Séminaire 21 : Non-dupes ...", "研讨班 21：非受骗者游荡", "Seminar 21: The Non-Dupes Err", "S21/S21 NON-DUPES....jpg", "S21/S21.htm", "S21/S21 NON-DUPES..."],
  ["S22", "Séminaire 22 : R.S.I.", "研讨班 22：R.S.I.", "Seminar 22: R.S.I.", "S22/S22 R.S.I..jpg", "S22/S22.htm", "S22/S22 R.S.I."],
  ["S23", "Séminaire 23 : Le sinthome", "研讨班 23：症状圣人", "Seminar 23: The Sinthome", "S23/S23 LE SINTHOME.jpg", "S23/S23.htm", "S23/S23 LE SINTHOME"],
  ["S24", "Séminaire 24 : L'insu ...", "研讨班 24：自知未然之一失即爱", "Seminar 24: L'insu que sait de l'une-bévue s'aile à mourre", "S24/S24 L'INSU....jpg", "S24/S24.htm", "S24/S24 L'INSU..."],
  ["S25", "Séminaire 25 : Le moment de conclure", "研讨班 25：结论时刻", "Seminar 25: The Moment to Conclude", "S25/S25.jpg", "S25/S25.htm", "S25/S25"],
  ["S26", "Séminaire 26 : La topologie et le temps", "研讨班 26：拓扑学与时间", "Seminar 26: Topology and Time", "S26/S26 La topologie et le temps.jpg", "S26/S26.htm", "S26/S26 La topologie et le temps"],
  ["S27", "Séminaire 27 : Dissolution", "研讨班 27：解散", "Seminar 27: Dissolution", "S27/S27 Dissolution.jpg", "S27/S27.htm", "S27/S27 Dissolution"]
];

const baseUrl = "http://staferla.free.fr/";

const seminars = seminarTitles.map(([id, fr, zh, en, image, page, fileBase]) => ({
  id,
  kind: "seminar",
  tag: id.replace("S", ""),
  fr,
  zh,
  en,
  image: baseUrl + encodeURI(image),
  page: baseUrl + encodeURI(page),
  docs: [
    { type: "word", href: baseUrl + encodeURI(`${fileBase}.docx`) },
    { type: "pdf", href: baseUrl + encodeURI(`${fileBase}.pdf`) }
  ]
}));

const lacanAnnexes = [
  ["La lettre volée", "被窃的信", "The Purloined Letter", "Lacan/La lettre volee.jpg", "Lacan/la_lettre_volee.htm"],
  ["Lituraterre", "文学土壤", "Lituraterre", "Lacan/Lituraterre.jpg", "Lacan/lituraterre.htm"],
  ["L'étourdit", "晕说", "L'étourdit", "Lacan/L'etourdit.jpg", "Lacan/letourdit.htm"],
  ["Radiophonie", "广播话语", "Radiophony", "Lacan/Radiophonie.jpg", "Lacan/radiophonie.htm"],
  ["Télévision", "电视", "Television", "Lacan/Television.jpg", "Lacan/television.htm"],
  ["Subversion du sujet", "主体的颠覆", "Subversion of the Subject", "Lacan/Subversion du sujet.jpg", "Lacan/subversion_du_sujet.htm"],
  ["La chose freudienne", "弗洛伊德之物", "The Freudian Thing", "Lacan/La chose freudienne.jpg", "Lacan/la_chose_freudienne.htm"],
  ["Fonction et champ", "言语与语言的功能和场域", "Function and Field", "Lacan/Fonction et champ.jpg", "Lacan/fonction_et_champ.htm"],
  ["L'instance de la lettre", "字母的实例", "The Instance of the Letter", "Lacan/L'instance de la lettre.jpg", "Lacan/linstance_de_la_lettre.htm"],
  ["Kant avec Sade", "康德与萨德", "Kant with Sade", "Lacan/Kant avec Sade.jpg", "Lacan/kant_avec_sade.htm"],
  ["Le mythe individuel du nevrose", "神经症者的个人神话", "The Individual Myth of the Neurotic", "Lacan/Le mythe individuel du nevrose.jpg", "Lacan/le_mythe_individuel_du_nevrose.htm"],
  ["La Troisième", "第三篇", "The Third", "Lacan/La_Troisieme.jpg", "Lacan/la_troisieme.htm"],
  ["Quatre préfaces", "四篇序言", "Four Prefaces", "Lacan/Quatre prefaces .jpg", "Lacan/quatre_prefaces.htm"]
].map(([fr, zh, en, image, href], index) => ({
  id: `L${index + 1}`,
  kind: "lacan",
  tag: "Lacan",
  fr,
  zh,
  en,
  image: baseUrl + encodeURI(image),
  page: baseUrl + encodeURI(href),
  docs: [{ type: "html", href: baseUrl + encodeURI(href) }]
}));

const freudAnnexes = [
  ["Freud complete Works", "弗洛伊德全集", "Freud Complete Works", "Freud/Freud complete Works.jpg", "Freud/Freud complete Works"],
  ["Freud Gesammelte Werke", "弗洛伊德德文全集", "Freud Collected Works", "Freud/FREUD Gesammelte Werke.jpg", "Freud/FREUD Gesammelte Werke"]
].map(([fr, zh, en, image, fileBase], index) => ({
  id: `F${index + 1}`,
  kind: "freud",
  tag: "Freud",
  fr,
  zh,
  en,
  image: baseUrl + encodeURI(image),
  page: baseUrl + encodeURI("Freud/freud.htm"),
  docs: [
    { type: "word", href: baseUrl + encodeURI(`${fileBase}.docx`) },
    { type: "pdf", href: baseUrl + encodeURI(`${fileBase}.pdf`) }
  ]
}));

const zizekTexts = [
  {
    id: "Z1",
    kind: "zizek",
    tag: "Žižek",
    fr: "The Sublime Object of Ideology, Second Edition",
    zh: "《意识形态的崇高客体》第二版",
    en: "The Sublime Object of Ideology, Second Edition",
    image: "",
    page: "https://www.penguinrandomhouse.com/books/232593/the-sublime-object-of-ideology-by-slavoj-zizek/",
    noteKey: "rightsNote",
    docs: [
      { type: "publisher", href: "https://www.penguinrandomhouse.com/books/232593/the-sublime-object-of-ideology-by-slavoj-zizek/" }
    ]
  }
];

const items = [...seminars, ...freudAnnexes, ...lacanAnnexes, ...zizekTexts];
let language = "zh";
let filter = "all";

const seminarGrid = document.querySelector("#seminarGrid");
const annexGrid = document.querySelector("#annexGrid");
const zizekGrid = document.querySelector("#zizekGrid");
const searchInput = document.querySelector("#searchInput");
const langToggle = document.querySelector("#langToggle");
const translatedDocs = window.TRANSLATED_DOCS || {};
const translationEntries = Object.values(translatedDocs);
const manualEntries = translationEntries.filter((entry) => entry.status === "manual");
const draftEntries = translationEntries.filter((entry) => entry.status !== "manual");

document.querySelector("#seminarCount").textContent = seminars.length;
document.querySelector("#docCount").textContent = items.reduce((sum, item) => {
  const translated = translatedDocs?.[item.id] ? 1 : 0;
  return sum + item.docs.length + 1 + translated;
}, 0);
document.querySelector("#manualCount").textContent = manualEntries.length;
document.querySelector("#draftCount").textContent = draftEntries.length;
document.querySelector("#indexedCount").textContent = items.length;

function t(key) {
  return translations[language][key];
}

function docLabel(type) {
  return translations[language][type] || type.toUpperCase();
}

function itemMatches(item, query) {
  const haystack = `${item.id} ${item.fr} ${item.zh} ${item.en} ${item.kind}`.toLowerCase();
  return haystack.includes(query.toLowerCase());
}

function createCard(item) {
  const title = item[language];
  const altTitle = language === "zh" ? item.en : item.zh;
  const media = item.image
    ? `<img src="${item.image}" alt="${item.fr}" loading="lazy" />`
    : `<div class="cover-placeholder" aria-hidden="true"><span>${item.tag}</span></div>`;
  const translatedDoc = translatedDocs?.[item.id];
  const statusBadge = translatedDoc
    ? `<p class="status ${translatedDoc.status === "manual" ? "is-manual" : "is-draft"}">${translationStatusLabel(translatedDoc)}</p>`
    : "";
  const docs = [
    translatedDoc ? `<a class="doc-link translated ${translatedDoc.status === "manual" ? "is-manual" : "is-draft"}" href="${translatedDoc.href}"><span>${translationStatusLabel(translatedDoc)}</span><span>HTML</span></a>` : "",
    ...item.docs.map((doc) => `<a class="doc-link" href="${doc.href}" target="_blank" rel="noreferrer"><span>${docLabel(doc.type)}</span><span>${item.kind === "zizek" ? t("external") : t("original")}</span></a>`),
    `<a class="doc-link" href="${item.page}" target="_blank" rel="noreferrer"><span>${t("sourcePage")}</span><span>${item.kind === "zizek" ? t("external") : t("original")}</span></a>`
  ].join("");

  return `
    <article class="card" data-kind="${item.kind}">
      <div class="card-media">
        ${media}
        <span class="card-tag">${item.tag}</span>
      </div>
      <div class="card-body">
        <h3>${title}</h3>
        <p class="translation">${altTitle}</p>
        ${statusBadge}
        ${item.noteKey ? `<p class="rights-note">${t(item.noteKey)}</p>` : ""}
        <p class="meta">${t("source")}: ${item.fr}</p>
        <div class="doc-list">${docs}</div>
      </div>
    </article>
  `;
}

function translationStatusLabel(entry) {
  if (entry.status === "manual") {
    return `${t("manualTranslation")} · ${entry.paragraphs || 0} ${t("paragraphUnit")}`;
  }
  return `${t("draftTranslation")} · ${t("draftNote")}`;
}

function render() {
  const query = searchInput.value.trim();
  const visible = items.filter((item) => (filter === "all" || item.kind === filter) && itemMatches(item, query));
  const visibleSeminars = visible.filter((item) => item.kind === "seminar");
  const visibleAnnexes = visible.filter((item) => item.kind !== "seminar" && item.kind !== "zizek");
  const visibleZizek = visible.filter((item) => item.kind === "zizek");

  seminarGrid.innerHTML = visibleSeminars.length ? visibleSeminars.map(createCard).join("") : `<p class="empty">${t("noResults")}</p>`;
  annexGrid.innerHTML = visibleAnnexes.length ? visibleAnnexes.map(createCard).join("") : `<p class="empty">${t("noResults")}</p>`;
  zizekGrid.innerHTML = visibleZizek.length ? visibleZizek.map(createCard).join("") : `<p class="empty">${t("noResults")}</p>`;
}

function applyLanguage() {
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  searchInput.placeholder = t("searchPlaceholder");
  langToggle.textContent = language === "zh" ? "EN" : "中文";
  render();
}

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    filter = button.dataset.filter;
    document.querySelectorAll(".filter").forEach((item) => item.classList.toggle("is-active", item === button));
    render();
  });
});

searchInput.addEventListener("input", render);
langToggle.addEventListener("click", () => {
  language = language === "zh" ? "en" : "zh";
  applyLanguage();
});

applyLanguage();
