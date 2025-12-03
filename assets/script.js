
const TEXT = {
  ua: {
    nav: {resume: "Резюме", security: "Економічна безпека країни", threats: "Загрози та протидія"},
    resume: {
      title: "Резюме",
      name: "Вероніка Ситюк",
      contact: "nikasytiuk2@gmail.com · +380 97 751 3585",
      about: "Я — студентка бакалаврату Державного торговельно-економічного університету, спеціальність міжнародні відносини. Маю досвід волонтерської роботи, проєктної діяльності та організації освітніх подій. Розвиваю навички публічного виступу, організації та лідерства.",
      education_title: "Освіта",
      education_items: ["Velyka Dymerka Lyceum — повна середня освіта (золота медаль)","Державний університет торгівлі та економіки — бакалавр, міжнародні відносини (навчаюсь)"],
      experience_title: "Досвід",
      experience_items: ["NGO \"Created To Act\" — волонтерська діяльність (розповсюдження гуманітарної допомоги, збір коштів)","Ведуча шкільних заходів — організація та модерація подій"],
      skills_title: "Навички",
      skills_items: ["Публічні виступи","Проєктна робота","Креативне письмо","Англійська (B2), Німецька (B1)"],
      achievements_title: "Досягнення",
      achievements_items: ["Золота медаль за академічні успіхи","Участь у програмі UpShift (UNICEF) — проєкт для дітей з ООП"]
    },
    security: {
      title: "Економічна та демографічна безпека Люксембургу — коротко",
      summary: "За аналізований період (2014–2024) демографічні індикатори Люксембургу показують високий рівень безпеки: очікувана тривалість життя була на оптимальному рівні, дитяча смертність — низька, демографічне навантаження залишалося в задовільних межах. Загальна тенденція — позитивна: тривалість життя зростає, дитяча смертність знижується.",
      indicators_title: "Ключові показники (вибірка)",
      lifetime_label: "Очікувана тривалість життя (середнє)",
      lifetime_value: "82.7 років (2015–2024)",
      childmort_label: "Дитяча смертність (на 1 тис. народжених)",
      childmort_value: "3.7 (2014–2023)",
      dep_label: "Демографічне навантаження (середнє)",
      dep_value: "44.14 (2015–2024)",
      note: "Висновок: демографічна безпека — оптимальна/задовільна; спостерігається загальна позитивна тенденція."
    },
    threats: {
      title: "Загрози та методи протидії",
      threats_title: "5 основних загроз",
      threats_items: ["Енергетична залежність","Корупція у ключових секторах","Трудова міграція та дефіцит кадрів","Фінансова вразливість (борг, шоки)","Кліматичні ризики та вплив на агросектор"],
      measures_title: "5 методів протидії",
      measures_items: ["Диверсифікація енергетичних постачань і розвиток ВДЕ","Посилення антикорупційних інституцій і прозорості","Політика підтримки повернення та мотивації працівників","Резервні фонди і стійкість фінансової системи","Зелена трансформація сільського господарства і адаптація"]
    },
    footer: "© Veronika Sytiuk — сайт підготовлений як навчальний проєкт. Можна завантажити з GitHub."
  },
  en: {
    nav: {resume: "Resume", security: "Economic security", threats: "Threats & Response"},
    resume: {
      title: "Resume",
      name: "Veronika Sytiuk",
      contact: "nikasytiuk2@gmail.com · +380 97 751 3585",
      about: "I am a bachelor student at State University of Trade and Economics (International Relations). Experienced in volunteering, projects and event organization. Skills in public speaking, project work and leadership.",
      education_title: "Education",
      education_items: ["Velyka Dymerka Lyceum — secondary education (gold medal)","State University of Trade and Economics — Bachelor, International Relations (ongoing)"],
      experience_title: "Experience",
      experience_items: ["NGO \"Created To Act\" — volunteer work (humanitarian distribution, fundraising)","Host at school events — organizing and moderating events"],
      skills_title: "Skills",
      skills_items: ["Public speaking","Project management","Creative writing","English (B2), German (B1)"],
      achievements_title: "Achievements",
      achievements_items: ["Gold Medal for academic excellence","Participation in UpShift (UNICEF) — project for children with SEN"]
    },
    security: {
      title: "Demographic security of Luxembourg — short",
      summary: "Over the analyzed period (2014–2024) demographic indicators of Luxembourg show high levels of security: life expectancy was optimal, child mortality low, and dependency ratios remained satisfactory. Overall trend is positive: life expectancy rising, child mortality falling.",
      indicators_title: "Key indicators (sample)",
      lifetime_label: "Life expectancy (avg)",
      lifetime_value: "82.7 years (2015–2024)",
      childmort_label: "Infant mortality (per 1,000 births)",
      childmort_value: "3.7 (2014–2023)",
      dep_label: "Dependency ratio (avg)",
      dep_value: "44.14 (2015–2024)",
      note: "Conclusion: demographic security is optimal/satisfactory; positive trend observed."
    },
    threats: {
      title: "Threats & countermeasures",
      threats_title: "Top 5 threats",
      threats_items: ["Energy dependence","Corruption in key sectors","Labor migration and skill shortages","Financial vulnerability (debt, shocks)","Climate risks affecting agriculture"],
      measures_title: "Top 5 countermeasures",
      measures_items: ["Diversify energy supplies & develop renewables","Strengthen anti-corruption institutions and transparency","Policies to retain and attract workers","Reserve funds & financial system resilience","Green transformation of agriculture and adaptation"]
    },
    footer: "© Veronika Sytiuk — educational project site. Ready to upload to GitHub."
  }
};

function $(sel){return document.querySelector(sel)}
function setText(selector, text){ const el=$(selector); if(el) el.innerHTML=text }

let lang = localStorage.getItem("site_lang") || "ua";

function applyLang(){
  const t = TEXT[lang];
  // nav
  setText("#nav-resume", t.nav.resume);
  setText("#nav-security", t.nav.security);
  setText("#nav-threats", t.nav.threats);
  // resume
  setText("#resume-title", t.resume.title);
  setText("#name", t.resume.name);
  setText("#contact", t.resume.contact);
  setText("#about", t.resume.about);
  setText("#edu-title", t.resume.education_title);
  setText("#exp-title", t.resume.experience_title);
  setText("#skills-title", t.resume.skills_title);
  setText("#ach-title", t.resume.achievements_title);
  // lists
  const fillList = (id, arr) => {
    const node = $(id);
    if(!node) return;
    node.innerHTML = arr.map(x=>`<li>${x}</li>`).join("");
  };
  fillList("#edu-list", t.resume.education_items);
  fillList("#exp-list", t.resume.experience_items);
  fillList("#skills-list", t.resume.skills_items);
  fillList("#ach-list", t.resume.achievements_items);

  // security
  setText("#security-title", t.security.title);
  setText("#security-summary", t.security.summary);
  setText("#ind-title", t.security.indicators_title);
  setText("#life-label", t.security.lifetime_label);
  setText("#life-value", t.security.lifetime_value);
  setText("#mort-label", t.security.childmort_label);
  setText("#mort-value", t.security.childmort_value);
  setText("#dep-label", t.security.dep_label);
  setText("#dep-value", t.security.dep_value);
  setText("#sec-note", t.security.note);

  // threats
  setText("#threats-title", t.threats.title);
  setText("#threats-head", t.threats.threats_title);
  fillList("#threats-list", t.threats.threats_items);
  setText("#measures-head", t.threats.measures_title);
  fillList("#measures-list", t.threats.measures_items);

  // footer
  setText("#site-footer", t.footer);

  // update active class on lang buttons
  document.querySelectorAll(".lang-btn").forEach(b=>{
    b.classList.toggle("active", b.dataset.lang===lang)
  });
}

document.addEventListener("DOMContentLoaded", ()=>{
  // nav links active handling
  document.querySelectorAll(".nav a").forEach(a=>{
    a.addEventListener("click", (e)=>{
      document.querySelectorAll(".nav a").forEach(x=>x.classList.remove("active"));
      a.classList.add("active");
    });
  });
  // language buttons
  document.querySelectorAll(".lang-btn").forEach(b=>{
    b.addEventListener("click", ()=>{
      lang = b.dataset.lang;
      localStorage.setItem("site_lang", lang);
      applyLang();
    });
  });
  // initial apply
  applyLang();

  // draw small sparkline-like charts for life expectancy and child mortality
  const life = [82.4,82.7,82.1,82.3,82.7,82.2,82.7,83,83.4,83.5];
  const mort = [2.8,2.8,3.8,3.2,4.3,4.7,4.5,3.1,3.5,4.3];
  drawSpark("#life-chart", life);
  drawSpark("#mort-chart", mort);
});

function drawSpark(sel, arr){
  const el = document.querySelector(sel);
  if(!el) return;
  const w = el.clientWidth || 400, h = el.clientHeight || 140;
  const max = Math.max(...arr), min = Math.min(...arr);
  const points = arr.map((v,i)=>{
    const x = (i/(arr.length-1))*w;
    const y = h - ((v-min)/(max-min || 1))*h;
    return `${x},${y}`;
  }).join(" ");
  el.innerHTML = `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" width="100%" height="100%"><polyline points="${points}" fill="none" stroke="white" stroke-opacity="0.85" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
}
