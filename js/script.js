// // Ini file javascript

document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide img");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    
    

    function showSlides(n) {
        slides.forEach((slide, index) => {
            slide.style.display = index === n ? "block" : "none";
        });
    }

    function plusDivs(n) {
        slideIndex = (slideIndex + n + slides.length) % slides.length;
        showSlides(slideIndex);
    }

    //Memastikan tombol ada sebelum menambahkan event listener
    document.getElementById("prevBtn").addEventListener("click", function () {
    plusDivs(-1);
    });

    document.getElementById("nextBtn").addEventListener("click", function () {
    plusDivs(1);
    });


    // Auto-slide setiap 3 detik
    setInterval(function () {
        plusDivs(1);
    }, 3000);

    // Menampilkan slide pertama saat halaman dimuat
    showSlides(slideIndex);
});

function showInfo(type){
    let info = {
        "Last Education": "Bachelor's Degree in Electrical Engineer",
    }
}


// Menunggu hingga DOM selesai dimuat sebelum menjalankan skrip
document.addEventListener("DOMContentLoaded", function () {

    // Menambahkan event listener pada form saat dikirim (submit)
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault(); // Mencegah perilaku default form (refresh halaman)

        // Mengambil nilai input dari form
        let nama = document.getElementById("nama").value; // Nama yang diinputkan pengguna
        let tanggal = document.getElementById("tanggal").value; // Tanggal lahir yang diinputkan pengguna
        let gender = document.querySelector('input[name="gender"]:checked'); // Mengambil gender yang dipilih
        let pesan = document.getElementById("pesan").value; // Pesan yang diinputkan pengguna
        let currentTime = new Date().toLocaleString(); // Mendapatkan waktu saat ini dalam format lokal

        // Jika tidak ada gender yang dipilih, gunakan tanda "-"
        let genderValue = gender ? gender.value : "-";

        // Menampilkan hasil input ke dalam kotak hasil (bagian tampilan)
        document.getElementById("current-time").textContent = currentTime;
        document.getElementById("result-nama").textContent = nama;
        document.getElementById("result-tanggal").textContent = tanggal;
        document.getElementById("result-kelamin").textContent = genderValue;
        document.getElementById("result-pesan").textContent = pesan;

        // Mengubah teks pada header "Message Us" agar menampilkan nama pengguna
        let headerMessage = document.querySelector("#message-us h1 span");
        if (headerMessage) {
            headerMessage.textContent = nama + " "; // Menampilkan nama di header
        }
    });
});

// Bagian kedua dari kode JavaScript, menambahkan kembali event listener pada form
document.addEventListener("DOMContentLoaded", function () {

    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault(); // Mencegah reload halaman saat form dikirim

        // Mengambil nilai dari input nama
        let nama = document.getElementById("nama").value;


        // Menampilkan hasil input pada kotak hasil (tampilan hasil input pengguna)
        document.getElementById("current-time").textContent = new Date().toLocaleString();
        document.getElementById("result-nama").textContent = nama;
        document.getElementById("result-tanggal").textContent = document.getElementById("tanggal").value;
        document.getElementById("result-kelamin").textContent = document.querySelector("input[name='gender']:checked")?.value || "-";
        document.getElementById("result-pesan").textContent = document.getElementById("pesan").value;
    });
});

// Fungsi untuk meminta nama dari pengguna
function askName() {
    let nama = prompt("Please input your name:");

    // Menemukan elemen span di dalam #home h1
    let headerNama = document.querySelector("#home h1 span");

    // Jika pengguna mengisi nama, tampilkan di header
    if (nama !== null && nama.trim() !== "") {
        headerNama.textContent = nama + " ";
    } else {
        headerNama.textContent = "- ";
    }
}

// Panggil fungsi saat halaman dimuat
window.onload = askName;




