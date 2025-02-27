const text = "Happy Valentines Day Sayang!"; // Teks yang akan dianimasikan
const typingTextElement = document.getElementById('typing-text');
let index = 0;

function typeText() {
    if (index < text.length) {
        // Tambahkan satu karakter ke elemen teks
        typingTextElement.textContent += text.charAt(index);
        index++;
        // Atur kecepatan typing (dalam milidetik)
        setTimeout(typeText, 100); // 100ms = 0.1 detik per karakter
    } else {
        // Setelah selesai, tambahkan efek kursor berkedip
        typingTextElement.style.borderRight = "3px solid transparent"; // Hilangkan kursor
    }
}

// Jalankan animasi saat halaman dimuat
typeText();
