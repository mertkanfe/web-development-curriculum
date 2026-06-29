# 📂 HTML Fundamentals (Temelleri)

Bu klasör, modern web geliştirmenin temel taşı olan HTML5 standartlarını kavramak, semantik web sayfaları inşa etmek ve tarayıcıların yapısal iskeletini anlamak amacıyla hazırlanan ders notlarını, kod örneklerini ve pekiştirme egzersizlerini barındırmaktadır.

---

## 📚 Ders İçeriği ve Konu Başlıkları

### 💡 HTML Dünyasına Giriş
* **#1** | HTML5 Nedir? Evrimi ve Web Standartlarındaki Rolü
* **#2** | HTML Etiketleri (Tags) Nedir? Element ve Öznitelik (Attribute) Kavramları
* **#3** | Başlık Etiketleri (`<h1>` - `<h6>`) ve Arama Motorları (SEO) İçin Önemi
* **#4** | İlk Sayfam: Temel Bir HTML Dosyasının Canlıya Alınması
* **#5** | Açıklama Satırları (Yorum Satırı) Kullanımı ve Kod Düzenindeki Rolü

### 📝 Metin ve Liste Yapıları
* **#6** | Başlık ve Paragraflar (`<p>`) ile İçerik Düzenleme
* **#7** | Listelerle Çalışmak: Sıralı (`<ol>`) ve Sırasız (`<ul>`) Liste Kullanımı
* **#8** | Emmet Prefabrikasyonu ile Hızlı ve Verimli HTML Yazım Teknikleri

### 🔗 Medya ve Bağlantı Yönetimi
* **#9** | Görsellerle Çalışmak (`<img>` Etiketi, `src` ve `alt` Öznitelikleri)
* **#10** | Linkler: Sayfa İçi, Sayfalar Arası ve Dış Bağlantı Köprüleri Kurmak (`<a>` ve `target="_blank"`)

### 🏗️ Yapısal ve Semantik HTML
* **#11** | Blok (Block) ve Satır İçi (Inline) Elementler Arasındaki Farklar ve Yerleşim Kuralları
* **#12** | Ekstra Özellikler Eklemek: Küresel Öznitelikler (`id`, `class`, `style`, `title`)
* **#13** | HTML Genel Yapısı (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`, Metatalar)
* **#14** | Semantik HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) ve Erişilebilirlik
* **#15** | Diğer Önemli HTML Etiketleri (Vurgu Metinleri `<strong>`, `<em>`, Tablolar `<table>` ve Biçimlendirmeler)

---

## 🎯 Bölüm Sonu Çalışmaları (Ödevler)

Klasör içerisindeki teorik bilgileri pekiştirmek amacıyla öğrencilere sunulan üç büyük pratik çalışma:

### 📝 Ödev 1 - İlk Web Sayfamızı Oluşturmak
Harika konular öğrendikten sonra sıra geldi ilk web sayfamızı tasarlamaya! Bu ödevde, temel HTML etiketlerini kullanarak kendinizi tanıtan basit ve temiz bir yapı oluşturmanız beklenmektedir.

**Gereksinimler:**
* Site açıldığında adınız ve soyadınız ana başlık (`<h1>`) şeklinde gösterilmelidir.
* Ad-Soyadın hemen altında alt başlık (`<h2>`) olarak **"Hakkımda"** yazmalıdır.
* Bu başlığın altında bir paragraf (`<p>`) içerisinde neler yaptığınızı ve nelerden hoşlandığınızı anlatmalısınız.
* Web sitenizi kaydederken ana dosya adı olarak mutlaka `index.html` seçilmelidir.
* Yazdığınız kod bloklarını ve ne işe yaradıklarını açıklayan **yorum satırları** eklenmelidir.

![Görev 1 Ekran Görüntüsü](/img/Html-gorev-1.png)

---

### 📝 Ödev 2 - Kişisel Sayfamızı Detaylandırmak
İlk ödevde attığımız temel üzerine, yeni öğrendiğimiz medya, listeler ve link yapılarını ekleyerek kişisel sayfamızı zenginleştirmeye ve geliştirmeye devam ediyoruz.

**Gereksinimler:**
* Sayfanıza kendinizi veya ilgi alanınızı yansıtan bir adet resim (`<img>`) ekleyin ve bu resmin altına açıklayıcı bir metin yazın.
* Sevdiğiniz film, dizi ve kitapları temsil eden başlıklar oluşturun.
* İçerikleri listelerken; ana kategoriler (Film, Dizi, Kitap) **Sıralı Liste (`<ol>`)**, bu kategorilerin içindeki maddeler ise **Bullet Liste / Sırasız Liste (`<ul>`)** olmalıdır.
* Listelediğiniz film ve dizilerin en az bir tanesine **IMDb linki**, kitapların en az bir tanesine de **Goodreads linki** yönlendirmesi (`<a>`) ekleyin.
* Kurduğunuz sayfa düzeninde blok (block) ve satır içi (inline) element özelliklerine dikkat ederek kullanım sergileyin.

![Görev 2 Ekran Görüntüsü](/img/Html-gorev-2.png)

---

### 📝 Ödev 3 - HTML Elementleri ile Yemek Tarifi Sitesi
Bu ödevde, en sevdiğiniz bir yemek ya da tatlının tarifini içeren profesyonel yapıda bir web sayfasını, şu ana kadar öğrendiğiniz tüm HTML etiket varyasyonlarını kullanarak kodlamanız istenmektedir.

**Zorunlu Kullanılması Gereken HTML Etiketleri:**
* **Yapısal Etiketler:** `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`, `<meta charset="UTF-8">`
* **Metin Biçimlendirme:** `<h1>` (Ana yemek başlığı), `<h2>` (Malzemeler ve Hazırlanış alt başlıkları), `<p>` (Tarif açıklamaları ve giriş yazısı)
* **Listeler:** `<ul>` (Malzemelerin listelenmesi için sırasız liste), `<ol>` (Adım adım hazırlanış aşamaları için sıralı liste)
* **Vurgu:** Önemli ipuçları veya süreler için `<strong>` (Kalın yazı) veya `<em>` (İtalik yazı) kullanımı
* **Medya ve Link:** `<img>` (Yemeğin iştah açıcı bir fotoğrafı), `<a>` (Tarifin alındığı kaynak siteye giden köprü bağlantı)
* **Tablo (Opsiyonel / Ek Puan):** `<table>`, `<tr>`, `<td>` etiketleri kullanılarak yemeğin besin değerleri (Kalori, Protein vb.) veya hazırlama/pişirme sürelerini gösteren şık bir tablo yapısı.

![Görev 3 Ekran Görüntüsü](/img/Html-gorev-3.png)

---

## 🛠️ Kurulum ve Çalıştırma

Projeleri yerel bilgisayarınızda görüntülemek ve üzerinde çalışmak için aşağıdaki adımları takip edebilirsiniz:

1. Depoyu klonlayın:
   ```bash
   git clone [https://github.com/kullanici_adi/repo_adi.git](https://github.com/kullanici_adi/repo_adi.git)