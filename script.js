/* =========================================================================
   НАСТРОЙКИ — заполните своими данными
   ========================================================================= */
const CONFIG = {
  telegram: "@Criptonius",            // без @  → ссылка t.me/username
  email: "avotiyaaa@gmail.com",        // ваш email
  phone: "+380734196070",           // в международном формате для ссылки tel:
  portfolio: "https://vanguar.github.io/",  // страница с вашими проектами (пусто "" — скрыть)
  // Access Key с https://web3forms.com (введите там свою почту → получите ключ).
  // Заявки будут приходить на ту почту, к которой привязан ключ. Это проще
  // всего: регистрация не нужна, ничего ставить не надо.
  web3formsKey: "8f02cc2b-cdfd-49db-ae30-f6b60585cfef",  // ключ Web3Forms → письмо на почту аккаунта
  // Альтернатива: endpoint Formspree или своего бэкенда.
  // GitHub Pages — статика, поэтому форму обрабатывает сторонний сервис.
  // Если оба пустые "" — заявка уйдёт письмом/в Telegram (fallback).
  formEndpoint: ""                 // напр. "https://formspree.io/f/xxxxxx"
};

/* =========================================================================
   ПЕРЕВОДЫ
   ========================================================================= */
const I18N = {
  ru: {
    "meta.title": "Автоматизация бизнес-процессов — AI, боты, интеграции",
    "meta.desc": "Помогаю автоматизировать рутину: обработка заявок, Telegram-боты, интеграции CRM, Google Sheets и API, отчёты и MVP.",
    "nav.services": "Услуги", "nav.approach": "Подход", "nav.skills": "Навыки", "nav.contacts": "Контакты",
    "header.cta": "Написать",
    "badge": "AI, боты, автоматизация",
    "hero.title1": "Автоматизация", "hero.title2": "бизнес-процессов",
    "hero.titleAccent": "без лишней сложности",
    "hero.lead": "Если у вас много ручной работы — заявки, таблицы, переписки, отчёты — помогу это упростить и автоматизировать.",
    "hero.ctaPrimary": "Обсудить задачу", "hero.ctaGhost": "Что я делаю",
    "dash.requests": "Заявки", "dash.conversion": "Конверсия", "dash.revenue": "Выручка", "dash.currency": " ₽",
    "services.eyebrow": "С чем могу помочь",
    "services.title": "Закрою рутину, которая съедает время",
    "srv1.title": "Обработка заявок и лидов",
    "srv1.text": "Приём, маршрутизация и хранение заявок без потерь и ручного копирования.",
    "srv2.title": "Telegram-боты и чат-боты",
    "srv2.text": "Боты для приёма заказов, уведомлений, поддержки и автоответов 24/7.",
    "srv3.title": "Интеграции CRM, Google Sheets и API",
    "srv3.text": "Связываю сервисы между собой, чтобы данные ходили автоматически.",
    "srv4.title": "Отчёты, уведомления и парсинг",
    "srv4.text": "Автоотчёты, оповещения о событиях и сбор данных с сайтов и сервисов.",
    "srv5.title": "MVP и внутренние инструменты",
    "srv5.text": "Быстрые прототипы и небольшие сервисы под конкретные задачи команды.",
    "srv6.title": "Не нашли свою задачу?",
    "srv6.text": "Опишите процесс — подскажу, можно ли его автоматизировать и как.",
    "srv6.link": "Обсудить →",
    "suitable.prefix": "Подходит для",
    "suitable.strong": "малого бизнеса, услуг, онлайн-проектов и продаж",
    "feat1.title": "Быстрый старт", "feat1.text": "Беру задачу в работу без долгих согласований.",
    "feat2.title": "По задаче, а не по шаблону", "feat2.text": "Решение под ваш процесс, а не универсальная коробка.",
    "feat3.title": "Без лишней теории", "feat3.text": "Сразу к результату — понятно и по делу.",
    "skills.eyebrow": "Навыки и проекты",
    "skills.title": "Технологии, на которых я работаю",
    "skills.lead": "Пишу на Python и JavaScript, делаю Telegram-ботов, интеграции с API и CRM, парсеры и AI-сценарии. Живые примеры — на странице с проектами.",
    "skills.tag.bots": "Telegram-боты", "skills.tag.crm": "CRM-интеграции",
    "skills.tag.parsing": "Парсинг данных", "skills.tag.ai": "AI / GPT",
    "skills.tag.automation": "Автоматизация",
    "skills.cta": "Смотреть проекты и навыки →",
    "contact.eyebrow": "Контакты", "contact.title": "Обсудим вашу задачу",
    "contact.lead": "Опишите задачу — предложу понятный вариант решения. Отвечаю обычно в течение дня.",
    "ci.telegram": "Telegram", "ci.email": "Email", "ci.phone": "Телефон", "ci.portfolio": "Мои проекты",
    "form.title": "Оставить заявку",
    "form.nameLabel": "Как к вам обращаться", "form.namePh": "Имя",
    "form.contactLabel": "Контакт для связи", "form.contactPh": "Telegram, email или телефон",
    "form.topicLabel": "Тип задачи",
    "topic.1": "Обработка заявок и лидов", "topic.2": "Telegram-бот / чат-бот",
    "topic.3": "Интеграции CRM / Sheets / API", "topic.4": "Отчёты, уведомления, парсинг",
    "topic.5": "MVP / внутренний инструмент", "topic.6": "Другое",
    "form.msgLabel": "Опишите задачу",
    "form.msgPh": "Что хочется автоматизировать и где сейчас теряется время",
    "form.submit": "Отправить заявку",
    "form.note": "Нажимая кнопку, вы соглашаетесь на обработку контактных данных.",
    "err.name": "Введите имя", "err.contact": "Укажите, как с вами связаться",
    "err.message": "Опишите задачу хотя бы парой слов",
    "toast.sending": "Отправляем…", "toast.success": "Заявка отправлена! Скоро отвечу.",
    "toast.error": "Не удалось отправить форму. Напишите, пожалуйста, в Telegram или на email — контакты слева.",
    "btn.sending": "Отправляем…",
    "cta.text": "Напишите в личные сообщения",
    "cta.sub": "Опишите задачу — предложу понятный вариант решения",
    "footer.copy": "AI, боты, автоматизация · Сделано без лишней сложности"
  },
  uk: {
    "meta.title": "Автоматизація бізнес-процесів — AI, боти, інтеграції",
    "meta.desc": "Допомагаю автоматизувати рутину: обробка заявок, Telegram-боти, інтеграції CRM, Google Sheets та API, звіти та MVP.",
    "nav.services": "Послуги", "nav.approach": "Підхід", "nav.skills": "Навички", "nav.contacts": "Контакти",
    "header.cta": "Написати",
    "badge": "AI, боти, автоматизація",
    "hero.title1": "Автоматизація", "hero.title2": "бізнес-процесів",
    "hero.titleAccent": "без зайвої складності",
    "hero.lead": "Якщо у вас багато ручної роботи — заявки, таблиці, листування, звіти — допоможу це спростити та автоматизувати.",
    "hero.ctaPrimary": "Обговорити завдання", "hero.ctaGhost": "Що я роблю",
    "dash.requests": "Заявки", "dash.conversion": "Конверсія", "dash.revenue": "Виторг", "dash.currency": " ₴",
    "services.eyebrow": "З чим можу допомогти",
    "services.title": "Закрию рутину, яка з'їдає час",
    "srv1.title": "Обробка заявок і лідів",
    "srv1.text": "Приймання, маршрутизація та зберігання заявок без втрат і ручного копіювання.",
    "srv2.title": "Telegram-боти та чат-боти",
    "srv2.text": "Боти для приймання замовлень, сповіщень, підтримки та автовідповідей 24/7.",
    "srv3.title": "Інтеграції CRM, Google Sheets та API",
    "srv3.text": "З'єдную сервіси між собою, щоб дані рухалися автоматично.",
    "srv4.title": "Звіти, сповіщення та парсинг",
    "srv4.text": "Автозвіти, сповіщення про події та збір даних із сайтів і сервісів.",
    "srv5.title": "MVP та внутрішні інструменти",
    "srv5.text": "Швидкі прототипи та невеликі сервіси під конкретні завдання команди.",
    "srv6.title": "Не знайшли своє завдання?",
    "srv6.text": "Опишіть процес — підкажу, чи можна його автоматизувати та як.",
    "srv6.link": "Обговорити →",
    "suitable.prefix": "Підходить для",
    "suitable.strong": "малого бізнесу, послуг, онлайн-проєктів і продажів",
    "feat1.title": "Швидкий старт", "feat1.text": "Беру завдання в роботу без довгих узгоджень.",
    "feat2.title": "За завданням, а не за шаблоном", "feat2.text": "Рішення під ваш процес, а не універсальна коробка.",
    "feat3.title": "Без зайвої теорії", "feat3.text": "Одразу до результату — зрозуміло та по суті.",
    "skills.eyebrow": "Навички та проєкти",
    "skills.title": "Технології, на яких я працюю",
    "skills.lead": "Пишу на Python і JavaScript, роблю Telegram-ботів, інтеграції з API та CRM, парсери та AI-сценарії. Живі приклади — на сторінці з проєктами.",
    "skills.tag.bots": "Telegram-боти", "skills.tag.crm": "CRM-інтеграції",
    "skills.tag.parsing": "Парсинг даних", "skills.tag.ai": "AI / GPT",
    "skills.tag.automation": "Автоматизація",
    "skills.cta": "Дивитися проєкти та навички →",
    "contact.eyebrow": "Контакти", "contact.title": "Обговоримо ваше завдання",
    "contact.lead": "Опишіть завдання — запропоную зрозумілий варіант рішення. Відповідаю зазвичай протягом дня.",
    "ci.telegram": "Telegram", "ci.email": "Email", "ci.phone": "Телефон", "ci.portfolio": "Мої проєкти",
    "form.title": "Залишити заявку",
    "form.nameLabel": "Як до вас звертатися", "form.namePh": "Ім'я",
    "form.contactLabel": "Контакт для зв'язку", "form.contactPh": "Telegram, email або телефон",
    "form.topicLabel": "Тип завдання",
    "topic.1": "Обробка заявок і лідів", "topic.2": "Telegram-бот / чат-бот",
    "topic.3": "Інтеграції CRM / Sheets / API", "topic.4": "Звіти, сповіщення, парсинг",
    "topic.5": "MVP / внутрішній інструмент", "topic.6": "Інше",
    "form.msgLabel": "Опишіть завдання",
    "form.msgPh": "Що хочеться автоматизувати та де зараз втрачається час",
    "form.submit": "Надіслати заявку",
    "form.note": "Натискаючи кнопку, ви погоджуєтеся на обробку контактних даних.",
    "err.name": "Введіть ім'я", "err.contact": "Вкажіть, як з вами зв'язатися",
    "err.message": "Опишіть завдання хоча б кількома словами",
    "toast.sending": "Надсилаємо…", "toast.success": "Заявку надіслано! Невдовзі відповім.",
    "toast.error": "Не вдалося надіслати форму. Напишіть, будь ласка, у Telegram або на email — контакти ліворуч.",
    "btn.sending": "Надсилаємо…",
    "cta.text": "Напишіть в особисті повідомлення",
    "cta.sub": "Опишіть завдання — запропоную зрозумілий варіант рішення",
    "footer.copy": "AI, боти, автоматизація · Зроблено без зайвої складності"
  }
};

/* безопасный доступ к localStorage (может быть недоступен в песочнице) */
const store = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch {} }
};

let currentLang = "ru";

/* ---------- ПРИМЕНЕНИЕ ЯЗЫКА ---------- */
function applyLang(lang) {
  if (!I18N[lang]) lang = "ru";
  currentLang = lang;
  const dict = I18N[lang];

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const v = dict[el.getAttribute("data-i18n")];
    if (v != null) el.textContent = v;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const v = dict[el.getAttribute("data-i18n-placeholder")];
    if (v != null) el.placeholder = v;
  });

  document.documentElement.lang = lang === "uk" ? "uk" : "ru";
  document.title = dict["meta.title"];
  const md = document.getElementById("metaDesc");
  if (md) md.setAttribute("content", dict["meta.desc"]);

  document.querySelectorAll(".lang-btn").forEach(b =>
    b.classList.toggle("is-active", b.dataset.lang === lang));

  store.set("lang", lang);
}

/* ---------- ТЕМА ---------- */
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  store.set("theme", theme);
}

/* ---------- КОНТАКТЫ ---------- */
function setupContacts() {
  const tg = document.getElementById("contactTelegram");
  if (tg && CONFIG.telegram) {
    tg.href = "https://t.me/" + CONFIG.telegram.replace(/^@/, "");
    tg.querySelector(".ci-value").textContent = "@" + CONFIG.telegram.replace(/^@/, "");
  }
  const em = document.getElementById("contactEmail");
  if (em && CONFIG.email) {
    em.href = "mailto:" + CONFIG.email;
    em.querySelector(".ci-value").textContent = CONFIG.email;
  }
  const ph = document.getElementById("contactPhone");
  if (ph && CONFIG.phone) {
    ph.href = "tel:" + CONFIG.phone.replace(/[^+\d]/g, "");
    ph.querySelector(".ci-value").textContent = CONFIG.phone;
  }
  const pf = document.getElementById("contactPortfolio");
  if (pf) {
    if (CONFIG.portfolio) {
      pf.href = CONFIG.portfolio;
      pf.querySelector(".ci-value").textContent =
        CONFIG.portfolio.replace(/^https?:\/\//, "").replace(/\/$/, "");
    } else {
      pf.closest("li").remove();
    }
  }
}

/* ---------- ТОСТ ---------- */
let toastTimer;
function toast(msg, type = "") {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.className = "toast show " + type;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { t.className = "toast " + type; }, 4000);
}

/* ---------- ФОРМА ---------- */
function setupForm() {
  const form = document.getElementById("orderForm");
  if (!form) return;
  const btn = document.getElementById("submitBtn");

  const showError = (name, msg) => {
    const field = form.querySelector(`[name="${name}"]`).closest(".field");
    field.classList.toggle("invalid", !!msg);
    const err = form.querySelector(`.error[data-for="${name}"]`);
    if (err) err.textContent = msg || "";
  };

  form.querySelectorAll("input, textarea").forEach(el =>
    el.addEventListener("input", () => showError(el.name, "")));

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const d = I18N[currentLang];
    const data = {
      name: form.name.value.trim(),
      contact: form.contact.value.trim(),
      topic: form.topic.value,
      message: form.message.value.trim()
    };

    let ok = true;
    if (data.name.length < 2)      { showError("name", d["err.name"]); ok = false; }
    if (data.contact.length < 3)   { showError("contact", d["err.contact"]); ok = false; }
    if (data.message.length < 5)   { showError("message", d["err.message"]); ok = false; }
    if (!ok) return;

    const original = btn.textContent;
    btn.disabled = true;
    btn.textContent = d["btn.sending"];
    toast(d["toast.sending"]);

    // 1) Если задан ключ Web3Forms — отправляем письмо на вашу почту
    if (CONFIG.web3formsKey) {
      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Accept": "application/json", "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: CONFIG.web3formsKey,
            subject: "Заявка с сайта · " + data.topic,
            from_name: data.name,
            name: data.name,
            contact: data.contact,
            topic: data.topic,
            message: data.message
          })
        });
        const json = await res.json().catch(() => ({}));
        if (res.ok && json.success) {
          toast(d["toast.success"], "success");
          form.reset();
        } else { throw new Error(json.message || "bad status"); }
      } catch {
        toast(d["toast.error"], "error");
        fallbackSend(data, d);
      } finally {
        btn.disabled = false; btn.textContent = original;
      }
      return;
    }

    // 2) Если задан Formspree/endpoint — отправляем через fetch
    if (CONFIG.formEndpoint) {
      try {
        const res = await fetch(CONFIG.formEndpoint, {
          method: "POST",
          headers: { "Accept": "application/json", "Content-Type": "application/json" },
          body: JSON.stringify(data)
        });
        if (res.ok) {
          toast(d["toast.success"], "success");
          form.reset();
        } else { throw new Error("bad status"); }
      } catch {
        fallbackSend(data, d);
      } finally {
        btn.disabled = false; btn.textContent = original;
      }
      return;
    }

    // 2) Fallback: открываем письмо с заполненным телом (работает на статике)
    fallbackSend(data, d);
    toast(d["toast.success"], "success");
    form.reset();
    btn.disabled = false; btn.textContent = original;
  });
}

function fallbackSend(data, d) {
  const subject = encodeURIComponent("Заявка с сайта · " + data.topic);
  const body = encodeURIComponent(
    `${d["form.nameLabel"]}: ${data.name}\n` +
    `${d["form.contactLabel"]}: ${data.contact}\n` +
    `${d["form.topicLabel"]}: ${data.topic}\n\n` +
    `${d["form.msgLabel"]}:\n${data.message}`
  );
  if (CONFIG.email) {
    window.location.href = `mailto:${CONFIG.email}?subject=${subject}&body=${body}`;
  } else if (CONFIG.telegram) {
    window.open("https://t.me/" + CONFIG.telegram.replace(/^@/, ""), "_blank");
  }
}

/* ---------- СЧЁТЧИКИ ДАШБОРДА ---------- */
function animateCounters() {
  document.querySelectorAll("[data-count]").forEach(el => {
    const target = +el.getAttribute("data-count");
    const suffix = el.getAttribute("data-suffix") || "";
    const thousands = el.getAttribute("data-format") === "thousands";
    const dur = 1300; const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const val = Math.floor((1 - Math.pow(1 - p, 3)) * target);
      el.textContent = (thousands ? val.toLocaleString("ru-RU") : val) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}

/* ---------- REVEAL ПРИ СКРОЛЛЕ ---------- */
function setupReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) { els.forEach(e => e.classList.add("in")); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en, i) => {
      if (en.isIntersecting) {
        setTimeout(() => en.target.classList.add("in"), (i % 4) * 70);
        io.unobserve(en.target);
        if (en.target.querySelector("[data-count]") || en.target.closest(".hero-visual"))
          { /* счётчики стартуют отдельно */ }
      }
    });
  }, { threshold: 0.12 });
  els.forEach(e => io.observe(e));
}

/* ---------- МОБИЛЬНОЕ МЕНЮ ---------- */
function setupMenu() {
  const burger = document.getElementById("burger");
  const menu = document.getElementById("mobileMenu");
  if (!burger) return;
  const close = () => { burger.classList.remove("open"); menu.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); };
  burger.addEventListener("click", () => {
    const open = burger.classList.toggle("open");
    menu.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", String(open));
  });
  menu.querySelectorAll("a").forEach(a => a.addEventListener("click", close));
}

/* ---------- ИНИЦИАЛИЗАЦИЯ ---------- */
document.addEventListener("DOMContentLoaded", () => {
  // тема: сохранённая → системная → светлая
  const savedTheme = store.get("theme");
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(savedTheme || (prefersDark ? "dark" : "light"));

  // язык: сохранённый → системный (uk если украинский) → ru
  const savedLang = store.get("lang");
  const sysLang = (navigator.language || "ru").toLowerCase().startsWith("uk") ? "uk" : "ru";
  applyLang(savedLang || sysLang);

  document.getElementById("themeToggle").addEventListener("click", () => {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
  });
  document.querySelectorAll(".lang-btn").forEach(b =>
    b.addEventListener("click", () => applyLang(b.dataset.lang)));

  const yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();

  setupContacts();
  setupForm();
  setupMenu();
  setupReveal();

  // счётчики стартуют, когда дашборд появляется в зоне видимости
  const visual = document.querySelector(".hero-visual");
  if (visual && "IntersectionObserver" in window) {
    const io = new IntersectionObserver((en) => {
      if (en[0].isIntersecting) { animateCounters(); io.disconnect(); }
    }, { threshold: 0.3 });
    io.observe(visual);
  } else {
    animateCounters();
  }
});
