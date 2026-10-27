/*
  Настройки сайта D CARGO.
  Меняются без пересборки: правите, сохраняете, обновляете страницу.
*/
window.DCARGO_CONFIG = {
  // Основной адрес сайта — для Яндекса и Google: canonical, sitemap.xml. Меняется — пересобрать сайт
  siteUrl: 'https://don-cargo.com',

  // Открытый Telegram-канал Дона Карго
  channelUrl: 'https://t.me/don_cargo',

  // Соцсети Дона Карго — полные ссылки. Показываются в подвале сайта и в разметке для поисковиков и ИИ.
  // Пусто — ссылка не показывается
  instagramUrl: 'https://www.instagram.com/doncargowhite/',
  youtubeUrl: 'https://www.youtube.com/@Don_Cargo',
  tiktokUrl: 'https://www.tiktok.com/@don_cargo',

  // Клуб «Акулы» — ссылка на вход: кнопки клуба, меню и подвал
  sharksUrl: 'https://t.me/akulycargobot',

  // Бот клуба «Акулы» — ник без @. Дони после расчёта называет цену в клубе и даёт этого бота
  sharksBot: 'akulycargobot',

  // Менеджер в Telegram — ник без @
  managerTelegram: 'doncargo_help',

  // Менеджер в WhatsApp — номер только цифрами, с кодом страны: 79991234567.
  // Пока пусто — кнопки WhatsApp на сайте не показываются.
  managerWhatsapp: '',

  // Показывать тарифы клуба «Акулы» в калькуляторе и таблице
  showClubRates: true,

  // true — доставка до двери по Москве уже входит в тариф;
  // false — на сайте написано, что её стоимость менеджер называет по адресу
  doorDeliveryIncluded: false,

  // Адрес сервера ИИ-ассистента, если сайт и сервер живут на разных доменах,
  // например 'https://dcargo-api.up.railway.app'. Пусто — тот же адрес, что у сайта
  apiBase: '',

  // Номер счётчика Яндекс Метрики. Пусто — счётчик не подключается
  yandexMetrikaId: ''
};
