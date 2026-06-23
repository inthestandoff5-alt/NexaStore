// ─── PRODUCT DATA ───
const products = [
  {
    id: 1,
    name: "iPhone 15 Pro Max Titanium",
    price: 1399,
    category: "phone",
    badge: "hot",
    rating: 4.9,
    reviews: 2340,
    stock: 3,
    img: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=500&q=80",
    specs: {
      Ekran: '6.7" Super Retina XDR',
      Protsessor: "Apple A17 Pro",
      RAM: "8 GB",
      Xotira: "256 GB",
      Batareya: "4422 mAh",
      Kamera: "48MP + 12MP + 12MP",
    },
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    price: 1299,
    category: "phone",
    badge: "new",
    rating: 4.8,
    reviews: 1890,
    stock: 7,
    img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=500&q=80",
    specs: {
      Ekran: '6.8" Dynamic AMOLED',
      Protsessor: "Snapdragon 8 Gen 3",
      RAM: "12 GB",
      Xotira: "256 GB",
      Batareya: "5000 mAh",
      Kamera: "200MP + 12MP + 10MP",
    },
  },
  {
    id: 3,
    name: "Xiaomi 14 Ultra Leica",
    price: 1099,
    category: "phone",
    badge: "sale",
    rating: 4.7,
    reviews: 980,
    stock: 5,
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=80",
    specs: {
      Ekran: '6.73" LTPO AMOLED',
      Protsessor: "Snapdragon 8 Gen 3",
      RAM: "16 GB",
      Xotira: "512 GB",
      Batareya: "5000 mAh",
      Kamera: "50MP Leica x4",
    },
  },
  {
    id: 4,
    name: "Google Pixel 8 Pro",
    price: 999,
    category: "phone",
    badge: "new",
    rating: 4.6,
    reviews: 760,
    stock: 10,
    img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=500&q=80",
    specs: {
      Ekran: '6.7" LTPO OLED',
      Protsessor: "Google Tensor G3",
      RAM: "12 GB",
      Xotira: "128 GB",
      Batareya: "5050 mAh",
      Kamera: "50MP + 48MP + 48MP",
    },
  },
  {
    id: 5,
    name: "OnePlus 12 Dual-SIM",
    price: 899,
    category: "phone",
    badge: null,
    rating: 4.5,
    reviews: 540,
    stock: 8,
    img: "https://images.unsplash.com/photo-1565630916779-e303be97b6f5?auto=format&fit=crop&w=500&q=80",
    specs: {
      Ekran: '6.82" LTPO AMOLED',
      Protsessor: "Snapdragon 8 Gen 3",
      RAM: "16 GB",
      Xotira: "256 GB",
      Batareya: "5400 mAh",
      Kamera: "50MP + 64MP + 48MP",
    },
  },
  {
    id: 6,
    name: "iPhone 14 Pro Deep Purple",
    price: 1099,
    category: "phone",
    badge: "sale",
    rating: 4.8,
    reviews: 3100,
    stock: 2,
    img: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?auto=format&fit=crop&w=500&q=80",
    specs: {
      Ekran: '6.1" Super Retina XDR',
      Protsessor: "Apple A16 Bionic",
      RAM: "6 GB",
      Xotira: "128 GB",
      Batareya: "3200 mAh",
      Kamera: "48MP + 12MP + 12MP",
    },
  },
  {
    id: 7,
    name: "Samsung Galaxy Z Fold 5",
    price: 1799,
    category: "phone",
    badge: "hot",
    rating: 4.7,
    reviews: 420,
    stock: 4,
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=80",
    specs: {
      Ekran: '7.6" Foldable AMOLED',
      Protsessor: "Snapdragon 8 Gen 2",
      RAM: "12 GB",
      Xotira: "256 GB",
      Batareya: "4400 mAh",
      Kamera: "50MP + 12MP + 10MP",
    },
  },
  {
    id: 8,
    name: "Asus ROG Phone 8 Pro",
    price: 1199,
    category: "phone",
    badge: "new",
    rating: 4.6,
    reviews: 310,
    stock: 6,
    img: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&w=500&q=80",
    specs: {
      Ekran: '6.78" AMOLED 165Hz',
      Protsessor: "Snapdragon 8 Gen 3",
      RAM: "24 GB",
      Xotira: "1 TB",
      Batareya: "5500 mAh",
      Kamera: "50MP + 13MP + 32MP",
    },
  },
  {
    id: 9,
    name: "Sony Xperia 1 V",
    price: 1249,
    category: "phone",
    badge: null,
    rating: 4.5,
    reviews: 280,
    stock: 5,
    img: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=500&q=80",
    specs: {
      Ekran: '6.5" 4K OLED 120Hz',
      Protsessor: "Snapdragon 8 Gen 2",
      RAM: "12 GB",
      Xotira: "256 GB",
      Batareya: "5000 mAh",
      Kamera: "52MP Zeiss x3",
    },
  },
  {
    id: 10,
    name: "Huawei P60 Pro",
    price: 949,
    category: "phone",
    badge: "sale",
    rating: 4.4,
    reviews: 450,
    stock: 9,
    img: "https://images.unsplash.com/photo-1565630916779-e303be97b6f5?auto=format&fit=crop&w=500&q=80",
    specs: {
      Ekran: '6.67" OLED 120Hz',
      Protsessor: "Snapdragon 8+ Gen 1",
      RAM: "8 GB",
      Xotira: "256 GB",
      Batareya: "4815 mAh",
      Kamera: "48MP Leica + 13MP + 48MP",
    },
  },
  {
    id: 11,
    name: "iPhone 15 Plus",
    price: 929,
    category: "phone",
    badge: "new",
    rating: 4.7,
    reviews: 1200,
    stock: 12,
    img: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=500&q=80",
    specs: {
      Ekran: '6.7" Super Retina XDR',
      Protsessor: "Apple A16 Bionic",
      RAM: "6 GB",
      Xotira: "128 GB",
      Batareya: "4383 mAh",
      Kamera: "48MP + 12MP",
    },
  },
  {
    id: 12,
    name: "Samsung Galaxy S23 Plus",
    price: 899,
    category: "phone",
    badge: "sale",
    rating: 4.6,
    reviews: 890,
    stock: 7,
    img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=500&q=80",
    specs: {
      Ekran: '6.6" Dynamic AMOLED',
      Protsessor: "Snapdragon 8 Gen 2",
      RAM: "8 GB",
      Xotira: "256 GB",
      Batareya: "4700 mAh",
      Kamera: "50MP + 12MP + 10MP",
    },
  },
  {
    id: 13,
    name: "Xiaomi Redmi Note 13 Pro+",
    price: 449,
    category: "phone",
    badge: null,
    rating: 4.5,
    reviews: 2100,
    stock: 20,
    img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=500&q=80",
    specs: {
      Ekran: '6.67" AMOLED 120Hz',
      Protsessor: "Dimensity 7200 Ultra",
      RAM: "12 GB",
      Xotira: "256 GB",
      Batareya: "5000 mAh",
      Kamera: "200MP + 8MP + 2MP",
    },
  },
  {
    id: 14,
    name: "Nothing Phone (2)",
    price: 649,
    category: "phone",
    badge: "new",
    rating: 4.4,
    reviews: 630,
    stock: 8,
    img: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?auto=format&fit=crop&w=500&q=80",
    specs: {
      Ekran: '6.7" LTPO OLED 120Hz',
      Protsessor: "Snapdragon 8+ Gen 1",
      RAM: "12 GB",
      Xotira: "256 GB",
      Batareya: "4700 mAh",
      Kamera: "50MP + 50MP",
    },
  },
  {
    id: 15,
    name: "Motorola Edge 40 Pro",
    price: 799,
    category: "phone",
    badge: null,
    rating: 4.3,
    reviews: 340,
    stock: 6,
    img: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&w=500&q=80",
    specs: {
      Ekran: '6.67" pOLED 165Hz',
      Protsessor: "Snapdragon 8 Gen 2",
      RAM: "12 GB",
      Xotira: "256 GB",
      Batareya: "4600 mAh",
      Kamera: "50MP + 50MP + 12MP",
    },
  },
  {
    id: 16,
    name: 'MacBook Pro M3 Max 16"',
    price: 3499,
    category: "laptop",
    badge: "hot",
    rating: 4.9,
    reviews: 1540,
    stock: 2,
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=80",
    specs: {
      Ekran: '16.2" Liquid Retina XDR',
      Protsessor: "Apple M3 Max",
      RAM: "36 GB",
      Xotira: "1 TB SSD",
      Batareya: "22 soat",
      GPU: "40-core GPU",
    },
  },
  {
    id: 17,
    name: "Asus ROG Strix SCAR 18",
    price: 2999,
    category: "laptop",
    badge: "new",
    rating: 4.8,
    reviews: 380,
    stock: 3,
    img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=500&q=80",
    specs: {
      Ekran: '18" QHD+ 240Hz',
      Protsessor: "Intel i9-14900HX",
      RAM: "32 GB DDR5",
      Xotira: "2 TB NVMe",
      Batareya: "90Wh",
      GPU: "RTX 4090 16GB",
    },
  },
  {
    id: 18,
    name: "Lenovo Legion Pro 7i",
    price: 2399,
    category: "laptop",
    badge: "sale",
    rating: 4.7,
    reviews: 720,
    stock: 5,
    img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=500&q=80",
    specs: {
      Ekran: '16" IPS 240Hz',
      Protsessor: "Intel i9-13900HX",
      RAM: "32 GB DDR5",
      Xotira: "1 TB NVMe",
      Batareya: "99.9Wh",
      GPU: "RTX 4080 12GB",
    },
  },
  {
    id: 19,
    name: "Razer Blade 16 OLED",
    price: 2899,
    category: "laptop",
    badge: "hot",
    rating: 4.8,
    reviews: 290,
    stock: 2,
    img: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=500&q=80",
    specs: {
      Ekran: '16" QHD+ OLED 240Hz',
      Protsessor: "Intel i9-13950HX",
      RAM: "32 GB DDR5",
      Xotira: "1 TB NVMe",
      Batareya: "95.2Wh",
      GPU: "RTX 4090 16GB",
    },
  },
  {
    id: 20,
    name: "Dell XPS 15 Titanium",
    price: 1999,
    category: "laptop",
    badge: "new",
    rating: 4.6,
    reviews: 640,
    stock: 6,
    img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=500&q=80",
    specs: {
      Ekran: '15.6" OLED 3.5K',
      Protsessor: "Intel i7-13700H",
      RAM: "16 GB",
      Xotira: "512 GB SSD",
      Batareya: "86Wh",
      GPU: "RTX 4060 8GB",
    },
  },
  {
    id: 21,
    name: "HP Spectre x360",
    price: 1699,
    category: "laptop",
    badge: null,
    rating: 4.5,
    reviews: 510,
    stock: 7,
    img: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=500&q=80",
    specs: {
      Ekran: '14" OLED 2.8K Touch',
      Protsessor: "Intel i7-1355U",
      RAM: "16 GB",
      Xotira: "1 TB SSD",
      Batareya: "17 soat",
      GPU: "Intel Iris Xe",
    },
  },
  {
    id: 22,
    name: 'MacBook Air M3 15"',
    price: 1499,
    category: "laptop",
    badge: "sale",
    rating: 4.8,
    reviews: 2300,
    stock: 10,
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=80",
    specs: {
      Ekran: '15.3" Liquid Retina',
      Protsessor: "Apple M3",
      RAM: "8 GB",
      Xotira: "256 GB SSD",
      Batareya: "18 soat",
      GPU: "10-core GPU",
    },
  },
  {
    id: 23,
    name: "Asus Zenbook Pro 14 Duo",
    price: 2199,
    category: "laptop",
    badge: "new",
    rating: 4.6,
    reviews: 270,
    stock: 4,
    img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=500&q=80",
    specs: {
      Ekran: '14.5" OLED 2.8K + 12.7" Screen Pad',
      Protsessor: "Intel i9-13900H",
      RAM: "32 GB",
      Xotira: "1 TB NVMe",
      Batareya: "76Wh",
      GPU: "RTX 4070 8GB",
    },
  },
  {
    id: 24,
    name: "MSI Titan GT77",
    price: 3999,
    category: "laptop",
    badge: "hot",
    rating: 4.7,
    reviews: 180,
    stock: 1,
    img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=500&q=80",
    specs: {
      Ekran: '17.3" 4K UHD 144Hz',
      Protsessor: "Intel i9-12900HX",
      RAM: "64 GB DDR5",
      Xotira: "4 TB NVMe",
      Batareya: "99.9Wh",
      GPU: "RTX 3080 Ti 16GB",
    },
  },
  {
    id: 25,
    name: "Acer Predator Helios 16",
    price: 1799,
    category: "laptop",
    badge: "sale",
    rating: 4.5,
    reviews: 420,
    stock: 5,
    img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=500&q=80",
    specs: {
      Ekran: '16" QHD 240Hz IPS',
      Protsessor: "Intel i9-13900HX",
      RAM: "16 GB DDR5",
      Xotira: "1 TB SSD",
      Batareya: "90Wh",
      GPU: "RTX 4070 8GB",
    },
  },
  {
    id: 26,
    name: "Lenovo Yoga Book 9i",
    price: 1999,
    category: "laptop",
    badge: null,
    rating: 4.4,
    reviews: 230,
    stock: 6,
    img: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=500&q=80",
    specs: {
      Ekran: '13.3" OLED x2 (dual screen)',
      Protsessor: "Intel i7-1355U",
      RAM: "16 GB",
      Xotira: "1 TB SSD",
      Batareya: "80Wh",
      GPU: "Intel Iris Xe",
    },
  },
  {
    id: 27,
    name: "Microsoft Surface Laptop 5",
    price: 1299,
    category: "laptop",
    badge: "new",
    rating: 4.5,
    reviews: 780,
    stock: 8,
    img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=500&q=80",
    specs: {
      Ekran: '15" PixelSense Touch',
      Protsessor: "Intel i7-1265U",
      RAM: "16 GB",
      Xotira: "512 GB SSD",
      Batareya: "18 soat",
      GPU: "Intel Iris Xe",
    },
  },
  {
    id: 28,
    name: "Gigabyte Aorus 17X",
    price: 2699,
    category: "laptop",
    badge: "hot",
    rating: 4.7,
    reviews: 190,
    stock: 3,
    img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=500&q=80",
    specs: {
      Ekran: '17.3" QHD 240Hz',
      Protsessor: "Intel i9-13980HX",
      RAM: "32 GB DDR5",
      Xotira: "2 TB NVMe",
      Batareya: "99Wh",
      GPU: "RTX 4080 12GB",
    },
  },
  {
    id: 29,
    name: "Samsung Galaxy Book 4 Ultra",
    price: 2399,
    category: "laptop",
    badge: "new",
    rating: 4.6,
    reviews: 310,
    stock: 5,
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=80",
    specs: {
      Ekran: '16" AMOLED 3K 120Hz',
      Protsessor: "Intel i9-14900H",
      RAM: "32 GB",
      Xotira: "1 TB NVMe",
      Batareya: "76Wh",
      GPU: "RTX 4070 8GB",
    },
  },
  {
    id: 30,
    name: "Asus TUF Gaming A15",
    price: 1099,
    category: "laptop",
    badge: "sale",
    rating: 4.5,
    reviews: 960,
    stock: 12,
    img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=500&q=80",
    specs: {
      Ekran: '15.6" FHD 144Hz IPS',
      Protsessor: "AMD Ryzen 9 7940HS",
      RAM: "16 GB DDR5",
      Xotira: "512 GB NVMe",
      Batareya: "90Wh",
      GPU: "RTX 4060 8GB",
    },
  },
  {
    id: 31,
    name: "Apple Watch Ultra 2",
    price: 799,
    category: "gadget",
    badge: "hot",
    rating: 4.9,
    reviews: 1200,
    stock: 5,
    img: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&w=500&q=80",
    specs: {
      Ekran: "49mm Always-On Retina",
      Protsessor: "Apple S9",
      Xotira: "64 GB",
      Batareya: "36 soat",
      Suv: "100m",
      GPS: "Dual-frequency",
    },
  },
  {
    id: 32,
    name: "AirPods Pro 2 (USB-C)",
    price: 249,
    category: "gadget",
    badge: "sale",
    rating: 4.8,
    reviews: 3400,
    stock: 20,
    img: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?auto=format&fit=crop&w=500&q=80",
    specs: {
      Chip: "Apple H2",
      ANC: "Adaptive Transparency",
      Batareya: "6 soat (30 soat case)",
      Suv: "IPX4",
      Audio: "Spatial Audio",
      Ulanish: "Bluetooth 5.3",
    },
  },
  {
    id: 33,
    name: "Sony WH-1000XM5",
    price: 399,
    category: "gadget",
    badge: "hot",
    rating: 4.9,
    reviews: 2800,
    stock: 8,
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80",
    specs: {
      Drayvер: "30mm",
      ANC: "8 mikrofon ANC",
      Batareya: "30 soat",
      Ulanish: "Bluetooth 5.2",
      Audio: "LDAC Hi-Res",
      Og: "250g",
    },
  },
  {
    id: 34,
    name: "Samsung Galaxy Watch 6 Classic",
    price: 349,
    category: "gadget",
    badge: "new",
    rating: 4.6,
    reviews: 860,
    stock: 10,
    img: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&w=500&q=80",
    specs: {
      Ekran: "47mm Super AMOLED",
      Protsessor: "Exynos W930",
      Xotira: "16 GB",
      Batareya: "40 soat",
      Suv: "5ATM + IP68",
      GPS: "GPS/GLONASS",
    },
  },
  {
    id: 35,
    name: "iPad Pro 12.9 M2",
    price: 1099,
    category: "gadget",
    badge: "sale",
    rating: 4.8,
    reviews: 1700,
    stock: 6,
    img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=500&q=80",
    specs: {
      Ekran: '12.9" Liquid Retina XDR',
      Protsessor: "Apple M2",
      RAM: "8 GB",
      Xotira: "128 GB",
      Batareya: "10 soat",
      Kamera: "12MP + 10MP",
    },
  },
  {
    id: 36,
    name: "Samsung Galaxy Tab S9 Ultra",
    price: 999,
    category: "gadget",
    badge: "new",
    rating: 4.7,
    reviews: 620,
    stock: 7,
    img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=500&q=80",
    specs: {
      Ekran: '14.6" Dynamic AMOLED 2X',
      Protsessor: "Snapdragon 8 Gen 2",
      RAM: "12 GB",
      Xotira: "256 GB",
      Batareya: "11200 mAh",
      Kamera: "13MP + 8MP",
    },
  },
  {
    id: 37,
    name: "DJI Mini 4 Pro Drone",
    price: 759,
    category: "gadget",
    badge: "hot",
    rating: 4.8,
    reviews: 480,
    stock: 4,
    img: "https://images.unsplash.com/photo-1508444845599-5c89863b1c44?auto=format&fit=crop&w=500&q=80",
    specs: {
      Kamera: "4K/60fps HDR",
      Og: "249g",
      Uchish: "34 daqiqa",
      Masofа: "20 km",
      Shamol: "10.7 m/s",
      Sensor: "Obstacle Avoidance",
    },
  },
  {
    id: 38,
    name: "Meta Quest 3 VR",
    price: 499,
    category: "gadget",
    badge: "new",
    rating: 4.6,
    reviews: 340,
    stock: 9,
    img: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&w=500&q=80",
    specs: {
      Ekran: "Pancake Lens 2064x2208",
      Protsessor: "Snapdragon XR2 Gen 2",
      RAM: "8 GB",
      Xotira: "128 GB",
      Batareya: "2–3 soat",
      Kamera: "18 PPD passthrough",
    },
  },
  {
    id: 39,
    name: "GoPro Hero 12 Black",
    price: 399,
    category: "gadget",
    badge: "sale",
    rating: 4.7,
    reviews: 1100,
    stock: 11,
    img: "https://images.unsplash.com/photo-1484807352052-23338990c6c6?auto=format&fit=crop&w=500&q=80",
    specs: {
      Video: "5.3K60 / 4K120",
      Suv: "10m",
      Stabilizatsiya: "HyperSmooth 6.0",
      Batareya: "70 daqiqa",
      Ekran: '2.27" touch',
      Bluetooth: "5.0",
    },
  },
  {
    id: 40,
    name: "Bose QuietComfort 45",
    price: 329,
    category: "gadget",
    badge: null,
    rating: 4.8,
    reviews: 2100,
    stock: 14,
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80",
    specs: {
      Drayvер: "40mm",
      ANC: "Adjustable EQ",
      Batareya: "24 soat",
      Ulanish: "Bluetooth 5.1",
      Audio: "AAC/SBC",
      Og: "238g",
    },
  },
  {
    id: 41,
    name: "Apple Vision Pro",
    price: 3499,
    category: "gadget",
    badge: "hot",
    rating: 4.9,
    reviews: 890,
    stock: 2,
    img: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&w=500&q=80",
    specs: {
      Ekran: "Micro-OLED 23M piksel",
      Protsessor: "Apple M2 + R1",
      Xotira: "256 GB",
      Batareya: "2 soat (tashqi)",
      Sensor: "12 kamera + 5 sensor",
      OS: "visionOS",
    },
  },
  {
    id: 42,
    name: "Garmin Fenix 7X Solar",
    price: 899,
    category: "gadget",
    badge: "new",
    rating: 4.7,
    reviews: 410,
    stock: 6,
    img: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&w=500&q=80",
    specs: {
      Ekran: '1.4" MIP Display',
      Protsessor: "Garmin Elevate v5",
      GPS: "Multi-band GPS",
      Batareya: "28 kun (solar)",
      Suv: "10ATM",
      Sport: "40+ sport rejim",
    },
  },
];

// ─── CART & WISHLIST STATE ───
let cart = JSON.parse(localStorage.getItem("nexa_cart") || "[]");
let wishlist = JSON.parse(localStorage.getItem("nexa_wishlist") || "[]");
let compareList = JSON.parse(localStorage.getItem("nexa_compare") || "[]");

// ─── HELPERS ───
function updateBadges() {
  document
    .querySelectorAll("#cart-count")
    .forEach((el) => (el.textContent = cart.length));
  document
    .querySelectorAll("#wishlist-count")
    .forEach((el) => (el.textContent = wishlist.length));
}

function showNotification(msg, isError = false) {
  const n = document.createElement("div");
  n.className = "custom-notification";
  if (isError) n.style.background = "linear-gradient(135deg,#f43f5e,#ec4899)";
  n.innerHTML = `<i class="fa-solid fa-${isError ? "triangle-exclamation" : "check-circle"}"></i> ${msg}`;
  document.body.appendChild(n);
  setTimeout(() => n.classList.add("show"), 10);
  setTimeout(() => {
    n.classList.remove("show");
    setTimeout(() => n.remove(), 300);
  }, 2800);
}

function addToCart(id) {
  if (cart.includes(id)) {
    showNotification("Allaqachon savatda!", true);
    return;
  }
  cart.push(id);
  localStorage.setItem("nexa_cart", JSON.stringify(cart));
  updateBadges();
  showNotification("Savatga qo'shildi! 🛍️");
  if (document.getElementById("cart-items-container")) renderCartPage();
}

function toggleWishlist(id) {
  if (wishlist.includes(id)) {
    wishlist = wishlist.filter((i) => i !== id);
    showNotification("Sevimlilardan olib tashlandi.");
  } else {
    wishlist.push(id);
    showNotification("Sevimlilarga qo'shildi! ❤️");
  }
  localStorage.setItem("nexa_wishlist", JSON.stringify(wishlist));
  updateBadges();
  document.querySelectorAll(`.btn-wish[data-id="${id}"]`).forEach((btn) => {
    btn.classList.toggle("active", wishlist.includes(id));
  });
  if (document.getElementById("wishlist-items-container")) renderWishlistPage();
}

function removeFromCart(id) {
  cart = cart.filter((i) => i !== id);
  localStorage.setItem("nexa_cart", JSON.stringify(cart));
  updateBadges();
  renderCartPage();
  showNotification("Savatdan olib tashlandi.");
}

// ─── PRODUCT DETAIL MODAL ───
function openProductDetail(id) {
  const p = products.find((x) => x.id === id);
  if (!p) return;
  const existing = document.getElementById("productDetailModal");
  if (existing) existing.remove();

  const badgeHTML = p.badge
    ? `<span class="product-badge badge-${p.badge}">${p.badge === "hot" ? "🔥 Hot" : p.badge === "new" ? "✨ New" : "🏷️ Sale"}</span>`
    : "";
  const stars =
    "★".repeat(Math.floor(p.rating)) + (p.rating % 1 >= 0.5 ? "½" : "");
  const specsHTML = p.specs
    ? Object.entries(p.specs)
        .map(
          ([k, v]) =>
            `<div class="detail-spec-row"><span class="detail-spec-key">${k}</span><span class="detail-spec-val">${v}</span></div>`,
        )
        .join("")
    : "";
  const stockWarning =
    p.stock <= 3
      ? `<div class="detail-stock-warn">⚠️ Faqat <strong>${p.stock} ta</strong> qoldi!</div>`
      : `<div class="detail-stock-ok">✅ Omborda: ${p.stock} ta</div>`;
  const isWished = wishlist.includes(p.id);
  const inCart = cart.includes(p.id);

  const modal = document.createElement("div");
  modal.id = "productDetailModal";
  modal.className = "detail-modal-overlay";
  modal.innerHTML = `
    <div class="detail-modal">
      <button class="detail-modal-close" onclick="document.getElementById('productDetailModal').remove()">
        <i class="fa-solid fa-xmark"></i>
      </button>
      <div class="detail-modal-inner">
        <div class="detail-img-col">
          <div class="detail-img-wrap">
            <img src="${p.img}" alt="${p.name}">
            ${badgeHTML}
          </div>
        </div>
        <div class="detail-info-col">
          <div class="detail-category">${{ phone: "Smartfon", laptop: "Noutbuk", gadget: "Gadjet" }[p.category]}</div>
          <h2 class="detail-name">${p.name}</h2>
          <div class="detail-rating">
            <span class="stars">${stars}</span>
            <span>${p.rating} (${p.reviews.toLocaleString()} sharh)</span>
          </div>
          <div class="detail-price">$${p.price.toLocaleString()}</div>
          ${stockWarning}
          <div class="detail-specs">${specsHTML}</div>
          <div class="detail-actions">
            <button class="btn-primary detail-btn-cart ${inCart ? "already-in" : ""}" onclick="addToCart(${p.id});this.textContent='✅ Savatda'">
              <i class="fa-solid fa-bag-shopping"></i> ${inCart ? "Savatda" : "Savatga qo'shish"}
            </button>
            <button class="btn-wish detail-btn-wish ${isWished ? "active" : ""}" onclick="toggleWishlist(${p.id});this.classList.toggle('active')">
              <i class="fa-solid fa-heart"></i>
            </button>
          </div>
          <div class="detail-trust">
            <span><i class="fa-solid fa-shield-halved"></i> 2 yil kafolat</span>
            <span><i class="fa-solid fa-truck-fast"></i> Bepul yetkazish</span>
            <span><i class="fa-solid fa-rotate-left"></i> 14 kun qaytarish</span>
          </div>
        </div>
      </div>
    </div>`;
  document.body.appendChild(modal);
  setTimeout(() => modal.classList.add("active"), 10);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.remove();
  });
}

// ─── COMPARE FEATURE ───
function toggleCompare(id) {
  if (compareList.includes(id)) {
    compareList = compareList.filter((i) => i !== id);
    showNotification("Solishtiruvdan olib tashlandi.");
  } else {
    if (compareList.length >= 3) {
      showNotification("Maksimum 3 ta mahsulot solishtirish mumkin!", true);
      return;
    }
    compareList.push(id);
    showNotification("Solishtiruvga qo'shildi! ⚖️");
  }
  localStorage.setItem("nexa_compare", JSON.stringify(compareList));
  updateCompareBar();
  document.querySelectorAll(`.btn-compare[data-id="${id}"]`).forEach((btn) => {
    btn.classList.toggle("active", compareList.includes(id));
  });
}

function updateCompareBar() {
  let bar = document.getElementById("compareBar");
  if (!compareList.length) {
    if (bar) bar.remove();
    return;
  }
  if (!bar) {
    bar = document.createElement("div");
    bar.id = "compareBar";
    bar.className = "compare-bar";
    document.body.appendChild(bar);
  }
  const items = compareList
    .map((id) => {
      const p = products.find((x) => x.id === id);
      return p
        ? `<div class="compare-bar-item">
      <img src="${p.img}" alt="${p.name}">
      <span>${p.name.split(" ").slice(0, 3).join(" ")}</span>
      <button onclick="toggleCompare(${p.id})"><i class="fa-solid fa-xmark"></i></button>
    </div>`
        : "";
    })
    .join("");
  bar.innerHTML = `
    <div class="compare-bar-inner">
      <span class="compare-bar-title"><i class="fa-solid fa-scale-balanced"></i> Solishtirish (${compareList.length}/3)</span>
      <div class="compare-bar-items">${items}</div>
      <button class="compare-bar-btn" onclick="openCompareModal()">Solishtir <i class="fa-solid fa-arrow-right"></i></button>
      <button class="compare-bar-clear" onclick="clearCompare()"><i class="fa-solid fa-trash"></i></button>
    </div>`;
}

function clearCompare() {
  compareList = [];
  localStorage.setItem("nexa_compare", JSON.stringify(compareList));
  updateCompareBar();
  document
    .querySelectorAll(".btn-compare")
    .forEach((b) => b.classList.remove("active"));
}

function openCompareModal() {
  if (compareList.length < 2) {
    showNotification("Kamida 2 ta mahsulot tanlang!", true);
    return;
  }
  const existing = document.getElementById("compareModal");
  if (existing) existing.remove();

  const items = compareList
    .map((id) => products.find((x) => x.id === id))
    .filter(Boolean);
  const allKeys = [
    ...new Set(items.flatMap((p) => Object.keys(p.specs || {}))),
  ];

  const cols = items
    .map(
      (p) => `
    <div class="cmp-col">
      <img src="${p.img}" alt="${p.name}" class="cmp-img">
      <div class="cmp-name">${p.name}</div>
      <div class="cmp-price">$${p.price.toLocaleString()}</div>
      <button class="btn-cart cmp-add-btn" onclick="addToCart(${p.id})"><i class="fa-solid fa-bag-shopping"></i> Savatga</button>
    </div>`,
    )
    .join("");

  const rows = allKeys
    .map((key) => {
      const cells = items
        .map((p) => `<td class="cmp-cell">${p.specs?.[key] || "—"}</td>`)
        .join("");
      return `<tr><td class="cmp-key">${key}</td>${cells}</tr>`;
    })
    .join("");

  const modal = document.createElement("div");
  modal.id = "compareModal";
  modal.className = "compare-modal-overlay";
  modal.innerHTML = `
    <div class="compare-modal">
      <button class="detail-modal-close" onclick="document.getElementById('compareModal').remove()"><i class="fa-solid fa-xmark"></i></button>
      <h2 class="compare-modal-title"><i class="fa-solid fa-scale-balanced"></i> Mahsulotlarni Solishtirish</h2>
      <div class="cmp-header">${cols}</div>
      <div class="cmp-table-wrap"><table class="cmp-table"><tbody>${rows}</tbody></table></div>
    </div>`;
  document.body.appendChild(modal);
  setTimeout(() => modal.classList.add("active"), 10);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.remove();
  });
}

// ─── PRODUCT CARD ───
function createProductCard(p) {
  const badgeHTML = p.badge
    ? `<span class="product-badge badge-${p.badge}">${p.badge === "hot" ? "🔥 Hot" : p.badge === "new" ? "✨ New" : "🏷️ Sale"}</span>`
    : "";
  const stars =
    "★".repeat(Math.floor(p.rating)) + (p.rating % 1 >= 0.5 ? "½" : "");
  const categoryLabel =
    { phone: "Smartfon", laptop: "Noutbuk", gadget: "Gadjet" }[p.category] ||
    p.category;
  const isInWishlist = wishlist.includes(p.id);
  const isInCompare = compareList.includes(p.id);
  const stockBadge =
    p.stock <= 3
      ? `<div class="stock-badge">🔥 ${p.stock} ta qoldi!</div>`
      : "";
  return `
    <div class="product-card">
      <div class="product-img-wrap" style="cursor:pointer" onclick="openProductDetail(${p.id})">
        <img src="${p.img}" alt="${p.name}" loading="lazy">
        ${badgeHTML}
        ${stockBadge}
        <div class="product-overlay">
          <button class="product-overlay-btn" onclick="event.stopPropagation();addToCart(${p.id})" title="Savatga">
            <i class="fa-solid fa-bag-shopping"></i>
          </button>
          <button class="product-overlay-btn" onclick="event.stopPropagation();openProductDetail(${p.id})" title="Batafsil">
            <i class="fa-solid fa-eye"></i>
          </button>
          <button class="product-overlay-btn" onclick="event.stopPropagation();toggleWishlist(${p.id})" title="Sevimlilar">
            <i class="fa-solid fa-heart"></i>
          </button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-category">${categoryLabel}</div>
        <div class="product-name" style="cursor:pointer" onclick="openProductDetail(${p.id})">${p.name}</div>
        <div class="product-rating">
          <span class="stars">${stars}</span>
          <span>${p.rating} (${p.reviews.toLocaleString()} sharh)</span>
        </div>
        <div class="product-price-row">
          <span class="product-price">$${p.price.toLocaleString()}</span>
        </div>
        <div class="product-actions">
          <button class="btn-cart" onclick="addToCart(${p.id})">
            <i class="fa-solid fa-bag-shopping"></i> Savatga
          </button>
          <button class="btn-wish ${isInWishlist ? "active" : ""}" data-id="${p.id}" onclick="toggleWishlist(${p.id})">
            <i class="fa-solid fa-heart"></i>
          </button>
          <button class="btn-compare ${isInCompare ? "active" : ""}" data-id="${p.id}" onclick="toggleCompare(${p.id})" title="Solishtirish">
            <i class="fa-solid fa-scale-balanced"></i>
          </button>
        </div>
      </div>
    </div>`;
}

function renderProducts(list) {
  const grid = document.getElementById("all-products-grid");
  if (!grid) return;
  if (!list.length) {
    grid.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:var(--text-muted);padding:60px">Hech qanday mahsulot topilmadi...</p>`;
  } else {
    grid.innerHTML = list.map(createProductCard).join("");
  }
}

// ─── CART PAGE ───
function renderCartPage() {
  const el = document.getElementById("cart-items-container");
  const box = document.getElementById("total-box");
  if (!el) return;
  if (!cart.length) {
    el.innerHTML = `<div style="text-align:center;padding:60px;color:var(--text-muted)">
      <i class="fa-solid fa-bag-shopping" style="font-size:48px;margin-bottom:16px;opacity:0.3;display:block"></i>
      Savatingiz bo'sh. Mahsulotlar sahifasidan xarid qiling.
    </div>`;
    if (box) box.style.display = "none";
    return;
  }
  if (box) box.style.display = "block";
  let total = 0;
  el.innerHTML = cart
    .map((id) => {
      const item = products.find((p) => p.id === id);
      if (!item) return "";
      total += item.price;
      return `<div class="cart-item">
      <img src="${item.img}" alt="${item.name}">
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <p>$${item.price.toLocaleString()}</p>
      </div>
      <button class="remove-item-btn" onclick="removeFromCart(${item.id})">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>`;
    })
    .join("");
  const totalEl = document.getElementById("total-price");
  if (totalEl) totalEl.textContent = total.toLocaleString();
}

function renderWishlistPage() {
  const el = document.getElementById("wishlist-items-container");
  if (!el) return;
  if (!wishlist.length) {
    el.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:var(--text-muted);padding:40px">Sevimlilar ro'yxati bo'sh.</p>`;
    return;
  }
  el.innerHTML = wishlist
    .map((id) => {
      const item = products.find((p) => p.id === id);
      return item ? createProductCard(item) : "";
    })
    .join("");
}

// ─── PARTICLES ───
function createParticles() {
  const bg = document.querySelector(".particles-bg");
  if (!bg) return;
  const colors = [
    "rgba(59,130,246,",
    "rgba(139,92,246,",
    "rgba(6,182,212,",
    "rgba(236,72,153,",
  ];
  for (let i = 0; i < 50; i++) {
    const p = document.createElement("div");
    p.className = "particle";
    const r = Math.random() * 3 + 1;
    const c = colors[Math.floor(Math.random() * colors.length)];
    p.style.cssText = `
      left:${Math.random() * 100}vw;
      width:${r * 2}px;height:${r * 2}px;
      background:${c}${Math.random() * 0.6 + 0.2});
      animation-duration:${Math.random() * 12 + 8}s;
      animation-delay:-${Math.random() * 15}s;
      box-shadow:0 0 ${r * 3}px ${c}0.6);
    `;
    bg.appendChild(p);
  }
}

// ─── TYPED EFFECT ───
function initTyped() {
  const el = document.getElementById("typed-text");
  if (!el) return;
  const words = ["Smartfonlar", "Noutbuklar", "Gadjetlar", "Texnologiyalar"];
  let wi = 0,
    ci = 0,
    del = false;
  setInterval(
    () => {
      const word = words[wi];
      if (!del) {
        el.textContent = word.slice(0, ++ci);
        if (ci === word.length) {
          del = true;
          setTimeout(() => {}, 1200);
        }
      } else {
        el.textContent = word.slice(0, --ci);
        if (ci === 0) {
          del = false;
          wi = (wi + 1) % words.length;
        }
      }
    },
    del ? 60 : 120,
  );
}

// ─── REVEAL ───
function initReveal() {
  const obs = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          obs.unobserve(e.target);
        }
      }),
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
  );
  document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
}

// ─── COUNTERS ───
function animateCounters() {
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseFloat(el.dataset.target);
        const isDecimal = el.dataset.decimal === "true";
        const dur = 2000,
          start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / dur, 1);
          const v = (1 - Math.pow(1 - p, 3)) * target;
          el.textContent = isDecimal
            ? v.toFixed(1)
            : target > 100
              ? Math.floor(v).toLocaleString() + "+"
              : Math.floor(v);
          if (p < 1) requestAnimationFrame(tick);
          else
            el.textContent = isDecimal
              ? target.toFixed(1)
              : target > 100
                ? target.toLocaleString() + "+"
                : target;
        };
        requestAnimationFrame(tick);
        obs.unobserve(el);
      });
    },
    { threshold: 0.5 },
  );
  document
    .querySelectorAll(".stat-number[data-target]")
    .forEach((c) => obs.observe(c));
}

// ─── HEADER SCROLL ───
function initHeaderScroll() {
  const h = document.getElementById("main-header");
  if (!h) return;
  window.addEventListener(
    "scroll",
    () => h.classList.toggle("scrolled", scrollY > 60),
    { passive: true },
  );
}

// ─── MOBILE MENU ───
function initMobileMenu() {
  const btn = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav-menu");
  if (!btn || !nav) return;
  btn.addEventListener("click", () => {
    nav.classList.toggle("active");
    const icon = btn.querySelector("i");
    icon.className = nav.classList.contains("active")
      ? "fa-solid fa-xmark"
      : "fa-solid fa-bars";
  });
}

// ─── PRICE FILTER ───
function initFilter() {
  const grid = document.getElementById("all-products-grid");
  if (!grid) return;
  renderProducts(products);
  const search = document.getElementById("search-input");
  const btns = document.querySelectorAll(".filter-btn");
  const priceBtns = document.querySelectorAll(".price-filter-btn");
  let currentCat = "all";
  let currentPrice = "all";

  const apply = () => {
    let list =
      currentCat === "all"
        ? products
        : products.filter((p) => p.category === currentCat);
    if (currentPrice === "low") list = list.filter((p) => p.price <= 500);
    if (currentPrice === "mid")
      list = list.filter((p) => p.price > 500 && p.price <= 1500);
    if (currentPrice === "high") list = list.filter((p) => p.price > 1500);
    if (search)
      list = list.filter((p) =>
        p.name.toLowerCase().includes(search.value.toLowerCase()),
      );
    renderProducts(list);
  };

  if (search) search.addEventListener("input", apply);
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentCat = btn.dataset.filter;
      apply();
    });
  });
  priceBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      priceBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentPrice = btn.dataset.price;
      apply();
    });
  });
}

// ─── SCROLL TO TOP ───
function initScrollToTop() {
  const btn = document.createElement("button");
  btn.id = "scrollTopBtn";
  btn.className = "scroll-top-btn";
  btn.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
  btn.title = "Yuqoriga";
  document.body.appendChild(btn);
  window.addEventListener(
    "scroll",
    () => {
      btn.classList.toggle("show", scrollY > 400);
    },
    { passive: true },
  );
  btn.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" }),
  );
}

// ─── LIVE CHAT ───
function initLiveChat() {
  const btn = document.createElement("button");
  btn.className = "live-chat-btn";
  btn.innerHTML = `<i class="fa-brands fa-telegram"></i><span class="live-chat-label">Operator bilan bog'laning</span>`;
  btn.title = "Operator bilan bog'lanish";
  btn.onclick = () => {
    showNotification("NexaStore Telegram botga o'tamiz...");
    setTimeout(
      () => window.open("https://t.me/NexaStoreUZ_bot", "_blank"),
      900,
    );
  };
  document.body.appendChild(btn);
}

// ─── SPIN WHEEL GAME ───
const PRIZES = [
  { label: "5% Chegirma", code: "NEXA5", color: "#3b82f6", emoji: "🎉" },
  { label: "Bepul Yetkazish", code: "FREESHIP", color: "#f59e0b", emoji: "🚚" },
  { label: "10% Chegirma", code: "CYBER10", color: "#8b5cf6", emoji: "🔥" },
  { label: "5% Chegirma", code: "NEXA5", color: "#3b82f6", emoji: "🎉" },
  { label: "15% Chegirma", code: "MEGA15", color: "#06b6d4", emoji: "💎" },
  { label: "Bepul Yetkazish", code: "FREESHIP", color: "#f59e0b", emoji: "🚚" },
  { label: "20% Chegirma", code: "VIP20", color: "#ec4899", emoji: "🚀" },
  { label: "10% Chegirma", code: "CYBER10", color: "#8b5cf6", emoji: "🔥" },
  { label: "Bepul Yetkazish", code: "FREESHIP", color: "#f59e0b", emoji: "🚚" },
  { label: "5% Chegirma", code: "NEXA5", color: "#3b82f6", emoji: "🎉" },
  { label: "25% Chegirma", code: "SUPER25", color: "#10b981", emoji: "👑" },
  { label: "15% Chegirma", code: "MEGA15", color: "#06b6d4", emoji: "💎" },
];

let spinning = false;
let currentAngle = 0;

function drawWheel(canvas, angle) {
  const ctx = canvas.getContext("2d");
  const cx = canvas.width / 2,
    cy = canvas.height / 2;
  const r = cx - 4;
  const seg = (2 * Math.PI) / PRIZES.length;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  PRIZES.forEach((prize, i) => {
    const start = angle + i * seg;
    const end = start + seg;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, r, start, end);
    ctx.closePath();
    ctx.fillStyle = prize.color;
    ctx.fill();
    ctx.strokeStyle = "rgba(255,255,255,0.15)";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(start + seg / 2);
    ctx.textAlign = "right";
    ctx.fillStyle = "#fff";
    ctx.font = `bold ${canvas.width < 280 ? 9 : 11}px Space Grotesk,sans-serif`;
    ctx.fillText(prize.label, r - 10, 4);
    ctx.restore();
  });
  ctx.beginPath();
  ctx.arc(cx, cy, 28, 0, 2 * Math.PI);
  const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 28);
  grad.addColorStop(0, "#3b82f6");
  grad.addColorStop(1, "#8b5cf6");
  ctx.fillStyle = grad;
  ctx.fill();
  ctx.fillStyle = "#fff";
  ctx.font = "bold 16px Orbitron,sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("🎰", cx, cy);
}

function spinWheel() {
  if (spinning) return;
  const canvas = document.getElementById("spinCanvas");
  if (!canvas) return;
  spinning = true;
  const spinBtn = document.getElementById("spinBtn");
  const resultEl = document.getElementById("spinResult");
  if (spinBtn) spinBtn.disabled = true;
  if (resultEl) resultEl.classList.remove("show");
  const extraSpins = (Math.floor(Math.random() * 5) + 8) * 2 * Math.PI;
  const randomOffset = Math.random() * 2 * Math.PI;
  const targetAngle = currentAngle + extraSpins + randomOffset;
  const duration = 4000;
  const startTime = performance.now();
  const startAngle = currentAngle;
  const easeOut = (t) => 1 - Math.pow(1 - t, 4);
  function animate(now) {
    const elapsed = Math.min((now - startTime) / duration, 1);
    const eased = easeOut(elapsed);
    currentAngle = startAngle + (targetAngle - startAngle) * eased;
    drawWheel(canvas, currentAngle);
    if (elapsed < 1) {
      requestAnimationFrame(animate);
    } else {
      spinning = false;
      if (spinBtn) spinBtn.disabled = false;
      const seg = (2 * Math.PI) / PRIZES.length;
      const normalized =
        (((-currentAngle - Math.PI / 2) % (2 * Math.PI)) + 2 * Math.PI) %
        (2 * Math.PI);
      const idx = Math.floor(normalized / seg) % PRIZES.length;
      const prize = PRIZES[idx];
      if (resultEl) {
        resultEl.querySelector(".result-emoji").textContent = prize.emoji;
        resultEl.querySelector(".result-title").textContent =
          `Tabriklaymiz! ${prize.label} yutdingiz!`;
        resultEl.querySelector(".result-desc").innerHTML =
          `Sizning kuponingiz: <strong style="font-family:monospace;color:#3b82f6">${prize.code}</strong><br>Chegirmangizni saqlang!`;
        resultEl.classList.add("show");
        showNotification(`🎉 ${prize.label} yutdingiz! Kod: ${prize.code}`);
      }
    }
  }
  requestAnimationFrame(animate);
}

function initSpinModal() {
  const overlay = document.getElementById("spinModal");
  const canvas = document.getElementById("spinCanvas");
  const openBtn = document.getElementById("openSpinBtn");
  const closeBtn = document.getElementById("spinClose");
  const spinBtn = document.getElementById("spinBtn");
  if (!overlay || !canvas) return;
  canvas.width = 300;
  canvas.height = 300;
  drawWheel(canvas, 0);
  if (openBtn)
    openBtn.addEventListener("click", () => overlay.classList.add("active"));
  if (closeBtn)
    closeBtn.addEventListener("click", () =>
      overlay.classList.remove("active"),
    );
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) overlay.classList.remove("active");
  });
  if (spinBtn) spinBtn.addEventListener("click", spinWheel);
}

// ─── INIT ───
document.addEventListener("DOMContentLoaded", () => {
  updateBadges();
  updateCompareBar();
  createParticles();
  initReveal();
  animateCounters();
  initHeaderScroll();
  initMobileMenu();
  initTyped();
  initSpinModal();
  initFilter();
  initScrollToTop();
  initLiveChat();
  const featured = document.getElementById("featured-products");
  if (featured) {
    const hot = products.filter((p) => p.badge === "hot").slice(0, 4);
    const rest = products.filter((p) => p.badge !== "hot").slice(0, 4);
    featured.innerHTML = [...hot, ...rest].map(createProductCard).join("");
  }
  if (document.getElementById("cart-items-container")) renderCartPage();
  if (document.getElementById("wishlist-items-container")) renderWishlistPage();
  const page = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-item-link").forEach((a) => {
    a.classList.toggle("active", a.getAttribute("href") === page);
  });
});
