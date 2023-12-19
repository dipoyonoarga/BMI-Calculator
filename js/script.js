/* Mendefinisikan class Person untuk merepresentasikan individu
   dengan tinggi dan berat badan
*/
class Person {
  constructor(height, weight) {
    this._height = height;
    this._weight = weight;
  }

  // Getter untuk tinggi
  get height() {
    return this._height;
  }

  // Setter untuk tinggi
  set height(height) {
    this._height = height;
  }

  // Getter untuk berat badan
  get weight() {
    return this._weight;
  }

  // Setter untuk berat badan
  set weight(weight) {
    this._weight = weight;
  }

  // Fungsi privat untuk menghitung BMI
  _calculateBMI() {
    return this._weight / Math.pow(this._height, 2);
  }
  // Fungsi privat untuk mendapatkan kategori BMI
  _getCategory(bmi) {
    // Kategori BMI
    if (bmi < 18.5) return "Kurus";
    else if (bmi < 24.9) return "Normal";
    else if (bmi < 29.9) return "Gemuk";
    else return "Obesitas";
  }
  // Fungsi privat untuk memberikan rekomendasi berdasarkan kategori BMI
  _getRecommendation(category) {
    // Memberikan rekomendasi berdasarkan kategori BMI
    switch (category) {
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

  // Fungsi privat untuk memberikan berat ideal berdasarkan tinggi pengguna
  _hitungIdealMin() {
    return parseInt(18.5 * Math.pow(this._height / 100, 2).toFixed(2));
  }

  _hitungIdealMax() {
    return parseInt(24.9 * Math.pow(this._height / 100, 2).toFixed(2));
  }
  // Fungsi untuk menampilkan hasil perhitungan BMI
  displayResult() {
    const bmi = this._calculateBMI();
    const category = this._getCategory(bmi);
    const recommendation = this._getRecommendation(category);
    const idealMin = this._hitungIdealMin();
    const idealMax = this._hitungIdealMax();
    // Update elemen HTML dengan hasil perhitungan BMI
    document.getElementById(
      "hasilBMI"
    ).innerText = `Body Mass Index (BMI) Anda adalah`;
    document.getElementById("bmiAnda").innerText = `${bmi.toFixed(2)}`;

    document.getElementById(
      "berdasarkan"
    ).innerText = `Berat badan Anda masuk ke dalam kategori`;
    document.getElementById("category").innerText = `${category}`;

    document.getElementById(
      "ideal"
    ).innerHTML = `Berat badan ideal untuk tinggi Anda adalah antara`;
    document.getElementById(
      "angkaIdeal"
    ).innerHTML = `${idealMin} & ${idealMax} Kg`;

    document.getElementById("rekomendasi").innerText = `${recommendation}`;

    document.getElementById("hr1").style.display = "block";
    document.getElementById("hr2").style.display = "block";
    document.getElementById("hr3").style.display = "block";

    document.getElementById("hitungLagi").style.display = "block";
    document.getElementById("konsultasi").style.display = "block";
  }
}

// Child class dari Person untuk penggunaan tinggi dalam satuan cm
class PersonInCM extends Person {
  constructor(height, weight) {
    super(height, weight);
  }

  // Override calculateBMI untuk mengubah tinggi ke satuan meter kuadrat
  _calculateBMI() {
    return super._calculateBMI() * 10000;
  }
}
// Fungsi untuk menghitung BMI berdasarkan input pengguna
function hitungBMI(event) {
  event.preventDefault();

  const tinggi = parseFloat(document.getElementById("tinggi").value);
  const berat = parseFloat(document.getElementById("berat").value);

  var text = document.getElementById("hide");
  text.style.display = "none";

  // Membuat objek PersonInCM berdasarkan input pengguna
  const person = new PersonInCM(tinggi, berat);
  // Menampilkan hasil perhitungan BMI
  person.displayResult();
}

// Fungsi untuk mereset formulir dan menyembunyikan hasil perhitungan BMI
function hitungLagi() {
  document.forms["bmiForm"].reset();
  document.getElementById("hr1").style.display = "none";
  document.getElementById("hr2").style.display = "none";
  document.getElementById("hr3").style.display = "none";
  document.getElementById("konsultasi").style.display = "none";
  document.getElementById("hitungLagi").style.display = "none";

  document.getElementById("ideal").innerHTML = "";
  document.getElementById("angkaIdeal").innerHTML = "";
  document.getElementById("hasilBMI").innerText = "";
  document.getElementById("bmiAnda").innerText = "";
  document.getElementById("berdasarkan").innerText = "";
  document.getElementById("category").innerText = "";
  document.getElementById("rekomendasi").innerText = "";

  document.getElementById("hide").style.display = "";
}
