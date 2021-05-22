// alert("BUNU ONAYLAMADAN SAYFANIN HIC BIR KISMINI GOREMEZ VE INCELEYEMEZSIN"); // SIMDILIK KAPATIYORUM.
//? Alert yazdigimizda bu alert'i onaylamadan sayfaya erisemiyoruz. 
//? En basa koyduk cunku once bu onaylansin daha sonra sayfa goruntulenebilsin diye. (Okuma sirasi)

console.log("Hello Javascript");
//? console.log("Hello Javascript"); Yazdigimiz bu kisim sitemizde neden gozukmedi ? 
//? Biz bunu HTML sayfasina yazdirmadik sadece "Console"a yazdirdik.
//? Sayfamiza gidip sag klik yapip incele diyelim, Console kisminda solda User Messages kisminda gozukuyor.
console.log("JS Java'dan kolay bir dildir.");
console.error("Bu bir hatadir");
//? Error ile Messages kisminda error verdiriyoruz. Kirmizi renkle gosterilir.
console.warn("Bu bir uyaridir.")
//? Warning ile Uyari veridiriyoruz. Sari renkle gosterilir.

//? Site icerisinde incele kisminda Console'a bir seyler yazip buraya aktarabiliyoruz.(Simdi ogrenmeyecegiz)


//* ============================= DEGISKEN TANIMLAMA =============================
//? VAR keyword'u ile degisken tanimlanabilir. Ancak, modern JS ile "var" keyword'unun kullanimi azaldi.
//? Cunku "var" global degisken gibi dusunulmektedir. 

var pi = 3.14;
console.log(pi);
console.log(typeof pi);
//? Biz pi'nin veri tipini tanimlamamistik fakat kendisi otomatik olarak number tipiyle eslestirdi. 
//? Bunu da console.log(typeof pi); ile gorebiliyoruz.

pi = "3"; //? Biz nasil yazarsak program ona gore algilayip veri tipini ona gore belirliyor.
console.log(pi);
console.log(typeof pi); 

pi = true; //? Biz nasil yazarsak program ona gore algilayip veri tipini ona gore belirliyor.
console.log(pi);
console.log(typeof pi); 

isim = "Nihat"; //? Burada degisken tanimlamasi yapmadan yazdim cunku program otomatikmen algiliyor.
//? En guzeli yazmaktir cunku kodlara bakan baskalari icin daha rahat okuma soz konusudur.
console.log(isim); //? Mouse ile buranin ustunde durunca "var" degisken tanimlamasi gozukuyor.
console.log(typeof isim);

isim = 4;
console.log(isim);
console.log(typeof isim);

//? Biz const ve let yeni degisken tanimlama keyword'lerini kullanacagiz.
//? Const : Sabit (finally) gibi dusunulebilir.
//? Let : var'in local versiyonu gibi dusunulebilir.

//? Const : Sadece baslangicta deger atilabilir. Sonradan degeri DEGISTIRILEMEZ.
//! Non-primitive'ler haric yeniden deger atilamaz. NP'lerde yeniden deger atanabilir "const" icin.

const piSayisi = 3.14;
console.log(piSayisi);

//! piSayisi = 3; 
//? Error kisminda hata verdi Const degerine atama yapilmis diyor. Yeniden atama yapilamaz.
//! console.log(piSayisi);

//* ============= LET =============
//? Eğerki değişkenimzin değerinin değişmesi gerekiyor ise const kullanamayız. 
//? Bunun yerine LET kullanabiliriz.
//! LET Block-scope bir değişkendir. Block-Scope : Sadece tanimli oldugu alanda gecerlidir.
//! VAR ise global-scope bir tanimlamadir. Her yerde gecerlidir.  

let fiyat;
console.log(fiyat); //? Degisken tanimladik ama atama yapmadik o yuzden undefined gozukuyor.
fiyat = 5.5;
console.log(fiyat);
console.log(typeof fiyat);

let isim1 = "Mustafa"; //? Cift Tirnak
let isim2 = 'Ahmet'; //? Tek tirnak
let isim3 = `Alican`; //? Backthick
console.log(isim3);

const dil = null;
console.log(dil);
console.log(typeof dil); //? JS'de Null bir object'tir.

const sucuk = 40;
const sakız = 2;
const kola = 5;     //? const turunde yaptim bu fiyatlarda degisiklik yapamam.
let toplamFiyat = sucuk + sakız + kola; //? toplam fiyat'i "let" olarak tanimladim cunku toplam fiyatim degisebilir.
toplamFiyat++;      //? Toplam fiyati 1 arttirdim.
toplamFiyat += 50; //? 50 Arttirdim.

//? Birden fazla degiskenin degerini yazdirmak icin virgul kullanilir.
console.log(toplamFiyat, kola); //? 98 5
console.log("Toplam: ", toplamFiyat); //? 98

//? + operatoru string birlestirme islemi de gerceklestirir.
const ad = "Kazim";
const soyAd = "Nihat";
console.log(ad + soyAd);
console.log(ad + " " + soyAd);

const s1 = 7, s2 = "7"; //? Virgulle 1'den fazla degisken tanimlayabiliriz. Hepsi const oluyor burada.
console.log(s1 + s2); //? 77 cikar cunku s2'yi String tarzinda yazdik.

//! ======================= TEMPLATE LITERAL (String Sablonlari, ES6 ile gelmistir) =======================

const ad1 = "Nihat"; //? Neden ad1 yaptim cunku yukarda (92.satir) ad'i tanimlamistim ve const idi.
const yas = "25";

console.log("Benim adim " + ad1 + " yasim " + yas + "'dir.");
console.log(`Benim adim ${ad1} yasim ${yas}'dir.`); 
//? ` ` arasina yazilan her sey console'da gozukur eger bosluk birakirsak bosluk cikar
//? Belli bir yerden enter'layip alt satira indirirsek yazilani, console'da da asagi iner.

const yil = 2021;
const dogumTarihi = 1980;
const sene = yil - dogumTarihi;
console.log("YAŞ:" + sene);
// console.log("YAŞ:" + yil - dogumTarihi);   //? Hata --->  NaN = Not a Number
//? Neden hata veriyor ? 
//? Concatenation mi yapmaya calisiyoruz yoksa fark mi almaya calisiyoruz java anlamiyor ve hata veriyor.
console.log("YAŞ:" + (yil - dogumTarihi)); //? Parantez icin almamiz gerekiyor.
console.log(`YAŞ:${yil - dogumTarihi}`); //? Template Literal ile yazdırma.

const taban = 2;
const us = 8;

const sonuc = taban ** us; // ? Us alma operatoru
console.log(sonuc);

//! =======================  MOD ALMA % =======================
const sayi = 123;

const birler = sayi % 10;
const onlar = Math.floor(sayi / 10) % 10; 

//? Java'da (sayi/10)%10 oluyor fakat burada olmuyor. Neden ?
//? Cunku number veri tipi hem "int" hem de "double" old. icin bolme isleminde kusurati da aliyor.
//? Yuvarlamak icin ;
//* a) Math.round() : Yakin olan sayiya yuvarlar. 2.49 -> 2 , 2.5 -> 3 , 2.51 -> 3
//* b) Math.floor() : Tabana yuvarlar. 2.99 -> 2
//* c) Math.ceil() : Tavana yuvarlar. 2.01 -> 3

const yuzler = Math.floor(sayi / 100);

console.log("Birler:" + birler);
console.log("Onlar:" + onlar);
console.log("Yuzler:" + yuzler);

//! ======================= KARSILASTIRMA OPERATORLERI =======================
/*
? == Iki degiskenin veri tipine bakmazsizin esitligini kontrol eder. Esitse "true", degilse "false" dondurur.
? === Veri tipi de dahil olmak uzere esitligini kontrol eder. Esitse "true", degilse "false" dondurur.
? != Iki degiskenin esit olup olmamasini kontrol eder. Esit degilse "true", esitse "false" dondurur.
? > Buyuklugu kontrol eder. Soldaki sagdakinden buyukse "true", degilse "false" dondurur.
? < Kucuklugu kontrol eder. Soldaki sagdakinden kucukse "true", degilse "false" dondurur.
? >= Buyuk esitligi kontrol eder.
? <=  Kucuk esitligi kontrol eder.
*/

//? === 3'lu karsilastirma operatoru kullanildiginda hem veri tipi hem de icerik kontrolu yapilir.
const sayi1 = 100;
const sayi2 = "100";

console.log(typeof sayi1, typeof sayi2); //? number string

console.log(sayi1 == sayi2); //? true
console.log(sayi1 === sayi2); //? false

//! ======================= MANTIKSAL OPERATORLER =======================
/*
? && MANTIKSAL VE islemini gerceklestirir. Kontrol ettigi degiskenlerin tamami TRUE ise "true",
? degilse "false" dondurur.

* || MANTIKSAL VEYA islemini gerceklestirir. Kontrol ettigi degiskenlerin bir tanesi bile TRUE ise "true",
* ancak tamami FALSE ise "false" dondurur.

? ! MANTIKSAL DEGIL islemi gerceklestirir. Kontrol ettigi degiskenin degerinin tersini dondurur.
? Degisken TRUE ise "false", FALSE ise "true" deger dondurur.

* NOT : & ve | operatorleri Bit-temelli VE, VEYA islemi gerceklestirir. Cok fazla Bit-temelli islemler kullanmiyoruz.
* Robotik yerlerde, mikro-islemcili yerlerde tercih edilir.
*/

let s11= true;
let s22= false;
let s33= null;

//? Sadece true ve false olunca her sey java'da ki gibi fakat isin icine NULL girince bazi seyler degisim gosteriyor.
console.log(s11 && s22); //? FALSE
console.log(s11 && s22 && s33); //? FALSE
console.log(s11 && s33); //? NULL
console.log(s33 && s11); //? NULL
console.log(s22 && s33); //? FALSE
console.log(s33 && s22); //? NULL

//? NOT : 0, FALSE, NULL, undefined, " " ve NaN disindaki durumlar TRUE kabul edilir. (Slayt sayfa 23)
const x = true;
const y = true;
const z = undefined;

console.log(x && y && z); //? undefined

//! ======================= TERNARY =======================

// const age = +prompt("Yasinizi giriniz:"); 
const name1 = prompt("Adinizi giriniz:");
const age = Number(prompt("Yasinizi giriniz:"));

//? age'e girdigimiz degeri String olarak kabul ediyor. Bunu sayi formatina cevirmek icin 2 yolumuz mevcut.
//? a) const age = +prompt  ='in sag tarafina "+" isaretine koyabiliriz.
//? b) age = Number(prompt  prompt'ten once Number yazarak tanimlama yapabiliriz. Bu yontem daha cok tercih ediliyor.

age >= 18 //? Javada'daki ternary gibi kullaniliyor.
  ? console.log(`${name1} ehliyet alabilir`)
  : console.log(`${name1} ehliyet alamaz`);

const result = //? Veya bunu bir degere atayabilir ve onu yazdirabiliriz.
  age >= 18 ? `${name1} ehliyet alabilir` : `${name1} ehliyet alamaz`;

console.log(result);

const sayi4 = 41;
console.log(String(sayi4), sayi4);
//? sayi4 degismez number kaliyor. String(sayi4) yazan yere kopyasi gider, asli degil.