/* Görev 1: Araba Oluşturma

Volvo'da developer olarak işe başladın. Takas desteği ile gelen arabaları web sitesinde yayınlamak istiyorlar. Takım olarak işleri paylaştınız ve senden özelliklere göre araba nesnesi oluşturan bir fonksiyon yazmanı istediler.

Bunun için adı getCarObject olan bir fonksiyon yazalım.
Bu fonksiyon bir arabanın sırasıyla id, model, yakit, vites, yas, fiyat, kilometre değerlerini parametre olarak alsın.
Gelen bu değerler ile üretim yılını hesaplasın ve id, model, yakit, vites, uretimYili, fiyat, kilometre bilgileri olan bir objeyi geri dönsün.

Örnek Kullanım:

getCarObject(121, 'VW Passat', 'Benzin', 'Otomatik', 11, 800000, 153000);
işlemi

{
	id: 121,
	model: 'VW Passat',
	yakit: 'Benzin',
	vites: 'Otomatik',
	uretimYili: 2012,
	fiyat: 800000,
	kilometre: 153000
}
dönmeli.


İpucu: boş bir obje oluşturup, istenenleri key-value ikilileri olarak içine ekleyebilirsin.
İpucu: getFullYear() metodu ile bulunduğumuz yılı dinamik olarak alabilirsin. Nasıl kullanıldığını w3schools'tan araştırabilirsin.
Dikkat

Fonksiyon yas değerini alıp üretim yılını geri dönmeli! */

function getCarObject(id, model, yakit, vites, yas, fiyat, kilometre) {
    //id, model, yakit, vites, yas, fiyat, kilometre değerlerini parametre olarak alsın.
    //Gelen bu değerler ile üretim yılını hesaplasın
    const d = new Date();
    let year = d.getFullYear();
    let uretimYili = year - yas;
    //getFullYear() metodu ile bulunduğumuz yılı dinamik olarak alabilirsin
  
    //id, model, yakit, vites, uretimYili, fiyat, kilometre bilgileri olan bir objeyi geri dönsün.
    car = {
      id,
      model,
      yakit,
      vites,
      uretimYili,
      fiyat,
      kilometre,
    };
    //fonksiyon yas değerini alıp üretim yılını geri dönecek!
    return car;
  }
  
  /* Bu satırdan sonraki satırları silmeyin! */
  module.exports = getCarObject;
  