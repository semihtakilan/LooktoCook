# LooktoCook 🍽️

LooktoCook, kullanıcıların yeni yemek tarifleri keşfedebileceği, popüler ve trend yemekleri inceleyebileceği dinamik bir yemek tarifi platformudur. BLM2537 Site Yapma Ödevi kapsamında geliştirilmiş olan bu proje; dinamik veri yönetimi, kullanıcı doğrulama ve modern web arayüzü konseptlerini bir araya getirmektedir.

## 🚀 Proje Özellikleri

* **Dinamik Veri Yükleme (Vanilla JS & JSON):** Tarifler statik sayfalara gömülmek yerine, JavaScript `fetch` API'si kullanılarak `.json` dosyalarından çekilir ve anlık olarak ekrana HTML kartları şeklinde basılır.
* **Etkileşimli İçerik (Slider):** Popüler tarifler için ileri/geri butonlarıyla kontrol edilebilen, görsel ve açıklamaların dinamik güncellendiği özel bir slider yapısı mevcuttur.
* **Kullanıcı Giriş & Kayıt Sistemi (PHP):** Nesne Yönelimli Programlama (OOP) mantığıyla yazılmış `RegisterUser` ve `LoginUser` sınıfları sayesinde güvenli bir üyelik sistemi bulunur.
    * Kullanıcı şifreleri `password_hash` ile şifrelenerek güvenli bir şekilde `data.json` veritabanında saklanır.
* **Oturum Yönetimi (Cookies):** Giriş yapan kullanıcıların bilgileri çerezlerde (cookies) tutulur. Böylece sağ üst köşede kullanıcı adı görüntülenir ve güvenli "Çıkış Yap" işlemi sağlanır.
* **Arama ve Filtreleme:** Arama çubuğu üzerinden girilen kelimeler (URL parametresi `?q=...` ile) yakalanarak; tariflerin başlık, kategori veya yazar isimleri içerisinde anlık arama/filtreleme yapılabilir.
* **Tarif Ekleme Simülasyonu:** Yeni tarif ekleme formundan alınan veriler bir JSON objesine dönüştürülerek yakalanır ve konsola yazdırılır.

## 🛠 Kullanılan Teknolojiler

* **Frontend:** HTML5, CSS3, JavaScript (Vanilla JS)
* **Backend:** PHP (OOP Temelli)
* **Veri Depolama:** JSON formatı (Hem tarif verileri hem de kullanıcı kayıtları için)

## ⚙️ Kurulum ve Çalıştırma

Projenin içerisinde PHP kodları ve HTTP istekleri (fetch) barındırdığı için dosyaların doğrudan tarayıcıda açılması yerine bir yerel sunucu (Localhost) üzerinden çalıştırılması gerekmektedir:

1. XAMPP, MAMP veya WAMP gibi bir yerel sunucu programını indirin ve kurun.
2. Bu repository'yi klonlayın:
   ```bash
   git clone [https://github.com/semihtakilan/LooktoCook.git](https://github.com/semihtakilan/LooktoCook.git)
