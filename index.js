let univer = 6/10000 // eur (1cm kv)
let medijapan = 12/10000 // eur (1cm kv)
let lesonit = 2/10000 // eur (1cm kv)
let kant = (30/120)/100 // eur (1cm)
let lijepak = 3.4 // eur (1 lijepak)

let gornjaSina = 14.25/300 // eur (1cm)
let donjaSina = 5.41/300 // eur (1cm)
let rukohvat = 8.38/240 // eur (1cm)

let tocak = 1.5 // eur
let sipka = 1.5; // eur
let Dvijefioke = 10 //eur


// document.getElementById("uni").innerHTML = 


function result(){

    let v = document.getElementById("visina").value
    let s = document.getElementById("sirina").value
    let d = document.getElementById("dubina").value

    let lesonitDim = v*s
    var cijena = 0
    if(s < 200) {    
        var brPolica = (v/40 | 0) + 1
        var univerDim = 3*v*d + 2*d*s + v*s + brPolica*(s/2)*(d-10)
        var kantDim = 3*v + 2*d + 2*s + brPolica*(s/2)
        var utroseniLijepak = (((3*3.4)/120)/100)*kantDim
        var cijena = univer*univerDim + lesonit*lesonitDim + kant*kantDim + 8*tocak + (gornjaSina + donjaSina)*s + 4*v*rukohvat + sipka + Dvijefioke + utroseniLijepak
        var brKrila = 2

    } else if (s>= 200 && s<300){

        var brPolica = (v/40 | 0) * 2
        var univerDim = 4*v*d + 2*d*s + v*s + ((brPolica-2)/2)*(s-80)*(d-10) + 2*80*(d-10)
        var kantDim = 4*v + 2*d + 2*s + ((brPolica-2)/2)*(s-80) + 2*80    
        var utroseniLijepak = (((3*3.4)/120)/100)*kantDim
        var cijena = univer*univerDim + lesonit*lesonitDim + kant*kantDim + 12*tocak + (gornjaSina + donjaSina)*s + 6*v*rukohvat + sipka + Dvijefioke + utroseniLijepak
        var brKrila = 3
        console.log(brPolica)
        console.log(s-80)
        console.log((brPolica-2)/2)

    } else if (s>=300 && s < 400) {

        var brPolica = (v/40 | 0) * 2 + 2
        var univerDim = 5*v*d + 2*d*s + v*s + ((brPolica-4)/2)*(s-160)*(d-10) + 4*80*(d-10)   
        var kantDim = 5*v + 2*d + 2*s + ((brPolica-4)/2)*(s-160) + 4*80   
        var utroseniLijepak = (((3*3.4)/120)/100)*kantDim
        var cijena = univer*univerDim + lesonit*lesonitDim + kant*kantDim + 16*tocak + (gornjaSina + donjaSina)*s + 8*v*rukohvat + 2*sipka + 2*Dvijefioke + utroseniLijepak
        var brKrila = 4

    } else if (s>=400 && s<500){
        var brPolica = (v/40 | 0)*3 + 1
        var univerDim = 6*v*d + 2*d*s + v*s + ((brPolica-4)/3)*(s-160)*(d-10) + 4*80*(d-10)   
        var kantDim = 6*v + 2*d + 2*s + ((brPolica-4)/3)*(s-160) + 4*80  
        var utroseniLijepak = (((3*3.4)/120)/100)*kantDim 
        var cijena = univer*univerDim + lesonit*lesonitDim + kant*kantDim + 20*tocak + (gornjaSina + donjaSina)*s + 10*v*rukohvat + 2*sipka + 2*Dvijefioke + utroseniLijepak
        var brKrila = 5
    }

    document.getElementById("result").innerHTML = Math.round(cijena*100)/100+" \&#x20AC"    
    document.getElementById("univer").innerHTML = "Univer - " + univerDim/10000+"\u33A1"
    document.getElementById("kant").innerHTML = "Kant - " + kantDim/100+"m"
    document.getElementById("lesonit").innerHTML = "Lesonit - " + lesonitDim/10000+"\u33A1"
    document.getElementById("lijepak").innerHTML = "Lijepak - " + Math.round(utroseniLijepak*100)/100+" \&#x20AC"
    document.getElementById("brKrila").innerHTML = "Broj Krila - " + brKrila
}