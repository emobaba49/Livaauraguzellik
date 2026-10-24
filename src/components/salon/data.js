export const BRAND = "Liva Aura Beauty";
export const LOGO_URL = "https://media.base44.com/images/public/6ac377c731e1a7e80ebc16ef/5df54ac26_IMG_3908JPG.jpeg";
export const WHATSAPP_NUMBER = "905309600177";
export const INSTAGRAM_URL = "https://www.instagram.com/livaauraguzellik";
export const PHONE = "0530 960 01 77";
export const PHONE_TEL = "05309600177";
export const ADDRESS = "Atikali, Yavuz Selim Cd. ASYA AP No: 15 B, 34087 Fatih/İstanbul";
export const MAP_SRC = "https://www.google.com/maps?q=Atikali%2C%20Yavuz%20Selim%20Cd.%20ASYA%20AP%20No%3A%2015%20B%2C%2034087%20Fatih%2F%C4%B0stanbul&output=embed";

export const HOURS = [
  { day: "Pazartesi", hours: "10:00 – 20:00" },
  { day: "Salı", hours: "10:00 – 20:00" },
  { day: "Çarşamba", hours: "10:00 – 20:00" },
  { day: "Perşembe", hours: "Kapalı" },
  { day: "Cuma", hours: "10:00 – 20:00" },
  { day: "Cumartesi", hours: "10:00 – 20:00" },
  { day: "Pazar", hours: "10:00 – 20:00" },
];

export const waLink = (text = "Merhaba, randevu almak istiyorum.") =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

export const BOOKING_MESSAGE = (service = "") =>
  `Merhaba, Liva Aura Beauty’den randevu almak istiyorum.${service ? ` İlgilendiğim hizmet: ${service}.` : ""} Uygun gün ve saatler hakkında bilgi alabilir miyim?`;

export const bookLink = (service = "") => waLink(BOOKING_MESSAGE(service));

export const IMAGES = {
  salon: "https://media.base44.com/images/public/6ac377c731e1a7e80ebc16ef/fd0a9db8a_generated_image.png",
  skin: "https://media.base44.com/images/public/6ac377c731e1a7e80ebc16ef/21611dda0_generated_image.png",
  nails: "https://media.base44.com/images/public/6ac377c731e1a7e80ebc16ef/3e5a61047_generated_image.png",
  epilation: "https://media.base44.com/images/public/6ac377c731e1a7e80ebc16ef/32a7b288f_generated_image.png",
  lashes: "https://media.base44.com/images/public/6ac377c731e1a7e80ebc16ef/27ab27da6_generated_image.png",
  spa: "https://media.base44.com/images/public/6ac377c731e1a7e80ebc16ef/56a4cd555_generated_image.png",
  facial: "https://media.base44.com/images/public/6ac377c731e1a7e80ebc16ef/db60b95ee_generated_image.png",
};

export const SERVICES = [
  { name: "Cilt Bakımı", desc: "Cildinizin ihtiyacına göre tasarlanan derin temizlik ve nem bakımı.", image: IMAGES.skin },
  { name: "Hydrafacial", desc: "Cihaz destekli çok adımlı bakımla anında ışıltı ve canlılık.", image: IMAGES.facial },
  { name: "Manikür & Kalıcı Oje", desc: "Zarif ve uzun ömürlü tırnak bakımı, geniş renk seçenekleri.", image: IMAGES.nails },
  { name: "Pedikür & Spa", desc: "Peeling, masaj ve bakım ile yenilenmiş, yumuşacık ayaklar.", image: IMAGES.spa },
  { name: "Lazer Epilasyon", desc: "Konforlu ve hijyenik uygulama ile kalıcı pürüzsüzlük.", image: IMAGES.epilation },
  { name: "Kaş & Kirpik", desc: "Kaş tasarımı ve kirpik lifting ile belirgin, doğal bakış.", image: IMAGES.lashes },
];

export const CAMPAIGNS = [
  { title: "Yeni Müşteri Fırsatı", badge: "%20 İndirim", desc: "İlk cilt bakımı randevunuzda %20 indirim.", service: "Cilt Bakımı" },
  { title: "Gelin Paketi", badge: "Özel Paket", desc: "Cilt bakımı, manikür ve kaş tasarımı bir arada.", service: "Cilt Bakımı" },
  { title: "Epilasyon Paketi", badge: "6 Seans", desc: "6 seanslık lazer epilasyon paketinde avantajlı fiyat.", service: "Lazer Epilasyon" },
];

export const GALLERY = [
  { src: IMAGES.salon, alt: "Salonumuz" },
  { src: IMAGES.skin, alt: "Cilt bakımı" },
  { src: IMAGES.nails, alt: "Tırnak tasarımı" },
  { src: IMAGES.lashes, alt: "Kaş ve kirpik" },
  { src: IMAGES.spa, alt: "Spa pedikür" },
  { src: IMAGES.facial, alt: "Yüz bakımı" },
];

export const SLOTS = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];