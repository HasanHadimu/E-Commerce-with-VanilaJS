// Mengimpor modul HomeScreen dari file screen/HomeScreen.js
import HomeScreen from "./screen/HomeScreen.js";

// Fungsi router yang bertanggung jawab untuk mengganti konten utama halaman
const router = () => {
    // Mendapatkan elemen dengan id 'main-container', di mana konten halaman akan dimasukkan
    const main = document.getElementById('main-container');
    
    // Menetapkan konten HTML yang dihasilkan oleh HomeScreen.render() ke dalam elemen main-container
    main.innerHTML = HomeScreen.render();
};

// Menambahkan event listener untuk event 'load' pada window
// Ketika halaman selesai dimuat, fungsi router akan dijalankan
window.addEventListener('load', router);
