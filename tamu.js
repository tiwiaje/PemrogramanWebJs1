document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("form-tamu");
    const daftarTamu = document.getElementById("daftar-tamu");
    const inputCari = document.getElementById("pencarian-tamu"); // pencarian //
    inputCari.addEventListener("input", function () {
    const keyword = inputCari.value.toLowerCase();
    const semuaTamu = daftarTamu.querySelectorAll(".box-model-example");

    semuaTamu.forEach(function (tamu) {
        const nama = tamu.querySelector(".nama-tamu").textContent.toLowerCase();
        if (nama.includes(keyword)) {
            tamu.style.display = "flex";
        } else {
            tamu.style.display = "none";
        }
    });
});

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nama = document.getElementById("nama").value.trim();

        if (nama) {
            const itemTamu = document.createElement("div");
            itemTamu.classList.add("box-model-example");
            itemTamu.style.display = "flex";
            itemTamu.style.justifyContent = "space-between";
            itemTamu.style.alignItems = "center";
            itemTamu.style.gap = "10px";

            const namaTamu = document.createElement("span");
            namaTamu.classList.add("nama-tamu");
            namaTamu.textContent = nama;

            const tombolContainer = document.createElement("div");
            tombolContainer.style.display = "flex";
            tombolContainer.style.gap = "5px";

            // Tombol Ditanggapi (bisa toggle)
            const btnTanggapi = document.createElement("button");
            btnTanggapi.textContent = "Hadir";
            btnTanggapi.style.backgroundColor = "#4CAF50"; // hijau
            btnTanggapi.style.padding = "5px 10px";
            btnTanggapi.style.fontSize = "0.8rem";
            btnTanggapi.style.borderRadius = "4px";

            let sudahTanggapi = false; // status toggle

            btnTanggapi.addEventListener("click", function () {
                sudahTanggapi = !sudahTanggapi;
                if (sudahTanggapi) {
                    namaTamu.style.textDecoration = "line-through";
                    namaTamu.style.color = "#888";
                    btnTanggapi.textContent = "Sudah";
                    btnTanggapi.style.backgroundColor = "#ccc"; // abu-abu
                } else {
                    namaTamu.style.textDecoration = "none";
                    namaTamu.style.color = "#000";
                    btnTanggapi.textContent = "Hadir";
                    btnTanggapi.style.backgroundColor = "#4CAF50"; // hijau lagi
                }
            });

            // Tombol Edit
            const btnEdit = document.createElement("button");
            btnEdit.textContent = "Edit";
            btnEdit.style.backgroundColor = "#FFA500"; // oranye
            btnEdit.style.padding = "5px 10px";
            btnEdit.style.fontSize = "0.8rem";
            btnEdit.style.borderRadius = "4px";

            btnEdit.addEventListener("click", function () {
                const namaBaru = prompt("Edit nama tamu:", namaTamu.textContent);
                if (namaBaru !== null && namaBaru.trim() !== "") {
                    namaTamu.textContent = namaBaru.trim();
                }
            });

            // Tombol Hapus
            const btnHapus = document.createElement("button");
            btnHapus.textContent = "Hapus";
            btnHapus.style.backgroundColor = "#E74C3C"; // merah
            btnHapus.style.padding = "5px 10px";
            btnHapus.style.fontSize = "0.8rem";
            btnHapus.style.borderRadius = "4px";

            btnHapus.addEventListener("click", function () {
                const konfirmasi = confirm("Apakah Anda yakin ingin menghapus tamu ini?");
                if (konfirmasi) {
                    daftarTamu.removeChild(itemTamu);
                }
            });

            tombolContainer.appendChild(btnTanggapi);
            tombolContainer.appendChild(btnEdit);
            tombolContainer.appendChild(btnHapus);

            itemTamu.appendChild(namaTamu);
            itemTamu.appendChild(tombolContainer);

            daftarTamu.appendChild(itemTamu);
            form.reset();
        } else {
            alert("Silakan masukkan nama.");
        }
    });
});
