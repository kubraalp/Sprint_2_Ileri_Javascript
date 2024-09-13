/* Görev 1: SEO (Search Engine Optimization) Metinleri Oluşturma

Volvo'daki takas desteği kampanyasında gelen arabaların stokları çok arttı. Bu yüzden eldeki arabaları daha hızlı elden çıkarmak istiyorlar. Arabaların, Google gibi arama motorlarında 2. el araba ilanları arasında ön sıralarda çıkması için SEO (Search Engine Optimization) çalışması yapılıyor. Bunun için web sayfasında arabanın özelliklerini bir metin olarak gösterecekler.

Senden bir arabayı nesne olarak alan ve buna karşılılk özelliklerini belli bir formatta metin olarak oluşturan bir fonksiyon hazırlamanı istediler.

Bunun için adı convertToSentence olan bir fonksiyon yazalım.
Bu fonksiyon bir arabanın özelliklerini nesne olarak alsın.
Gelen bu değerler ile {uretimYili} yılında trafiğe çıkışlı {marka} {model} model arabanın {vites} vitesi var ve {yakit} ile çalışmaktadır. Güncel satış fiyatı {fiyat} TL'dir. cümlesini oluşturup return etsin.
Örnek Kullanım:

convertToSentence({
	id: 121,
	marka: 'VW',
	model: 'Passat',
	yakit: 'Benzin',
	vites: 'Otomatik',
	yas: 11,
	fiyat: 800000
})
kodu "2013 yılında trafiğe çıkışlı VW Passat model arabanın otomatik vitesi var ve benzin ile çalışmaktadır. Güncel satış fiyatı 800000 TL'dir." return etmeli.


Dikkat:

Yeni Volvo developer kuralları gereği, kod okunaklılığını artırmak için artık stringleri birleştirmek için + operatörü kullanılmamaktadır. Backtick kullanabilirsiniz.

Bazı değerler için büyük küçük harfe dikkat. Özel isim harici bilgiler küçük harf olmalı. */

function convertToSentence(araba) {
    const { marka, model, vites, yakit, fiyat } = araba;
    const currentYear = new Date().getFullYear();
    const uretimYili = currentYear - araba.yas;
    const cumle = `${uretimYili} yılında trafiğe çıkışlı ${marka.toUpperCase()} ${model} model arabanın ${vites.toLowerCase()} vitesi var ve ${yakit.toLowerCase()} ile çalışmaktadır. Güncel satış fiyatı ${fiyat} TL'dir.`;
    return cumle;
  }
  
  /* Bu satırdan sonraki satırları silmeyin! */
  module.exports = convertToSentence;
  