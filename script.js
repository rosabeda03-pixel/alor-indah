// ==========================================
// MEDIA PEMBELAJARAN TK/PAUD KABUPATEN ALOR
// script.js
// ==========================================

// =======================
// Pesan Selamat Datang
// =======================

window.onload = function () {
    setTimeout(function () {
        alert("👋 Selamat Datang!\nAyo Belajar Mengenal Kabupaten Alor.");
    }, 500);
};

// =======================
// Salam Otomatis
// =======================

function tampilSalam() {

    let jam = new Date().getHours();
    let salam = "";

    if (jam < 11) {
        salam = "🌞 Selamat Pagi";
    } else if (jam < 15) {
        salam = "☀️ Selamat Siang";
    } else if (jam < 18) {
        salam = "🌅 Selamat Sore";
    } else {
        salam = "🌙 Selamat Malam";
    }

    let teks = document.getElementById("salam");

    if (teks) {
        teks.innerHTML = salam;
    }

}

tampilSalam();


// =======================
// Jam Digital
// =======================

function tampilJam() {

    let sekarang = new Date();

    let jam = sekarang.getHours();
    let menit = sekarang.getMinutes();
    let detik = sekarang.getSeconds();

    if (jam < 10) jam = "0" + jam;
    if (menit < 10) menit = "0" + menit;
    if (detik < 10) detik = "0" + detik;

    let waktu = jam + ":" + menit + ":" + detik;

    let kotak = document.getElementById("jam");

    if (kotak) {
        kotak.innerHTML = waktu;
    }

}

setInterval(tampilJam, 1000);


// =======================
// Efek Hover Card
// =======================

const cards = document.querySelectorAll(".card");

cards.forEach(function(card){

    card.addEventListener("mouseenter", function(){

        this.style.transform = "translateY(-10px)";
        this.style.transition = "0.3s";

    });

    card.addEventListener("mouseleave", function(){

        this.style.transform = "translateY(0px)";

    });

});


// =======================
// Back To Top
// =======================

const tombol = document.createElement("button");

tombol.innerHTML = "⬆";

tombol.id = "topButton";

document.body.appendChild(tombol);

tombol.style.position = "fixed";
tombol.style.bottom = "20px";
tombol.style.right = "20px";
tombol.style.width = "50px";
tombol.style.height = "50px";
tombol.style.borderRadius = "50%";
tombol.style.border = "none";
tombol.style.background = "#0d6efd";
tombol.style.color = "white";
tombol.style.fontSize = "22px";
tombol.style.cursor = "pointer";
tombol.style.display = "none";

window.addEventListener("scroll", function(){

    if(window.scrollY > 250){

        tombol.style.display = "block";

    }else{

        tombol.style.display = "none";

    }

});

tombol.onclick = function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};


// =======================
// Quiz
// =======================

function cekJawaban(jawaban){

    let hasil = document.getElementById("hasil");

    if(jawaban=="NTT"){

        hasil.innerHTML="🎉 Hebat! Jawabanmu Benar.";

        hasil.style.color="green";

    }

    else{

        hasil.innerHTML="❌ Jawaban Salah. Yuk Coba Lagi.";

        hasil.style.color="red";

    }

}


// =======================
// Animasi Tombol
// =======================

const tombolBelajar = document.querySelectorAll(".btn");

tombolBelajar.forEach(function(btn){

    btn.addEventListener("mouseover",function(){

        this.style.transform="scale(1.05)";

    });

    btn.addEventListener("mouseout",function(){

        this.style.transform="scale(1)";

    });

});


// =======================
// Efek Klik Gambar
// =======================

const gambar = document.querySelectorAll("img");

gambar.forEach(function(img){

    img.addEventListener("click",function(){

        this.style.transform="scale(1.1)";

        setTimeout(()=>{

            this.style.transform="scale(1)";

        },300);

    });

});


// =======================
// Pesan Penutup
// =======================

console.log("Media Pembelajaran Kabupaten Alor Berhasil Dimuat.");