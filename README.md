![Ekran görüntüsü 2024-09-13 221616](https://github.com/user-attachments/assets/de4dc9a4-c279-4402-a9e6-db2e8566349c)
# React + Vite

heroData adında bir veri dizisi içerir. Bu veri, her 3 saniyede bir değişen metin çiftlerini içerir.useState ve useEffect kullanarak, her 3 saniyede bir heroCount durumunu günceller ve veri döngüsünü yönetir.Background, Navbar, ve Hero bileşenlerini içerir.

heroData prop'u ile sağlanan metinleri gösterir. Kullanıcı etkileşimine göre heroCount durumunu değiştirir ve playStatus prop'una göre video oynatma/duraklatma işlemi yapar.İçerik geçişi için "hero-dots" ve video kontrolü için "hero-play" alanlarına sahiptir.
playStatus prop'una göre bir video oynatılır veya uygun bir arka plan resmi gösterilir. heroCount prop'una göre farklı arka plan resimleri arasında geçiş yapar.

Özetle:
Projeniz, kullanıcıya dinamik içerik ve görsel geçişlerle etkileşimli bir deneyim sunar.
Arka plan videoları ve resimleri ile görsel çeşitlilik sağlar.
Kullanıcı etkileşimlerine (örneğin, buton tıklamaları) yanıt vererek içeriği günceller.
Her bir bileşen belirli bir işlevi yerine getirir ve bu bileşenler bir araya gelerek dinamik ve etkileşimli bir kullanıcı arayüzü oluşturur.

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
