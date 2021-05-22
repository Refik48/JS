// const s1 = Number(prompt("Birinci Sayi : "));
// const s2 = Number(prompt("Ikinci Sayi : "));
// const islem = prompt("Bu iki sayiyla yapacaginiz islemi giriniz : ");
// let sonuc = 0;

// //? Number'a neden cevirdik ? 
// //? Cunku + isleminde concatenation olarak algiliyor ve 4+3=43 seklinde yaziyor.
// if(islem == "+") {
//     sonuc = s1+s2;
// } else if (islem == "-") {
//     sonuc = s1-s2;
// } else if (islem == "*") {
//     sonuc = s1*s2;
// } else if (islem === "/") {
//     sonuc = s1/s2;
// } else {
//     alert("Yanlis islem yaptiniz");
// }
// console.log(`${s1} ${islem} ${s2} = ${sonuc}`);

// const age = prompt("Yasinizi giriniz : ");
// const health = prompt("Saglikli misiniz e/h : ");
// alert(age > 18 && health == "e" ? "Askere Gidebilir" : "Askere Gidemez"); 
// //? Bu ternary'i istersek bir degiskene de atip yazdirabiliriz.
// //? Degiskenlere atip daha sonrasinda kullanmak daha elverisli bir yontem.
// const result = (age > 18 && health == "e" ? "Askere Gidebilir" : "Askere Gidemez");
// console.log(result);

const gunNo = Number(prompt("Gun Sayisini Giriniz : "));
switch (gunNo) { 
    //? "Prompt" String olarak kabul ettigi icin ya case'leri "" icine alacagiz ya da gunNo'yu Number'a cevirecegiz
   case 1:
    gunAdi = "Pazartesi";
     break;
   case 2:
    gunAdi = "Sali";
     break;
   case 3:
    gunAdi = "Carsamba";
     break;
   case 4:
    gunAdi = "Persembe";
     break;
   case 5:
    gunAdi = "Cuma";
     break;
   case 6:
    gunAdi = "Cumartesi";
     break;
   case 7:
    gunAdi = "Pazar";
     break;
   default:
     alert("Gun 1-7 arasinda olmalidir.");
     break;
 }
 console.log(gunAdi);