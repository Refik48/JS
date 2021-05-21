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

