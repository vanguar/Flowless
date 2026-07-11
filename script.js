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

const SHOWREEL_VIDEO = {
  ru: "promo-reels-ru.mp4",
  uk: "promo-reels-uk.mp4",
  en: "promo-reels-en.mp4",
  pl: "promo-reels-pl.mp4",
  de: "promo-reels-de.mp4"
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

Object.assign(I18N.ru, {
  "meta.title": "Flowless — автоматизация бизнес-процессов",
  "meta.desc": "Flowless помогает малому бизнесу автоматизировать заявки, Telegram-ботов, CRM, Google Sheets, API, отчёты и MVP без лишней сложности.",
  "nav.packages": "Пакеты",
  "nav.cases": "Кейсы",
  "hero.ctaPrimary": "Бесплатный разбор",
  "footer.copy": "Flowless · AI, боты, автоматизация без лишней сложности",
  "packages.eyebrow": "Пакеты и сроки",
  "packages.title": "Понятный старт без долгих созвонов",
  "packages.lead": "Можно начать с маленькой автоматизации, а потом расширить её до бота, CRM-сценария или внутреннего инструмента.",
  "packages.cta": "Обсудить пакет",
  "pkg1.kicker": "Старт",
  "pkg1.title": "Мини-автоматизация",
  "pkg1.text": "Один ручной процесс превращаем в понятный автоматический сценарий.",
  "pkg1.price": "от €80",
  "pkg1.time": "обычно 2-5 дней",
  "pkg1.item1": "заявки в Google Sheets или CRM",
  "pkg1.item2": "уведомления в Telegram/email",
  "pkg1.item3": "короткая инструкция после запуска",
  "pkg2.kicker": "Самый частый запрос",
  "pkg2.title": "Бот / CRM",
  "pkg2.text": "Telegram-бот, обработка лидов и связка сервисов, чтобы заявки не терялись.",
  "pkg2.price": "от €180",
  "pkg2.time": "обычно 3-7 дней",
  "pkg2.item1": "бот для заказов, записи или поддержки",
  "pkg2.item2": "CRM, Google Sheets, API-интеграции",
  "pkg2.item3": "статусы, автоответы и уведомления",
  "pkg3.kicker": "Под задачу",
  "pkg3.title": "MVP / инструмент",
  "pkg3.text": "Небольшой сервис или внутренняя панель для команды, продаж или операций.",
  "pkg3.price": "от €350",
  "pkg3.time": "обычно 7-14 дней",
  "pkg3.item1": "прототип с рабочей логикой",
  "pkg3.item2": "личный кабинет, формы, отчёты",
  "pkg3.item3": "интеграции и быстрые доработки",
  "cases.eyebrow": "Короткие кейсы",
  "cases.title": "Примеры задач, с которых удобно начать",
  "cases.lead": "Даже демо-сценарий показывает главное: где теряется время, как пойдёт поток данных и что бизнес получит на выходе.",
  "case1.tag": "Лиды",
  "case1.title": "Заявки из Instagram/Telegram в таблицу",
  "case1.problem": "Проблема: заявки приходят в разные чаты, часть теряется, менеджер копирует всё вручную.",
  "case1.result": "Результат: каждая заявка попадает в Google Sheets/CRM, владелец получает уведомление.",
  "case2.tag": "Бот",
  "case2.title": "Telegram-бот для записи и заказов",
  "case2.problem": "Проблема: клиенты задают одни и те же вопросы и ждут ответа в личных сообщениях.",
  "case2.result": "Результат: бот собирает данные, отвечает на базовые вопросы и передаёт готовую заявку.",
  "case3.tag": "Отчёты",
  "case3.title": "Ежедневный отчёт вместо ручной сводки",
  "case3.problem": "Проблема: цифры по продажам и задачам собираются из таблиц и CRM руками.",
  "case3.result": "Результат: отчёт приходит автоматически утром в Telegram или на email.",
  "audit.eyebrow": "Бесплатный разбор",
  "audit.title": "Бесплатно разберу ваш процесс за 15 минут",
  "audit.text": "Покажу, что можно автоматизировать быстро, где будет экономия времени и с какого маленького шага лучше начать.",
  "audit.cta": "Хочу разбор",
  "audit.note": "без обязательств и сложной подготовки",
  "showreel.eyebrow": "Видео за 25 секунд",
  "showreel.title": "Как я закрываю рутину — коротко и по делу",
  "showreel.lead": "Небольшой обзор: с какими задачами помогаю и какой результат это даёт. Посмотрите — и опишите свою задачу, в конце ролика есть кнопка.",
  "showreel.point1": "Заявки, Telegram-боты, интеграции",
  "showreel.point2": "Отчёты, парсинг, автоматизация",
  "showreel.point3": "MVP и инструменты под вашу задачу",
  "showreel.cta": "Обсудить задачу →",
  "showreel.end1": "Опишите задачу —",
  "showreel.end2": "предложу",
  "showreel.endAccent": "решение",
  "showreel.endCta": "Оставить заявку →",
  "showreel.replay": "↻ Заново"
});

Object.assign(I18N.uk, {
  "meta.title": "Flowless — автоматизація бізнес-процесів",
  "meta.desc": "Flowless допомагає малому бізнесу автоматизувати заявки, Telegram-ботів, CRM, Google Sheets, API, звіти та MVP без зайвої складності.",
  "nav.packages": "Пакети",
  "nav.cases": "Кейси",
  "hero.ctaPrimary": "Безкоштовний розбір",
  "footer.copy": "Flowless · AI, боти, автоматизація без зайвої складності",
  "packages.eyebrow": "Пакети та строки",
  "packages.title": "Зрозумілий старт без довгих дзвінків",
  "packages.lead": "Можна почати з маленької автоматизації, а потім розширити її до бота, CRM-сценарію або внутрішнього інструмента.",
  "packages.cta": "Обговорити пакет",
  "pkg1.kicker": "Старт",
  "pkg1.title": "Міні-автоматизація",
  "pkg1.text": "Один ручний процес перетворюємо на зрозумілий автоматичний сценарій.",
  "pkg1.price": "від €80",
  "pkg1.time": "зазвичай 2-5 днів",
  "pkg1.item1": "заявки в Google Sheets або CRM",
  "pkg1.item2": "сповіщення в Telegram/email",
  "pkg1.item3": "коротка інструкція після запуску",
  "pkg2.kicker": "Найчастіший запит",
  "pkg2.title": "Бот / CRM",
  "pkg2.text": "Telegram-бот, обробка лідів і зв'язка сервісів, щоб заявки не губилися.",
  "pkg2.price": "від €180",
  "pkg2.time": "зазвичай 3-7 днів",
  "pkg2.item1": "бот для замовлень, запису або підтримки",
  "pkg2.item2": "CRM, Google Sheets, API-інтеграції",
  "pkg2.item3": "статуси, автовідповіді та сповіщення",
  "pkg3.kicker": "Під завдання",
  "pkg3.title": "MVP / інструмент",
  "pkg3.text": "Невеликий сервіс або внутрішня панель для команди, продажів чи операцій.",
  "pkg3.price": "від €350",
  "pkg3.time": "зазвичай 7-14 днів",
  "pkg3.item1": "прототип із робочою логікою",
  "pkg3.item2": "особистий кабінет, форми, звіти",
  "pkg3.item3": "інтеграції та швидкі доопрацювання",
  "cases.eyebrow": "Короткі кейси",
  "cases.title": "Приклади завдань, з яких зручно почати",
  "cases.lead": "Навіть демо-сценарій показує головне: де втрачається час, як піде потік даних і що бізнес отримає на виході.",
  "case1.tag": "Ліди",
  "case1.title": "Заявки з Instagram/Telegram у таблицю",
  "case1.problem": "Проблема: заявки приходять у різні чати, частина губиться, менеджер копіює все вручну.",
  "case1.result": "Результат: кожна заявка потрапляє в Google Sheets/CRM, власник отримує сповіщення.",
  "case2.tag": "Бот",
  "case2.title": "Telegram-бот для запису та замовлень",
  "case2.problem": "Проблема: клієнти ставлять однакові питання й чекають відповіді в особистих повідомленнях.",
  "case2.result": "Результат: бот збирає дані, відповідає на базові питання та передає готову заявку.",
  "case3.tag": "Звіти",
  "case3.title": "Щоденний звіт замість ручної зведеної таблиці",
  "case3.problem": "Проблема: цифри з продажів і задач збираються з таблиць та CRM вручну.",
  "case3.result": "Результат: звіт приходить автоматично вранці в Telegram або на email.",
  "audit.eyebrow": "Безкоштовний розбір",
  "audit.title": "Безкоштовно розберу ваш процес за 15 хвилин",
  "audit.text": "Покажу, що можна автоматизувати швидко, де буде економія часу і з якого маленького кроку краще почати.",
  "audit.cta": "Хочу розбір",
  "audit.note": "без зобов'язань і складної підготовки",
  "showreel.eyebrow": "Відео за 25 секунд",
  "showreel.title": "Як я закриваю рутину — коротко і по суті",
  "showreel.lead": "Невеликий огляд: з якими завданнями допомагаю і який результат це дає. Подивіться — і опишіть своє завдання, в кінці ролика є кнопка.",
  "showreel.point1": "Заявки, Telegram-боти, інтеграції",
  "showreel.point2": "Звіти, парсинг, автоматизація",
  "showreel.point3": "MVP та інструменти під ваше завдання",
  "showreel.cta": "Обговорити завдання →",
  "showreel.end1": "Опишіть завдання —",
  "showreel.end2": "запропоную",
  "showreel.endAccent": "рішення",
  "showreel.endCta": "Залишити заявку →",
  "showreel.replay": "↻ Заново"
});

I18N.en = {
  ...I18N.ru,
  "meta.title": "Flowless — business process automation",
  "meta.desc": "Flowless helps small businesses automate leads, Telegram bots, CRM, Google Sheets, APIs, reports and MVPs without unnecessary complexity.",
  "nav.services": "Services", "nav.approach": "Approach", "nav.skills": "Skills", "nav.packages": "Packages", "nav.cases": "Cases", "nav.contacts": "Contact",
  "header.cta": "Message me",
  "badge": "AI, bots, automation",
  "hero.title1": "Business process", "hero.title2": "automation",
  "hero.titleAccent": "without extra complexity",
  "hero.lead": "If manual work eats your time — leads, spreadsheets, chats, reports — I help simplify and automate it.",
  "hero.ctaPrimary": "Free audit", "hero.ctaGhost": "What I do",
  "dash.requests": "Leads", "dash.conversion": "Conversion", "dash.revenue": "Revenue", "dash.currency": " €",
  "services.eyebrow": "How I can help",
  "services.title": "I remove routine work that drains your time",
  "srv1.title": "Lead and request processing",
  "srv1.text": "Capture, route and store leads without losses or manual copying.",
  "srv2.title": "Telegram bots and chatbots",
  "srv2.text": "Bots for orders, notifications, support and 24/7 auto-replies.",
  "srv3.title": "CRM, Google Sheets and API integrations",
  "srv3.text": "I connect your tools so data moves automatically.",
  "srv4.title": "Reports, alerts and data parsing",
  "srv4.text": "Auto-reports, event alerts and data collection from websites and services.",
  "srv5.title": "MVPs and internal tools",
  "srv5.text": "Fast prototypes and small tools for specific team workflows.",
  "srv6.title": "Have another task?",
  "srv6.text": "Describe the process — I will tell you whether it can be automated and how.",
  "srv6.link": "Discuss →",
  "suitable.prefix": "Best for",
  "suitable.strong": "small businesses, services, online projects and sales",
  "feat1.title": "Fast start", "feat1.text": "I can begin without weeks of coordination.",
  "feat2.title": "Built around your task", "feat2.text": "A solution for your process, not a generic template.",
  "feat3.title": "No unnecessary theory", "feat3.text": "Straight to the result — clear and practical.",
  "skills.eyebrow": "Skills and projects",
  "skills.title": "Technologies I work with",
  "skills.lead": "I build with Python and JavaScript: Telegram bots, API and CRM integrations, parsers and AI workflows. Live examples are on my projects page.",
  "skills.tag.bots": "Telegram bots", "skills.tag.crm": "CRM integrations",
  "skills.tag.parsing": "Data parsing", "skills.tag.ai": "AI / GPT",
  "skills.tag.automation": "Automation",
  "skills.cta": "View projects and skills →",
  "packages.eyebrow": "Packages and timelines",
  "packages.title": "A clear start without long calls",
  "packages.lead": "Start with a small automation, then expand it into a bot, CRM workflow or internal tool.",
  "packages.cta": "Discuss package",
  "pkg1.kicker": "Starter",
  "pkg1.title": "Mini automation",
  "pkg1.text": "We turn one manual process into a clear automated workflow.",
  "pkg1.price": "from €80",
  "pkg1.time": "usually 2-5 days",
  "pkg1.item1": "leads to Google Sheets or CRM",
  "pkg1.item2": "Telegram/email notifications",
  "pkg1.item3": "short handover guide after launch",
  "pkg2.kicker": "Most common request",
  "pkg2.title": "Bot / CRM",
  "pkg2.text": "A Telegram bot, lead handling and service integrations so requests do not get lost.",
  "pkg2.price": "from €180",
  "pkg2.time": "usually 3-7 days",
  "pkg2.item1": "bot for orders, bookings or support",
  "pkg2.item2": "CRM, Google Sheets, API integrations",
  "pkg2.item3": "statuses, auto-replies and alerts",
  "pkg3.kicker": "Custom workflow",
  "pkg3.title": "MVP / tool",
  "pkg3.text": "A small service or internal dashboard for your team, sales or operations.",
  "pkg3.price": "from €350",
  "pkg3.time": "usually 7-14 days",
  "pkg3.item1": "prototype with working logic",
  "pkg3.item2": "account area, forms, reports",
  "pkg3.item3": "integrations and fast iterations",
  "cases.eyebrow": "Short cases",
  "cases.title": "Examples of tasks worth starting with",
  "cases.lead": "Even a demo workflow shows where time is lost, how data will move and what the business gets at the end.",
  "case1.tag": "Leads",
  "case1.title": "Instagram/Telegram leads into a spreadsheet",
  "case1.problem": "Problem: requests arrive in different chats, some get lost and the manager copies everything manually.",
  "case1.result": "Result: every lead goes to Google Sheets/CRM and the owner receives a notification.",
  "case2.tag": "Bot",
  "case2.title": "Telegram bot for bookings and orders",
  "case2.problem": "Problem: customers ask the same questions and wait for replies in direct messages.",
  "case2.result": "Result: the bot collects details, answers basic questions and passes a ready lead forward.",
  "case3.tag": "Reports",
  "case3.title": "Daily report instead of a manual summary",
  "case3.problem": "Problem: sales and task numbers are gathered manually from spreadsheets and CRM.",
  "case3.result": "Result: the report arrives automatically every morning in Telegram or by email.",
  "audit.eyebrow": "Free audit",
  "audit.title": "I will review your process for free in 15 minutes",
  "audit.text": "I will show what can be automated quickly, where time will be saved and which small step is best to start with.",
  "audit.cta": "Book an audit",
  "audit.note": "no obligation and no complex preparation",
  "showreel.eyebrow": "25-second video",
  "showreel.title": "How I remove routine work — short and practical",
  "showreel.lead": "A quick overview of the tasks I help with and the results they create. Watch it and describe your task — there is a button at the end.",
  "showreel.point1": "Leads, Telegram bots, integrations",
  "showreel.point2": "Reports, parsing, automation",
  "showreel.point3": "MVPs and tools for your workflow",
  "showreel.cta": "Discuss a task →",
  "showreel.end1": "Describe your task —",
  "showreel.end2": "I will suggest",
  "showreel.endAccent": "a solution",
  "showreel.endCta": "Send request →",
  "showreel.replay": "↻ Replay",
  "contact.eyebrow": "Contact", "contact.title": "Let's discuss your task",
  "contact.lead": "Describe the task — I will suggest a clear solution. I usually reply within a day.",
  "ci.telegram": "Telegram", "ci.email": "Email", "ci.phone": "Phone", "ci.portfolio": "My projects",
  "form.title": "Send a request",
  "form.nameLabel": "Your name", "form.namePh": "Name",
  "form.contactLabel": "Contact", "form.contactPh": "Telegram, email or phone",
  "form.topicLabel": "Task type",
  "topic.1": "Lead processing", "topic.2": "Telegram bot / chatbot",
  "topic.3": "CRM / Sheets / API integrations", "topic.4": "Reports, alerts, parsing",
  "topic.5": "MVP / internal tool", "topic.6": "Other",
  "form.msgLabel": "Describe the task",
  "form.msgPh": "What should be automated and where time is currently lost",
  "form.submit": "Send request",
  "form.note": "By clicking the button, you agree to the processing of contact details.",
  "err.name": "Enter your name", "err.contact": "Add a way to contact you",
  "err.message": "Describe the task in a few words",
  "toast.sending": "Sending…", "toast.success": "Request sent! I will reply soon.",
  "toast.error": "The form could not be sent. Please message me on Telegram or email — contacts are on the left.",
  "btn.sending": "Sending…",
  "cta.text": "Message me directly",
  "cta.sub": "Describe the task — I will suggest a clear solution",
  "footer.copy": "Flowless · AI, bots and automation without extra complexity"
};

I18N.pl = {
  ...I18N.en,
  "meta.title": "Flowless — automatyzacja procesów biznesowych",
  "meta.desc": "Flowless pomaga małym firmom automatyzować zapytania, boty Telegram, CRM, Google Sheets, API, raporty i MVP bez zbędnej złożoności.",
  "nav.services": "Usługi", "nav.approach": "Podejście", "nav.skills": "Umiejętności", "nav.packages": "Pakiety", "nav.cases": "Case studies", "nav.contacts": "Kontakt",
  "header.cta": "Napisz",
  "badge": "AI, boty, automatyzacja",
  "hero.title1": "Automatyzacja", "hero.title2": "procesów biznesowych",
  "hero.titleAccent": "bez zbędnej złożoności",
  "hero.lead": "Jeśli ręczna praca zabiera czas — leady, arkusze, wiadomości, raporty — pomogę to uprościć i zautomatyzować.",
  "hero.ctaPrimary": "Bezpłatny audyt", "hero.ctaGhost": "Co robię",
  "dash.requests": "Leady", "dash.conversion": "Konwersja", "dash.revenue": "Przychód", "dash.currency": " €",
  "services.eyebrow": "W czym pomagam",
  "services.title": "Usuwam rutynę, która zabiera czas",
  "srv1.title": "Obsługa zapytań i leadów",
  "srv1.text": "Przyjmowanie, kierowanie i zapisywanie zgłoszeń bez strat i ręcznego kopiowania.",
  "srv2.title": "Boty Telegram i chatboty",
  "srv2.text": "Boty do zamówień, powiadomień, obsługi klienta i automatycznych odpowiedzi 24/7.",
  "srv3.title": "Integracje CRM, Google Sheets i API",
  "srv3.text": "Łączę narzędzia, aby dane przepływały automatycznie.",
  "srv4.title": "Raporty, alerty i scraping danych",
  "srv4.text": "Automatyczne raporty, powiadomienia o zdarzeniach i zbieranie danych ze stron oraz usług.",
  "srv5.title": "MVP i narzędzia wewnętrzne",
  "srv5.text": "Szybkie prototypy i małe narzędzia pod konkretne procesy zespołu.",
  "srv6.title": "Masz inne zadanie?",
  "srv6.text": "Opisz proces — powiem, czy można go zautomatyzować i jak.",
  "srv6.link": "Porozmawiajmy →",
  "suitable.prefix": "Dobre dla",
  "suitable.strong": "małych firm, usług, projektów online i sprzedaży",
  "feat1.title": "Szybki start", "feat1.text": "Mogę zacząć bez tygodni ustaleń.",
  "feat2.title": "Pod Twoje zadanie", "feat2.text": "Rozwiązanie dla Twojego procesu, nie uniwersalny szablon.",
  "feat3.title": "Bez zbędnej teorii", "feat3.text": "Od razu do wyniku — jasno i praktycznie.",
  "skills.eyebrow": "Umiejętności i projekty",
  "skills.title": "Technologie, z którymi pracuję",
  "skills.lead": "Tworzę w Pythonie i JavaScripcie: boty Telegram, integracje API i CRM, parsery oraz scenariusze AI. Przykłady są na stronie projektów.",
  "skills.tag.bots": "Boty Telegram", "skills.tag.crm": "Integracje CRM",
  "skills.tag.parsing": "Scraping danych", "skills.tag.ai": "AI / GPT",
  "skills.tag.automation": "Automatyzacja",
  "skills.cta": "Zobacz projekty i umiejętności →",
  "packages.eyebrow": "Pakiety i terminy",
  "packages.title": "Prosty start bez długich rozmów",
  "packages.lead": "Możesz zacząć od małej automatyzacji, a potem rozwinąć ją w bota, scenariusz CRM lub narzędzie wewnętrzne.",
  "packages.cta": "Omów pakiet",
  "pkg1.kicker": "Start",
  "pkg1.title": "Mini automatyzacja",
  "pkg1.text": "Jeden ręczny proces zamieniamy w jasny automatyczny scenariusz.",
  "pkg1.price": "od €80",
  "pkg1.time": "zwykle 2-5 dni",
  "pkg1.item1": "leady do Google Sheets lub CRM",
  "pkg1.item2": "powiadomienia Telegram/email",
  "pkg1.item3": "krótka instrukcja po uruchomieniu",
  "pkg2.kicker": "Najczęstsze zapytanie",
  "pkg2.title": "Bot / CRM",
  "pkg2.text": "Bot Telegram, obsługa leadów i integracje usług, aby zapytania się nie gubiły.",
  "pkg2.price": "od €180",
  "pkg2.time": "zwykle 3-7 dni",
  "pkg2.item1": "bot do zamówień, rezerwacji lub obsługi",
  "pkg2.item2": "CRM, Google Sheets, integracje API",
  "pkg2.item3": "statusy, auto-odpowiedzi i alerty",
  "pkg3.kicker": "Pod zadanie",
  "pkg3.title": "MVP / narzędzie",
  "pkg3.text": "Mały serwis lub panel wewnętrzny dla zespołu, sprzedaży albo operacji.",
  "pkg3.price": "od €350",
  "pkg3.time": "zwykle 7-14 dni",
  "pkg3.item1": "prototyp z działającą logiką",
  "pkg3.item2": "konto, formularze, raporty",
  "pkg3.item3": "integracje i szybkie poprawki",
  "cases.eyebrow": "Krótkie case studies",
  "cases.title": "Przykłady zadań, od których warto zacząć",
  "cases.lead": "Nawet demo pokazuje, gdzie ginie czas, jak popłyną dane i co firma dostanie na końcu.",
  "case1.tag": "Leady",
  "case1.title": "Leady z Instagram/Telegram do arkusza",
  "case1.problem": "Problem: zapytania trafiają do różnych czatów, część ginie, a menedżer kopiuje wszystko ręcznie.",
  "case1.result": "Rezultat: każdy lead trafia do Google Sheets/CRM, a właściciel dostaje powiadomienie.",
  "case2.tag": "Bot",
  "case2.title": "Bot Telegram do rezerwacji i zamówień",
  "case2.problem": "Problem: klienci zadają te same pytania i czekają na odpowiedź w wiadomościach prywatnych.",
  "case2.result": "Rezultat: bot zbiera dane, odpowiada na podstawowe pytania i przekazuje gotowe zgłoszenie.",
  "case3.tag": "Raporty",
  "case3.title": "Codzienny raport zamiast ręcznego podsumowania",
  "case3.problem": "Problem: dane sprzedażowe i zadania są ręcznie zbierane z arkuszy oraz CRM.",
  "case3.result": "Rezultat: raport przychodzi automatycznie rano na Telegram lub email.",
  "audit.eyebrow": "Bezpłatny audyt",
  "audit.title": "Bezpłatnie przeanalizuję Twój proces w 15 minut",
  "audit.text": "Pokażę, co można szybko zautomatyzować, gdzie oszczędzisz czas i od jakiego małego kroku zacząć.",
  "audit.cta": "Chcę audyt",
  "audit.note": "bez zobowiązań i bez skomplikowanego przygotowania",
  "showreel.eyebrow": "Wideo w 25 sekund",
  "showreel.title": "Jak usuwam rutynę — krótko i konkretnie",
  "showreel.lead": "Krótki przegląd zadań, w których pomagam, i wyników, jakie dają. Obejrzyj i opisz swoje zadanie — przycisk jest na końcu.",
  "showreel.point1": "Leady, boty Telegram, integracje",
  "showreel.point2": "Raporty, scraping, automatyzacja",
  "showreel.point3": "MVP i narzędzia pod Twój proces",
  "showreel.cta": "Omów zadanie →",
  "showreel.end1": "Opisz zadanie —",
  "showreel.end2": "zaproponuję",
  "showreel.endAccent": "rozwiązanie",
  "showreel.endCta": "Wyślij zapytanie →",
  "showreel.replay": "↻ Jeszcze raz",
  "contact.eyebrow": "Kontakt", "contact.title": "Porozmawiajmy o zadaniu",
  "contact.lead": "Opisz zadanie — zaproponuję jasne rozwiązanie. Zwykle odpowiadam w ciągu dnia.",
  "ci.telegram": "Telegram", "ci.email": "Email", "ci.phone": "Telefon", "ci.portfolio": "Moje projekty",
  "form.title": "Wyślij zapytanie",
  "form.nameLabel": "Jak się do Ciebie zwracać", "form.namePh": "Imię",
  "form.contactLabel": "Kontakt", "form.contactPh": "Telegram, email lub telefon",
  "form.topicLabel": "Typ zadania",
  "topic.1": "Obsługa leadów", "topic.2": "Bot Telegram / chatbot",
  "topic.3": "Integracje CRM / Sheets / API", "topic.4": "Raporty, alerty, scraping",
  "topic.5": "MVP / narzędzie wewnętrzne", "topic.6": "Inne",
  "form.msgLabel": "Opisz zadanie",
  "form.msgPh": "Co chcesz zautomatyzować i gdzie teraz tracisz czas",
  "form.submit": "Wyślij zapytanie",
  "form.note": "Klikając przycisk, zgadzasz się na przetwarzanie danych kontaktowych.",
  "err.name": "Wpisz imię", "err.contact": "Podaj kontakt",
  "err.message": "Opisz zadanie w kilku słowach",
  "toast.sending": "Wysyłanie…", "toast.success": "Zapytanie wysłane! Wkrótce odpowiem.",
  "toast.error": "Nie udało się wysłać formularza. Napisz proszę na Telegram lub email — kontakty są po lewej.",
  "btn.sending": "Wysyłanie…",
  "cta.text": "Napisz bezpośrednio",
  "cta.sub": "Opisz zadanie — zaproponuję jasne rozwiązanie",
  "footer.copy": "Flowless · AI, boty i automatyzacja bez zbędnej złożoności"
};

I18N.de = {
  ...I18N.en,
  "meta.title": "Flowless — Automatisierung von Geschäftsprozessen",
  "meta.desc": "Flowless hilft kleinen Unternehmen, Anfragen, Telegram-Bots, CRM, Google Sheets, APIs, Berichte und MVPs ohne unnötige Komplexität zu automatisieren.",
  "nav.services": "Leistungen", "nav.approach": "Ansatz", "nav.skills": "Skills", "nav.packages": "Pakete", "nav.cases": "Cases", "nav.contacts": "Kontakt",
  "header.cta": "Schreiben",
  "badge": "AI, Bots, Automatisierung",
  "hero.title1": "Automatisierung", "hero.title2": "von Geschäftsprozessen",
  "hero.titleAccent": "ohne unnötige Komplexität",
  "hero.lead": "Wenn manuelle Arbeit Zeit frisst — Leads, Tabellen, Nachrichten, Berichte — helfe ich, sie zu vereinfachen und zu automatisieren.",
  "hero.ctaPrimary": "Kostenloser Check", "hero.ctaGhost": "Was ich mache",
  "dash.requests": "Leads", "dash.conversion": "Conversion", "dash.revenue": "Umsatz", "dash.currency": " €",
  "services.eyebrow": "Wobei ich helfe",
  "services.title": "Ich entferne Routinearbeit, die Zeit kostet",
  "srv1.title": "Bearbeitung von Anfragen und Leads",
  "srv1.text": "Erfassen, weiterleiten und speichern von Anfragen ohne Verluste und manuelles Kopieren.",
  "srv2.title": "Telegram-Bots und Chatbots",
  "srv2.text": "Bots für Bestellungen, Benachrichtigungen, Support und automatische Antworten rund um die Uhr.",
  "srv3.title": "CRM-, Google-Sheets- und API-Integrationen",
  "srv3.text": "Ich verbinde Ihre Tools, damit Daten automatisch fließen.",
  "srv4.title": "Berichte, Alerts und Daten-Scraping",
  "srv4.text": "Automatische Berichte, Ereignisbenachrichtigungen und Datensammlung aus Websites und Services.",
  "srv5.title": "MVPs und interne Tools",
  "srv5.text": "Schnelle Prototypen und kleine Tools für konkrete Teamprozesse.",
  "srv6.title": "Eine andere Aufgabe?",
  "srv6.text": "Beschreiben Sie den Prozess — ich sage, ob und wie er automatisiert werden kann.",
  "srv6.link": "Besprechen →",
  "suitable.prefix": "Geeignet für",
  "suitable.strong": "kleine Unternehmen, Dienstleistungen, Online-Projekte und Vertrieb",
  "feat1.title": "Schneller Start", "feat1.text": "Ich kann ohne wochenlange Abstimmungen starten.",
  "feat2.title": "Nach Ihrer Aufgabe gebaut", "feat2.text": "Eine Lösung für Ihren Prozess, keine generische Vorlage.",
  "feat3.title": "Ohne unnötige Theorie", "feat3.text": "Direkt zum Ergebnis — klar und praktisch.",
  "skills.eyebrow": "Skills und Projekte",
  "skills.title": "Technologien, mit denen ich arbeite",
  "skills.lead": "Ich arbeite mit Python und JavaScript: Telegram-Bots, API- und CRM-Integrationen, Parser und AI-Workflows. Beispiele finden Sie auf meiner Projektseite.",
  "skills.tag.bots": "Telegram-Bots", "skills.tag.crm": "CRM-Integrationen",
  "skills.tag.parsing": "Daten-Scraping", "skills.tag.ai": "AI / GPT",
  "skills.tag.automation": "Automatisierung",
  "skills.cta": "Projekte und Skills ansehen →",
  "packages.eyebrow": "Pakete und Zeitrahmen",
  "packages.title": "Klarer Start ohne lange Calls",
  "packages.lead": "Starten Sie mit einer kleinen Automatisierung und erweitern Sie sie später zu einem Bot, CRM-Workflow oder internen Tool.",
  "packages.cta": "Paket besprechen",
  "pkg1.kicker": "Start",
  "pkg1.title": "Mini-Automatisierung",
  "pkg1.text": "Wir verwandeln einen manuellen Prozess in einen klaren automatisierten Ablauf.",
  "pkg1.price": "ab €80",
  "pkg1.time": "meist 2-5 Tage",
  "pkg1.item1": "Leads in Google Sheets oder CRM",
  "pkg1.item2": "Telegram-/Email-Benachrichtigungen",
  "pkg1.item3": "kurze Anleitung nach dem Start",
  "pkg2.kicker": "Häufigste Anfrage",
  "pkg2.title": "Bot / CRM",
  "pkg2.text": "Telegram-Bot, Lead-Verarbeitung und Service-Integrationen, damit keine Anfragen verloren gehen.",
  "pkg2.price": "ab €180",
  "pkg2.time": "meist 3-7 Tage",
  "pkg2.item1": "Bot für Bestellungen, Termine oder Support",
  "pkg2.item2": "CRM, Google Sheets, API-Integrationen",
  "pkg2.item3": "Status, Auto-Antworten und Alerts",
  "pkg3.kicker": "Individuell",
  "pkg3.title": "MVP / Tool",
  "pkg3.text": "Ein kleiner Service oder ein internes Dashboard für Team, Vertrieb oder Abläufe.",
  "pkg3.price": "ab €350",
  "pkg3.time": "meist 7-14 Tage",
  "pkg3.item1": "Prototyp mit funktionierender Logik",
  "pkg3.item2": "Account-Bereich, Formulare, Berichte",
  "pkg3.item3": "Integrationen und schnelle Iterationen",
  "cases.eyebrow": "Kurze Cases",
  "cases.title": "Beispiele für Aufgaben, mit denen man gut starten kann",
  "cases.lead": "Schon ein Demo-Workflow zeigt, wo Zeit verloren geht, wie Daten fließen und was das Unternehmen am Ende bekommt.",
  "case1.tag": "Leads",
  "case1.title": "Instagram-/Telegram-Leads in eine Tabelle",
  "case1.problem": "Problem: Anfragen kommen in verschiedenen Chats an, einige gehen verloren, alles wird manuell kopiert.",
  "case1.result": "Ergebnis: Jeder Lead landet in Google Sheets/CRM, der Inhaber erhält eine Benachrichtigung.",
  "case2.tag": "Bot",
  "case2.title": "Telegram-Bot für Termine und Bestellungen",
  "case2.problem": "Problem: Kunden stellen dieselben Fragen und warten auf Antworten in Direktnachrichten.",
  "case2.result": "Ergebnis: Der Bot sammelt Daten, beantwortet Basisfragen und übergibt eine fertige Anfrage.",
  "case3.tag": "Berichte",
  "case3.title": "Täglicher Bericht statt manueller Zusammenfassung",
  "case3.problem": "Problem: Verkaufs- und Aufgabenzahlen werden manuell aus Tabellen und CRM gesammelt.",
  "case3.result": "Ergebnis: Der Bericht kommt jeden Morgen automatisch per Telegram oder Email.",
  "audit.eyebrow": "Kostenloser Check",
  "audit.title": "Ich analysiere Ihren Prozess kostenlos in 15 Minuten",
  "audit.text": "Ich zeige, was schnell automatisiert werden kann, wo Zeit gespart wird und mit welchem kleinen Schritt man am besten beginnt.",
  "audit.cta": "Check anfragen",
  "audit.note": "ohne Verpflichtung und ohne komplizierte Vorbereitung",
  "showreel.eyebrow": "Video in 25 Sekunden",
  "showreel.title": "Wie ich Routinearbeit entferne — kurz und praktisch",
  "showreel.lead": "Ein kurzer Überblick über Aufgaben, bei denen ich helfe, und die Ergebnisse. Schauen Sie es an und beschreiben Sie Ihre Aufgabe — am Ende gibt es einen Button.",
  "showreel.point1": "Leads, Telegram-Bots, Integrationen",
  "showreel.point2": "Berichte, Scraping, Automatisierung",
  "showreel.point3": "MVPs und Tools für Ihren Prozess",
  "showreel.cta": "Aufgabe besprechen →",
  "showreel.end1": "Beschreiben Sie die Aufgabe —",
  "showreel.end2": "ich schlage",
  "showreel.endAccent": "eine Lösung vor",
  "showreel.endCta": "Anfrage senden →",
  "showreel.replay": "↻ Erneut",
  "contact.eyebrow": "Kontakt", "contact.title": "Lassen Sie uns Ihre Aufgabe besprechen",
  "contact.lead": "Beschreiben Sie die Aufgabe — ich schlage eine klare Lösung vor. Ich antworte meist innerhalb eines Tages.",
  "ci.telegram": "Telegram", "ci.email": "Email", "ci.phone": "Telefon", "ci.portfolio": "Meine Projekte",
  "form.title": "Anfrage senden",
  "form.nameLabel": "Ihr Name", "form.namePh": "Name",
  "form.contactLabel": "Kontakt", "form.contactPh": "Telegram, Email oder Telefon",
  "form.topicLabel": "Aufgabentyp",
  "topic.1": "Lead-Verarbeitung", "topic.2": "Telegram-Bot / Chatbot",
  "topic.3": "CRM / Sheets / API-Integrationen", "topic.4": "Berichte, Alerts, Scraping",
  "topic.5": "MVP / internes Tool", "topic.6": "Andere Aufgabe",
  "form.msgLabel": "Beschreiben Sie die Aufgabe",
  "form.msgPh": "Was soll automatisiert werden und wo geht aktuell Zeit verloren?",
  "form.submit": "Anfrage senden",
  "form.note": "Mit dem Klick auf den Button stimmen Sie der Verarbeitung Ihrer Kontaktdaten zu.",
  "err.name": "Bitte Namen eingeben", "err.contact": "Bitte Kontaktmöglichkeit angeben",
  "err.message": "Beschreiben Sie die Aufgabe in ein paar Worten",
  "toast.sending": "Wird gesendet…", "toast.success": "Anfrage gesendet! Ich melde mich bald.",
  "toast.error": "Das Formular konnte nicht gesendet werden. Bitte schreiben Sie mir per Telegram oder Email — Kontakte stehen links.",
  "btn.sending": "Wird gesendet…",
  "cta.text": "Schreiben Sie mir direkt",
  "cta.sub": "Beschreiben Sie die Aufgabe — ich schlage eine klare Lösung vor",
  "footer.copy": "Flowless · AI, Bots und Automatisierung ohne unnötige Komplexität"
};

Object.assign(I18N.ru, {
  "aftercare.eyebrow": "После запуска",
  "aftercare.title": "Запуск — это начало эксплуатации, а не конец работы",
  "aftercare.text": "Даже официально запущенному проекту нужно время под наблюдением. В реальной работе могут проявиться редкие ошибки, новые сценарии и идеи для улучшения. Поэтому первое время проект стоит тестировать, отслеживать его работу, исправлять найденные баги и при необходимости модернизировать.",
  "aftercare.note": "Сопровождение не требует вашего постоянного участия: формат наблюдения и дальнейших работ согласовывается отдельно и зависит от задач проекта.",
  "aftercare.closing": "Со временем могут измениться сервисы, требования бизнеса или появиться более удачное решение — тогда снова понадобится заглянуть в код. Доработки возможны по вашему желанию, по потребности бизнеса или из-за технической необходимости."
});

Object.assign(I18N.uk, {
  "aftercare.eyebrow": "Після запуску",
  "aftercare.title": "Запуск — це початок експлуатації, а не кінець роботи",
  "aftercare.text": "Навіть офіційно запущеному проєкту потрібен час під наглядом. У реальній роботі можуть проявитися рідкісні помилки, нові сценарії та ідеї для покращення. Тому спочатку проєкт варто тестувати, стежити за його роботою, виправляти знайдені баги та за потреби модернізувати.",
  "aftercare.note": "Супровід не потребує вашої постійної участі: формат спостереження та подальших робіт узгоджується окремо й залежить від завдань проєкту.",
  "aftercare.closing": "З часом можуть змінитися сервіси, вимоги бізнесу або з'явитися вдаліше рішення — тоді знову знадобиться зазирнути в код. Доробки можливі за вашим бажанням, через потреби бізнесу або з технічної необхідності."
});

Object.assign(I18N.en, {
  "aftercare.eyebrow": "After launch",
  "aftercare.title": "Launch is the start of real use, not the end of the work",
  "aftercare.text": "Even an officially launched project needs a period of observation. Real use can reveal rare errors, new scenarios and ideas for improvement. That is why a project should initially be tested and monitored, with discovered bugs fixed and the solution upgraded when needed.",
  "aftercare.note": "Ongoing support does not require your constant involvement: the monitoring approach and any further work are agreed separately based on the project's needs.",
  "aftercare.closing": "Over time, services or business requirements may change, or a better solution may appear — and the code may need attention again. Further work can be requested by you, driven by business needs or required for technical reasons."
});

Object.assign(I18N.pl, {
  "aftercare.eyebrow": "Po uruchomieniu",
  "aftercare.title": "Uruchomienie to początek użytkowania, a nie koniec pracy",
  "aftercare.text": "Nawet oficjalnie uruchomiony projekt potrzebuje okresu obserwacji. W codziennym użytkowaniu mogą ujawnić się rzadkie błędy, nowe scenariusze i pomysły na ulepszenia. Dlatego na początku warto projekt testować i monitorować, usuwać znalezione błędy oraz w razie potrzeby go modernizować.",
  "aftercare.note": "Obsługa projektu nie wymaga Państwa stałego zaangażowania: sposób monitorowania i zakres dalszych prac ustalamy osobno, zależnie od potrzeb projektu.",
  "aftercare.closing": "Z czasem mogą zmienić się usługi lub wymagania biznesowe, albo może pojawić się lepsze rozwiązanie — wtedy znów trzeba będzie zajrzeć do kodu. Dalsze prace mogą wynikać z Państwa życzenia, potrzeb biznesowych lub konieczności technicznej."
});

Object.assign(I18N.de, {
  "aftercare.eyebrow": "Nach dem Go-live",
  "aftercare.title": "Der Go-live ist der Beginn des Betriebs, nicht das Ende der Arbeit",
  "aftercare.text": "Auch ein offiziell gestartetes Projekt braucht eine Phase der Beobachtung. Im realen Betrieb können seltene Fehler, neue Anwendungsfälle und Ideen für Verbesserungen sichtbar werden. Deshalb sollte das Projekt anfangs getestet und überwacht werden; gefundene Bugs werden behoben und die Lösung bei Bedarf modernisiert.",
  "aftercare.note": "Die weitere Betreuung erfordert keine ständige Mitwirkung Ihrerseits: Form und Umfang der Beobachtung sowie weiterer Arbeiten werden je nach Projektbedarf separat abgestimmt.",
  "aftercare.closing": "Mit der Zeit können sich Dienste oder Geschäftsanforderungen ändern, oder es entsteht eine bessere Lösung — dann braucht auch der Code wieder Aufmerksamkeit. Weitere Arbeiten können auf Ihren Wunsch, aus geschäftlichen Gründen oder aus technischer Notwendigkeit erfolgen."
});

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

  const htmlLang = { ru: "ru", uk: "uk", en: "en", pl: "pl", de: "de" };
  document.documentElement.lang = htmlLang[lang] || "ru";
  document.title = dict["meta.title"];
  const md = document.getElementById("metaDesc");
  if (md) md.setAttribute("content", dict["meta.desc"]);

  document.querySelectorAll(".lang-btn").forEach(b =>
    b.classList.toggle("is-active", b.dataset.lang === lang));

  updateShowreelVideo(lang);
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

function updateShowreelVideo(lang) {
  const vid = document.getElementById("srVideo");
  if (!vid) return;
  const nextSrc = SHOWREEL_VIDEO[lang] || SHOWREEL_VIDEO.ru;
  if (vid.getAttribute("src") === nextSrc) return;
  const wasPlaying = !vid.paused && !vid.ended;
  vid.setAttribute("src", nextSrc);
  vid.load();
  document.getElementById("srEndcard")?.classList.remove("show");
  document.getElementById("srReplay")?.classList.remove("show");
  if (wasPlaying) vid.play().catch(() => {});
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

  // язык: сохранённый → системный, если поддерживается → ru
  const savedLang = store.get("lang");
  const supportedLangs = ["ru", "uk", "en", "pl", "de"];
  const browserLang = (navigator.language || "ru").toLowerCase().slice(0, 2);
  const sysLang = supportedLangs.includes(browserLang) ? browserLang : "ru";
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
  setupShowreel();

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

/* ---------- ВИДЕО-ПРЕЗЕНТАЦИЯ (showreel) ---------- */
function setupShowreel() {
  const vid = document.getElementById("srVideo");
  if (!vid) return;
  const endcard = document.getElementById("srEndcard");
  const replay = document.getElementById("srReplay");
  const mute = document.getElementById("srMute");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const showEnd = () => { endcard.classList.add("show"); replay.classList.add("show"); };
  const hideEnd = () => { endcard.classList.remove("show"); replay.classList.remove("show"); };

  // финальная карта появляется в начале CTA-сцены (за ~4с до конца)
  vid.addEventListener("timeupdate", () => {
    if (vid.duration && vid.currentTime >= vid.duration - 4) showEnd();
  });
  vid.addEventListener("ended", showEnd);

  replay.addEventListener("click", () => {
    hideEnd(); vid.currentTime = 0; vid.play().catch(() => {});
  });
  mute.addEventListener("click", () => {
    vid.muted = !vid.muted;
    mute.textContent = vid.muted ? "🔇" : "🔊";
    mute.setAttribute("aria-label", vid.muted ? "Включить звук" : "Выключить звук");
    if (!vid.muted) vid.play().catch(() => {});
  });

  // автозапуск без звука при попадании в зону видимости, пауза за экраном
  if (reduce) { vid.controls = true; return; }
  if (!("IntersectionObserver" in window)) { vid.play().catch(() => {}); return; }
  const io = new IntersectionObserver((ents) => {
    ents.forEach((e) => {
      if (e.isIntersecting) vid.play().catch(() => {});
      else if (!endcard.classList.contains("show")) vid.pause();
    });
  }, { threshold: 0.5 });
  io.observe(vid);
}
