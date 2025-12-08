console.log("=== LATIHAN PENJAGA ZOOTOPIA ===");
let penjaga = [{nama: "Judy Hoops", jarakLari: 3, total: 0},{nama: "Nick Wilde", jarakLari: 2, total:0}];
console.log("");
console.log("Jarak lari per hari: ");
for( let i = 0 ; i < penjaga.length ; i++){
        console.log(penjaga[i].nama + ":", penjaga[i].jarakLari, "km");
    }
console.log("");
for(let i = 1 ; i<= 5; i++){
    console.log("Hari", i + ":" );
    for( let j = 0 ; j < penjaga.length ; j++){
        console.log("-", penjaga[j].nama,"lari", penjaga[j].jarakLari,"km");
        penjaga[j].total = penjaga[j].total + penjaga[j].jarakLari;
    }
    console.log("");
}
console.log("=== TOTAL JARAK SELAMA 5 HARI ===");
for(let i = 0; i < penjaga.length; i++){
    console.log(penjaga[i].nama + ":", penjaga[i].total, "km")
}
