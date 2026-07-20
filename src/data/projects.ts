export interface Project {
  slug: string;
  title: string;
  location: string;
  year: number;
  category: string;
  shortDescription: string;
  description: string;
  area: string;
  status: "Tamamlandı" | "Devam Ediyor" | "Proje Aşaması";
  featured: boolean;
  images: {
    main: string;
    banner: string;
    gallery: string[];
  };
}

export const projects: Project[] = [
  {
    slug: "bogazici-villa",
    title: "Boğaziçi Villa",
    location: "Sarıyer, İstanbul",
    year: 2024,
    category: "Konut",
    shortDescription:
      "Boğaz siluetine açılan, doğal taş ve cam yüzeylerin diyaloğuyla şekillenen çağdaş bir yaşam alanı.",
    description: `Boğaziçi Villa projesi, Sarıyer'in yeşil dokusuna entegre edilmiş bir konut tasarımıdır. Yapı, arazinin doğal eğimini avantaja çevirerek katmanlanmış bir plan şemasıyla kurgulandı. Ana yaşam alanları güneye, Boğaz manzarasına yönlendirilirken, servis alanları kuzeyde topoğrafyayla bütünleştirildi.

Cephe tasarımında yerel doğal taş ile geniş cam yüzeyler bir arada kullanılarak, iç-dış mekan sınırının belirsizleştirilmesi hedeflendi. Peyzaj düzenlemesi, mevcut bitki örtüsüne minimum müdahale ilkesiyle gerçekleştirildi.

İç mekanda açık plan mutfak-yemek-oturma aksı, tavan yüksekliğinin 4.5 metreye ulaştığı çift ışıklı bir hacimle tanımlanır. Alt kottaki yatak odaları bahçeyle doğrudan ilişkilendirilirken, üst kottaki ana yatak odası panoramik Boğaz manzarasına açılır. Yerden ısıtma, doğal havalandırma ve güneş kırıcı sistemleriyle enerji verimliliği ön planda tutulmuştur.`,
    area: "480 m²",
    status: "Tamamlandı",
    featured: true,
    images: {
      main: "/images/projects/bogazici-villa.png",
      banner: "/images/projects/bogazici-villa-banner.png",
      gallery: [
        "/images/projects/bogazici-villa.png",
        "/images/projects/bogazici-villa-2.png",
      ],
    },
  },
  {
    slug: "kadikoy-ofis",
    title: "Kadıköy Ofis Yapısı",
    location: "Kadıköy, İstanbul",
    year: 2023,
    category: "Ticari",
    shortDescription:
      "Tarihi dokuya saygılı, esnek çalışma alanları sunan bir karma kullanımlı ofis projesi.",
    description: `Kadıköy'ün tarihi merkezine yakın konumlanan bu ofis yapısı, çevresindeki kentsel dokuyla ölçek ve malzeme dilinde uyum sağlamayı hedefler. Bina, açık plan ofis katları, ortak çalışma alanları ve zemin katta kamusal erişime açık bir kafe-galeri mekanı barındırır.

Cephedeki dikey ahşap lamel sistemi hem güneş kontrolü sağlar hem de sokak cephesine ritmik bir doku katar. İç mekanda açığa çıkarılmış beton, doğal ahşap ve endüstriyel detaylar, sade ama karakterli bir atmosfer oluşturur.

Yapının çatı katında yeşil bir teras alanı tasarlanarak çalışanlara açık hava dinlenme imkanı sunulmuştur. Esnek bölme duvar sistemi sayesinde ofis katları, farklı kiracı ihtiyaçlarına göre yeniden düzenlenebilir. Bina genelinde enerji verimli aydınlatma, yağmur suyu geri kazanımı ve bisiklet park alanlarıyla sürdürülebilir bir çalışma ortamı hedeflenmiştir.`,
    area: "1.200 m²",
    status: "Tamamlandı",
    featured: true,
    images: {
      main: "/images/projects/kadikoy-ofis.png",
      banner: "/images/projects/kadikoy-ofis-banner.png",
      gallery: [
        "/images/projects/kadikoy-ofis.png",
        "/images/projects/kadikoy-ofis-2.png",
      ],
    },
  },
  {
    slug: "ulus-konut",
    title: "Ulus Konut Projesi",
    location: "Beşiktaş, İstanbul",
    year: 2024,
    category: "Konut",
    shortDescription:
      "Kompakt bir parselde maksimum yaşam kalitesi sunan, ışık odaklı bir konut tasarımı.",
    description: `Beşiktaş Ulus'ta dar ve derin bir parselde konumlanan bu konut projesi, sınırlı alanda yaşam kalitesini maksimize etme sorusuna yanıt arar. Tasarım, iç avlu ve ışıklık sistemleriyle her kata doğal ışık ulaştırırken, katlararası görsel bağlantılarla mekansal genişlik hissi yaratır.

Malzeme paletinde beyaz sıva, doğal meşe ve mat siyah metal detaylar kullanıldı. Her dairenin en az bir yönde kente açılan geniş bir penceresi bulunur — bu, projenin temel tasarım ilkesidir.

Ortak alanlarda minimalist bir tasarım dili benimsenmiş, giriş holü ve merdiven boşluğu zenithal bir ışıklıkla aydınlatılmıştır. Dairelerin iç düzeninde gizli depolama çözümleri ve entegre mobilya sistemleri kullanılarak kompakt alanlarda ferah bir yaşam deneyimi sağlanmıştır. Çatı katında sakinlere özel bir teras bahçesi, kentin panoramik manzarasıyla buluşma noktası olarak tasarlanmıştır.`,
    area: "320 m²",
    status: "Tamamlandı",
    featured: true,
    images: {
      main: "/images/projects/ulus-konut.png",
      banner: "/images/projects/ulus-konut-banner.png",
      gallery: [
        "/images/projects/ulus-konut.png",
        "/images/projects/ulus-konut-2.png",
      ],
    },
  },
  {
    slug: "princes-ada-evi",
    title: "Prens Adası Yazlık Evi",
    location: "Büyükada, İstanbul",
    year: 2022,
    category: "Konut",
    shortDescription:
      "Ada mimarisinin geleneksel ölçeğini çağdaş bir dille yeniden yorumlayan ahşap bir yazlık konut.",
    description: `Büyükada'nın karakteristik ahşap yapı geleneğinden ilham alan bu yazlık ev, geleneksel ölçek ve oranları modern bir plan şemasıyla birleştirir. Geniş verandalar, yüksek tavanlar ve çapraz havalandırma sistemiyle doğal iklimlendirme ön planda tutuldu.

Yapının ahşap taşıyıcı sistemi yerel ustalarla birlikte detaylandırıldı. Cephedeki panjur sistemi hem mahremiyet hem de güneş kontrolü sağlarken, adanın yeşil dokusuna karışan bir siluet oluşturur.

Bahçe düzenlemesinde adanın endemik bitki türleri tercih edilerek doğal peyzajla uyum sağlanmıştır. Zemin katta deniz manzarasına açılan geniş bir salon ve açık mutfak yer alırken, üst katta yatak odaları çam ağaçlarının arasından süzülen ışıkla aydınlanır. Yaz aylarında doğal havalandırmanın yeterli olduğu yapıda, kışın ise şömine ve yerden ısıtma sistemiyle konforlu bir yaşam ortamı sunulmaktadır.`,
    area: "260 m²",
    status: "Tamamlandı",
    featured: false,
    images: {
      main: "/images/projects/princes-ada.png",
      banner: "/images/projects/princes-ada-banner.png",
      gallery: [
        "/images/projects/princes-ada.png",
        "/images/projects/princes-ada-2.png",
      ],
    },
  },
  {
    slug: "nisantasi-galeri",
    title: "Nişantaşı Galeri Dönüşümü",
    location: "Şişli, İstanbul",
    year: 2023,
    category: "Kültürel",
    shortDescription:
      "1960'ların bir apartman katını çağdaş sanat galerisine dönüştüren minimal bir iç mekan projesi.",
    description: `Nişantaşı'nda 1960'lara ait bir apartmanın ikinci katının çağdaş sanat galerisine dönüştürülmesi projesinde, mevcut yapının kemik yapısı korunarak iç mekan tamamen yeniden kurgulandı. Orijinal tavan yüksekliğinin sağladığı avantajla, esnek sergileme duvarları ve doğal ışık kuyuları tasarlandı.

Zemin, dökme beton; duvarlar, beyaz alçı sıva; tavan ise açığa çıkarılmış orijinal beton kasettir. Bu üç yüzey bir araya geldiğinde, sanat eserlerinin ön plana çıktığı nötr ama atmosferik bir mekan ortaya çıkar.

Aydınlatma tasarımı, galeri mekanının en kritik unsurlarından biri olarak ele alınmıştır. Ray tipi LED armatürler eserlere odaklanmış spot aydınlatma sağlarken, tavan ışık kuyularından süzülen doğal gün ışığı mekana canlı bir atmosfer katar. Giriş bölümünde küçük bir kafe köşesi ve sanat kitapları bölümü, ziyaretçi deneyimini zenginleştiren tamamlayıcı unsurlar olarak tasarlanmıştır.`,
    area: "180 m²",
    status: "Tamamlandı",
    featured: false,
    images: {
      main: "/images/projects/nisantasi-galeri.png",
      banner: "/images/projects/nisantasi-galeri-banner.png",
      gallery: [
        "/images/projects/nisantasi-galeri.png",
        "/images/projects/nisantasi-galeri-2.png",
      ],
    },
  },
  {
    slug: "tarabya-residence",
    title: "Tarabya Residence",
    location: "Sarıyer, İstanbul",
    year: 2025,
    category: "Konut",
    shortDescription:
      "Deniz seviyesinden yükselen, sürdürülebilir malzemelerle tasarlanmış bir kıyı konut projesi.",
    description: `Tarabya sahilinde konumlanan bu residence projesi, denizle ilişkiyi her kattan yaşatmayı hedefler. Yapının kademeli kütle organizasyonu, her daireye kesintisiz bir deniz görüşü ve geniş bir teras alanı sağlar.

Sürdürülebilirlik projenin temel ilkelerinden biridir: yağmur suyu toplama, pasif güneş kontrolü ve yerel malzeme kullanımı tasarımın ayrılmaz parçalarıdır. Cephede kullanılan geri dönüştürülmüş ahşap kompozit paneller hem estetik hem de çevresel sorumluluk taşır.

Zemin katta sakinlere özel bir yüzme havuzu, fitness merkezi ve sosyal tesis alanı yer almaktadır. Yeraltı otoparkı, akıllı ev otomasyon sistemleri ve 24 saat güvenlik hizmeti projenin sunduğu yaşam kalitesinin tamamlayıcı unsurlarıdır. Peyzaj tasarımında Akdeniz bitkileri ve su öğeleri kullanılarak, sahil yaşamının ruhunu yansıtan huzurlu bir ortam yaratılmıştır.`,
    area: "2.400 m²",
    status: "Devam Ediyor",
    featured: false,
    images: {
      main: "/images/projects/tarabya-residence.png",
      banner: "/images/projects/tarabya-residence-banner.png",
      gallery: [
        "/images/projects/tarabya-residence.png",
        "/images/projects/tarabya-residence-2.png",
      ],
    },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}
