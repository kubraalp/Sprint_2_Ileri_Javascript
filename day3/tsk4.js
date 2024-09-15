/* Görev 4: Bir Sayıdaki Rakamların Tekrar Sıklığını Hesaplama
100%
"Bu yazılım işi keyifliymiş." dedi arkadaşın. Seni biraz zorlamak için bir sayıdaki rakamların kaç kere kullanıldığını hesaplayabilir misin dedi? Cevabın, "tabii ki!"

Bunun hesaplamak için adı rakamlar olan bir fonksiyon yazalım.
Bu fonksiyon en az 10, en fazla 15 basamaklı bir sayı alsın.
Her bir basamağındaki sayıların kaç kere tekrarlandığını hesaplayıp sonucu nesne olarak dönsün.

Örnek Kullanım:

rakamlar(112223335555999);
işlemi

{
	"1": 2,
	"2": 3,
	"3": 3,
	"5": 4,
	"9": 3
}
dönmeli.


İpucu: for ofu kullanarak stringlerdeki her karakter için bir döngü yapabilirsin.
İpucu: Objectleri depo olarak kullanabilirsin! key değerini rakam, value değerini tekrar sayısı olarak kullanabilirsin.
if ile object'nin içinde aradığın rakam var mı bakabilirsin. Yoksa ,undefined tipinde olacaktır. (örn: object[rakam] === undefined ise yoktur, değerini 1 olarak ekleyebilirsin)
varsa değerini 1 artırabilirsin. */

const rakamlar = (sayi) => {
    const depo = {};
    for (let rakam of sayi.toString()) {
      if (depo[rakam] === undefined) {
        depo[rakam] = 1;
      } else {
        depo[rakam]++;
      }
    }
    return depo;
  };
  
  /* Bu satırdan sonraki satırları silmeyin! */
  module.exports = rakamlar;
  