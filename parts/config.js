/*
  Настройки сайта D PARTS.
  Меняются без пересборки: правите, сохраняете, обновляете страницу.
*/
window.PARTS_CONFIG = {
  // Название в шапке и подвале. Рабочее — поменяем вместе с доменом
  brandName: 'D PARTS',

  // Менеджер в Telegram — ник без @. Ему уходит заявка с готовым текстом
  managerTelegram: 'managerDona',

  // Telegram-канал. Пусто — ссылка не показывается
  channelUrl: 'https://t.me/don_cargo',

  // Срок доставки из Китая в Москву, дней — показывается на сайте
  deliveryDays: '12–18',

  // Во сколько раз выходит дешевле — цифра в первом экране
  savingsUpTo: 4,

  // Адрес сервера ИИ-механика, если сайт и сервер на разных доменах. Пусто — тот же адрес
  apiBase: '',

  // Примеры экономии. ВАЖНО: сейчас это иллюстративные цифры для макета —
  // перед запуском замените на реальные сделки. Цены в рублях.
  //   part — деталь, car — автомобиль, newPrice — новая в России, ourPrice — б/у из Китая с доставкой
  examples: [
    { part: 'Фара светодиодная левая', car: 'Geely Monjaro', newPrice: 96000, ourPrice: 27000 },
    { part: 'Коробка-робот 7DCT в сборе', car: 'Haval Jolion', newPrice: 310000, ourPrice: 92000 },
    { part: 'Двигатель 1.6 турбо в сборе', car: 'Chery Tiggo 7 Pro Max', newPrice: 420000, ourPrice: 135000 },
    { part: 'Пневмостойка передняя', car: 'Li Auto L9', newPrice: 158000, ourPrice: 44000 },
    { part: 'Бампер передний в сборе', car: 'BMW X5', newPrice: 124000, ourPrice: 38000 },
    { part: 'Блок ABS', car: 'Toyota Camry', newPrice: 86000, ourPrice: 22000 },
    { part: 'Монитор мультимедиа', car: 'Tesla Model 3', newPrice: 142000, ourPrice: 41000 },
    { part: 'Дверь задняя правая', car: 'Zeekr 001', newPrice: 112000, ourPrice: 33000 }
  ]
};
