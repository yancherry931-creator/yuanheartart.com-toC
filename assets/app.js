const menuButton = document.querySelector(".menu-button");
const mobileNav = document.querySelector(".mobile-nav");

if (menuButton && mobileNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

const languageSelect = document.querySelector(".language-select");
const supportedLanguages = ["en", "fr", "de", "es", "zh"];
const originalTitle = document.title;
const originalDescriptions = new WeakMap();
const originalTextNodes = new WeakMap();
const originalAttributes = new WeakMap();

const translations = {
  fr: {
    "Hand-Painted Oil Paintings & Custom Canvas Art | Yuan Heart Art": "Peintures a l'huile faites main et art sur toile sur mesure | Yuan Heart Art",
    "Contact | Yuan Heart Art Oil Art Trade": "Contact | Yuan Heart Art",
    "Shop Hand-Painted Oil Paintings | Yuan Heart Art": "Acheter des peintures a l'huile faites main | Yuan Heart Art",
    "Custom Oil Painting From Photo | Yuan Heart Art": "Peinture a l'huile sur mesure d'apres photo | Yuan Heart Art",
    "FAQ | Custom Oil Paintings and Wholesale Art | Yuan Heart Art": "FAQ | Peintures sur mesure et art en gros | Yuan Heart Art",
    "Home": "Accueil",
    "Shop": "Boutique",
    "Custom": "Sur mesure",
    "Custom Painting": "Peinture sur mesure",
    "Wholesale": "Gros",
    "Process": "Processus",
    "About": "A propos",
    "Contact": "Contact",
    "Request Quote": "Demander un devis",
    "Explore Artwork": "Voir les oeuvres",
    "Start a Custom Painting": "Commencer une commande",
    "Send Your Brief": "Envoyer votre brief",
    "Contact Irist": "Contacter Irist",
    "View Shop": "Voir la boutique",
    "View Collection": "Voir la collection",
    "Request Quote": "Demander un devis",
    "Contact Us": "Nous contacter",
    "Read Our Story": "Lire notre histoire",
    "Read full FAQ": "Lire toute la FAQ",
    "Quick links": "Liens rapides",
    "Contact details": "Coordonnees",
    "Name": "Nom",
    "Email": "E-mail",
    "Phone": "Telephone",
    "Message": "Message",
    "Submit Brief": "Envoyer le brief",
    "Your name": "Votre nom",
    "Share artwork type, size, quantity, style references, target budget, and timing.": "Indiquez le type d'oeuvre, la taille, la quantite, les references de style, le budget et le calendrier.",
    "Hand-painted oil paintings made by skilled artists": "Peintures a l'huile faites main par des artistes qualifies",
    "Custom canvas art for refined interiors, galleries, and public spaces": "Art sur toile sur mesure pour interieurs raffines, galeries et espaces publics",
    "Yuan Heart Art supplies hand-painted oil paintings, printed oil art, and custom artwork programs for Western home decor buyers, interior designers, museums, exhibition venues, hotels, and public art spaces.": "Yuan Heart Art fournit des peintures a l'huile faites main, de l'art imprime et des programmes artistiques sur mesure pour la decoration occidentale, les architectes d'interieur, musees, hotels et espaces publics.",
    "Putian Oil Painting Association partner": "Partenaire de l'association de peinture a l'huile de Putian",
    "Direct artist access": "Acces direct aux artistes",
    "Custom sizes and colors": "Tailles et couleurs sur mesure",
    "Wholesale and project supply": "Approvisionnement en gros et projets",
    "Core strengths": "Forces cles",
    "Art quality, trade reliability, and project clarity in one partner": "Qualite artistique, fiabilite commerciale et clarte projet",
    "Shop by style": "Choisir par style",
    "Oil painting collections for Western interiors": "Collections de peintures a l'huile pour interieurs occidentaux",
    "Custom workflow": "Flux de commande sur mesure",
    "From reference image to finished canvas": "De l'image de reference a la toile terminee",
    "Wholesale and trade": "Gros et professionnels",
    "Reliable art supply for designers, galleries, hotels, and decor brands": "Approvisionnement fiable pour designers, galeries, hotels et marques deco",
    "Buyer questions": "Questions d'acheteurs",
    "Quick answers before you request a quote": "Reponses rapides avant le devis",
    "Tell us about your space, artwork brief, and sourcing goals": "Parlez-nous de votre espace, de votre brief et de vos objectifs",
    "Hand-painted oil paintings and custom-ready canvas art": "Peintures a l'huile faites main et toiles personnalisables",
    "Custom oil paintings from photos, references, and room concepts": "Peintures a l'huile sur mesure depuis photos, references et concepts d'interieur",
    "Answers for custom oil painting and wholesale artwork buyers": "Reponses pour acheteurs de peintures sur mesure et en gros"
  },
  de: {
    "Hand-Painted Oil Paintings & Custom Canvas Art | Yuan Heart Art": "Handgemalte Oelgemaelde und massgefertigte Leinwandkunst | Yuan Heart Art",
    "Contact | Yuan Heart Art Oil Art Trade": "Kontakt | Yuan Heart Art",
    "Shop Hand-Painted Oil Paintings | Yuan Heart Art": "Handgemalte Oelgemaelde kaufen | Yuan Heart Art",
    "Custom Oil Painting From Photo | Yuan Heart Art": "Oelgemaelde nach Foto | Yuan Heart Art",
    "FAQ | Custom Oil Paintings and Wholesale Art | Yuan Heart Art": "FAQ | Massgemaelde und Kunst im Grosshandel | Yuan Heart Art",
    "Home": "Start",
    "Shop": "Shop",
    "Custom": "Massarbeit",
    "Custom Painting": "Massgemaelde",
    "Wholesale": "Grosshandel",
    "Process": "Prozess",
    "About": "Ueber uns",
    "Contact": "Kontakt",
    "Request Quote": "Angebot anfragen",
    "Explore Artwork": "Kunst ansehen",
    "Start a Custom Painting": "Massgemaelde starten",
    "Send Your Brief": "Briefing senden",
    "Contact Irist": "Irist kontaktieren",
    "View Shop": "Shop ansehen",
    "View Collection": "Kollektion ansehen",
    "Contact Us": "Kontakt aufnehmen",
    "Read Our Story": "Unsere Geschichte",
    "Read full FAQ": "FAQ lesen",
    "Quick links": "Schnelllinks",
    "Contact details": "Kontaktdaten",
    "Name": "Name",
    "Email": "E-Mail",
    "Phone": "Telefon",
    "Message": "Nachricht",
    "Submit Brief": "Briefing senden",
    "Your name": "Ihr Name",
    "Share artwork type, size, quantity, style references, target budget, and timing.": "Teilen Sie Kunsttyp, Groesse, Menge, Stilreferenzen, Budget und Zeitplan mit.",
    "Hand-painted oil paintings made by skilled artists": "Handgemalte Oelgemaelde von erfahrenen Kuenstlern",
    "Custom canvas art for refined interiors, galleries, and public spaces": "Massgefertigte Leinwandkunst fuer anspruchsvolle Innenraeume, Galerien und oeffentliche Raeume",
    "Yuan Heart Art supplies hand-painted oil paintings, printed oil art, and custom artwork programs for Western home decor buyers, interior designers, museums, exhibition venues, hotels, and public art spaces.": "Yuan Heart Art liefert handgemalte Oelgemaelde, Kunstdrucke und massgeschneiderte Kunstprogramme fuer westliche Einrichter, Designer, Museen, Hotels und oeffentliche Raeume.",
    "Putian Oil Painting Association partner": "Partner der Putian Oil Painting Association",
    "Direct artist access": "Direkter Zugang zu Kuenstlern",
    "Custom sizes and colors": "Massgroessen und Farben",
    "Wholesale and project supply": "Grosshandel und Projektlieferung",
    "Core strengths": "Kernstaerken",
    "Art quality, trade reliability, and project clarity in one partner": "Kunstqualitaet, Zuverlaessigkeit und klare Projektabwicklung",
    "Shop by style": "Nach Stil kaufen",
    "Oil painting collections for Western interiors": "Oelgemaelde-Kollektionen fuer westliche Innenraeume",
    "Custom workflow": "Ablauf fuer Massarbeiten",
    "From reference image to finished canvas": "Vom Referenzbild zur fertigen Leinwand",
    "Wholesale and trade": "Grosshandel und Handel",
    "Reliable art supply for designers, galleries, hotels, and decor brands": "Zuverlaessige Kunstlieferung fuer Designer, Galerien, Hotels und Dekormarken",
    "Buyer questions": "Kaeuferfragen",
    "Quick answers before you request a quote": "Kurze Antworten vor der Anfrage",
    "Tell us about your space, artwork brief, and sourcing goals": "Beschreiben Sie Raum, Kunstbriefing und Beschaffungsziel",
    "Hand-painted oil paintings and custom-ready canvas art": "Handgemalte Oelgemaelde und anpassbare Leinwandkunst",
    "Custom oil paintings from photos, references, and room concepts": "Massgefertigte Oelgemaelde nach Fotos, Referenzen und Raumkonzepten",
    "Answers for custom oil painting and wholesale artwork buyers": "Antworten fuer Kaeufer von Massgemaelden und Grosshandelskunst"
  },
  es: {
    "Hand-Painted Oil Paintings & Custom Canvas Art | Yuan Heart Art": "Oleos pintados a mano y arte en lienzo personalizado | Yuan Heart Art",
    "Contact | Yuan Heart Art Oil Art Trade": "Contacto | Yuan Heart Art",
    "Shop Hand-Painted Oil Paintings | Yuan Heart Art": "Comprar oleos pintados a mano | Yuan Heart Art",
    "Custom Oil Painting From Photo | Yuan Heart Art": "Oleo personalizado desde foto | Yuan Heart Art",
    "FAQ | Custom Oil Paintings and Wholesale Art | Yuan Heart Art": "FAQ | Oleos personalizados y arte al por mayor | Yuan Heart Art",
    "Home": "Inicio",
    "Shop": "Tienda",
    "Custom": "A medida",
    "Custom Painting": "Pintura a medida",
    "Wholesale": "Mayorista",
    "Process": "Proceso",
    "About": "Nosotros",
    "Contact": "Contacto",
    "Request Quote": "Solicitar cotizacion",
    "Explore Artwork": "Ver obras",
    "Start a Custom Painting": "Iniciar pedido a medida",
    "Send Your Brief": "Enviar briefing",
    "Contact Irist": "Contactar a Irist",
    "View Shop": "Ver tienda",
    "View Collection": "Ver coleccion",
    "Contact Us": "Contactanos",
    "Read Our Story": "Leer historia",
    "Read full FAQ": "Leer FAQ",
    "Quick links": "Enlaces rapidos",
    "Contact details": "Datos de contacto",
    "Name": "Nombre",
    "Email": "Email",
    "Phone": "Telefono",
    "Message": "Mensaje",
    "Submit Brief": "Enviar briefing",
    "Your name": "Tu nombre",
    "Share artwork type, size, quantity, style references, target budget, and timing.": "Comparte tipo de obra, tamano, cantidad, referencias de estilo, presupuesto y plazo.",
    "Hand-painted oil paintings made by skilled artists": "Oleos pintados a mano por artistas expertos",
    "Custom canvas art for refined interiors, galleries, and public spaces": "Arte en lienzo personalizado para interiores elegantes, galerias y espacios publicos",
    "Yuan Heart Art supplies hand-painted oil paintings, printed oil art, and custom artwork programs for Western home decor buyers, interior designers, museums, exhibition venues, hotels, and public art spaces.": "Yuan Heart Art suministra oleos pintados a mano, arte impreso y programas artisticos personalizados para compradores de decoracion, interioristas, museos, hoteles y espacios publicos.",
    "Putian Oil Painting Association partner": "Socio de la Asociacion de Pintura al Oleo de Putian",
    "Direct artist access": "Acceso directo a artistas",
    "Custom sizes and colors": "Tamanos y colores a medida",
    "Wholesale and project supply": "Suministro mayorista y por proyecto",
    "Core strengths": "Fortalezas clave",
    "Art quality, trade reliability, and project clarity in one partner": "Calidad artistica, fiabilidad comercial y claridad de proyecto",
    "Shop by style": "Comprar por estilo",
    "Oil painting collections for Western interiors": "Colecciones de oleos para interiores occidentales",
    "Custom workflow": "Flujo a medida",
    "From reference image to finished canvas": "De la referencia al lienzo terminado",
    "Wholesale and trade": "Mayorista y trade",
    "Reliable art supply for designers, galleries, hotels, and decor brands": "Suministro fiable para disenadores, galerias, hoteles y marcas de decoracion",
    "Buyer questions": "Preguntas de compradores",
    "Quick answers before you request a quote": "Respuestas rapidas antes de cotizar",
    "Tell us about your space, artwork brief, and sourcing goals": "Cuentanos sobre tu espacio, briefing y objetivos",
    "Hand-painted oil paintings and custom-ready canvas art": "Oleos pintados a mano y lienzos listos para personalizar",
    "Custom oil paintings from photos, references, and room concepts": "Oleos personalizados desde fotos, referencias y conceptos de interior",
    "Answers for custom oil painting and wholesale artwork buyers": "Respuestas para compradores de oleos personalizados y al por mayor"
  },
  zh: {
    "Hand-Painted Oil Paintings & Custom Canvas Art | Yuan Heart Art": "手绘油画与定制装饰画 | Yuan Heart Art",
    "Contact | Yuan Heart Art Oil Art Trade": "联系我们 | Yuan Heart Art",
    "Shop Hand-Painted Oil Paintings | Yuan Heart Art": "手绘油画作品 | Yuan Heart Art",
    "Custom Oil Painting From Photo | Yuan Heart Art": "照片定制手绘油画 | Yuan Heart Art",
    "FAQ | Custom Oil Paintings and Wholesale Art | Yuan Heart Art": "常见问题 | 定制油画与批发艺术品 | Yuan Heart Art",
    "Home": "首页",
    "Shop": "作品",
    "Custom": "定制",
    "Custom Painting": "定制油画",
    "Wholesale": "批发",
    "Process": "流程",
    "About": "关于",
    "Contact": "联系",
    "Request Quote": "获取报价",
    "Explore Artwork": "浏览作品",
    "Start a Custom Painting": "开始定制油画",
    "Send Your Brief": "发送需求",
    "Contact Irist": "联系 Irist",
    "View Shop": "查看作品",
    "View Collection": "查看系列",
    "Contact Us": "联系我们",
    "Read Our Story": "了解我们",
    "Read full FAQ": "查看完整 FAQ",
    "Quick links": "快速链接",
    "Contact details": "联系方式",
    "Name": "姓名",
    "Email": "邮箱",
    "Phone": "电话",
    "Message": "留言",
    "Submit Brief": "提交需求",
    "Your name": "您的姓名",
    "Share artwork type, size, quantity, style references, target budget, and timing.": "请填写画作类型、尺寸、数量、风格参考、预算和时间要求。",
    "Hand-painted oil paintings made by skilled artists": "由专业画师创作的手绘油画",
    "Custom canvas art for refined interiors, galleries, and public spaces": "为高端家居、画廊与公共空间定制画作",
    "Yuan Heart Art supplies hand-painted oil paintings, printed oil art, and custom artwork programs for Western home decor buyers, interior designers, museums, exhibition venues, hotels, and public art spaces.": "Yuan Heart Art 为欧美家装买家、室内设计师、博物馆、展览空间、酒店和公共艺术空间提供手绘油画、印刷油画与定制艺术方案。",
    "Putian Oil Painting Association partner": "莆田市油画协会合作公司",
    "Direct artist access": "一手画师资源",
    "Custom sizes and colors": "尺寸与色彩可定制",
    "Wholesale and project supply": "批发与项目供应",
    "Core strengths": "核心优势",
    "Art quality, trade reliability, and project clarity in one partner": "品质、交付与项目沟通兼具",
    "Shop by style": "按风格浏览",
    "Oil painting collections for Western interiors": "适合欧美空间的油画系列",
    "Custom workflow": "定制流程",
    "From reference image to finished canvas": "从参考图到完成画作",
    "Wholesale and trade": "批发与贸易合作",
    "Reliable art supply for designers, galleries, hotels, and decor brands": "为设计师、画廊、酒店和家居品牌提供稳定艺术品供应",
    "Buyer questions": "买家问题",
    "Quick answers before you request a quote": "报价前的常见解答",
    "Tell us about your space, artwork brief, and sourcing goals": "告诉我们您的空间、画作需求和采购目标",
    "Hand-painted oil paintings and custom-ready canvas art": "手绘油画与可定制画作",
    "Custom oil paintings from photos, references, and room concepts": "根据照片、参考图和空间概念定制油画",
    "Answers for custom oil painting and wholesale artwork buyers": "定制油画与批发采购常见问题"
  }
};

const attributeTranslations = {
  placeholder: translations,
  "aria-label": translations,
  alt: translations
};

function getRequestedLanguage() {
  const params = new URLSearchParams(window.location.search);
  const requested = params.get("lang") || localStorage.getItem("yuanheartart-language") || "en";
  return supportedLanguages.includes(requested) ? requested : "en";
}

function preserveSpacing(original, translated) {
  const leading = original.match(/^\s*/)[0];
  const trailing = original.match(/\s*$/)[0];
  return `${leading}${translated}${trailing}`;
}

function translateTextNodes(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      const parent = node.parentElement;
      if (!parent || ["SCRIPT", "STYLE", "NOSCRIPT", "TEXTAREA"].includes(parent.tagName)) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  const dictionary = translations[language] || {};
  let node = walker.nextNode();
  while (node) {
    if (!originalTextNodes.has(node)) originalTextNodes.set(node, node.nodeValue);
    const original = originalTextNodes.get(node);
    const key = original.trim();
    node.nodeValue = language === "en" || !dictionary[key]
      ? original
      : preserveSpacing(original, dictionary[key]);
    node = walker.nextNode();
  }
}

function translateAttributes(language) {
  const dictionary = translations[language] || {};
  document.querySelectorAll("[placeholder], [aria-label], img[alt]").forEach((element) => {
    ["placeholder", "aria-label", "alt"].forEach((attribute) => {
      if (!element.hasAttribute(attribute)) return;
      const key = `${attribute}:${element.getAttribute(attribute)}`;
      if (!originalAttributes.has(element)) originalAttributes.set(element, {});
      const originals = originalAttributes.get(element);
      if (!originals[attribute]) originals[attribute] = element.getAttribute(attribute);
      const original = originals[attribute];
      element.setAttribute(attribute, language === "en" || !dictionary[original] ? original : dictionary[original]);
    });
  });
}

function syncLanguageLinks(language) {
  document.querySelectorAll('a[href$=".html"], a[href="index.html"]').forEach((link) => {
    const original = link.getAttribute("data-original-href") || link.getAttribute("href");
    link.setAttribute("data-original-href", original);
    if (language === "en") {
      link.setAttribute("href", original);
      return;
    }
    const url = new URL(original, window.location.href);
    url.searchParams.set("lang", language);
    link.setAttribute("href", `${url.pathname.split("/").pop()}${url.search}`);
  });
}

function updateLanguageUrl(language) {
  const url = new URL(window.location.href);
  if (language === "en") {
    url.searchParams.delete("lang");
  } else {
    url.searchParams.set("lang", language);
  }
  window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
}

function applyLanguage(language) {
  document.documentElement.setAttribute("lang", language === "zh" ? "zh-CN" : language);
  document.title = language === "en" || !translations[language][originalTitle]
    ? originalTitle
    : translations[language][originalTitle];
  translateTextNodes(language);
  translateAttributes(language);
  syncLanguageLinks(language);
  if (languageSelect) languageSelect.value = language;
}

let activeLanguage = getRequestedLanguage();
applyLanguage(activeLanguage);

if (languageSelect) {
  languageSelect.addEventListener("change", () => {
    activeLanguage = languageSelect.value;
    localStorage.setItem("yuanheartart-language", activeLanguage);
    updateLanguageUrl(activeLanguage);
    applyLanguage(activeLanguage);
  });
}

document.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");
    document.querySelectorAll("[data-filter]").forEach((item) => {
      item.classList.toggle("selected", item === button);
    });
    document.querySelectorAll("[data-category]").forEach((card) => {
      card.style.display =
        filter === "All" || card.getAttribute("data-category") === filter
          ? ""
          : "none";
    });
  });
});

const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get("name") || "";
    const email = formData.get("email") || "";
    const phone = formData.get("phone") || "";
    const message = formData.get("message") || "";
    const subject = encodeURIComponent("Artwork brief from yuanheartart.com");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nProject brief:\n${message}`
    );
    const note = contactForm.querySelector(".form-note");
    if (note) {
      note.classList.add("visible");
      note.innerHTML =
        'Your brief is ready. <a href="mailto:379500068@qq.com?subject=' +
        subject +
        "&body=" +
        body +
        '">Email Irist</a> or <a href="https://wa.me/8618235608457?text=' +
        body +
        '" target="_blank" rel="noreferrer">send it on WhatsApp</a>.';
    }
  });
}
