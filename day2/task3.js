/* Görev 3: Maç Skoru Simülatörü

Çalıştığın Volvo şirketi Türkiye Basketbol Ligi'ne sponsor oluyor. Reklamını yapmak için de web sitesinde ufak bir simülatör yapacak. Projenin ikinci parçası olarak takimSkoru fonksiyonunu kullanarak maç skorunu üreten bir fonksiyon yazmanı istediler.

Bunun için adı macSkoru olan bir fonksiyon yazalım.
Bu fonksiyon takimSkoru'nu ve oynanacak periyot sayısını parametre olarak alsın.
Eğer periyot sayısı gelmez ise 4 olarak kabul etsin.
Maçın her periyodu için evSahibiTakim ve deplasmanTakimi için simülatördeki takimSkoru fonksiyonu ile skor oluştursun. Bu skorların toplamını bir nesne olarak dönsün.
Örnek Kullanım:

macSkoru(takimSkoru);

aşağıdaki gibi bir obje dönmeli
{
	evSahibiTakim: 75,
	deplasmanTakimi: 51
}
İpucu: Fonksiyonlarda parametrelere başlangıç değeri atamaya bakabilirsin.
İpucu: Periyot sayısı kadar döngü yapabilirsin. */

/* Görev 2'deki kodlarınızı buraya kopyalayıp kullanabilirsiniz. */
const takimSkoru = () => Math.floor(Math.random() * 16) + 10;
const takimSkoru2 = () => Math.floor(Math.random() * 5);

//Bunun için adı macSkoru olan bir fonksiyon yazalım.
function macSkoru(takimSkorGen, periyotSayisi = 4) {
  let evSahibiTakim = 0;
  let deplasmanTakimi = 0;
  for (let i = 0; i < periyotSayisi; i++) {
    evSahibiTakim = evSahibiTakim + takimSkorGen();
    deplasmanTakimi = deplasmanTakimi + takimSkorGen();
  }
  return { evSahibiTakim, deplasmanTakimi };
}
console.log(macSkoru(takimSkoru));
console.log(macSkoru(takimSkoru2, 2));

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = { takimSkoru, macSkoru };
