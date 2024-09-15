/* Gün Projesi: Yeni İş

Volvo'daki çalışmaların ve linkedin profilini güncel tutman, headhunter'ların dikkatini çekti. Sana daha iyi fırsatları olan bir iş teklifi geldi ve sen de memnuniyetle kabul ettin. Yeni görevin hayırlı olsun...

Yeni işinde seni oryantasyon programına aldılar. Sana yeni bir bilgisayar verdiler ve senden bazı uygulamaların kurulumlarını yapmanı, bazı hesapları oluşturmanı istediler. Hatta seni daha iyi tanıyabilemek için de ufak bir proje görevi verdiler.

Senden, tamamladığın görevleri girmeni istediler.

Bunun için bilgisayarinHazirMi fonskiyonundaki ilgili alanları doldurmalısın.

Örnek Kullanım:

bilgisayarinHazirMi() çalıştırıldığında

{
	"computer": "mac",
	"demo_project_url": "https://github.com/EmreSahiner/FSWeb-S2G4-JavaScript-tekrar",
	"github": "https://github.com/Workintech",
	"node_version": "v16.13.0",
	"vscode_version": "1.84.2"
}
gibi bir nesne dönmeli.


İstenenler:

GitHub'da bir hesap oluşturup bu hesabın linkini checklist nesnesi içindeki github keyine ekleyin.
Bilgisayarının işletim sistemini ["mac", "windows", "linux"] 'tan biri olarak girin.
VSCode'u bilgisayarınıza yükleyin ve versiyon numarasını paylaşın.
Node.js'i bilgisayarınıza yükleyin ve versiyon numarasını paylaşın.
https://github.com/Workintech/FSWeb-S2G4-JavaScript-tekrar reposunu:
forklayın
bilgisayarınıza clone'layın
index.js'deki coding sorularını çözün
yaptığınız çözümleri commitleyin
ve proje url'ini paylaşın.
İpucu: Node versiyonunu terminal ekranında node --version komutu ile öğrenebilirsiniz. */

function bilgisayarinHazirMi() {
    const checklist = {
      // GitHub hesabınızın url'i: örn. "github: 'https://github.com/Workintech'"
      github: 'https://github.com/kubraalp',
  
      // İşletim sisteminiz ["mac", "windows", "linux"]'tan biri: örn. "computer: 'mac'"
      computer: 'windows',
  
      // Vscode'unuzn versiyon numarası: örn. "vscode_version: '1.84.2'"
      vscode_version: '1.87.2',
  
      // Node versiyon numarası: örn. "node_version: 'v16.13.0'"
      node_version: 'v20.12.0',
  
      // Demo projesini forlayıp, clonelayıp çözdükten sonra commit atıp pushladıktan sonra repo url'ini girmek.
      demo_project_url:
        'https://github.com/kubraalp/FSWeb-S2G4-JavaScript-tekrar',
    };
  
    return checklist;
  }
  
  /* Bu satırdan sonraki satırları silmeyin! */
  module.exports = bilgisayarinHazirMi;
  