/* Gün Projesi: Executive Summary

Tüm işlerini tamamladın. Geriye son bir proje kaldı. Artık gönül rahatlığı ile yeni işine odaklanabileceksin. Son olarak senden, verilen data'da markaya göre modellerin kaç adet olduğunu ve toplam satış değerini dönen bir uygulama yazmanı istediler.

Bunun için adı analyzeData olan bir fonksiyon yazalım.
Bu fonksiyon,
arabaların özelliklerini(object) içeren listeyi(array),
aranan markayı(name'de geçiyor)
ve aranan model yılını parametre olarak alsın.
"Model yılı {yil} olan {marka} marka {adet} arabanın toplam piyasa değeri {revenue} TL'dir." şeklinde bir özet metin dönsün.
İstenen marka ve yıl için araba yok ise Model yılı {yil} olan {marka} marka araba stoklarda bulunamamıştır! şeklinde bir hata dönsün.

Örnek Kullanım:

analyzeData(arabaStogu, "Hyundai", 2012);
kodu "Model yılı 2012 olan Hyundai marka 3 arabanın toplam piyasa değeri 1825000 TL'dir." dönmeli.

analyzeData(arabaStogu, "Hyundai", 2013);
kodu "Aradığınız kriterlerde araba bulunamamıştır!" dönmeli.


İpucu: arraylerin .length özelliğini kullanabilirsin.
Dikkat

Volvo'daki kod temizliği kurallarına dikkat.
Bunun için klasik for döngüleri yerine .filter() gibi metodları arrow function yazarak tanımlıyorsun.
Kod okunaklılığını artırmak için artık stringleri birleştirmek için + operatörü yerine backtick (template literal) kullanabilirsin.
Örnek data:
[{
	name: 'Hyundai Verna 1.6 SX',
	year: 2012,
	selling_price: 600000,
	km_driven: 100000,
	fuel: 'Dizel',
	seller_type: 'Sahibinden',
	transmission: 'Manuel',
	owner: 'İlk Sahibi',
}] */

    const { arabaStogu } = require('./arabaStogu.js');

function analyzeData(arabaListe, marka, yil) {
  /* kodlar buraya */

  const filtrelenmisArabaListesi = arabaListe.filter(
    (araba) => araba.name.includes(marka) && araba.year === yil
  );

  const adet = filtrelenmisArabaListesi.length;
  const toplamDeger = filtrelenmisArabaListesi.reduce(
    (toplam, araba) => toplam + araba.selling_price,
    0
  );

  if (adet > 0) {
    return `Model yılı ${yil} olan ${marka} marka ${adet} arabanın toplam piyasa değeri ${toplamDeger} TL'dir.`;
  } else {
    return `Model yılı ${yil} olan ${marka} marka araba stoklarda bulunamamıştır!`;
  }
}

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = analyzeData;
