document.addEventListener("DOMContentLoaded", function () {

    let cart = [];
    let total = 0;

    const buttons = document.querySelectorAll(".beli-btn");
    const cartCount = document.getElementById("cart-count");
    const totalText = document.getElementById("total");
    const cartList = document.getElementById("cart-list");

    buttons.forEach(btn => {
        btn.addEventListener("click", function () {

            const item = this.closest(".produk-item");

            const name = item.querySelector("h3").innerText;
            const price = parseInt(item.dataset.price);

         
            const size = item.querySelector(".size")?.value;
            const warna = item.querySelector(".warna")?.value;

          
            if (!size || !warna) {
                alert("Pilih size dan warna dulu!");
                return;
            }

            if (isNaN(price)) {
                alert("Harga tidak ditemukan!");
                return;
            }

          
            cart.push({ name, price, size, warna });

            updateCart();
        });
    });

    function updateCart() {
        cartList.innerHTML = "";
        total = 0;

        cart.forEach((item, index) => {
            total += item.price;

            const li = document.createElement("li");
            li.innerHTML = `
                ${item.name} (${item.size}, ${item.warna}) - Rp ${item.price.toLocaleString()}
                <button onclick="removeItem(${index})">❌</button>
            `;
            cartList.appendChild(li);
        });

        cartCount.innerText = cart.length;
        totalText.innerText = "Rp " + total.toLocaleString();
    }

    window.removeItem = function (index) {
        cart.splice(index, 1);
        updateCart();
    };

});