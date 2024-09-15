/* Görev 1: Kur Çevirici

Geçen hafta iş teklifi almış ve kabul etmiştin. Volvo'daki son günlerin. Elindeki tüm projeleri tamamlamaya çalışıyorsun. En son olarak da takas yolu ile gelen araba dataları üzerinde istenilen analizleri yapan uygulama kaldı.

Devletin açıkladığı kurallara göre artık fiyatlar dolar yerine sadece TL olarak listelenebilecek. Öncelikle senden eldeki verileri yeni kurallara uygun hale getiren bir uygulama yazmanı istediler.

Bunun için convertCurrency adında bir fonksiyon yazalım.
Bu fonksiyon arabaların özelliklerini(object) içeren listeyi(array) ve dolar kurunu parametre olarak alsın.
selling_price'ı TL fiyatları ile güncelleyip listeyi geri dönsün.
Örnek Kullanım:

const data = [{
	name: "Tata Indigo Grand Benzin",
	year: 2014,
	selling_price: 250000,
	km_driven: 100000,
	fuel: "Benzin",
	seller_type: "Sahibinden",
	transmission: "Manuel",
	owner: "İlk Sahibi",
}];

convertCurrency(data, 28.45)
işlemi

[{
   name: "Tata Indigo Grand Benzin",
   year: 2014,
   selling_price: 7112500,
   km_driven: 100000,
   fuel: "Benzin",
   seller_type: "Sahibinden",
   transmission: "Manuel",
   owner: "İlk Sahibi",
}]
dönmeli


İpucu: .map() metodunu kullanabilirsin.
Dikkat

Volvo'daki kod temizliği kurallarına dikkat.
Bunun için klasik for döngüleri yerine .map() gibi metodları arrow function yazarak tanımlıyorsun. */

const { arabaStogu } = require('./arabaStogu.js');

function convertCurrency(arabaListe, dolarKur) {
  return arabaListe.map((araba) => ({
    ...araba,
    selling_price: araba.selling_price * dolarKur,
  }));
  /* kodlar buraya */
}

module.exports = convertCurrency;
