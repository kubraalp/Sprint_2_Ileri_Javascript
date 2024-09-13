/* Görev 3: Spread ile Kopyalama

Bir web sayfasında, kullanıcının anlaşılır bilgileri bulması satış rakamlarını artırıyor. Bu yüzden piyasada ortaya çıkan yeni tanımlamaları sayfada göstermek önemli.

Volvo, yeni açıklanan kurallara göre eldeki arabaların bazı özelliklerini çıkartıp, yeni özelliklerini ekleyecek.

Senden de bir araba nesnesine aşağıdaki özellikleri eklemeni istiyorlar.

otv: ÖTV oranı fiyatı 1450000'den az ise 10, değil ise 40 olmalı.
mtv: Yıllık Motorlu Taşıtlar Vergisi 1-10 yaş arabalar için 1773, 10 yaş üstü arabalar için 520 olmalı.
model bilgisi marka ve model olarak ayrı ayrı yazılmalı.
isDomestic: Araba yerli üretimse true, değilse false olmalı. (yerli marka: TOGG)
Ayrıca yas bilgisini çıkarmanı istiyorlar.

Bunun için adı newCar olan bir fonksiyon yazalım.
Bu fonksiyon bir arabanın özelliklerini nesne olarak alsın.
Yukarıdaki kurallara göre yeni! bir nesne dönsün.

Örnek Kullanım 1:

newCar({
	id: 121,
	model: 'VW Passat',
	yakit: 'Benzin',
	vites: 'Otomatik',
	yas: 11,
	fiyat: 800000
})
işlemi

{
	id: 121,
	marka: 'VW'
	model: 'Passat',
	yakit: 'Benzin',
	vites: 'Otomatik'
	fiyat: 800000,
	otv: 10,
	mtv: 520,
	isDomestic: false
}
dönmeli


Örnek Kullanım 2:

newCar({
	id: 122,
	model: 'TOGG T10S',
	yakit: 'Elektrik',
	vites: 'Otomatik',
	yas: 5,
	fiyat: 1500000
})
işlemi

{
	id: 122,
	marka: 'TOGG'
	model: 'T10S',
	yakit: 'Elektrik',
	vites: 'Otomatik'
	fiyat: 1500000,
	otv: 40,
	mtv: 1773,
	isDomestic: true
}
dönmeli


İpucu: Önce spread operatörü ile gelen nesneyi kopyalayabilirsin.
İpucu: .split() metodu ile model bilgisini kelimelere ayırıp, marka ve model olarak kullanabilirsin.
Dikkat

model olarak gelen özellik marka ve model olarak ayrı özellik olarak eklenecek. Gelen model bilgisini düzeltmeye dikkat. */

function newCar(araba) {
    //iki arabanın özellikleri alınacak
    // yeni bir nesne dönecek
    const yeniAraba = { ...araba };
  
    // .split() kullanılacak
    const [marka, model] = yeniAraba.model.split(' ');
  
    //ÖTV Hesaplaması
    if (yeniAraba.fiyat < 1450000) {
      yeniAraba.otv = 10;
    } else {
      yeniAraba.otv = 40;
    }
    //Yıllık Motorlu Taşıtlar Vergisininin ne kadar olduğunu belirle
    if (yeniAraba.yas > 10) {
      yeniAraba.mtv = 520;
    } else {
      yeniAraba.mtv = 1773;
    }
    yeniAraba.isDomestic = marka === 'TOGG';
  
    yeniAraba.marka = marka;
    yeniAraba.model = model;
  
    //yaş bilgileri silinecek
    delete yeniAraba.yas;
  
    return yeniAraba;
  }
  
  /* Bu satırdan sonraki satırları silmeyin! */
  module.exports = newCar;
  