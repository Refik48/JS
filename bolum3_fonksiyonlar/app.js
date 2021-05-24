// * =======================================================
// *                    FONKSİYONLAR
// * =======================================================

//! =================== 1. YONTEM : FUNCTION DECLARATION YONTEMI ===================

function yazdir() { //? Fonksiyonun tanimlanmasi
  console.log("Kazim Nihat");
}
yazdir(); //? Fonksiyonun cagirilmasi

//! ORNEK : Parametreli Fonksiyon
function yazdirAd (ad,yas) {
  console.log(`Adiniz ${ad} Yasiniz ${yas}`);
}
yazdirAd("Kazim Nihat", 25); //? Call | invoke
yazdirAd("Elif Sude", 21); //? Call | invoke

function yasHesapla(dogum) {
  return 2021-dogum;
}
const yas = yasHesapla(1996); //? Method'a gidiyor, 2021-1996 return'den 25 cikiyor ve asagida console'a yazdiriliyor.
console.log(`Yasini ${yas}`);
//? VEYA
console.log(`Yasiniz ${yasHesapla(1990)}`); //? Bu sekilde de yapilabilir.

//! Ornek : Klavyeden girilen sayinin tek veya cift oldugunu donduren bir fonksiyon yaziniz.
const number = prompt("Sayinizi giriniz : ");

console.log("Sayiniz " + evenOdd(number));
//? Function declaration yontemi ile fonkisyonun tanimlanmasi cagrilmasindan once veya sonra olabilir.
//? FAKAT bu sadece 1.Yontem (FUNCTION DECLARATION) icin gecerli. Diger 2 yontemde once yazilmasi zorunlu.

function evenOdd(number) {
  const sonuc = number % 2 == 0 ? `${number} Cifttir` : `${number} Tektir`;
  return sonuc;
}

//! =================== 2. YONTEM : FUNCTION EXPRESSION ===================
//? Fonksyion bir degiskenmis gibi tanimlanir. 

const evenOdd1 = function (number) { 
  return number % 2 == 0 ? "Cifttir" : "Tektir";
}
console.log(evenOdd1(5)); //? Invoke
//? Bunu fonksiyondan once yazarsak hata veriyor. 
//? Once fonksiyon yazilir daha sonra cagirilmasi yapilir.
//* Avantajlari :
//* 1) Programciyi once fonksiyonlarin tanimlanmasi, sonra kullanilmasina zorladigi icin aslinda daha duzenli ve daha
//* anlasilir kod yazmaya olanak saglamaktadir.
//* 2) Fonksiyonlarin ve degerlerin degiskenlerde saklanmasini gerektirmektedir. Bu da daha sade bir kodlama demektir.

//! ORNEK : Buyuk sayiyi bulma 
//? const veya let olmasi zorunlu degildir.

let  buyukBul = function (x,y,z) {
  let enBuyuk;
  if (x>y && x>z) {
    enBuyuk = x;
  } else if (y>x && y>z) {
    enBuyuk = y;
  } else if (z>y && z>x) {
    enBuyuk = z;
  } 
  return enBuyuk;
}
console.log("En Buyuk Sayi : " + buyukBul(5,3,8));

//! =================== 3. YONTEM : FUNCTION ARROW ===================
//? Arrow (ok) fonksiyonlari fonks. tanimlamada yaygin bir sekilde kullanilan bir diger yontemdir.
//* Avantajlari : 
//* 1) 
//* 2) 

//! ORNEK : Toplama
const topla = (a,b) => a+b; //? Eger suslu parantez yoksa otomatik return yapar. Suslu parantezde return yazmaliyiz.
console.log(topla(5,2));
console.log(topla(3,10));

//! ORNEK : Tek mi ? Cift mi ?
const ciftMi = (sayi) => sayi % 2 == 0 ? "Cift" : "Tek";
console.log(ciftMi(5));
console.log(ciftMi(2));