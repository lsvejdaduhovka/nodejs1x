let osoba = {};
osoba.jmeno = "Bob";
osoba.prijmeni = "Bobickovic";
osoba.rok_nar = 2005;
console.log(osoba);
let vek = 2020-osoba.rok_nar;
console.log("Vek:"+vek);
let json = JSON.stringify(osoba);
console.log("json:"+json);

let vstupniText = "{\"jmeno\":\"Test\",\"prijmeni\":\"Testickovic\",\"rok_nar\":2002}";
let osoba2 = JSON.parse(vstupniText);
console.log(osoba2);
