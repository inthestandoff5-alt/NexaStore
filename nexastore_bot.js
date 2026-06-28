const TelegramBot = require("node-telegram-bot-api");

const BOT_TOKEN = process.env.BOT_TOKEN;
const OPERATOR_USERNAME = "NexaStoreUZ_bot";
const OPERATOR_PHONE = "+998 90 123 45 67";

const bot = new TelegramBot(BOT_TOKEN, { polling: true });
console.log("🤖 NexaStore Bot ishga tushdi! Ctrl+C — to'xtatish");

const PRODUCTS = {
  phones: [
    {
      id: 1,
      name: "iPhone 15 Pro Max Titanium",
      price: 1399,
      stock: 3,
      emoji: "📱",
      spec: '6.7" | A17 Pro | 48MP | 256GB',
    },
    {
      id: 2,
      name: "Samsung Galaxy S24 Ultra",
      price: 1299,
      stock: 7,
      emoji: "📱",
      spec: '6.8" | SD 8 Gen 3 | 200MP | 12GB RAM',
    },
    {
      id: 3,
      name: "Xiaomi 14 Ultra Leica",
      price: 1099,
      stock: 5,
      emoji: "📱",
      spec: '6.73" | SD 8 Gen 3 | Leica 50MP | 16GB',
    },
    {
      id: 4,
      name: "Google Pixel 8 Pro",
      price: 999,
      stock: 10,
      emoji: "📱",
      spec: '6.7" | Tensor G3 | 50MP | 12GB',
    },
    {
      id: 5,
      name: "Samsung Galaxy Z Fold 5",
      price: 1799,
      stock: 4,
      emoji: "📱",
      spec: '7.6" Fold | SD 8 Gen 2 | 12GB RAM',
    },
  ],
  laptops: [
    {
      id: 20,
      name: 'MacBook Pro M3 Pro 14"',
      price: 1999,
      stock: 5,
      emoji: "💻",
      spec: "M3 Pro | 18GB | 512GB | Liquid Retina",
    },
    {
      id: 21,
      name: 'MacBook Air M2 15"',
      price: 1299,
      stock: 8,
      emoji: "💻",
      spec: 'M2 | 8GB | 256GB | 15.3" Retina',
    },
    {
      id: 22,
      name: "Asus ROG Zephyrus G14",
      price: 1599,
      stock: 4,
      emoji: "💻",
      spec: "Ryzen 9 | RTX 4060 | 16GB | 1TB",
    },
    {
      id: 23,
      name: "Lenovo ThinkPad X1 Carbon",
      price: 1799,
      stock: 3,
      emoji: "💻",
      spec: 'Core i7 | 16GB | 512GB | 14" IPS',
    },
    {
      id: 24,
      name: "Dell XPS 15 OLED",
      price: 1899,
      stock: 6,
      emoji: "💻",
      spec: "Core i9 | RTX 4060 | 32GB | OLED",
    },
  ],
  gadgets: [
    {
      id: 40,
      name: "Apple AirPods Pro 2",
      price: 249,
      stock: 20,
      emoji: "🎧",
      spec: "ANC | H2 chip | MagSafe | 30h",
    },
    {
      id: 41,
      name: "Apple Watch Ultra 2",
      price: 799,
      stock: 6,
      emoji: "⌚",
      spec: "49mm | Titanium | GPS+Cell | 60h",
    },
    {
      id: 42,
      name: "Samsung Galaxy Watch 6",
      price: 299,
      stock: 12,
      emoji: "⌚",
      spec: "44mm | BioActive | GPS | 40h",
    },
    {
      id: 43,
      name: "Sony WH-1000XM5",
      price: 349,
      stock: 15,
      emoji: "🎧",
      spec: "ANC | LDAC | 30h | USB-C",
    },
    {
      id: 44,
      name: "DJI Mini 4 Pro",
      price: 759,
      stock: 4,
      emoji: "🚁",
      spec: "4K/60fps | 34min | 249g | HDR",
    },
  ],
};

const ALL_PRODUCTS = [
  ...PRODUCTS.phones,
  ...PRODUCTS.laptops,
  ...PRODUCTS.gadgets,
];

const DISCOUNTS = {
  NEXA5: { amount: 5, type: "%", desc: "5% chegirma" },
  CYBER10: { amount: 10, type: "%", desc: "10% chegirma" },
  MEGA15: { amount: 15, type: "%", desc: "15% chegirma" },
  VIP20: { amount: 20, type: "%", desc: "20% chegirma" },
  SUPER25: { amount: 25, type: "%", desc: "25% chegirma" },
  FREESHIP: { amount: 0, type: "ship", desc: "Bepul yetkazish" },
  PREMIUM2026: {
    amount: 30,
    type: "%",
    desc: "30% chegirma (noutbuk aksessuarlari)",
  },
};

const userState = {};

function getState(chatId) {
  return userState[chatId] || null;
}
function setState(chatId, step, data = {}) {
  userState[chatId] = { step, data };
}
function clearState(chatId) {
  delete userState[chatId];
}

const mainKeyboard = {
  reply_markup: {
    keyboard: [
      [{ text: "📦 Mahsulotlar" }, { text: "🛒 Buyurtma berish" }],
      [{ text: "🎟 Kupon tekshirish" }, { text: "❓ Savol-javob" }],
      [{ text: "📞 Operator" }, { text: "ℹ️ Biz haqimizda" }],
    ],
    resize_keyboard: true,
  },
};

const cancelKeyboard = {
  reply_markup: {
    keyboard: [[{ text: "❌ Bekor qilish" }]],
    resize_keyboard: true,
  },
};

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const name = msg.from.first_name || "Mehmon";
  clearState(chatId);

  const text =
    `👋 Xush kelibsiz, *${name}*\\!\n\n` +
    `🏪 *NexaStore* — O'zbekiston №1 Premium Texnologiyalar Do'koni\n\n` +
    `📱 Smartfonlar \\| 💻 Noutbuklar \\| 🎧 Gadjetlar\n` +
    `✅ 100% Original \\| 🚚 Bepul Yetkazish \\| 🔒 2 Yil Kafolat\n\n` +
    `Quyidagi tugmalardan birini tanlang 👇`;

  bot.sendMessage(chatId, text, { parse_mode: "MarkdownV2", ...mainKeyboard });
});

bot.onText(/\/help/, (msg) => {
  const chatId = msg.chat.id;
  const text =
    `🤖 *NexaStore Bot — Yordam*\n\n` +
    `📌 Buyruqlar:\n` +
    `/start — Botni qayta ishga tushirish\n` +
    `/products — Mahsulotlar katalogi\n` +
    `/order — Buyurtma berish\n` +
    `/coupon — Kupon tekshirish\n` +
    `/faq — Ko'p beriladigan savollar\n` +
    `/operator — Operator bilan bog'lanish\n` +
    `/about — Biz haqimizda\n\n` +
    `💬 Yoki pastdagi tugmalardan foydalaning!`;

  bot.sendMessage(chatId, text, { parse_mode: "Markdown", ...mainKeyboard });
});

// ─── MAHSULOTLAR MENYUSI ──────────────────────────────────────
function showProductsMenu(chatId) {
  bot.sendMessage(
    chatId,
    "📦 *Mahsulotlar Katalogi*\n\nKategoriyani tanlang:",
    {
      parse_mode: "Markdown",
      reply_markup: {
        inline_keyboard: [
          [{ text: "📱 Smartfonlar (5 ta)", callback_data: "cat_phones" }],
          [{ text: "💻 Noutbuklar (5 ta)", callback_data: "cat_laptops" }],
          [{ text: "🎧 Gadjetlar (5 ta)", callback_data: "cat_gadgets" }],
          [{ text: "🔥 Bestseller mahsulotlar", callback_data: "cat_best" }],
        ],
      },
    },
  );
}

// ─── SAVOL-JAVOB MENYUSI ──────────────────────────────────────
function showFaqMenu(chatId) {
  bot.sendMessage(
    chatId,
    "❓ *Ko'p Beriladigan Savollar*\n\nQaysi mavzu qiziqtiradi?",
    {
      parse_mode: "Markdown",
      reply_markup: {
        inline_keyboard: [
          [{ text: "💳 To'lov usullari", callback_data: "faq_payment" }],
          [{ text: "🚚 Yetkazib berish", callback_data: "faq_delivery" }],
          [{ text: "↩️ Qaytarish siyosati", callback_data: "faq_return" }],
          [
            {
              text: "✅ Mahsulotlar originalligi",
              callback_data: "faq_original",
            },
          ],
          [{ text: "🔧 Kafolat va xizmat", callback_data: "faq_warranty" }],
          [{ text: "🎰 Chegirma o'yini", callback_data: "faq_spin" }],
        ],
      },
    },
  );
}

// ─── OPERATOR ─────────────────────────────────────────────────
function showOperator(chatId) {
  bot.sendMessage(
    chatId,
    `📞 *Operator bilan Bog'lanish*\n\n` +
      `👤 Telegram: @${OPERATOR_USERNAME}\n` +
      `📱 Telefon: ${OPERATOR_PHONE}\n` +
      `⏰ Ish vaqti: 09:00 – 21:00\n\n` +
      `💬 Operatorimiz 2–5 daqiqada javob beradi!`,
    {
      parse_mode: "Markdown",
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "💬 Telegramda yozish",
              url: `https://t.me/${OPERATOR_USERNAME}`,
            },
          ],
          [
            {
              text: "📞 Qo'ng'iroq",
              url: `tel:${OPERATOR_PHONE.replace(/\s/g, "")}`,
            },
          ],
        ],
      },
    },
  );
}

// ─── KUPON ────────────────────────────────────────────────────
function showCouponMenu(chatId) {
  setState(chatId, "waiting_coupon");
  bot.sendMessage(
    chatId,
    `🎟 *Kupon Tekshirish*\n\n` +
      `Kupon kodingizni kiriting:\n\n` +
      `💡 *Mavjud kuponlar:*\n` +
      `• \`NEXA5\` — 5% chegirma\n` +
      `• \`CYBER10\` — 10% chegirma\n` +
      `• \`MEGA15\` — 15% chegirma\n` +
      `• \`VIP20\` — 20% chegirma\n` +
      `• \`SUPER25\` — 25% chegirma\n` +
      `• \`FREESHIP\` — Bepul yetkazish\n` +
      `• \`PREMIUM2026\` — 30% (noutbuk)\n\n` +
      `Kodingizni kiriting 👇`,
    { parse_mode: "Markdown", ...cancelKeyboard },
  );
}

// ─── BIZ HAQIMIZDA ────────────────────────────────────────────
function showAbout(chatId) {
  bot.sendMessage(
    chatId,
    `ℹ️ *NexaStore haqida*\n\n` +
      `🏆 O'zbekiston №1 Premium Texnologiyalar Do'koni\n\n` +
      `📅 Tashkil etilgan: 2022 yil\n` +
      `📍 Joylashuv: Toshkent, O'zbekiston\n` +
      `👥 Mamnun mijozlar: 15,000+\n` +
      `📦 Mahsulotlar: 42+ premium model\n` +
      `⭐ O'rtacha reyting: 4.9 / 5.0\n\n` +
      `🔗 Ijtimoiy tarmoqlar:\n` +
      `• Telegram: @nexastore_uz\n` +
      `• Instagram: @nexastore.uz\n\n` +
      `🌐 Sayt: nexastore.uz`,
    {
      parse_mode: "Markdown",
      reply_markup: {
        inline_keyboard: [
          [{ text: "🌐 Saytga o'tish", url: "https://nexastore.uz" }],
          [{ text: "📱 Telegram kanal", url: "https://t.me/nexastore_uz" }],
        ],
      },
    },
  );
}

// ─── BUYURTMA JARAYONI ────────────────────────────────────────
function startOrder(chatId, productId = null) {
  setState(chatId, "order_name", { productId });
  bot.sendMessage(
    chatId,
    `🛒 *Buyurtma Berish*\n\n` +
      `Buyurtmangizni rasmiylashtiramiz!\n` +
      `Operatorimiz tez orada siz bilan bog'lanadi.\n\n` +
      `📝 *1-qadam:* To'liq ismingizni kiriting:`,
    { parse_mode: "Markdown", ...cancelKeyboard },
  );
}

function handleOrderStep(chatId, text) {
  const state = getState(chatId);
  if (!state) return false;

  if (text === "❌ Bekor qilish") {
    clearState(chatId);
    bot.sendMessage(chatId, "❌ Buyurtma bekor qilindi.", mainKeyboard);
    return true;
  }

  const { step, data } = state;

  if (step === "order_name") {
    setState(chatId, "order_phone", { ...data, name: text });
    bot.sendMessage(
      chatId,
      `✅ *${text}* — qabul qilindi!\n\n📱 *2-qadam:* Telefon raqamingizni kiriting:\n_(+998 90 123 45 67)_`,
      { parse_mode: "Markdown", ...cancelKeyboard },
    );
    return true;
  }

  if (step === "order_phone") {
    setState(chatId, "order_address", { ...data, phone: text });
    bot.sendMessage(
      chatId,
      `✅ Telefon qabul qilindi!\n\n🏠 *3-qadam:* Yetkazib berish manzilini kiriting:\n_(Toshkent, tuman, ko'cha, uy)_`,
      { parse_mode: "Markdown", ...cancelKeyboard },
    );
    return true;
  }

  if (step === "order_address") {
    const newData = { ...data, address: text };

    if (data.productId) {
      const prod = ALL_PRODUCTS.find((p) => p.id === data.productId);
      newData.productName = prod
        ? `${prod.emoji} ${prod.name} — $${prod.price}`
        : "Noma'lum mahsulot";
      finishOrder(chatId, newData);
    } else {
      setState(chatId, "order_product", newData);

      const buttons = ALL_PRODUCTS.slice(0, 8).map((p) => [
        {
          text: `${p.emoji} ${p.name} — $${p.price}`,
          callback_data: `orderprod_${p.id}`,
        },
      ]);
      buttons.push([
        {
          text: "📦 Boshqa (operatorga aytaman)",
          callback_data: "orderprod_other",
        },
      ]);

      bot.sendMessage(
        chatId,
        `✅ Manzil qabul qilindi!\n\n🛍 *4-qadam:* Mahsulotni tanlang:`,
        {
          parse_mode: "Markdown",
          reply_markup: { inline_keyboard: buttons },
        },
      );
    }
    return true;
  }

  if (step === "order_product") {
    finishOrder(chatId, { ...data, productName: text });
    return true;
  }

  if (step === "waiting_coupon") {
    checkCoupon(chatId, text);
    return true;
  }

  return false;
}

function finishOrder(chatId, data) {
  clearState(chatId);
  bot.sendMessage(
    chatId,
    `✅ *BUYURTMA QABUL QILINDI!*\n\n` +
      `👤 *Ism:* ${data.name || "-"}\n` +
      `📱 *Telefon:* ${data.phone || "-"}\n` +
      `🏠 *Manzil:* ${data.address || "-"}\n` +
      `🛍 *Mahsulot:* ${data.productName || "-"}\n\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `🕐 Operatorimiz *30 daqiqa* ichida bog'lanadi!\n` +
      `🚚 Toshkentga bepul yetkazish: *3–6 soat*`,
    { parse_mode: "Markdown", ...mainKeyboard },
  );
}

function checkCoupon(chatId, code) {
  clearState(chatId);
  const upper = code.toUpperCase().trim();
  const discount = DISCOUNTS[upper];

  if (discount) {
    const result =
      discount.type === "ship"
        ? "🚚 BEPUL YETKAZISH — yetkazib berish 0 so'm!"
        : `🎉 ${discount.amount}% CHEGIRMA — faol va haqiqiy!`;

    bot.sendMessage(
      chatId,
      `✅ *KUPON TASDIQLANDI!*\n\n🎟 Kod: \`${upper}\`\n🎁 ${result}\n\nKodni buyurtma berayotganda operatorga ayting!`,
      { parse_mode: "Markdown", ...mainKeyboard },
    );
  } else {
    bot.sendMessage(
      chatId,
      `❌ *'${upper}'* — bunday kupon topilmadi!\n\nKodni to'g'ri kiritganingizni tekshiring.\nYangi kuponlar uchun /coupon yozing.`,
      { parse_mode: "Markdown", ...mainKeyboard },
    );
  }
}

// ─── XABARLARNI USHLASH ───────────────────────────────────────
bot.on("message", (msg) => {
  if (!msg.text || msg.text.startsWith("/")) return;
  const chatId = msg.chat.id;
  const text = msg.text;

  // Buyurtma yoki kupon holati
  if (handleOrderStep(chatId, text)) return;

  // Asosiy tugmalar
  switch (text) {
    case "📦 Mahsulotlar":
      return showProductsMenu(chatId);
    case "🛒 Buyurtma berish":
      return startOrder(chatId);
    case "🎟 Kupon tekshirish":
      return showCouponMenu(chatId);
    case "❓ Savol-javob":
      return showFaqMenu(chatId);
    case "📞 Operator":
      return showOperator(chatId);
    case "ℹ️ Biz haqimizda":
      return showAbout(chatId);
    default:
      bot.sendMessage(
        chatId,
        "🤔 Tushunmadim. Iltimos, tugmalardan foydalaning yoki /help yozing.",
        mainKeyboard,
      );
  }
});

// ─── INLINE TUGMALAR (callback) ───────────────────────────────
bot.on("callback_query", (query) => {
  const chatId = query.message.chat.id;
  const data = query.data;
  bot.answerCallbackQuery(query.id);

  // ── Kategoriyalar
  if (
    data === "cat_phones" ||
    data === "cat_laptops" ||
    data === "cat_gadgets"
  ) {
    const catMap = {
      cat_phones: "phones",
      cat_laptops: "laptops",
      cat_gadgets: "gadgets",
    };
    const titleMap = {
      cat_phones: "📱 Smartfonlar",
      cat_laptops: "💻 Noutbuklar",
      cat_gadgets: "🎧 Gadjetlar",
    };
    const items = PRODUCTS[catMap[data]];
    let text = `*${titleMap[data]}*\n\n`;
    items.forEach((p) => {
      const stockEmoji = p.stock <= 3 ? "🔴" : "🟢";
      text += `${p.emoji} *${p.name}*\n   💵 $${p.price} | ${stockEmoji} ${p.stock} ta qoldi\n\n`;
    });
    const buttons = items.map((p) => [
      {
        text: `${p.emoji} ${p.name} — $${p.price}`,
        callback_data: `prod_${p.id}`,
      },
    ]);
    buttons.push([
      { text: "⬅️ Orqaga", callback_data: "back_products" },
      { text: "🛒 Buyurtma", callback_data: "order_new" },
    ]);
    bot.editMessageText(text, {
      chat_id: chatId,
      message_id: query.message.message_id,
      parse_mode: "Markdown",
      reply_markup: { inline_keyboard: buttons },
    });
    return;
  }

  // ── Bestseller
  if (data === "cat_best") {
    const best = [
      PRODUCTS.phones[0],
      PRODUCTS.laptops[0],
      PRODUCTS.gadgets[0],
      PRODUCTS.gadgets[1],
    ];
    let text = "🔥 *Hafta Bestsellerlari*\n\n";
    best.forEach((p) => {
      text += `${p.emoji} *${p.name}* — $${p.price}\n`;
    });
    const buttons = best.map((p) => [
      { text: `${p.emoji} ${p.name}`, callback_data: `prod_${p.id}` },
    ]);
    buttons.push([{ text: "⬅️ Orqaga", callback_data: "back_products" }]);
    bot.editMessageText(text, {
      chat_id: chatId,
      message_id: query.message.message_id,
      parse_mode: "Markdown",
      reply_markup: { inline_keyboard: buttons },
    });
    return;
  }

  // ── Mahsulot detali
  if (data.startsWith("prod_")) {
    const id = parseInt(data.replace("prod_", ""));
    const p = ALL_PRODUCTS.find((x) => x.id === id);
    if (!p) return;
    const stockStatus = p.stock <= 3 ? "🔴 Kam qoldi" : "🟢 Mavjud";
    const text =
      `${p.emoji} *${p.name}*\n` +
      `${"─".repeat(28)}\n` +
      `💵 *Narx:* $${p.price.toLocaleString()}\n` +
      `📊 *Xususiyat:* ${p.spec}\n` +
      `📦 *Zaxira:* ${p.stock} ta | ${stockStatus}\n` +
      `✅ *Kafolat:* 2 yil rasmiy\n` +
      `🚚 *Yetkazish:* Bepul (3–6 soat Toshkent)\n` +
      `💳 *To'lov:* Naqd, Click, Payme\n` +
      `↩️ *Qaytarish:* 14 kun ichida\n`;
    bot.editMessageText(text, {
      chat_id: chatId,
      message_id: query.message.message_id,
      parse_mode: "Markdown",
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "🛒 Shu mahsulotni buyurtma qilish",
              callback_data: `order_${id}`,
            },
          ],
          [{ text: "📞 Operator", url: `https://t.me/${OPERATOR_USERNAME}` }],
          [{ text: "⬅️ Orqaga", callback_data: "back_products" }],
        ],
      },
    });
    return;
  }

  // ── Mahsulotdan buyurtma
  if (data.startsWith("order_") && data !== "order_new") {
    const id = parseInt(data.replace("order_", ""));
    startOrder(chatId, isNaN(id) ? null : id);
    return;
  }
  if (data === "order_new") {
    startOrder(chatId);
    return;
  }

  // ── Buyurtmada mahsulot tanlash
  if (data.startsWith("orderprod_")) {
    const state = getState(chatId);
    if (!state) return;
    if (data === "orderprod_other") {
      finishOrder(chatId, {
        ...state.data,
        productName: "Operator bilan kelishiladi",
      });
    } else {
      const id = parseInt(data.replace("orderprod_", ""));
      const p = ALL_PRODUCTS.find((x) => x.id === id);
      finishOrder(chatId, {
        ...state.data,
        productName: p ? `${p.emoji} ${p.name} — $${p.price}` : "Noma'lum",
      });
    }
    return;
  }

  // ── FAQ javoblari
  const faqAnswers = {
    faq_payment:
      `💳 *To'lov Usullari*\n\n` +
      `• 💵 Naqd pul (oldindan emas, mahsulot kelgach)\n` +
      `• 📱 Click\n• 📱 Payme\n• 🏦 Bank terminali\n• 💳 Bank o'tkazmasi\n\n` +
      `⚡ Oldindan to'lov talab qilinmaydi!`,
    faq_delivery:
      `🚚 *Yetkazib Berish*\n\n` +
      `• 🏙 Toshkent: 3–6 soat\n• 🗺 Viloyatlar: 1–3 kun\n` +
      `• 💰 Narx: MUTLAQO BEPUL!\n\n` +
      `📦 Original qutisida, yopilgan holda yetkaziladi.`,
    faq_return:
      `↩️ *Qaytarish Siyosati*\n\n` +
      `✅ 14 kun ichida hech qanday sabab ko'rsatmasdan qaytarish!\n\n` +
      `Shartlar: original quti, zararsiz holat, barcha aksessuarlar.\n` +
      `💰 Pul to'liq qaytariladi.`,
    faq_original:
      `✅ *Mahsulotlar Originalligi*\n\n` +
      `• 100% original, sertifikatlangan\n• Qutisi hech qachon ochilmagan\n` +
      `• Xalqaro IMEI ro'yxatidan o'tgan\n• Rasmiy distributorlardan olingan`,
    faq_warranty:
      `🔧 *Kafolat*\n\n` +
      `• ✅ 2 yil rasmiy kafolat\n• 🔄 Bepul ta'mirlash/almashtirish\n` +
      `• 📞 24/7 texnik qo'llab-quvvatlash`,
    faq_spin:
      `🎰 *Chegirma G'ildiragi*\n\n` +
      `• Saytda har kuni bir marta aylantiring\n` +
      `• 5% — 25% chegirma yuting!\n• Bepul yetkazish ham mumkin\n\n` +
      `🌐 nexastore.uz saytiga o'ting!`,
  };

  if (data in faqAnswers) {
    bot.editMessageText(faqAnswers[data], {
      chat_id: chatId,
      message_id: query.message.message_id,
      parse_mode: "Markdown",
      reply_markup: {
        inline_keyboard: [
          [{ text: "⬅️ Boshqa savol", callback_data: "back_faq" }],
          [{ text: "📞 Operator", url: `https://t.me/${OPERATOR_USERNAME}` }],
        ],
      },
    });
    return;
  }

  // ── Orqaga tugmalari
  if (data === "back_products") {
    showProductsMenu(chatId);
    return;
  }
  if (data === "back_faq") {
    showFaqMenu(chatId);
    return;
  }
});

// ─── XATOLARNI USHLASH ────────────────────────────────────────
bot.on("polling_error", (err) => {
  console.error("❌ Polling xatosi:", err.message);
  if (err.message.includes("ETELEGRAM: 401")) {
    console.error("🔑 BOT_TOKEN noto'g'ri! @BotFather dan tekshiring.");
    process.exit(1);
  }
});
