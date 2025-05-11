const kelasB = {
  mentor : {
  mentor1 :{
      nama: "Ka Gading",
      akt : 22 
  },
  mentor2 :{
      nama: "Ka Fudhail",
      akt : 22 
  },
  mentor3 :{
      nama: "Ka Amanda",
      akt : 22 
  },
  mentor4 :{
      nama: "Ka Alin",
      akt : 22 
  },
  mentor5 :{
      nama: "Ka Daffa",
      akt : 23 
  },
  mentor6 : {
      nama: "Ka Oktavia",
      akt : 23 
  },
  mentor7 :{
      nama: "Ka Sakti",
      akt : 23 
    }
  },
  
  
  temanKelas: {
    namaTeman1 :{
      nama: "Jimmy Melandry",
      nim : "F55124001"
    },
    namaTeman2 :{
      nama: "Rayhan S.Atuka",
      nim : "F55124026"
    },
    namaTeman3 :{
      nama: "Fiqhy Fauzan",
      nim : "F55124029"
    }
}
};



// console.log("=== Daftar Mentor ===");
// for (const key in kelasB.mentor) {
//   const mentor = kelasB.mentor[key];
//   console.log(`Nama: ${mentor.nama}, AKT: ${mentor.akt}`);
// }

// console.log("\n=== Daftar Teman Kelas ===");
// // Menampilkan data teman kelas menggunakan for...in
// for (const key in kelasB.temanKelas) {
//   const teman = kelasB.temanKelas[key];
//   console.log(`Nama: ${teman.nama}, NIM: ${teman.nim}`);
// }

console.log("=== Daftar Mentor ===");
for (const { nama, akt } of Object.values(kelasB.mentor)) {
  console.log(`Nama: ${nama}, AKT: ${akt}`);
}

console.log("\n=== Daftar Teman Kelas ===");
for (const { nama, nim } of Object.values(kelasB.temanKelas)) {
  console.log(`Nama: ${nama}, NIM: ${nim}`);
} 