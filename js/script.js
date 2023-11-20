function hitungBMI(event) {
  event.preventDefault(); // Menghentikan perilaku default dari form submit

  var text = document.getElementById("hide");
  text.style.display = "none";

  // Mengambil nilai tinggi dan berat dari input
  const tinggi = parseFloat(document.getElementById("tinggi").value);
  const berat = parseFloat(document.getElementById("berat").value);

  // Menghitung BMI
  const bmi = berat / Math.pow(tinggi / 100, 2); // Rumus BMI: berat(kg) / (tinggi(m) * tinggi(m))

  // Menampilkan hasil BMI pada elemen dengan id 'bmiAnda'

  document.getElementById(
    "hasilBMI"
  ).innerText = `Body Mass Index (BMI) Anda adalah`;
  document.getElementById("bmiAnda").innerText = `${bmi.toFixed(2)}`;
  document.getElementById(
    "berdasarkan"
  ).innerText = `Berdasarkan nilai input Anda, berat Anda berada dalam kategori`;

  // Menampilkan kategori BMI berdasarkan range nilai BMI
  let category = "";
  if (bmi < 18.5) {
    category = "Kurus";
  } else if (bmi >= 18.5 && bmi < 25) {
    category = "Normal";
  } else if (bmi >= 25 && bmi < 30) {
    category = "Gemuk";
  } else {
    category = "Obesitas";
  }
  document.getElementById("category").innerText = `${category}`;

  // Memberikan rekomendasi berdasarkan kategori BMI
  let recommendation = "";
  switch (category) {
    case "Kurus":
      recommendation = "Anda mungkin perlu menambah asupan makanan.";
      break;
    case "Normal":
      recommendation = "Pertahankan pola makan dan aktivitas fisik yang sehat.";
      break;
    case "Gemuk":
      recommendation =
        "Pertimbangkan untuk mengurangi porsi makan dan berolahraga lebih aktif.";
      break;
    case "Obesitas":
      recommendation =
        "Segera konsultasikan dengan dokter untuk menetapkan program penurunan berat badan.";
      break;
    default:
      recommendation = "Tidak ada rekomendasi yang tersedia.";
  }
  document.getElementById(
    "rekomendasi"
  ).innerText = `Rekomendasi: ${recommendation}`;
}
