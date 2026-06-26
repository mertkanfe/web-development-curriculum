# 🌐 HTML Fundamentals (HTML Temelleri) Eğitimi ve Çalışmaları

Bu depo (repository), web geliştirme yolculuğumun ilk ve en önemli adımı olan **HTML Fundamentals (HTML Temelleri)** eğitiminde öğrendiğim konuları, aldığım notları ve yaptığım pratik çalışmaları içermektedir. 

Eğitim boyunca web sayfalarının iskeletini oluşturmayı, anlamsal (semantic) kod yazmayı ve modern web standartlarını öğrendim. Eğitimi pekiştirmek adına **Bölüm Sonu Çalışması** ve **3 Adet Ödev** başarıyla tamamlanmıştır.

---

## 📚 Eğitim İçeriği ve Öğrenilen Konular

Eğitim süresince aşağıdaki 15 temel başlık ve pratikler üzerinde çalışılmıştır:

1. **#HTML5:** Modern web dünyasının standartı olan HTML5 yapısı ve getirdiği yenilikler.
2. **#HTML-etiketleri:** Tarayıcıya içeriğin ne olduğunu söyleyen etiketlerin (tags) çalışma mantığı.
3. **#Başlık-etiketi:** Sayfa başlığı (`<title>`) yönetimi ve arama motorları için önemi.
4. **#İlk-sayfam:** Merhaba Dünya! İlk canlı HTML sayfasının oluşturulması.
5. **#Açıklama-satırları:** Kod kalitesini artırmak için kendimize ve diğer geliştiricilere bıraktığımız notlar (``).
6. **#Başlık-Paragraflar:** Hiyerarşik başlık yapıları (`<h1>` - `<h6>`) ve paragraf (`<p>`) etiketleri.
7. **#Listeler:** Sıralı (`<ol>`) ve sırasız (`<ul>`) listeler ile veri organizasyonu.
8. **#Emmet:** HTML kodlarını çok daha hızlı ve verimli yazmamı sağlayan kısayollar bütünü.
9. **#Gorseller:** Web sayfasına görsel (`<img>`) ekleme, `alt` niteliği ve görsel yönetimi.
10. **#Linkler:** Sayfalar arası veya dış kaynaklara köprü (`<a>`) kurma, `target` niteliği kullanımı.
11. **#Blok-Inline-Elementler:** Sayfada tam satır kaplayan (Block-level) ve sadece içeriği kadar yer tutan (Inline) etiketlerin farkları ve davranışları.
12. **#Ekstra-Ozellikler-Eklemek:** Etiketlere `id`, `class`, `href`, `src` gibi nitelikler (attributes) ekleyerek onları güçlendirme.
13. **#HTML-Genel-Yapısı:** Bir HTML belgesinin standart anatomisi (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`).
14. **#Semantic-HTML:** Arama motoru optimizasyonu (SEO) ve erişilebilirlik için `<header>`, `<nav>`, `<main>`, `<article>`, `<footer>` gibi anlamlı etiketlerin kullanımı.
15. **#Diger-Html-Etiketleri:** Metin içi vurgular (`<strong>`, `<em>`), çizgiler (`<hr>`) ve yardımcı diğer etiketler.

---

## 🛠️ Uygulamalar ve Ödevler

* **🎯 Ödev 1 (Kişisel Profil ve İlgi Alanları Sayfası):**
    HTML dünyasına ilk adımı simgeleyen, tarayıcı anatomisini ve metin tabanlı hiyerarşik yapıları kavramaya odaklanan ilk bireysel kodlama görevidir.

    * **📖 Projenin Amacı:**
      Öğrencilerin bir web sayfasının en temel iskeletini kurması, tarayıcıya sayfa dili ve karakter kodlaması hakkında doğru talimatları vermeyi öğrenmesi ve içerik üretirken başlık ağırlıklarını (SEO hiyerarşisi) doğru kurgulaması amaçlanmıştır.

    * **📋 Görev Kapsamındaki Teknik Kriterler:**
        1. **Karakter Standartları:** Türkçe karakterlerin (`ç, ğ, ı, ö, ş, ü`) tüm tarayıcılarda ve işletim sistemlerinde bozulmadan, kusursuz render edilmesi için `<html lang="tr">` ve `<meta charset="UTF-8">` tanımlamalarının eksiksiz yapılması.
        2. **Hiyerarşik Başlık Yönetimi (Heading Weight):** Arama motorlarının (Google vb.) sayfayı doğru indeksleyebilmesi için en baskın başlıktan (`<h1>`) detay başlıklara (`<h4>`) doğru kırılan, mantıksal ve sıralı bir başlık ağacının (`<h1>` -> `<h2>` -> `<h3>` -> `<h4>`) kurulması.
        3. **Metin ve Paragraf Blokları:** Uzun metinlerin, kullanıcı deneyimini (UX) zedelememesi adına anlamlı `<p>` etiketleri ile bölümlere ayrılarak temiz bir tipografik akış elde edilmesi.

    * **✅ Kazanımlar:** W3C standartlarında ilk HTML sayfasını oluşturma, tarayıcı etiket okuma mantığını kavrama, `h1-h6` etiketlerinin sadece "büyüklük/küçüklük" değil, birer anlamsal önem sırası olduğunu içselleştirme.

    ![Görev 1 Ekran Görüntüsü](/img/html-gorev-1.png)

    * **🎯 Ödev 2 (Gelişmiş Medya Entegrasyonu ve İç İçe Listeler):**
    İlk görevde kazanılan metin hiyerarşisi becerilerini; dış bağlantı mimarileri, kategorize edilmiş veri listeleri ve semantik medya öğeleriyle birleştiren gelişmiş bir HTML yapısı çalışmasıdır.

    * **📖 Projenin Amacı:**
      Öğrencilerin web sayfalarında verileri gruplandırmayı (kategorizasyon) öğrenmesi, kullanıcı deneyimini bozmadan harici platformlara güvenli yönlendirmeler yapması ve görsel içerikleri modern HTML5 semantik standartlarına uygun şekilde dökümante etmesi amaçlanmıştır.

    * **📋 Görev Kapsamındaki Teknik Kriterler:**
        1. **Hibrit ve İç İçe Liste Yapıları (Nested Lists):** Sıralı listelerin (`<ol>`) içerisine anlamsal olarak alt kategoriler halinde sırasız listelerin (`<ul>`) entegre edilmesi ve karmaşık veri setlerinin düzenli bir şekilde hizalanması.
        2. **Güvenli Dış Bağlantı Yönetimi:** IMDb ve Goodreads gibi popüler platformlara verilen köprülerde (`<a>`), kullanıcının mevcut sayfadan kopmaması adına `target="_blank"` niteliğinin (attribute) doğru kullanımı.
        3. **Semantik Medya Yönetimi (HTML5 Media):** Görsellerin tek başına bırakılmayıp, `<figure>` etiketleri içine alınması ve görsele ait açıklamaların `<figcaption>` ile anlamsal olarak görsele bağlanması.
        4. **İçerik İçi Vurgular (Inline Formatting):** Metin akışı içerisinde önemli kavramların `<strong>` (kalın) ve `<em>` (italik/vurgulu) etiketleri ile arama motorları ve ekran okuyucular için belirginleştirilmesi.

    * **✅ Kazanımlar:** İç içe etiket ağacı (DOM Tree) mantığını kavrama, harici linkleme pratikleri kazanma, görselleri modern web standartlarına (Semantic Media) uygun yapılandırma disiplini.

    ![Görev 2 Ekran Görüntüsü](/img/html-gorev-2.png)

    * **🎯 Görev 3 (Veri Tablolama, Sayfa Düzeni ve Listeler - Yemek Tarifi):**
    HTML etiketlerinin görsel düzenleme sınırlarını zorlayan, verileri tablo ve listelerle organize ederken satır içi (inline) stil mantığıyla tanışmayı sağlayan bir projedir.

    * **📖 Projenin Amacı:**
      Öğrencilerin yapısal verileri (hazırlanma süresi, porsiyon vb.) tablo mimarisiyle hizalaması, listeleri kullanım amacına göre (bağımsız maddeler için `<ul>`, sıralı adımlar için `<ol>`) ayırt etmesi ve CSS dünyasına adım atmadan önce temel renklendirme ve kutu özelliklerini satır içi dökümante etmesi amaçlanmıştır.

    * **📋 Görev Kapsamındaki Teknik Kriterler:**
        1. **Tablo ile Metrik Hizalama:** Kaç kişilik olduğu, hazırlama ve pişirme süreleri gibi özet bilgilerin `<table>` etiketi ve hücre özellikleri (`cellpadding`, `cellspacing`) kullanılarak ekranda simetrik bir düzene oturtulması.
        2. **Mantıksal Ayrışmalı Listeler:** Tarif bileşenlerinin yapısına uygun olarak; malzemelerin sırasız liste (`<ul>`), yapılış aşamalarının ise kronolojik olarak sıralı liste (`<ol>`) ile kurgulanması.
        3. **İlk Stil Deneyimi (Inline CSS Geçişi):** Saf HTML'in sınırlarından çıkılarak, `<span>` ve `<div>` elementlerine satır içi stil özellikleri (`background-color`, `border-radius`, `padding`) verilerek modern arayüz bileşenlerinin (badge/etiket tasarımı) simüle edilmesi.
        4. **Sayfa Düzeni ve Gövde Özellikleri:** `<body bgcolor="...">` niteliği ile sayfa arka plan renginin yönetilmesi, `<center>` ve `<div>` (width/text-align) kombinasyonuyla içeriğin tarayıcı merkezine dengeli bir şekilde konumlandırılması.

    * **✅ Kazanımlar:** Amaca uygun liste türü seçimi, temel HTML tablolama mantığı, metin tabanlı tasarım elementlerini (font-family, font-weight) kod seviyesinde yönlendirme becerisi ve satır içi stillerin kod okunabilirliğine etkisini görerek harici CSS (External) ihtiyacını kavrama.

    ![Görev 3 Ekran Görüntüsü](/img/html-gorev-3.png)

    * **🏆 Bölüm Sonu Çalışması (Çok Sayfalı Mini Web Sitesi Prototipi):**
    HTML modülünde öğrenilen tüm semantik yapıları, sayfa yönlendirmelerini ve temel içerik elementlerini bir araya getiren kapsamlı bir bitirme projesidir.

    * **📖 Projenin Amacı:**
      Öğrencilerin statik bir web sitesinin mimarisini kavraması, sayfalar arası köprü (link) yapısını doğru kurması ve arama motoru dostu (SEO) semantik etiketleri hiyerarşik olarak kullanmayı pratik etmesi amaçlanmıştır.

    * **📂 Proje Dosya Yapısı:**
      ```text
      ├── index.html          # Ana Sayfa (Blog Akışı ve Karışık Listeler)
      ├── hakkimizda.html     # Hakkımızda Sayfası (Kurumsal Bilgi ve Sıralı Liste)
      └── iletisim.html       # İletişim Sayfası (Adres ve Tıklanabilir İletişim Protokolleri)
      ```
---

## 🚀 Kazanımlar
Bu çalışmalar sonucunda;
- [x] Temiz, okunabilir ve W3C standartlarına uygun HTML kodu yazabiliyorum.
- [x] Emmet kısayollarını kullanarak kodlama hızımı 2 katına çıkarabiliyorum.
- [x] Blok ve inline elementlerin yerleşim mantığına hakimim.
- [x] SEO dostu (Semantic) web sayfaları kurgulayabiliyorum.

---
💡 *Bu proje, Frontend yolculuğumun ilk kilometre taşıdır. Bir sonraki durak: **CSS ile Şekillendirme!***