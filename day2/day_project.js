/* Gün Projesi: Final Maçı Özeti

Çalıştığın Volvo şirketi Türkiye Basketbol Ligi'ne sponsor oluyor. Reklamını yapmak için de web sitesinde ufak bir simülatör yapacak.

Bu projede, simülatörde oynanan maçın özetini cümleler halinde veren bir uygulamaya ihtiyaç var. Senden önceki ekip bu işe başlamış ama yarıda kalmış. Senden yarıda kalan macOzeti fonksiyonunu aşağıdaki kurallara göre oluşturmanı istiyorlar.

Bunun için adı macOzeti olan bir fonksiyon yazalım.
Bu fonksiyon sırasıyla evSahibiTakim ve deplasmanTakimi adını parametre olarak alsın.
Maçın her periyodunda evSahibiTakim ve deplasmanTakimi için rastgele bir skor oluştursun.(Final maçlarında takımlar her periyotta ortalama 12-26 sayı atıyorlar).
Oluşturduğu bu skor sonucunda oluşan periyot skorlarını da "1. Periyot: {evSahibiTakim} 10 - {deplasmanTakimi} 21" şeklinde bir array'e eklesin.
Maçın skorunu da evSahibiTakim'a göre "Maç Sonucu: {evSahibiTakim} 61 - 54 kazandı" veya "Maç Sonucu: {evSahibiTakim} 61 - 68 kaybetti" şeklinde eklesin.
Eğer maç berabere tamamlanırsa "Maç 61 - 61 ile uzatmalara gitti" yazsın.
Örnek Kullanım:

macOzeti("Real Madrid", "Barcelona");
kodunun örnek çıktıları aşağıdakiler gibi olabilir:


Örnek sonuç 1

[
	"1. Periyot: Real Madrid 10 - Barcelona 21",
	"2. Periyot: Real Madrid 30 - Barcelona 34",
	"3. Periyot: Real Madrid 43 - Barcelona 43",
	"4. Periyot: Real Madrid 61 - Barcelona 54",
	"Maç Sonucu: Real Madrid 61 - 54 kazandı"
]

Örnek sonuç 2

[
	"1. Periyot: Real Madrid 10 - Barcelona 21",
	"2. Periyot: Real Madrid 30 - Barcelona 34",
	"3. Periyot: Real Madrid 43 - Barcelona 43",
	"4. Periyot: Real Madrid 61 - Barcelona 68",
	"Maç Sonucu: Real Madrid 61 - 68 kaybetti"
]

Örnek sonuç 3

[
	"1. Periyot: Real Madrid 10 - Barcelona 21",
	"2. Periyot: Real Madrid 30 - Barcelona 34",
	"3. Periyot: Real Madrid 43 - Barcelona 43",
	"4. Periyot: Real Madrid 61 - Barcelona 68",
	"Maç 61 - 61 ile uzatmalara gitti"
]
Dikkat:

Yeni Volvo developer kuralları gereği, kod okunaklılığını artırmak için fonksiyonları arrow function olarak yazınız.

Kod okunaklılığını artırmak için artık stringleri birleştirmek için + operatörü kullanılmamaktadır. Backtick kullanabilirsiniz.

İpucu: Metinlerdeki boşluklara dikkat. */

function macOzeti(evSahibiTakim, deplasmanTakim) {
    let evSahibiTakimSkoru = 0;
    let deplasmanTakimSkoru = 0;
    let metinler = [];
  
    //random sayı üretilecek
    const takimSkoru = () => {
      return Math.floor(Math.random()) * 15 + 12;
    };
    //periyok skoru metin
    for (let i = 1; i <= 4; i++) {
      evSahibiTakimSkoru = evSahibiTakimSkoru + takimSkoru();
      deplasmanTakimSkoru = deplasmanTakimSkoru + takimSkoru();
      //metin arraye eklenecek
      const metin = `${i}. Periyot: ${evSahibiTakim} ${evSahibiTakimSkoru} - ${deplasmanTakim} ${deplasmanTakimSkoru}`;
      metinler.push(metin);
    }
    //maç skoru eklenecek
    if (evSahibiTakimSkoru === deplasmanTakimSkoru) {
      const metin = `Maç ${evSahibiTakimSkoru} - ${deplasmanTakimSkoru} ile uzatmalara gitti`;
      metinler.push(metin);
    } else {
      const metin = `Maç Sonucu: ${evSahibiTakim} ${evSahibiTakimSkoru}  - ${deplasmanTakimSkoru} ${
        evSahibiTakimSkoru > deplasmanTakimSkoru ? 'kazandı' : 'kaybetti'
      } `;
      metinler.push(metin);
    }
    return metinler;
  }
  
  /* Bu satırdan sonraki satırları silmeyin! */
  module.exports = macOzeti;
  