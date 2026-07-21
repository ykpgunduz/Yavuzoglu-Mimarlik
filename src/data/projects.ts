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
    slug: "besiktas-daire-renovasyon",
    title: "Beşiktaş Daire Renovasyonu",
    location: "Beşiktaş, İstanbul",
    year: 2024,
    category: "Konut",
    shortDescription:
      "1970'lere ait bir apartman dairesinin, açık plan yaşam anlayışıyla yeniden düzenlendiği kapsamlı bir iç mekan yenileme projesi.",
    description: `Beşiktaş'ın merkezi bir sokağında yer alan bu 3+1 daire, mevcut bölme duvarları kaldırılarak açık plan bir yaşam alanına dönüştürüldü. Mutfak, yemek ve oturma bölümleri tek bir akışkan hacim içinde yeniden kurgulandı.

Orijinal ahşap döşeme, restorasyon sonrası korunarak yeniden kullanıma kazandırıldı. Tavan yüksekliğinin 3.10 metre olması, mekâna ferah bir atmosfer katarken, aydınlatma tasarımında gizli LED şeritler ve sarkıt armatürler tercih edildi.

Banyo ve mutfak tamamen yenilendi. Mutfakta mat siyah dolaplar ve meşe tezgah kombinasyonu kullanılırken, banyoda mikro çimento duvar kaplaması ve yürüyüşlü duş alanı tasarlandı. Isıtma sistemi kombi ile yerden ısıtmaya çevrildi.`,
    area: "125 m²",
    status: "Tamamlandı",
    featured: true,
    images: {
      main: "/images/projects/besiktas-daire-1.jpg",
      banner: "/images/projects/besiktas-daire-banner.jpg",
      gallery: [
        "/images/projects/besiktas-daire-1.jpg",
        "/images/projects/besiktas-daire-2.jpg",
      ],
    },
  },
  {
    slug: "kadikoy-kafe-tasarim",
    title: "Kadıköy Kafe İç Mekan Tasarımı",
    location: "Kadıköy, İstanbul",
    year: 2023,
    category: "Ticari",
    shortDescription:
      "Moda sahiline yakın bir sokakta, eski bir zemin kat dükkânının butik kafeye dönüştürülme projesi.",
    description: `Kadıköy Moda'da dar ve uzun bir zemin kat mekânı, müşteri akışını optimize eden bir iç mekan düzenlemesiyle butik kafeye dönüştürüldü. Giriş bölümündeki sipariş tezgahı, ortadaki oturma alanı ve arka bahçeye açılan cam kapılar mekânı üç kademeye ayırır.

Mevcut taş duvarlar temizlenerek açığa çıkarıldı ve endüstriyel tarzda metal raf sistemleriyle tamamlandı. Tezgah alanında beyaz mermer ve mat pirinç detaylar kullanılarak sıcak ama modern bir atmosfer yaratıldı.

Aydınlatma tasarımında farklı bölgelere özel senaryolar geliştirildi: tezgah üstünde sarkıt armatürler, oturma alanında duvar aplikleri, bahçe geçişinde ise ip aydınlatma. Mekanın toplam alanı küçük olmasına rağmen, ayna kullanımı ve açık renk paleti sayesinde geniş bir algı oluşturuldu.`,
    area: "65 m²",
    status: "Tamamlandı",
    featured: true,
    images: {
      main: "/images/projects/kadikoy-kafe-1.jpg",
      banner: "/images/projects/kadikoy-kafe-banner.jpg",
      gallery: [
        "/images/projects/kadikoy-kafe-1.jpg",
        "/images/projects/kadikoy-kafe-2.jpg",
      ],
    },
  },
  {
    slug: "ulus-dublex-daire",
    title: "Ulus Dubleks Daire",
    location: "Beşiktaş, İstanbul",
    year: 2024,
    category: "Konut",
    shortDescription:
      "Mevcut bir binanın çatı katına eklenen dubleks dairenin, şehir manzarasını yaşam alanına taşıyan tasarımı.",
    description: `Beşiktaş Ulus'ta mevcut bir apartmanın çatı katına yapılan ek ile oluşturulan bu dubleks daire, alt katta yaşam alanları, üst katta ise yatak odaları ve küçük bir çalışma nişi barındırır.

Alt kattaki açık plan salon-mutfak, güneybatıya bakan geniş bir pencereyle kent siluetine açılır. İç merdiven çelik-ahşap konstrüksiyon olarak tasarlandı ve mekânda hafif bir endüstriyel vurgu oluşturur.

Üst katta çatı eğimine uygun alçak tavanlı alanlar, gömme dolap ve özel tasarım yatak başlığı ile değerlendirildi. Teras alanı, ahşap deck ve çelik korkuluk ile düzenlenerek dış mekan oturma alanına dönüştürüldü. Tüm doğrama ve yalıtım sistemi sıfırdan yapıldı.`,
    area: "95 m²",
    status: "Tamamlandı",
    featured: true,
    images: {
      main: "/images/projects/ulus-dublex-1.jpg",
      banner: "/images/projects/ulus-dublex-banner.jpg",
      gallery: [
        "/images/projects/ulus-dublex-1.jpg",
        "/images/projects/ulus-dublex-2.jpg",
      ],
    },
  },
  {
    slug: "buyukada-yazlik",
    title: "Büyükada Bahçeli Ev Restorasyonu",
    location: "Büyükada, İstanbul",
    year: 2022,
    category: "Konut",
    shortDescription:
      "Ada mimarisine uygun bir ahşap evin, özgün karakteri korunarak yapılan onarım ve yenileme çalışması.",
    description: `Büyükada'da 1930'lara ait ahşap bir evin, yapısal güçlendirme ve iç mekan yenileme projesidir. Cephedeki ahşap lambri, çürüyen bölümleri değiştirilerek özgün renginde yeniden boyandı. Pencere doğramaları, orijinal ölçülerinde ahşap olarak yenilendi.

İç mekanda mutfak ve banyo tamamen modernize edilirken, salon ve yatak odalarındaki orijinal ahşap döşeme ve tavan kaplamaları korundu. Mutfakta ada tipi tezgah, doğal taş zemin ve açık raf sistemi tercih edildi.

Bahçede mevcut meyve ağaçları korunarak küçük bir oturma terası ve taş yürüyüş yolu eklendi. Evin ısıtma sistemi soba ve şömine kombinasyonundan kombi sistemine geçirildi. Elektrik ve su tesisatı tamamen yenilendi.`,
    area: "110 m²",
    status: "Tamamlandı",
    featured: false,
    images: {
      main: "/images/projects/buyukada-ev-1.jpg",
      banner: "/images/projects/buyukada-ev-banner.jpg",
      gallery: [
        "/images/projects/buyukada-ev-1.jpg",
        "/images/projects/buyukada-ev-2.jpg",
      ],
    },
  },
  {
    slug: "nisantasi-showroom",
    title: "Nişantaşı Mağaza Tasarımı",
    location: "Şişli, İstanbul",
    year: 2023,
    category: "Ticari",
    shortDescription:
      "Bir giyim markası için, vitrin düzeninden ürün sergileme sistemine kadar bütüncül iç mekan tasarımı.",
    description: `Nişantaşı'nın ana caddelerinden birinde yer alan zemin kat ticari alanın, yerel bir giyim markası için showroom'a dönüştürülme projesidir. Mekân, vitrin bölümü, sergileme alanı ve arka depo-kabini olarak üç fonksiyonel bölgeye ayrıldı.

Vitrin tasarımında minimal bir yaklaşım benimsenerek, manken yerine asılı ürün sergileme sistemi ve spot aydınlatma kullanıldı. İç mekandaki sergileme duvarları modüler olarak tasarlandı; sezon değişimlerinde kolayca yeniden düzenlenebilir.

Zemin kaplama olarak açık tonlu meşe görünümlü laminat, tavan ise mat siyah boya ile tamamlandı. Deneme kabinleri, keten perde ve pirinç askı detaylarıyla markanın doğal estetiğini yansıtır. Aydınlatma planı, ürünlerin rengini doğru yansıtacak CRI değeri yüksek LED armatürlerle oluşturuldu.`,
    area: "80 m²",
    status: "Tamamlandı",
    featured: false,
    images: {
      main: "/images/projects/nisantasi-magaza-1.jpg",
      banner: "/images/projects/nisantasi-magaza-banner.jpg",
      gallery: [
        "/images/projects/nisantasi-magaza-1.jpg",
        "/images/projects/nisantasi-magaza-2.jpg",
      ],
    },
  },
  {
    slug: "cihangir-studyo",
    title: "Cihangir Stüdyo Daire",
    location: "Beyoğlu, İstanbul",
    year: 2025,
    category: "Konut",
    shortDescription:
      "Küçük bir stüdyo dairenin, akıllı depolama çözümleri ve çok fonksiyonlu mobilyalarla yeniden tasarımı.",
    description: `Cihangir'de 42 metrekarelik bir stüdyo dairenin, tek kişilik yaşam için optimize edilmiş iç mekan projesidir. Sınırlı alanda yatak, çalışma masası, mutfak ve oturma alanı bir arada, birbirini engellemeden çalışacak şekilde kurgulandı.

Yatak alanı, yükseltilmiş bir platform üzerine yerleştirilerek altında geniş çekmeceli depolama alanı oluşturuldu. Mutfak tezgahı aynı zamanda yemek masası olarak kullanılabilecek şekilde uzatıldı ve altına iki bar taburesi yerleştirildi.

Duvar boyunca uzanan gömme dolap sistemi, giriş gardırobu, kitaplık ve TV ünitesini tek bir modül içinde birleştirir. Renk paletinde beyaz, açık meşe ve pastel yeşil tonları tercih edilerek küçük alana ferah bir atmosfer kazandırıldı. Banyo, duşakabin ve asma lavabo ile kompakt ama işlevsel tutuldu.`,
    area: "42 m²",
    status: "Devam Ediyor",
    featured: false,
    images: {
      main: "/images/projects/cihangir-studyo-1.jpg",
      banner: "/images/projects/cihangir-studyo-banner.jpg",
      gallery: [
        "/images/projects/cihangir-studyo-1.jpg",
        "/images/projects/cihangir-studyo-2.jpg",
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
