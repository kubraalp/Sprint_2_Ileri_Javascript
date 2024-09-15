/* Görev 1: Dünya Kupası Final Maçlarında Atılan Gol Sayısı
100%
Üniversiteden bir arkadaşın ile buluştun ve senin kariyerinde yeni bir yöne gitmene çok sevindi. Kahvenizi yudumlarken konu konuyu açtı ve yazılım ile neler yapabildiğinizi konuştunuz. Dünya kupası da yaklaşırken finallerde atılan gollerin toplamını merak ettiniz.

Bunun için adı finaller olan bir fonksiyon yazalım.
Bu fonksiyon tüm dünya kupası maçlarının listesini parametre olarak alsın. (Bu liste bir array ve her maç bir object).
Aldığı maç listesindeki final maçlarını filtrelesin ve bu maçlarda atılan gollerin sayısını hesaplasın. Sonucu da "2014 yılına kadar finallerde {golSayisi} gol atılmıştır." şeklinde geri dönsün.

Örnek Kullanım:

finaller(fifadata);
// 2014 yılına kadar finallerde 68 gol atılmıştır.
İpucu: .filter() metodunu kullanarak final maçlarını filtreleyebilirsin.
İpucu: .forEach() metodu ile tüm final maçlarında döngü ile Home Team Goals ve Away Team Goals üzerinde gerekeni yapabilirsin.
İpucu: Object key'lerinde boşluk varsa objectAdi["Key Adı"] şeklinde kullanabilirsin.
Dikkat

Volvo'da çalışan bir developer olarak kod temizliğine dikkat ediyorsun ve bunu alışkanlık haline getiriyorsun.
Bunun için klasik for döngüleri yerine .filter(), .forEach() gibi metodları arrow function yazarak tanımlıyorsun.

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

// aşağıdaki satırı silmeyin
const { fifaData } = require("./fifa.js");

const finaller = (data) => {
  //gol toplamı
  let golToplami = 0;

  //final maçlarını filtrele
  const finaller = data.filter((mac) => {
    return mac["Stage"] === "Final";
  });
  //tüm maçlarda döngü
  finaller.forEach((mac, index) => {
    //evsahibi ve deplasman takım gollerini bir yerde topla
    golToplami = golToplami + mac["Home Team Goals"] + mac["Away Team Goals"];
  });

  //istenen metni dön
  return `2014 yılına kadar finallerde ${golToplami} gol atılmıştır.`;
  /* kodlar buraya */
};

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = finaller;
