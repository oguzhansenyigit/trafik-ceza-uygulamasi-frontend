const penaltyDataTypes = [
    {
        secretariat: 'GENEL SEKRETER YARDIMCILIĞI(1)',
        departments: [
            {
                department: 'İNSAN KAYNAKLARI VE EĞİTİM DAİRESİ BAŞKANLIĞI',
                subunits: [
                    'İş Sağlığı ve Güvenliği Şube Müdürlüğü',
                    'İnsan Kaynakları Şube Müdürlüğü',
                    'Eğitim Şube Müdürlüğü',
                    'Hayat Boyu Öğrenme Şube Müdürlüğü',
                    'Kalite ve Yönetim Sistemleri Şube Müdürlüğü'
                ]
            },
            {
                department: 'YAZI İŞLERİ VE KARARLAR DAİRESİ BAŞKANLIĞI',
                subunits: [
                    'Meclis Şube Müdürlüğü',
                    'Encümen Şube Müdürlüğü',
                    'Yazı İşleri Şube Müdürlüğü',
                    'Arşiv Şube Müdürlüğü'
                ]
            },
            {
                department: 'BİLGİ İŞLEM DAİRESİ BAŞKANLIĞI',
                subunits: [
                    'Bilgi İşlem Şube Müdürlüğü',
                    'Elektronik Sistemler Şube Müdürlüğü',
                    'Coğrafi Bilgi Sistemi Şube Müdürlüğü',
                    'Akıllı Şehir Şube Müdürlüğü'
                ]
            },
            {
                department: 'DIŞ İLİŞKİLER DAİRESİ BAŞKANLIĞI',
                subunits: [
                    'Dış İlişkiler Şube Müdürlüğü',
                    'AB İlişkileri Şube Müdürlüğü'
                ]
            }
        ]
    },
    {
        secretariat: 'GENEL SEKRETER YARDIMCILIĞI-3',
        departments: [
            {
                department: 'Kültür Dairesi Başkanlığı',
                subunits: [
                    'Orkestralar Şube Müdürlüğü',
                    'Kültürel Etkinlikler Şube Müdürlüğü',
                    'Şehir Tiyatroları Şube Müdürlüğü',
                    'Turizm Şube Müdürlüğü',
                    'Sağlık Dairesi Başkanlığı',
                    'İstanbul Darülaceze Şube Müdürlüğü',
                    'Sağlık ve Hıfzıssıhha Şube Müdürlüğü',
                    'Sosyal Hizmetler Dairesi Başkanlığı',
                    'Engelliler Şube Müdürlüğü',
                    'Sosyal Hizmetler Şube Müdürlüğü',
                    'Kadın ve Aile Hizmetleri Şube Müdürlüğü',
                    'Bağımlılıkla Mücadele ve Rehabilitasyon Şube Müdürlüğü'
                ]
            },
            {
                department: 'Kültür Varlıkları Dairesi Başkanlığı',
                subunits: [
                    'Kütüphane ve Müzeler Şube Müdürlüğü',
                    'Kültür Varlıkları Projeler Şube Müdürlüğü',
                    'Koruma Uygulama ve Denetim Şube Müdürlüğü',
                    'Kültürel Miras Koruma Şube Müdürlüğü'
                ]
            },
            {
                department: 'Basın Yayın Ve Halkla İlişkiler Dairesi Başkanlığı',
                subunits: [
                    'Basın Yayın Şube Müdürlüğü',
                    'Halkla İlişkiler Şube Müdürlüğü',
                    'Şehit Yakınları ve Gazilerle İlişkiler Şube Müdürlüğü'
                ]
            }
        ]
    },
    {
        secretariat: 'GENEL SEKRETER YARDIMCILIĞI-2',
        departments: [
            {
                department: 'Çevre Koruma ve Kontrol Dairesi Başkanlığı',
                subunits: [
                    'Çevre Koruma Şube Müdürlüğü',
                    'Atık Yönetimi Şube Müdürlüğü',
                    'Deniz Hizmetleri Şube Müdürlüğü',
                    'İklim Değişikliği Şube Müdürlüğü'
                ]
            },
            {
                department: 'Raylı Sistem Dairesi Başkanlığı',
                subunits: [
                    'Avrupa Yakası Raylı Sistem Şube Müdürlüğü',
                    'Anadolu Yakası Raylı Sistem Şube Müdürlüğü',
                    'Raylı Sistem Projeler Şube Müdürlüğü'
                ]
            }
        ]
    },
    {
        secretariat: 'GENEL SEKRETER YARDIMCILIĞI-7',
        departments: [
            {
                department: 'Satınalma Dairesi Başkanlığı',
                subunits: [
                    'İhale İşleri Şube Müdürlüğü',
                    'Levazım ve Ayniyat Şube Müdürlüğü',
                    'Satınalma Şube Müdürlüğü'
                ]
            },
            {
                department: 'Park Bahçe ve Yeşil Alanlar Dairesi Başkanlığı',
                subunits: [
                    'Avrupa Yakası Park ve Bahçeler Şube Müdürlüğü',
                    'Anadolu Yakası Park ve Bahçeler Şube Müdürlüğü',
                    'Yeşil Alan ve Tesisler Yapım Şube Müdürlüğü',
                    'Enerji Yönetimi ve Aydınlatma Şube Müdürlüğü',
                    'Kentsel Ekolojik Sistemler Şube Müdürlüğü'
                ]
            },
            {
                department: 'Fen İşleri Dairesi Başkanlığı',
                subunits: [
                    'Yapı İşleri Şube Müdürlüğü',
                    'Altyapı Hizmetleri Şube Müdürlüğü',
                    'Birim Fiyat ve Standartlar Şube Müdürlüğü',
                    'Kesin Hesap Şube Müdürlüğü',
                    'Kurumsal Proje Yönetim Şube Müdürlüğü'
                ]
            },
            {
                department: 'Yol Bakım ve Altyapı Koordinasyon Dairesi Başkanlığı',
                subunits: [
                    'Altyapı Koordinasyon Şube Müdürlüğü',
                    'Makine İkmal Şube Müdürlüğü',
                    'Avrupa Yakası Yol Bakım ve Onarım Şube Müdürlüğü',
                    'Anadolu Yakası Yol Bakım ve Onarım Şube Müdürlüğü'
                ]
            },
            {
                department: 'Etüd ve Projeler Dairesi Başkanlığı',
                subunits: [
                    'Altyapı Projeler Şube Müdürlüğü',
                    'Üstyapı Projeler Şube Müdürlüğü',
                    'Kentsel Tasarım Şube Müdürlüğü'
                ]
            }
        ]
    },
    {
        secretariat: 'GENEL SEKRETER YARDIMCILIĞI-4',
        departments: [
            {
                department: 'Ulaşım Dairesi Başkanlığı',
                subunits: [
                    'Ulaşım Planlama Şube Müdürlüğü',
                    'Ulaşım Koordinasyon Şube Müdürlüğü',
                    'Trafik Şube Müdürlüğü',
                    'Toplu Ulaşım Hizmetleri Şube Müdürlüğü',
                    'Lojistik Yönetimi ve Terminaller Şube Müdürlüğü'
                ]
            },
            {
                department: 'İmar ve Şehircilik Dairesi Başkanlığı',
                subunits: [
                    'Şehir Planlama Şube Müdürlüğü',
                    'Planlama Şube Müdürlüğü',
                    'İmar Şube Müdürlüğü',
                    'Harita Şube Müdürlüğü'
                ]
            },
            {
                department: 'Deprem Risk Yönetimi ve Kentsel İyileştirme Dairesi Başkanlığı',
                subunits: [
                    'Deprem ve Zemin İnceleme Şube Müdürlüğü',
                    'İstanbul Şehircilik Atölyesi Şube Müdürlüğü (İŞAT)',
                    'Kentsel Dönüşüm Şube Müdürlüğü',
                    'Boğaziçi İmar Şube Müdürlüğü'
                ]
            },
            {
                department: 'Emlak Yönetimi Dairesi Başkanlığı',
                subunits: [
                    'Emlak Şube Müdürlüğü',
                    'Kamulaştırma Şube Müdürlüğü',
                    'Mesken Şube Müdürlüğü',
                    'Reklam Yönetimi Şube Müdürlüğü'
                ]
            }
        ]
    },
    {
        secretariat: 'GENEL SEKRETER YARDIMCILIĞI-6',
        departments: [
            {
                department: 'Mezarlıklar Dairesi Başkanlığı',
                subunits: [
                    'Avrupa Yakası Mezarlıklar Şube Müdürlüğü',
                    'Anadolu Yakası Mezarlıklar Şube Müdürlüğü',
                    'Mezarlıklar Destek Hizmetleri Şube Müdürlüğü',
                ]
            },
            {
                department: 'Zabıta Dairesi Başkanlığı',
                subunits: [
                    'Ruhsat ve Denetim Şube Müdürlüğü',
                    'Anadolu Yakası Zabıta Şube Müdürlüğü',
                    'Avrupa Yakası Zabıta Şube Müdürlüğü',
                    'Zabıta Tedbir Şube Müdürlüğü',
                    'Zabıta Destek Hizmetleri Şube Müdürlüğü'
                ]
            },
            {
                department: 'Destek Hizmetleri Dairesi Başkanlığı',
                subunits: [
                    'Destek Hizmetleri Şube Müdürlüğü',
                    'Gençlik ve Spor Şube Müdürlüğü',
                    'Güvenlik Şube Müdürlüğü',
                    'Tesisler Bakım ve Onarım Şube Müdürlüğü',
                    'İşletmeler Şube Müdürlüğü',
                ]
            },
            {
                department: 'İtfaiye Dairesi Başkanlığı',
                subunits: [
                    'Merkez İtfaiye Şube Müdürlüğü',
                    'Avrupa Yakası İtfaiye Şube Müdürlüğü',
                    'Anadolu Yakası İtfaiye Şube Müdürlüğü',
                    'Afet Koordinasyon Merkezi Şube Müdürlüğü',
                    'Acil Yardım ve Cankurtarma Şube Müdürlüğü',
                    'Tarımsal Hizmetler Dairesi Başkanlığı',
                    'Tarım ve Su Ürünleri Şube Müdürlüğü',
                    'Veteriner Hizmetleri Şube Müdürlüğü',
                    'Hal Şube Müdürlüğü'
                ]
            },
            {
                department: 'Muhtarlık İşleri Dairesi Başkanlığı',
                subunits: [
                    'Muhtarlıklar Şube Müdürlüğü'
                ]
            }
        ]
    },
    {
        secretariat: 'GENEL SEKRETER YARDIMCILIĞI-5',
        departments: [
            {
                department: 'Strateji Geliştirme Dairesi Başkanlığı',
                subunits: [
                    'Strateji Geliştirme Şube Müdürlüğü',
                    'Hizmet İyileştirme Şube Müdürlüğü'
                ]
            },
            {
                department: 'Mali Hizmetler Dairesi Başkanlığı',
                subunits: [
                    'Bütçe ve Denetim Şube Müdürlüğü',
                    'Giderler Şube Müdürlüğü',
                    'Gelirler Şube Müdürlüğü',
                    'Finansman Şube Müdürlüğü',
                    'Mali Kontrol Şube Müdürlüğü',
                    'İştirakler Koordinasyon Şube Müdürlüğü'
                ]
            },
        ]
    },
    {
        secretariat: 'BASIN DANIŞMANI',
        departments: [
            
        ]
    },
    {
        secretariat: 'ÖZEL KALEM MÜDÜRLÜĞÜ',
        departments: [
            
        ]
    },
    {
        secretariat: 'TEFTİŞ KURULU BAŞKANLIĞI',
        departments: [
            
        ]
    },
    {
        secretariat: 'İÇ DENETİM BİRİMİ BAŞKANLIĞI',
        departments: [
            
        ]
    },
]

export default penaltyDataTypes;