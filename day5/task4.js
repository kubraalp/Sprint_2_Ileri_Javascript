/* Görev 4: İstenilen Markanın Model Yılına Göre Eldeki Araç Sayısı

Reklamları model yılına göre özelleştirip stokları eritmek için bir çalışma başlatıldı. Eldeki arabaların, istenen markaya göre hangi modelden kaçar tane olduğunu hesaplamak istiyorlar.

Bunun için adı countStock olan bir fonksiyon yazalım.
Bu fonksiyon arabaların özelliklerini(object) içeren listeyi(array) ve markasını(name'de geçiyor) parametre olarak alsın.
Yıllara göre kaçar tane olduğunu bir obje olarak dönsün.
Örnek Kullanım:
countStock(arabaStogu, "Hyundai")

{ 2018: 2, 2019: 4, ... } gibi bir obje dönmeli

İpucu: .filter() metodunu kullanarak arabaları markaya göre filtreleyebilirsin.
İpucu: .forEach() metodunu kullanarak araba array'inde bir döngü yapabilirsin.
İpucu: Nesneleri depo olarak kullanabilirsin! key değerini rakam, value'sunu tekrar sayısı olarak kullanabilirsin.
Dikkat

Volvo'daki kod temizliği kurallarına dikkat.
Bunun için klasik for döngüleri yerine .filter() gibi metodları arrow function yazarak tanımlıyorsun.
Örnek data:
[{ name: 'Hyundai Verna 1.6 SX', year: 2012, selling_price: 600000, km_driven: 100000, fuel: 'Dizel', seller_type: 'Sahibinden', transmission: 'Manuel', owner: 'İlk Sahibi', }] */

const { arabaStogu } = require('./arabaStogu.js');

function countStock(arabaListe, marka) {
  /* kodlar buraya */
  const filtrelenmisArabaListesi = arabaListe.filter((araba) =>
    araba.name.includes(marka)
  );
  const stokSayaci = {};
  filtrelenmisArabaListesi.forEach((araba) => {
    const yil = araba.year;
    if (stokSayaci[yil]) {
      stokSayaci[yil]++;
    } else {
      stokSayaci[yil] = 1;
    }
  });

  return stokSayaci;
}

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = countStock;
