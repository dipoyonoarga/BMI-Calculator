class BMI {
  constructor() {
    this._tinggi = 0;
    this._berat = 0;
  }

  resetValues() {
    this._tinggi = 0;
    this._berat = 0;
  }

  setTinggi(tinggi) {
    this._tinggi = tinggi;
  }

  getTinggi() {
    return this._tinggi;
  }

  setBerat(berat) {
    this._berat = berat;
  }

  getBerat() {
    return this._berat;
  }

  _hitungBMI() {
    return this._berat / Math.pow(this._tinggi / 100, 2);
  }

  _hitungKategori() {
    const bmi = this._hitungBMI();
    if (bmi < 18.5) {
      return "Kurus";
    } else if (bmi >= 18.5 && bmi < 25) {
      return "Normal";
    } else if (bmi >= 25 && bmi < 30) {
      return "Gemuk";
    } else {
      return "Obesitas";
    }
  }

  _hitungIdealMin() {
    return parseInt(18.5 * Math.pow(this._tinggi / 100, 2).toFixed(2));
  }

  _hitungIdealMax() {
    return parseInt(24.9 * Math.pow(this._tinggi / 100, 2).toFixed(2));
  }

  _hitungRekomendasi() {
    switch (this._hitungKategori()) {
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

  hitungBMI() {
    return {
      bmi: this._hitungBMI().toFixed(2),
      kategori: this._hitungKategori(),
      idealMin: this._hitungIdealMin(),
      idealMax: this._hitungIdealMax(),
      rekomendasi: this._hitungRekomendasi(),
    };
  }
}

function hitungBMI(event) {
  event.preventDefault();

  var text = document.getElementById("hide");
  text.style.display = "none";

  const tinggi = parseFloat(document.getElementById("tinggi").value);
  const berat = parseFloat(document.getElementById("berat").value);

  const bmiObj = new BMI();
  bmiObj.setTinggi(tinggi);
  bmiObj.setBerat(berat);

  const hasilBMI = bmiObj.hitungBMI();

  document.getElementById(
    "hasilBMI"
  ).innerText = `Body Mass Index (BMI) Anda adalah`;
  document.getElementById("bmiAnda").innerText = `${hasilBMI.bmi}`;

  document.getElementById(
    "berdasarkan"
  ).innerText = `Berat badan Anda masuk ke dalam kategori`;
  document.getElementById("category").innerText = `${hasilBMI.kategori}`;

  document.getElementById(
    "ideal"
  ).innerHTML = `Berat badan ideal untuk tinggi Anda adalah antara`;
  document.getElementById(
    "angkaIdeal"
  ).innerHTML = `${hasilBMI.idealMin} & ${hasilBMI.idealMax} Kg`;

  document.getElementById("rekomendasi").innerText = `${hasilBMI.rekomendasi}`;

  document.getElementById("hr1").style.display = "block";
  document.getElementById("hr2").style.display = "block";
  document.getElementById("hr3").style.display = "block";

  document.getElementById("hitungLagi").style.display = "block";
  document.getElementById("konsultasi").style.display = "block";

  document.getElementById("hitungLagi").onclick = function () {
    bmiObj.resetValues();

    document.getElementById("tinggi").value = "";
    document.getElementById("berat").value = "";
    document.getElementById("hasilBMI").innerHTML = "";
    document.getElementById("bmiAnda").innerHTML = "";
    document.getElementById("berdasarkan").innerHTML = "";
    document.getElementById("category").innerHTML = "";
    document.getElementById("rekomendasi").innerHTML = "";
    document.getElementById("ideal").innerHTML = "";
    document.getElementById("angkaIdeal").innerHTML = "";
    document.getElementById("hr1").style.display = "none";
    document.getElementById("hr2").style.display = "none";
    document.getElementById("hr3").style.display = "none";
    document.getElementById("hitungLagi").style.display = "none";
    document.getElementById("konsultasi").style.display = "none";
    document.getElementById("hide").style.display = "";
  };
}
