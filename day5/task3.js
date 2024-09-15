/* Görev 3: Arabaların Kimden Alındığına Göre Satış Gelirleri Toplamı

Çalıştığın şirket, arabaları genelde takasta sahibinden veya galeriden alıyor. Tüm arabaların satıldığını varsayarak kimden alındığına göre bir satış geliri(selling_price) hesabı yapmak istiyorlar.

Bunun için adı calculateRevenue olan bir fonksiyon yazalım.
Bu fonksiyon arabaların özelliklerini(object) içeren listeyi(array) ve kimden(seller_type) olduğunu("Sahibinden" veya "Galeri") parametre olarak alsın.
Hesaplanan toplam satış geliri tutarını geri dönsün.
Örnek Kullanım:
calculateRevenue(arabaStogu, "Sahibinden") 41499998 dönmeli

İpucu: .filter() metodunu kullanabilirsin.
İpucu: .reduce() metodunu kullanabilirsin.
Dikkat

Volvo'daki kod temizliği kurallarına dikkat.
Örnek data:
[{ name: 'Hyundai Verna 1.6 SX', year: 2012, selling_price: 600000, km_driven: 100000, fuel: 'Dizel', seller_type: 'Sahibinden', transmission: 'Manuel', owner: 'İlk Sahibi', }] */

const { arabaStogu } = require('./arabaStogu.js');

function calculateRevenue(arabaStogu, alimTuru) {
  return arabaStogu
    .filter((araba) => araba.seller_type === alimTuru)
    .reduce((toplam, araba) => toplam + araba.selling_price, 0);
}

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = calculateRevenue;
