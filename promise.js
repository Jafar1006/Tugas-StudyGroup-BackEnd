  
const buatTeh = (gula) =>{
  const Teh = new Promise((resolve, reject) => {
    console.log("⏳ Sedang merebus air... (Tunggu 2 detik)")
    setTimeout(()=>{
      if (gula == "Gula Batu") resolve("✅ Teh Gula Batu Siap dinikmati!");
      else reject("Maaf, stok gula habis.");
    },2000)
    
  });
  Teh
  .then((hasil)=>console.log(hasil))
  .catch((error)=>console.log(error))
}


buatTeh("Gula Batu");

setTimeout(()=>{
  buatTeh("Gula Merah");
},2000);