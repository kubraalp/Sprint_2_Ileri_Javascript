/* Görev 2: Dünya Kupası Final Maçlarını Kazananlar
100%
Konu konuyu açtı, bu sefer de finallerde yıllara göre kazanan takımları merak ettiniz.

Bunun için adı kazananlar olan bir fonksiyon yazalım.
Bu fonksiyon tüm dünya kupası maçlarının listesini parametre olarak alsın. (Bu liste bir array ve her maç bir object).
Gelen bu değerlerde final maçlarını filtreleyerek kazanan takımların listesini "{yil} kazananı {takim}" şeklinde bir array olarak dönsün.

Örnek Kullanım:

kazananlar(fifadata)
işlemi

[
	"1930 kazananı Uruguay",
	"1934 kazananı Italy",
	"1938 kazananı Italy",
	"1954 kazananı Germany FR",
	"1958 kazananı Brazil",
	"1962 kazananı Brazil",
	"1966 kazananı England",
	"1970 kazananı Brazil",
	"1974 kazananı Germany FR",
	"1978 kazananı Argentina",
	"1982 kazananı Italy",
	"1986 kazananı Argentina",
	"1990 kazananı Germany FR",
	"1994 kazananı Italy",
	"1998 kazananı France",
	"2002 kazananı Brazil",
	"2006 kazananı France",
	"2010 kazananı Spain",
	"2014 kazananı Germany",
]
dönmeli.


İpucu: .filter() metodunu kullanarak final maçlarını filtreleyebilirsin.
İpucu: .forEach() metodu ile tüm final maçlarında döngü ile Home Team Goals ve Away Team Goals üzerinde gerekeni yapabilirsin.
İpucu: Object key'lerinde boşluk varsa objectAdi["Key Adı"] şeklinde kullanabilirsin.

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
}*/

//aşağıdaki satırı silmeyin
const { fifaData } = require('./fifa.js');

const kazananlar = (data) => {
  let result = [];
  const finaller = data.filter((mac) => mac['Stage'] === 'Final');
  finaller.forEach((mac, index) => {
    let kazanan = '';
    if (mac['Home Team Goals'] > mac['Away Team Goals']) {
      kazanan = mac['Home Team Name'];
    } else {
      kazanan = mac['Away Team Name'];
    }
    const metin = `${mac['Year']} kazananı ${kazanan}`;
    result.push(metin);
  });
  return result;
};

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = kazananlar;
