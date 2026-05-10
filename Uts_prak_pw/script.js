const beliBtn = document.querySelectorAll(".beli-btn");
const cartList = document.getElementById("cart-list");
const cartCount = document.getElementById("cart-count");
const totalText = document.getElementById("total");

let total = 0;
let jumlah = 0;

beliBtn.forEach((btn)=>{

    btn.addEventListener("click",()=>{

        const produk = btn.parentElement;
        const nama = produk.querySelector("h3").innerText;
        const harga = parseInt(produk.dataset.price);
        const size = produk.querySelector(".size").value;
        const warna = produk.querySelector(".warna").value;

        if(size == "" || warna == ""){
            alert("Pilih size dan warna!");
            return;
        }

        const li = document.createElement("li");

        li.innerHTML = `
        <div class="cart-item">

            <div>
                <b>${nama}</b><br>
                Size : ${size}<br>
                Warna : ${warna}<br>
                Rp ${harga.toLocaleString()}
            </div>

            <button class="hapus-btn">
                Hapus
            </button>

        </div>
        `;

        cartList.appendChild(li);

        jumlah++;
        total += harga;

        cartCount.innerText = jumlah;

        totalText.innerText =
        "Rp " + total.toLocaleString();
        document.getElementById("cart-total")
        .innerText =
        "Rp " + total.toLocaleString();

        const hapusBtn =
        li.querySelector(".hapus-btn");

        hapusBtn.addEventListener("click",()=>{

            li.remove();

            jumlah--;
            total -= harga;

            cartCount.innerText = jumlah;

            totalText.innerText =
            "Rp " + total.toLocaleString();
            document.getElementById("cart-total")
            .innerText =
            "Rp " + total.toLocaleString();

        });

    });

});

const form = document.querySelector("form");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("Pesan berhasil dikirim!");

    form.reset();

});


const checkoutBtn = document.getElementById("checkout-btn");
const checkoutPage = document.getElementById("checkout-page");
const checkoutItems = document.getElementById("checkout-items");
const checkoutTotal = document.getElementById("checkout-total");
const bayarBtn = document.getElementById("bayar-btn");
const paymentMethod = document.getElementById("payment-method");

checkoutBtn.addEventListener("click",()=>{

    if(jumlah === 0){

        alert("Keranjang kosong!");

        return;
    }

    checkoutPage.style.display = "flex";

    checkoutItems.innerHTML =
    cartList.innerHTML;

    checkoutTotal.innerText =
    "Rp " + total.toLocaleString();

});

bayarBtn.addEventListener("click",()=>{

    if(paymentMethod.value === ""){

        alert("Pilih metode pembayaran!");

        return;
    }

    alert(
    "Pembayaran berhasil menggunakan " +
    paymentMethod.value
    );

const historyList = document.getElementById("history-list");

let totalFix = Number(total); // pastikan angka

const histori = document.createElement("li");

histori.innerHTML = `
<b>Pembelian Berhasil</b><br>
Metode : ${paymentMethod.value}<br>
Total : Rp ${totalFix.toLocaleString("id-ID")}
`;

historyList.appendChild(histori);
    checkoutPage.style.display = "none";

});
const closeCheckout =
document.getElementById("close-checkout");

closeCheckout.addEventListener("click",()=>{

    checkoutPage.style.display =
    "none";

});

