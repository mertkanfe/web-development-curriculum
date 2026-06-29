# 📂 JavaScript Fundamentals (Temelleri)

Bu klasör, web sayfalarına dinamizm kazandırmak, mantıksal algoritmalar kurmak ve tarayıcı tabanlı veri yönetimini kavramak amacıyla hazırlanan ders notlarını, kod örneklerini ve pekiştirme egzersizlerini barındırmaktadır.

---

## 📚 Ders İçeriği ve Konu Başlıkları

### 💡 JavaScript Nedir?
* **#1** | Birçok Platformda Hello World ve Hello World'ün Önemi

### 📦 Değişkenlerle Çalışmak (#2)
* **#3** | Değişken Tanımlama Kuralları (`let`, `const`, `var`)
* **#4** | Number Veri Türü Kullanımı, Temel Aritmetik İşlemler, İşlem Önceliği, Arttırma ve Azaltma İşlemleri
* **#5** | Boolean Veri Türü ile Çalışmak (`true` / `false`)
* **#6** | Değişken Türünü Kontrol Etmek (`typeof`) ve Değişken Türünü Değiştirmek (Type Conversion)
* **#7** | Template Literals Kullanımı (Modern String Biçimlendirme)
* **#8** | String Veri Türü İşlemleri ve Temel Metotlar

### 🌐 DOM (Document Object Model) ile Çalışmak
* **#9** | Document Object Model (DOM) Nedir?
* **#10** | DOM İçerisinden Etiket (Tag), Sınıf (Class) ve ID ile Öğe Seçimi
* **#11** | `prompt()` ile Kullanıcıdan Dinamik Bilgi Almak
* **#12** | Liste İçerisindeki Öğeye Erişmek ve Yeni Öğe Eklemek (`createElement`, `appendChild`)
* **#13** | DOM Elementlerine CSS Class Bilgisi Eklemek veya Çıkarmak (`classList`)

### ⚖️ Karar Yapıları ve Koşullar
* **#14** | Karşılaştırma Operatörleri ve Mantıksal Operatörler (`==`, `===`, `&&`, `||`, `!`)
* **#15** | Koşul Yapısı Kullanımı (`if` / `else`)
* **#16** | Çoklu Koşul Yapısı Kullanımı (`if` / `else if` / `else`)
* **#17** | Ternary Operatör (`Koşul ? Doğruysa : Yanlışsa`) ile Kısa Koşul Kullanımı
* **#18** | **📝 Koşullarla Çalışmak - Bölüm Sonu Egzersizi**

### ⚙️ Fonksiyonlar (Functions)
* **#19** | Fonksiyon Nedir? Neden Kullanırız? (DRY Prensibi)
* **#20** | Fonksiyona Parametre (`params`) ve Geri Dönüş (`return`) Değeri Eklemek
* **#21** | Fat Arrow (`() =>`) Fonksiyonu Kullanımı (Modern ES6+)
* **#22** | DOM Etkinlikleriyle Çalışmak (`addEventListener`, `click`, `submit` vb.)
* **#23** | **📝 Fonksiyonlar - Bölüm Sonu Egzersizi**

### 💾 LocalStorage (Tarayıcı Depolama)
* **#24** | LocalStorage ile Veri Eklemek (`setItem`), Düzenlemek ve Silmek (`removeItem`, `clear`)
* **#25** | LocalStorage İçerisine Farklı Türde Veriler (Object/Array) Eklemek (`JSON.stringify`, `JSON.parse`)
* **#26** | **📝 LocalStorage - Bölüm Sonu Egzersizi**

### 📑 Form Yönetimi
* **#27** | Form ve Form Submit Yönetimi (`preventDefault()`)
* **#28** | Input İçerisinden Değer Almak (`value`)
* **#29** | **📝 Formlarla Çalışmak - Bölüm Sonu Egzersizi**

### 🗂️ Dizi (Array) Veri Tipiyle Çalışmak
* **#30** | Dizi (Array) Oluşturmak ve Dizi İçindeki Elemanlara İndeks ile Ulaşmak
* **#31** | Diziye Yeni Eleman Eklemek, Çıkartmak ve Güncellemek (`push`, `pop`, `shift`, `unshift`)
* **#32** | Sık Kullanılan Array (Dizi) Metotları ve Dizi İçinde Dizi (Multidimensional Array) Oluşturma

### 🔄 Döngüler (Loops)
* **#33** | `for` Döngüsü Kullanımı
* **#34** | `break` ve `continue` İfadelerinin Kullanım Senaryoları
* **#35** | `while` Döngüsü Kullanımı
* **#36** | `forEach` ile Array İçerisindeki Öğelerin Çağrılması
* **#37** | `filter` ile Array İçerisinde Sadece İstenilen Bilgilerin Yeni Listeye Eklenmesi
* **#38** | `map` ile Array İçerisindeki Yapının Değiştirilerek Yeni Liste Oluşturulması

### 💎 Nesne (Object) Yapısı
* **#39** | Object (Nesne) Nedir? Nasıl Oluşturulur?
* **#40** | Object Anahtar (`Key`) ve Değer (`Value`) Yapısının Kullanımı ve Erişimi
* **#41** | Nesnelere Nasıl Metot (Fonksiyon) Ekleriz?
* **#42** | Object ve Array `Destructuring` Kullanımı (Modern ES6+)

### ⚠️ Hata Yönetimi
* **#43** | `try` ve `catch` Blokları ile Güvenli Kod Yazımı

### 📡 Fetch API (Asenkron Veri Transferi)
* **#44** | Fetch API ile Çalışmak ve Uzak Sunucudan Veri Çekme Temelleri

---

## 🎯 Bölüm Sonu Projeleri (Ödevler)

Klasör içerisindeki teorik bilgileri pekiştirmek amacıyla öğrencilere sunulan iki büyük pratik çalışma:

### 🛠️ Ödev 1: JavaScript Saat ve Karşılama Ekranı
Kullanıcıyı dinamik bir girdiyle karşılayan, tarayıcıda anlık saat ve gün bilgisini canlı olarak güncelleyen arayüz çalışması.

![Görev 1 Ekran Görüntüsü](/img/Javascript-gorev-1.png)

### 📜 Ödev 2: JavaScript ile To-Do List
Element ekleme, silme ve yapıldı (`checked`) olarak işaretleme fonksiyonlarına sahip; Bootstrap Toast ile validasyon uyarıları sunan ve Local Storage ile verileri tarayıcı hafazasında tutan durum yönetimli web uygulaması.

![Görev 2 Ekran Görüntüsü](/img/Javascript-gorev-2.png)

---

## 🛠️ Kurulum ve Çalıştırma

Projeleri yerel bilgisayarınızda görüntülemek ve üzerinde çalışmak için aşağıdaki adımları takip edebilirsiniz:

1. Depoyu klonlayın:
   ```bash
   git clone [https://github.com/kullanici_adi/repo_adi.git](https://github.com/kullanici_adi/repo_adi.git)