class BMI {
  constructor(tinggi, berat) {
    this.tinggi = tinggi;
    this.berat = berat;
    this.bmi = this.hitungBMI();
    this.kategori = this.hitungKategori();
    this.rekomendasi = this.hitungRekomendasi();
  }

  hitungBMI() {
    return this.berat / Math.pow(this.tinggi / 100, 2);
  }

  hitungKategori() {
    if (this.bmi < 18.5) {
      return "Kurus";
    } else if (this.bmi >= 18.5 && this.bmi < 25) {
      return "Normal";
    } else if (this.bmi >= 25 && this.bmi < 30) {
      return "Gemuk";
    } else {
      return "Obesitas";
    }
  }

  hitungRekomendasi() {
    switch (this.kategori) {
      case "Kurus":
        return "Anda mungkin perlu menambah asupan makanan.";
      case "Normal":
        return "Pertahankan pola makan dan aktivitas fisik yang sehat.";
      case "Gemuk":
        return "Pertimbangkan untuk mengurangi porsi makan dan berolahraga lebih aktif.";
      case "Obesitas":
        return "Segera konsultasikan dengan dokter untuk menetapkan program penurunan berat badan.";
      default:
        return "Tidak ada rekomendasi yang tersedia.";
    }
  }
}

function hitungBMI(event) {
  event.preventDefault(); // Menghentikan perilaku default dari form submit

  var text = document.getElementById("hide");
  text.style.display = "none";

  // Mengambil nilai tinggi dan berat dari input
  const tinggi = parseFloat(document.getElementById("tinggi").value);
  const berat = parseFloat(document.getElementById("berat").value);

  // Membuat objek BMI
  const bmiObj = new BMI(tinggi, berat);

  // Menampilkan hasil BMI pada elemen dengan id 'bmiAnda'
  document.getElementById(
    "bmiAnda"
  ).innerText = `Body Mass Index (BMI) Anda adalah: ${bmiObj.bmi.toFixed(2)}`;

  // Menampilkan kategori BMI
  document.getElementById(
    "category"
  ).innerText = `Kategori BMI: ${bmiObj.kategori}`;

  // Menampilkan rekomendasi berdasarkan kategori BMI
  document.getElementById(
    "rekomendasi"
  ).innerText = `Rekomendasi: ${bmiObj.rekomendasi}`;
}
