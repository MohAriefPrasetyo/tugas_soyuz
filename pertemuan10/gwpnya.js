const kelasB = {
    mentor : {
        mentor1 : {
            nama : 'Ka Alin',
            angkatan : 22,
        },
        mentor2 : {
            nama : 'Ka Amanda',
            angkatan : 22,
        },
        mentor3 : {
            nama : 'Ka Oktavia',
            angkatan : 23,
        },
        mentor4 : {
            nama : 'Ka Gading',
            angkatan : 22,
        },
        mentor5 : {
            nama : 'Ka Fudhail',
            angkatan : 22,
        },
        mentor6 : {
            nama : 'Ka Daffa',
            angkatan : 23,
        },
        mentor7 : {
            nama : 'Ka Sakti',
            angkatan : 23,
        }
    },
    temanKelas : {
        teman1 : {
            nama : 'Fiqhy Fauzan',
            angkatan : 24,
        },
        teman2 : {
            nama : 'Ardiansyah',
            angkatan : 24,
        },
        teman3 : {
            nama : 'Jimmy Melandry',
            angkatan : 24,
        }
    }
}


console.log("=== Daftar Mentor ===")
for (let kelasbMember in kelasB.mentor){
    console.log(`nama : ${kelasB.mentor[kelasbMember].nama}\nangkatan: ${kelasB.mentor[kelasbMember].angkatan}`)
}

console.log("\n=== Daftar Teman Kelas ===")
for (let kelasbMember in kelasB.temanKelas){
    console.log(`nama: ${kelasB.temanKelas[kelasbMember].nama}\nangkatan: ${kelasB.temanKelas[kelasbMember].angkatan}`)
}