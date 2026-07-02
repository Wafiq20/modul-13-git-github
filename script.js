const deskripsi = document.getElementById("deskripsi");
const btnUbah = document.getElementById("btnUbah");
 
btnUbah.addEventListener("click", function () {
    deskripsi.textContent =
        "Ini adalah deskripsi baru setelah pengembangan pada branch fitur-deskripsi.";
});