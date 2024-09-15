/* Gün Projesi: Hesabı Kim Ödeyecek
100%
İddialaşma keyifli geldi ama artık yavaş yavaş hesabı ödeyip kalkacaksınız. Üniversiteden arkadaşın Dünya Kupası finallerinde en çok gol atan takımın "Almanya/Germany" olduğunu düşünüyor. Peki senin tahminin ne olurdu?

Arkadaşın tahmini yanlış çıkanın hesabı ödemesini önerdi. İkinizin de tahmini yanlış çıkarsa beraber ödeyeceksiniz. Acaba kim veya kimler hesabı ödeyecek?

Bunun anlamak için adı finallerdekiGolSayilari olan bir fonksiyon yazalım.
Bu fonksiyon tüm dünya kupası maç(object) detaylarını liste(array) olarak alsın.
Gelen bu listedeki final maçlarında oynayan takımların gol sayılarını hesaplasın.
Bir obje olarak dönsün. Bu listeye bakarak kimin tahmini doğru veya yanlışı anlayalım.

Örnek Kullanım:

finallerdekiGolSayilari(fifadata);
işlemi

{
	Argentina: 8,
	Brazil: 14,
	Czechoslovakia: 2,
	England: 4,
	France: 4,
	Germany: 1,
	"Germany FR": 11,
	Hungary: 4,
	Italy: 11,
	Netherlands: 2,
	Spain: 1,
	Sweden: 2,
	Uruguay: 4,
}
dönmeli.


Dikkat

Volvo'da çalışan bir developer olarak kod temizliğine dikkat ediyorsun ve bunu alışkanlık haline getiriyorsun.
Bunun için klasik for döngüleri yerine .filter() gibi metodları arrow function yazarak tanımlıyorsun.

Örnek Maç Datası

{
	"Year": 1930,
	"Datetime": "30 Jul 1930 - 14:15",
	"Stage": "Final",
	"Stadium": "Estadio Centenario",
	"City": "Montevideo",
	"Home Team Name": "Uruguay",
	"Home Team Goals": 4,
	"Away Team Goals": 2,
	"Away Team Name": "Argentina",
	"Win conditions": "",
	"Attendance": 68346,
	"Half-time Home Goals": 1,
	"Half-time Away Goals": 2,
	"Referee": "LANGENUS Jean (BEL)",
	"Assistant 1": "SAUCEDO Ulises (BOL)",
	"Assistant 2": "CRISTOPHE Henry (BEL)",
	"RoundID": 405,
	"MatchID": 1087,
	"Home Team Initials": "URU",
	"Away Team Initials": "ARG"
} */

    //aşağıdaki satırı silmeyin
const { fifaData } = require('./fifa.js');

const finallerdekiGolSayilari = (data) => {
  const depo = {};
  const finaller = data.filter((mac) => mac['Stage'] == 'Final');
  finaller.forEach((mac, index) => {
    const evSahibi = mac['Home Team Name'];
    const konukTakim = mac['Away Team Name'];
    if (depo[evSahibi] === undefined) {
      depo[evSahibi] = mac['Home Team Goals'];
    } else {
      depo[evSahibi] += mac['Home Team Goals'];
    }
    if (depo[konukTakim] === undefined) {
      depo[konukTakim] = mac['Away Team Goals'];
    } else {
      depo[konukTakim] += mac['Away Team Goals'];
    }
  });
  console.log(depo);
  return depo;
};

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = finallerdekiGolSayilari;
