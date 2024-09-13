/* Görev 2: Takım Skoru Simülatörü

Çalıştığın Volvo şirketi Türkiye Basketbol Ligi'ne sponsor oluyor. Reklamını yapmak için de web sitesinde ufak bir simülatör yapacak. Projenin ilk parçası olarak senden rastgele takım skoru üreten bir fonksiyon yazmanı istediler. Bir takım bir periyotta 10-25 arasında sayı atabiliyor.

Bunun için adı takimSkoru olan bir fonksiyon yazalım.
10-25 arasında rastgele skor dönsün.
Örnek Kullanım:
takimSkoru() işlemi 10-25 arasında bir sayı dönmeli

Dikkat:

Yeni Volvo developer kuralları gereği, kod okunaklılığını artırmak için fonksiyonları arrow function olarak yazınız.

İpucu: Math.random(), Math.floor() kullanabilirsiniz. */

//rastgele takım skoru üretilecek (10-25)
//arrow fonksiyon kullanılacak


const takimSkoru = (skor) => Math.floor(Math.random() * 16) + 10;

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = takimSkoru;
