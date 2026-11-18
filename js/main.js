/* ===== Traducciones: español, inglés y francés ===== */
var I18N = {
  es: {
    skip: "Saltar al contenido", lang_label: "Idioma",
    nav_about: "Sobre mí", nav_projects: "Proyectos", nav_contact: "Contacto",
    hero_hello: "Hola, soy",
    hero_role: "Desarrollador Móvil",
    hero_lead: "Estudiante de Ingeniería en Tecnologías de la Información e Innovación Digital. Desarrollo aplicaciones móviles claras, funcionales y fáciles de usar.",
    hero_btn_projects: "Ver proyectos", hero_btn_cv: "Descargar CV (PDF)",
    photo_alt: "Fotografía de perfil",
    about_title: "Sobre mí",
    about_p1: "Soy estudiante de Ingeniería en Tecnologías de la Información e Innovación Digital con enfoque en el desarrollo de aplicaciones móviles. Me interesa crear aplicaciones claras y funcionales que resuelvan problemas reales.",
    about_p2: "Busco una oportunidad de prácticas profesionales para seguir aprendiendo y aportar en un equipo de desarrollo.",
    edu_title: "Formación académica", edu_degree: "Ingeniería en Tecnologías de la Información e Innovación Digital",
    lang_title: "Idiomas", lang_es: "Español", lvl_native: "Nativo",
    projects_title: "Proyectos", gitlab_text: "Mis proyectos están publicados en GitLab.", gitlab_btn: "Ver mi perfil de GitLab", p1_title: "Aplicación Unidad 1", p1_desc: "Proyecto académico de la Unidad 1.", p2_title: "Aplicación Unidad 2", p2_desc: "Proyecto académico de la Unidad 2.", gitlab_repo: "Ver en GitLab",
    contact_title: "Contacto",
    contact_lead: "Estos son mis perfiles profesionales.",
    footer: "Hecho con HTML, CSS y JavaScript.",
    menu: "Menú", theme: "Cambiar tema"
  },
  en: {
    skip: "Skip to content", lang_label: "Language",
    nav_about: "About", nav_projects: "Projects", nav_contact: "Contact",
    hero_hello: "Hi, I'm",
    hero_role: "Mobile Developer",
    hero_lead: "Information Technologies and Digital Innovation Engineering student. I develop clear, functional and easy-to-use mobile applications.",
    hero_btn_projects: "View projects", hero_btn_cv: "Download CV (PDF)",
    photo_alt: "Profile picture",
    about_title: "About me",
    about_p1: "I am an Information Technologies and Digital Innovation Engineering student focused on mobile app development. I enjoy building clear and functional applications that solve real problems.",
    about_p2: "I am looking for an internship to keep learning and contribute within a development team.",
    edu_title: "Education", edu_degree: "Engineering in Information Technologies and Digital Innovation",
    lang_title: "Languages", lang_es: "Spanish", lvl_native: "Native",
    projects_title: "Projects", gitlab_text: "My projects are published on GitLab.", gitlab_btn: "View my GitLab profile", p1_title: "Application Unit 1", p1_desc: "Academic project for Unit 1.", p2_title: "Application Unit 2", p2_desc: "Academic project for Unit 2.", gitlab_repo: "View on GitLab",
    contact_title: "Contact",
    contact_lead: "These are my professional profiles.",
    footer: "Built with HTML, CSS and JavaScript.",
    menu: "Menu", theme: "Toggle theme"
  },
  fr: {
    skip: "Aller au contenu", lang_label: "Langue",
    nav_about: "À propos", nav_projects: "Projets", nav_contact: "Contact",
    hero_hello: "Bonjour, je suis",
    hero_role: "Développeur mobile",
    hero_lead: "Étudiant en ingénierie des technologies de l'information et de l'innovation numérique. Je développe des applications mobiles claires, fonctionnelles et faciles à utiliser.",
    hero_btn_projects: "Voir les projets", hero_btn_cv: "Télécharger le CV (PDF)",
    photo_alt: "Photo de profil",
    about_title: "À propos de moi",
    about_p1: "Je suis étudiant en ingénierie des technologies de l'information et de l'innovation numérique, spécialisé dans le développement d'applications mobiles. J'aime concevoir des applications claires et fonctionnelles qui résolvent de vrais problèmes.",
    about_p2: "Je recherche un stage pour continuer à apprendre et contribuer au sein d'une équipe de développement.",
    edu_title: "Formation", edu_degree: "Ingénierie des technologies de l'information et de l'innovation numérique", 
    lang_title: "Langues", lang_es: "Espagnol", lvl_native: "Langue maternelle",
    projects_title: "Projets", gitlab_text: "Mes projets sont publiés sur GitLab.", gitlab_btn: "Voir mon profil GitLab", p1_title: "Application Unité 1", p1_desc: "Projet académique de l'Unité 1.", p2_title: "Application Unité 2", p2_desc: "Projet académique de l'Unité 2.", gitlab_repo: "Voir sur GitLab",
    contact_title: "Contact",
    contact_lead: "Voici mes profils professionnels.",
    footer: "Réalisé avec HTML, CSS et JavaScript.",
    menu: "Menu", theme: "Changer de thème"
  }
};

var root = document.documentElement;
var langSelect = document.getElementById("lang");
var themeBtn = document.getElementById("themeBtn");
var menuBtn = document.getElementById("menuBtn");
var nav = document.getElementById("nav");

function store(key, value) { try { localStorage.setItem(key, value); } catch (e) {} }
function read(key) { try { return localStorage.getItem(key); } catch (e) { return null; } }

/* ----- Idioma ----- */
function setLanguage(lang) {
  var dict = I18N[lang] || I18N.es;
  root.setAttribute("lang", lang);
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    var key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
    var key = el.getAttribute("data-i18n-alt");
    if (dict[key]) el.setAttribute("alt", dict[key]);
  });
  menuBtn.setAttribute("aria-label", dict.menu);
  themeBtn.setAttribute("aria-label", dict.theme);
  themeBtn.setAttribute("title", dict.theme);
  langSelect.value = lang;
  store("lang", lang);
}

var savedLang = read("lang");
if (!savedLang) {
  var browser = (navigator.language || "es").slice(0, 2);
  savedLang = I18N[browser] ? browser : "es";
}
setLanguage(savedLang);
langSelect.addEventListener("change", function () { setLanguage(langSelect.value); });

/* ----- Tema claro / oscuro ----- */
themeBtn.addEventListener("click", function () {
  var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  store("theme", next);
});

/* ----- Menú móvil ----- */
menuBtn.addEventListener("click", function () {
  var open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("ul a").forEach(function (a) {
  a.addEventListener("click", function () {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
