alert("Welcome to Official SimpL Esports");

(function () {
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

const btn = document.querySelector("#btn");
const sidebar = document.querySelector(".sidebar");
const search = document.querySelector(".bx-search");

btn.onclick = function () {
  sidebar.classList.toggle("active");
}

search.onclick = function () {
  sidebar.classList.toggle("active");
}

// Adicionando funcionalidade de compra
const buyButtons = document.querySelectorAll(".buy-button");

buyButtons.forEach(button => {
    button.addEventListener("click", () => {
        const product = button.parentElement;
        const productName = product.querySelector("h3").innerText;
        const productPrice = product.querySelector("p").innerText;
        
        alert(`Você comprou ${productName} por ${productPrice}`);
    });
});
