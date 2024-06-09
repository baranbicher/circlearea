/*
Ödev 1
Node.JS Komut Satırı Kullanımı
Hepimizin Matematik derslerinden bildiği üzere Dairenin Alanı = π x r2 şeklinde hesaplanır. 
Node.JS Javascript çalışma ortamında yarıçap değerini konsoldan parametre olarak girerek alanı bulmaya çalışacağız. 
Konsol çıktısı: Yarıçapı (Yarıçap) olan dairenin alanı: (Alan) şeklinde olmalıdır.



Kolay gelsin.
*/



const arguments = process.argv.slice(2);

const pi=3;

function showPrimeNumber() {
    let circlearea = pi * (arguments[0] * arguments[0]);
    console.log(circlearea)
}


showPrimeNumber(arguments[0]);