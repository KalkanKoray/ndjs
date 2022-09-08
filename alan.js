const arguments = process.argv.slice(2);

const pi = 3.14;

function daireHesapla(yariCap) {
    const alan = pi * yariCap * yariCap;
    console.log(alan)
}
daireHesapla(arguments[0]*1);
//terminale node alan yariçap girildiğinde dairenin alanini verir








