// const user = {
//     nama : "Arief",
//     umur : "19",
// };

// console.log(user.nama);
// console.log(user.umur);
// console.log(user['umur']);

//destructuring
// const {nama, umur} = user;
// console.log(user);

// const apple ={
//     color : "red",
//     species : "fuji",
//     weight : 150,
// };

// console.log(user.color);
// console.log(user.species);
// console.log(user.weight);

//update properti
// user.nama = "Jhon";
// console.log(user.nama);

//method = fungsi yang ada dalam object//
// const user = {
//     nama : "arief",
//     sapa : function() {
//         console.log("Hallo saya" + this.nama); //this untuk memanggil atribut//
//     }
// };

// user.sapa();

//nested object//
const spaceship ={
    telescope : {
        year : 2021,
        model : "hubble"
    },
    crew : {
        captain : {
            name : "amerika",
            age : 40
        }
        ,firstOfficer : {
            name : "Jhon",
            age : 35
        },
    }
};


//Akses nested object//
// console.log(spaceship.telescope.model);

//for//
for (let crewMember in spaceship.crew) {
    console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);

}



//buatkan Object mentor dan teman kelas yang berisi atribut nama 3 dan tampilkan menggunakan perulangan;//