-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 24 Bulan Mei 2022 pada 12.47
-- Versi server: 10.4.24-MariaDB
-- Versi PHP: 8.0.19

-- CREATE DATABASE ktp;
USE ktp;

-- SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
-- START TRANSACTION;
-- SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ktp`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE profiles (
  profileId INT AUTO_INCREMENT PRIMARY KEY,
  nik VARCHAR(15) NOT NULL,
  nama VARCHAR(45) NOT NULL,
  alamat VARCHAR(100) NULL DEFAULT '-',
  ttl VARCHAR(30) NULL DEFAULT '-',
  provinsi VARCHAR(30) NULL DEFAULT '-',
  kabupaten VARCHAR(30) NULL DEFAULT '-',
  jenis_kelamin ENUM('Laki-Laki', 'Perempuan') NULL DEFAULT 'Laki-Laki',
  agama VARCHAR(45) NULL,
  kewarganegaraan ENUM('WNI', 'WNA') NULL DEFAULT 'WNI',
  kelurahan VARCHAR(30) NULL DEFAULT '-',
  rt VARCHAR(5) NULL DEFAULT '000',
  rw VARCHAR(5) NULL DEFAULT '000',
  kecamatan VARCHAR(30) NULL DEFAULT '-',
  pekerjaan VARCHAR(30) NULL DEFAULT '-'
) ENGINE=INNODB;

CREATE TABLE users (
    userId INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    profileId INT,
    FOREIGN KEY (profileId) 
    REFERENCES profiles(profileId)
) ENGINE=INNODB;



--
-- Dumping data untuk tabel `user`
--

insert into profiles (nik, nama, alamat, ttl, provinsi, kabupaten, jenis_kelamin, agama, kewarganegaraan, kelurahan, rt, rw, kecamatan, pekerjaan) values ('1147483648', 'REDI ALAMSYAH', 'KP. SUKAMANAH ', 'SUKABUMI, 22-03-2002', 'JAWA BARAT', 'SUKABUM', 'Laki-Laki', 'ISLAM', 'WNI', 'BOJONG GENTENG', '010', '003', 'JAMPANG KULON ', 'MAHASISWA');
INSERT INTO profiles (nik, nama, alamat, ttl, provinsi, kabupaten, jenis_kelamin, agama, kewarganegaraan, kelurahan, rt, rw, kecamatan, pekerjaan) VALUES ('1247483876', 'SELAMET HARI ISA ALMA', 'WATAS', 'SURAKARTA, 12-06-1993', 'JAWA TENGAH', 'SURAKARTA', 'Laki-Laki', 'BUDHA', 'WNI', 'SUKAMULYO', '027', '004', 'PUNCOKUSUMO', 'KARYAWAN SWASTA');
INSERT INTO profiles (nik, nama, alamat, ttl, provinsi, kabupaten, jenis_kelamin, agama, kewarganegaraan, kelurahan, rt, rw, kecamatan, pekerjaan) VALUES ('1347483574', 'FELICITAS JUNON', 'JL. IMAM BONJOL, KAMPUNG', 'DABO SINGKEP, 07-01-1963', 'KEPULAUAN RIAU', 'BINTAN', 'Laki-Laki', 'ISLAM', 'WNI', 'TANJUNG UBAN KOTA', '002', '001', 'BINTAN UTARA', 'PNS');
INSERT INTO profiles (nik, nama, alamat, ttl, provinsi, kabupaten, jenis_kelamin, agama, kewarganegaraan, kelurahan, rt, rw, kecamatan, pekerjaan) VALUES ('1447483579', 'UMAR SISWORO', 'DSN SUMBEH ASRI', 'SURABAYA, 12-07-1971', 'JAWA TIMUR', 'SURABAYA', 'Laki-laki', 'ISLAM', 'WNI', 'SONOREJO', '002 / 001', 'GROGOI', 'PNS');
INSERT INTO profiles (nik, nama, alamat, ttl, provinsi, kabupaten, jenis_kelamin, agama, kewarganegaraan, kelurahan, rt, rw, kecamatan, pekerjaan) VALUES ('1457483571', 'SULISTIYONO', 'JL. RAYA DUSUN PURWOKERTO', 'KEDIRI, 26-02-1966', 'JAWA TIMUR', 'KEDIRI', 'Laki-Laki', 'ISLAM', 'WNI', 'PURWOKERTO', '002', '003', 'NGADILUWIH', 'GURU');
INSERT INTO profiles (nik, nama, alamat, ttl, provinsi, kabupaten, jenis_kelamin, agama, kewarganegaraan, kelurahan, rt, rw, kecamatan, pekerjaan) VALUES ('1467483571', 'ATMO SWITO', 'MANGGUNG', 'GUNUNG KIDUL, 09-11-1965', 'DAERAH ISTIMEWA YOGYAKARTA', 'GUNUNGKIDUL', 'Laki-Laki', 'ISLAM', 'WNI', 'NGALANG', '001', '004', 'GEDANGSARI', 'MANAGER');
INSERT INTO profiles (nik, nama, alamat, ttl, provinsi, kabupaten, jenis_kelamin, agama, kewarganegaraan, kelurahan, rt, rw, kecamatan, pekerjaan) VALUES ('1477483572', 'BEJO', 'MENGGER', 'BANTUL, 09-01-1975', 'DAERAH ISTIMEWA YOGYAKARTA', 'GUNUNGKIDUL', 'Laki-Laki', 'ISLAM', 'WNI', 'KARANGASEM', '006', '010', 'PALIYAN', 'PETANI');
INSERT INTO profiles (nik, nama, alamat, ttl, provinsi, kabupaten, jenis_kelamin, agama, kewarganegaraan, kelurahan, rt, rw, kecamatan, pekerjaan) VALUES ('2147483647', 'MIRA SETIAWAN', 'JL. PASTI CEPAT', 'JAKARTA, 18-02-1986', ' DKI JAKARTA', 'JAKARTA BARAT', 'Perempuan', 'ISLAM', 'WNI', 'PEGADUNGAN ', '007', '008', 'KALIDERES', 'PEGAWAI SWASTA');

insert into users (email, password, profileId) values (
  'redi_alamsyah666', 'qwerty123', 1
);
insert into users (email, password, profileId) values (
  'selamet666', 'qwerty123', 2
);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `user`
--
-- ALTER TABLE `user`
--   ADD PRIMARY KEY (`NIK`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `user`
--
-- ALTER TABLE `user`
--   MODIFY `NIK` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2147483648;
-- COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
