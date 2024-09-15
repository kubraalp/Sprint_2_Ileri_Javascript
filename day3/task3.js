/* Görev 3: Dünya Kupası Maçlarında Atılan Ortalama Gol Sayısı
100%
Merak aldı başını gidiyor ve bir konuda iddialaştınız. Arkadaşın dünya kupasında maç başına atılan gollerin ortalamasının 2.53'den az olduğunu, sen ise fazla olduğunu iddia ettin. Peki kim haklı?

Bunun öğrenmek için adı ortalamaGol olan bir fonksiyon yazalım.
Bu fonksiyon tüm dünya kupası maçlarının listesini parametre olarak alsın. (Bu liste bir array ve her maç bir object).
Gelen bu değerlerde maç başına gol ortalamasını .reduce() metodunu da kullanarak hesaplasın.
ondalığını yuvarlayıp sonucu sayı olarak dönsün.

Örnek Kullanım:

ortalamaGol(fifadata);
// işlemi 2.84 dönmeli.
İpucu: .reduce() metodunu kullanarak maçlardaki toplam gol sayısını bulabilirsin.
İpucu: Object key'lerinde boşluk varsa objectAdi["Key Adı"] şeklinde kullanabilirsin.
Dikkat

Volvo'da çalışan bir developer olarak kod temizliğine dikkat ediyorsun ve bunu alışkanlık haline getiriyorsun.
Bunun için klasik for döngüleri yerine .reduce() gibi metodları arrow function yazarak tanımlıyorsun.

Örnek Data

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

const ortalamaGol = (data) => {
  // Toplam gol sayısını hesapla
  const toplamGol = data.reduce((total, mac) => {
    return total + mac['Home Team Goals'] + mac['Away Team Goals'];
  }, 0);

  // Maç sayısını hesapla
  const macSayisi = data.length;

  // Ortalama gol sayısını hesapla
  const average = toplamGol / macSayisi;

  // Sonucu iki ondalık basamağa yuvarla
  return average.toFixed(2);
};

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = ortalamaGol;
