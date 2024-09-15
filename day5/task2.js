/* Görev 2: Satılamama Riski Bulunan Araçlar Listesi

Değişen piyasa koşulları bazı arabaların satılmasını zorlaştırabiliyor. Bunun için senden satılması riskli arabaların listesini çıkarmanı istiyorlar.

Riskli arabalar:

kilometresi(km_driven) 250000 ve üstü olan araçlar

yaşı 20 ve üstü olan araçlar

Sahibi(owner) özelliğinin değeri "Dördüncü veya Daha Fazla Sahibi" olan araçlar

Bunun için getRiskyCarList adında bir fonksiyon yazalım.

Bu fonksiyon Arabaların özelliklerini(object) içeren listeyi(array) parametre olarak alsın.

Riskli araba kurallarına uyan arabaların listesini array olarak dönsün.

Örnek Kullanım:
convertCurrency(arabaStogu) [ {...}, {...}, ] gibi objelerden oluşan bir array dönmeli

İpucu: .filter() metodunu kullanabilirsin.
İpucu: || veya && mantıksal operatörlerinden birini kullanabilirsin!
İpucu: Karşılaştırma için veri tipine de dikkat edebilirsin. == yerine === kullanabilirsin.
Dikkat

Volvo'daki kod temizliği kurallarına dikkat.
Bunun için klasik for döngüleri yerine .filter() gibi metodları arrow function yazarak tanımlıyorsun.
Örnek data:
[{ name: 'Hyundai Verna 1.6 SX', year: 2012, selling_price: 600000, km_driven: 100000, fuel: 'Dizel', seller_type: 'Sahibinden', transmission: 'Manuel', owner: 'İlk Sahibi', }] */

const { arabaStogu } = require("./arabaStogu.js");

function getRiskyCarList(arabaStogu) {
  return arabaStogu.filter(
    (araba) =>
      araba.km_driven >= 250000 ||
      araba.year <= 2002 ||
      araba.owner === "Dördüncü veya Daha Fazla Sahibi"
  );
}

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = getRiskyCarList;
