// Function Biasa
function contohFunction () {
    document.write("Ini Contoh Function biasa" + "<br></br>")
}
contohFunction()

// Function with Params
function contohPakeParams (nama, biasa) {
    document.write("halo " + nama + "! functions ini pake params loh" + "<br></br>")
}
contohPakeParams("Diaz");

// Arrow Function with Params
var arrowPakeParams;
arrowPakeParams = (nama, add) => ("halo " + nama + "! functions ini pake params " + add + "<br></br>")
document.write(arrowPakeParams("diaz", " & pake arrow juga"))

// Function with Arguments

function namaAja(fristName, lastName, ukuran){
    document.write("Hello " + arguments[0] + " " + arguments[1]);
} 
namaAja('diaz', 'raviv', 42)
