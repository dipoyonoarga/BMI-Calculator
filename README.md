# Kalkulator BMI (Body Mass Index) dengan JavaScript #

Kalkulator BMI sederhana yang menggunakan JavaScript dan konsep OOP (Object-Oriented Programming) untuk menghitung BMI (Body Mass Index) seseorang berdasarkan tinggi dan berat badan yang dimasukkan.

## Konsep OOP yang Diterapkan
- **Constructor:** Digunakan untuk membuat objek Person dan PersonInCM dengan menginisialisasi tinggi dan berat badan.
- **Enkapsulasi (Getter dan Setter):** Menggunakan getter dan setter untuk mengakses dan memperbarui properti tinggi dan berat badan dengan aman.
- **Inheritance:** Kelas PersonInCM merupakan turunan dari kelas Person, menerapkan spesifikasi tambahan untuk menghitung BMI dengan tinggi dalam satuan sentimeter.
- **Overriding:** Menggunakan metode override _calculateBMI untuk mengubah tinggi ke meter kuadrat saat menghitung BMI pada kelas turunan

## Disclaimer ##

Kalkulator ini dirancang untuk keperluan informasional saja. Pengguna harus memperhatikan bahwa kalkulator ini direkomendasikan hanya untuk individu yang berumur minimal 20 tahun. Selalu konsultasikan dengan dokter atau profesional kesehatan sebelum membuat keputusan terkait kesehatan dan pola hidup.

## Fitur Utama ##

1. Menghitung BMI berdasarkan tinggi (cm) dan berat badan (kg).
2. Memberikan kategori BMI berdasarkan hasil perhitungan.
3. Memberikan rekomendasi berdasarkan kategori BMI.
4. Menampilkan berat badan ideal berdasarkan tinggi pengguna.

## Cara Penggunaan ##

1. Isi formulir dengan tinggi dan berat badan Anda.
2. Tekan tombol "Hitung BMI" untuk melihat hasilnya.
3. Rekomendasi dan kategori BMI akan ditampilkan.

## Catatan Penting ##

Kalkulator ini hanya memberikan perkiraan BMI. Untuk rekomendasi kesehatan yang lebih akurat, sebaiknya berkonsultasi dengan dokter atau profesional medis.
