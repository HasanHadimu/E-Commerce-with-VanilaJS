// Mengimpor data produk dari file data.js
import data from '../data.js'

const HomeScreen = {
  // Fungsi untuk merender tampilan halaman utama (Home)
  render: () => {
    // Mendestructuring data produk dari objek data yang diimpor
    const { products } = data;
    
    // Mengembalikan HTML untuk menampilkan daftar produk
    return `
      <ul class="products">
        ${products
          .map(
            (product) => `
              <li>
                <div class="product">
                  <!-- Link yang mengarah ke halaman produk tertentu -->
                  <a href="/#/product/${product.id}" onclick="navigateToProduct(${product.id})">
                    <img src="${product.image}" alt="${product.name}">
                  </a>
                  <div class="product-name">
                    <!-- Nama produk yang juga mengarah ke halaman produk -->
                    <a href="/#/product/${product.id}" onclick="navigateToProduct(${product.id})">
                      ${product.name}
                    </a>
                  </div>
                  <div class="product-brand">
                    <!-- Menampilkan merek produk -->
                    ${product.brand}
                  </div>
                  <div class="product-price">
                    <!-- Menampilkan harga produk -->
                    $${product.price}
                  </div>
                </div>
              </li>
            `
          ).join('\n')}  <!-- Join untuk menggabungkan string produk menjadi satu -->
      </ul>
    `;
  },
};

// Fungsi untuk menangani navigasi ke halaman produk tertentu
function navigateToProduct(productId) {
  // Mengubah hash URL di browser untuk menunjuk ke halaman produk tertentu
  window.location.hash = `/product/${productId}`;
  
  // Render halaman produk berdasarkan ID produk
  renderProductScreen(productId);
}

// Fungsi untuk merender tampilan halaman produk berdasarkan ID produk
function renderProductScreen(productId) {
  // Mencari produk berdasarkan ID dari data produk
  const product = data.products.find(p => p.id === productId);
  
  // Jika produk ditemukan, tampilkan halaman produk
  if (product) {
    const productPage = `
      <div class="product-page">
        <h1>${product.name}</h1>
        <img src="${product.image}" alt="${product.name}">
        <div class="product-brand">${product.brand}</div>
        <div class="product-price">$${product.price}</div>
        <div class="product-description">
          <p>Product details here...</p>
        </div>
      </div>
    `;
    // Menampilkan halaman produk di elemen dengan id 'main'
    document.getElementById('main').innerHTML = productPage;
  } else {
    // Jika produk tidak ditemukan, tampilkan halaman 404
    document.getElementById('main').innerHTML = `
      <h1>404 - Product Not Found</h1>
      <p>Sorry, we couldn't find the product you're looking for.</p>
    `;
  }
}

// Mengekspor objek HomeScreen sehingga bisa digunakan di file lain
export default HomeScreen;
