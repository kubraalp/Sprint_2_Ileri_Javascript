/* Görev 2: Nesne ve Dizilerle Beraber Çalışma

Volvo müşterilerine bir anket yaptı ve yorumlarda ortalamadan düşük puan verenleri listelemek istiyorlar.

Bunun için adı getBelowTheAverage olan bir fonksiyon yazalım.
Bu fonksiyon müşteri yorumlarından(obje) oluşan bir listeyi(array) parametre olarak alsın.
Gelen bu listedeki ortalama puanı hesaplasın ve ortalamadan düşük olan kişilerin sadece isimlerinden oluşan listeyi dönsün.
Örnek Kullanım:

const degerlendirmeler = [{
 isim: "Nalan",
 puan: 5,
 geribildirim: "Mükemmel atmosfer ve mükemmel düşünülmüş modeller!"
}, {
 isim: "Kuddusi",
 puan: 3,
 geribildirim: "Benim zevkime göre biraz fazla yenilikçi, modeller iyi ama fiyatı yüksek"
}, {
 isim: "Kamuran",
 puan: 4,
 geribildirim: "Gittiğim bayide mükemmel bir atmosfer ve havalı hisler"
}, {
 isim: "Elif",
 puan: 4.5,
 geribildirim: "Evimden pek çıkmıyorum ama kaliteli bir arabam olsun istiyorum. Şiddetle tavsiye ederim."
}, {
 isim: "Pınar",
 puan: 3,
 geribildirim: "Tasarımları çok güzel, ama bu kadar özellik kullanılır mı bilemedim."
}, {
 isim: "Ahmet",
 puan: 2,
 geribildirim: "Arabaların özellikleri beni fazla etkilemedi. Gereksiz pahalı."
}, {
 isim: "Latife",
 puan: 4,
 geribildirim: "Takas desteği harika!"
}, {
 isim: "Reyna",
 puan: 3.5,
 geribildirim: "",
}
];

getBelowTheAvarage(degerlendirmeler)
işlemi ["Kuddusi", "Pınar", "Ahmet", "Reyna"] dönmeli.


İpucu: 2 döngü yapabilirsin.
İpucu: Önce ortalama hesaplayabilirsin. */

function getBelowTheAverage(array) {
    //ortalama puan hesaplanacak
    let toplamPuan = 0;
    let degerlendirmeSayisi = array.length;
    for (i = 0; i < degerlendirmeSayisi; i++) {
      toplamPuan = toplamPuan + array[i].puan;
    }
    let ortalama = toplamPuan / degerlendirmeSayisi;
    //gelen puan hesaplanacak
    const pushlanacaklar = [];
    //ortalamadan düşük olan kişilerin sadece isimleri dönecek
    for (let i = 0; i < degerlendirmeSayisi; i++) {
      if (array[i].puan < ortalama) {
        pushlanacaklar.push(array[i].isim);
      }
    }
    return pushlanacaklar;
  }
  
  /* Bu satırdan sonraki satırları silmeyin! */
  module.exports = getBelowTheAverage;
  