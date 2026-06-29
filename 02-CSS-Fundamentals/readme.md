# 📂 CSS3 Fundamentals (Temelleri)

Bu klasör, web sayfalarını görsel olarak şekillendirmek, modern arayüz tasarımları oluşturmak ve sayfa yerleşim (layout) kurallarını kavramak amacıyla hazırlanan ders notlarını, kod örneklerini ve pekiştirme egzersizlerini barındırmaktadır.

---

## 📚 Ders İçeriği ve Konu Başlıkları

### 💡 CSS Dünyasına Giriş ve Entegrasyon
* **#1** | CSS Nedir? Web Sayfalarındaki Rolü ve HTML ile İlişkisi
* **#2** | Inline CSS (Satır İçi CSS) Nasıl Kullanılır? Avantaj ve Dezavantajları
* **#3** | CSS Yöntemleri: Inline (Etikete Özel), Internal (Sayfaya Özel) ve External (Harici CSS Dosyası) Kullanımı ve Öncelik Sıralamaları (Specificity)

### ✍️ Kod Düzeni ve Metin Biçimlendirme
* **#4** | Açıklama Satırları (Yorum Satırı) ile Çalışmak ve Genel Font Özellikleri (`font-family`, `font-size`, `font-weight`)

### 🎯 CSS Seçiciler (Selectors)
* **#5** | CSS ile Class (Sınıf) ve ID Kullanımı, Aralarındaki Kritik Farklar
* **#6** | CSS Seçiciler (Selectors) ile Çalışmak: İstediğimiz HTML Etiket Yapısını Hedeflemek ve Stil Özellikleri Eklemek

### 📦 Kutu Modeli (Box Model)
* **#7** | CSS Kutu Özellikleri: Elementlerin Alan Yönetimi (`margin`, `padding`, `width`, `height`) ve Box Model Kavramı

---

## 🎯 Bölüm Sonu Projeleri (Ödevler)

Öğrenilen teorik bilgilerin pratiğe dökülmesi amacıyla hazırlanan 3 adet görev:

### 🛠️ Ödev 1: Çok Sayfalı Web Sitesi Tasarımı
Sıfırdan modern ve tasarımsal açıdan göze hoş gelen çok sayfalı bir web sitesi prototipi oluşturma görevi.
* **Sayfa Yapısı:** Menü kısmında linkler (`<a>`) verilerek sayfalar arası geçiş sağlanmalı.
* **Renk & Font:** Renk paletleri için [Colorhunt](https://colorhunt.co/), fontlar için [Google Fonts](https://fonts.google.com/) entegrasyonu deneyimlenmeli.
* **CSS Kuralları:** DRY (Don't Repeat Yourself) prensibine sadık kalınarak kendini tekrar eden kodlardan kaçınılmalı (Gerekirse External CSS tercih edilmeli).
* **İpucu:** Ana sayfadaki listelerin noktalarını ortalamak için `list-style-position: inside;` kullanılabilir.

![Görev 1 Ekran Görüntüsü](/img/Css-gorev-1.png)


### 📜 Ödev 2: Geçmişe Yolculuk (Google 1998 Ana Sayfası)
İnternet arşivi olan Wayback Machine üzerindeki verilerden yararlanarak, Google'ın 1998 yılındaki ilk ham sürümünü CSS yetenekleri ile klonlama görevi.
* **Amaç:** Temel HTML/CSS becerilerini saf tasarım yeteneğiyle harmanlamak.
* **Görsel Materyal:** Görevde [Google 1998 Logosu](https://web.archive.org/web/19990504112211im_/http://www.google.com/google.jpg) kullanılmalıdır.
* **Kural:** Butonların çalışması zorunlu değildir, önemli olan tasarımsal benzerlik yakalamak ve kod içerisinde bolca açıklama satırına (`/* yorum */`) yer vermektir.

![Görev 2 Ekran Görüntüsü](/img/Css-gorev-2.png)

### 🌐 Ödev 3: Günümüz Dünyası (Modern Google Ana Sayfası)
Yıllar içinde evrilen ve bugünkü minimalist haline kavuşan modern Google ana sayfasını (2019-Günümüz şablonu) CSS ile yeniden inşa etme görevi.
* **Referans Link:** [Google Wayback Arşivi](https://web.archive.org/web/20191130234759if_/https://www.google.com/)
* **Amaç:** Arama çubuğu, buton yerleşimleri, hizalamalar ve modern web elementlerinin konumlandırılmasını (Box Model mantığını) kusursuzlaştırmak.
* **Kural:** Tasarımın aslına olabildiğince sadık kalınmalı ve temiz kod prensipleriyle yorum satırları ihmal edilmemelidir.

![Görev 3 Ekran Görüntüsü](/img/Css-gorev-3.png)

---

## 🛠️ Kurulum ve Çalıştırma

Projeleri yerel bilgisayarınızda görüntülemek ve üzerinde çalışmak için aşağıdaki adımları takip edebilirsiniz:

1. Depoyu klonlayın:
   ```bash
   git clone [https://github.com/kullanici_adi/repo_adi.git](https://github.com/kullanici_adi/repo_adi.git)