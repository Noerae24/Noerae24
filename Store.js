
        const store = [
            {
                url: "https://s.shopee.co.id/4ApoJxYUwz",
                image: "https://raw.githubusercontent.com/Noerae24/Noerae24/refs/heads/Orens/stuffxts690.jpg",
                alt: "Anglet xts-690",
                promoImage: "https://raw.githubusercontent.com/Noerae24/Noerae24/refs/heads/Orens/InterestStuff.jpg",
                promoName: "InterestStuff",
                title: "Anglet xts-690 full oprek",
                price: "Rp1.472.000",
                shipping: "3-6 Hari",
                rating: "4.7 Penilaian Toko"
            },
            {
                url: "https://s.shopee.co.id/2g10aNeNMX",
                image: "https://raw.githubusercontent.com/Noerae24/Noerae24/refs/heads/Orens/Casiowk1800.avif",
                alt: "Casio 3500",
                promoImage: "https://raw.githubusercontent.com/Noerae24/Noerae24/refs/heads/Orens/Hamid.jpg",
                promoName: "Hamidn39",
                title: "Casio WK 1800 full oprek",
                price: "Rp1.748.000",
                shipping: "3-6 Hari",
                rating: "4.8 Penilaian Toko"
            },
            {
                url: "https://s.shopee.co.id/8UyneeIEyG",
                image: "https://raw.githubusercontent.com/Noerae24/Noerae24/refs/heads/Orens/stuffMk960.png",
                alt: "Anglet xts-690",
                promoImage: "https://raw.githubusercontent.com/Noerae24/Noerae24/refs/heads/Orens/InterestStuff.jpg",
                promoName: "InterestStuff",
                title: "MK-960 full oprek",
                price: "Rp1.325.000",
                shipping: "3-6 Hari",
                rating: "4.7 Penilaian Toko"
            },
            
              {  url: "https://s.shopee.co.id/4ApoJxYUwz",
                image: "https://raw.githubusercontent.com/Noerae24/Noerae24/refs/heads/Orens/stuffxts690.jpg",
                alt: "Anglet xts-690",
                promoImage: "https://raw.githubusercontent.com/Noerae24/Noerae24/refs/heads/Orens/InterestStuff.jpg",
                promoName: "InterestStuff",
                title: "Anglet xts-690 full oprek",
                price: "Rp1.472.000",
                shipping: "3-6 Hari",
                rating: "4.7 Penilaian Toko"
            },
            {
                url: "https://s.shopee.co.id/2g10aNeNMX",
                image: "https://raw.githubusercontent.com/Noerae24/Noerae24/refs/heads/Orens/Casiowk1800.avif",
                alt: "Casio 3500",
                promoImage: "https://raw.githubusercontent.com/Noerae24/Noerae24/refs/heads/Orens/Hamid.jpg",
                promoName: "Hamidn39",
                title: "Casio WK 1800 full oprek",
                price: "Rp1.748.000",
                shipping: "3-6 Hari",
                rating: "4.8 Penilaian Toko"
            },
            {
                url: "https://s.shopee.co.id/40WP2nXvL1",
                image: "https://raw.githubusercontent.com/Noerae24/Noerae24/refs/heads/Orens/stuffMk960.png",
                alt: "Anglet xts-690",
                promoImage: "https://raw.githubusercontent.com/Noerae24/Noerae24/refs/heads/Orens/InterestStuff.jpg",
                promoName: "InterestStuff",
                title: "MK-960 full oprek",
                price: "Rp1.325.000",
                shipping: "3-6 Hari",
                rating: "4.7 Penilaian Toko"
            },
            // Anda bisa tambahkan produk lain di sini
        ];
        
        // Fungsi untuk mengacak array (algoritma Fisher-Yates shuffle)
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }

        // Fungsi untuk membuat elemen HTML produk dari data produk
        function createStoreCard(product) {
            return `
                <a href="${product.url}" class="store-card">
                    <img src="${product.image}" alt="${product.alt}" class="store-image">
                    <div class="promo-tag">
                        <img src="${product.promoImage}" alt="${product.promoName}" class="promo-profile-pic">
                        ${product.promoName}
                    </div>
                    <h3 class="product-title">${product.title}</h3>
                    <div class="store-price">${product.price} <i class="fas fa-tags"></i></div>
                    <div class="shipping-info">
                        <i class="fas fa-truck"></i> ${product.shipping}
                    </div>
                    <div class="store-rating">
                        <i class="fas fa-star"></i> ${product.rating}
                    </div>
                    <button class="add-card"><i>$</i></button>
                </a>
            `;
        }
        
        const storeGrid = document.getElementById('store-list');
        const productsPerLoad = 6; // Jumlah produk yang akan dimuat setiap kali gulir
        let loading = false; // Status untuk mencegah pemuatan ganda

        // Fungsi untuk memuat lebih banyak produk
        function loafMoreStore() {
            if (loading) return; // Keluar jika sedang dalam proses loading
            loading = true; // Set status loading ke true

            setTimeout(() => {
                // Acak array produk
                const shuffledProducts = shuffleArray([...store]); // Salin array agar tidak mengubah aslinya

                // Ambil sejumlah produk yang diinginkan
                const newStore = shuffledProducts.slice(0, productsPerLoad);

                // Tambahkan produk baru ke halaman
                newStore.forEach(product => {
                    const storeHtml = createStoreCard(product);
                    storeGrid.insertAdjacentHTML('beforeend', storeHtml);
                });

                loading = false; // Set status loading kembali ke false
            }, 500); // Penundaan 500ms untuk mensimulasikan pemuatan data
        }

        // Jalankan fungsi saat halaman selesai dimuat
        document.addEventListener('DOMContentLoaded', () => {
            loafMoreStore(); // Muat produk pertama kali saat halaman dimuat
        });

        // Event listener untuk mendeteksi gulir
        window.addEventListener('scroll', () => {
            // Mengecek apakah pengguna sudah mendekati bagian bawah halaman
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
                // Jika ya, muat lebih banyak produk
                loafMoreStore();
            }
        });
    