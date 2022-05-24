-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 24 Bulan Mei 2022 pada 12.47
-- Versi server: 10.4.24-MariaDB
-- Versi PHP: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


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

CREATE TABLE `user` (
  `NIK` int(15) NOT NULL,
  `Nama` varchar(25) NOT NULL,
  `Alamat` varchar(40) NOT NULL,
  `TTL` varchar(40) NOT NULL,
  `Provinsi` varchar(40) NOT NULL,
  `Kabupaten/Kota` varchar(30) NOT NULL,
  `Jenis_kelamin` enum('Laki-laki','Perempuan') NOT NULL,
  `Agama` varchar(10) NOT NULL,
  `Kewarganegaraan` enum('WNI','WNA') NOT NULL,
  `Kelurahan/Desa` varchar(40) NOT NULL,
  `rt/rw` varchar(10) NOT NULL,
  `Kecamatan` varchar(30) NOT NULL,
  `Pekerjaan` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`NIK`, `Nama`, `Alamat`, `TTL`, `Provinsi`, `Kabupaten/Kota`, `Jenis_kelamin`, `Agama`, `Kewarganegaraan`, `Kelurahan/Desa`, `rt/rw`, `Kecamatan`, `Pekerjaan`) VALUES
(1147483648, 'REDI ALAMSYAH', 'KP. SUKAMANAH ', 'SUKABUMI, 22-03-2002', 'JAWA BARAT', 'SUKABUM', 'Laki-laki', 'ISLAM', 'WNI', 'BOJONG GENTENG', '010 / 003', 'JAMPANG KULON ', 'MAHASISWA'),
(1247483876, 'SELAMET HARI ISA ALMA', 'WATAS', 'SURAKARTA, 12-06-1993', 'JAWA TENGAH', 'SURAKARTA', 'Laki-laki', 'BUDHA', 'WNI', 'SUKAMULYO', '027 / 004', 'PUNCOKUSUMO', 'KARYAWAN SWASTA'),
(1347483574, 'FELICITAS JUNON', 'JL. IMAM BONJOL, KAMPUNG', 'DABO SINGKEP, 07-01-1963', 'KEPULAUAN RIAU', 'BINTAN', 'Laki-laki', 'ISLAM', 'WNI', 'TANJUNG UBAN KOTA', '002 / 001', 'BINTAN UTARA', 'PNS'),
(1447483579, 'UMAR SISWORO', 'DSN SUMBEH ASRI', 'SURABAYA, 12-07-1971', 'JAWA TIMUR', 'SURABAYA', 'Laki-laki', 'ISLAM', 'WNI', 'SONOREJO', '002 / 001', 'GROGOI', 'PNS'),
(1457483571, 'SULISTIYONO', 'JL. RAYA DUSUN PURWOKERTO', 'KEDIRI, 26-02-1966', 'JAWA TIMUR', 'KEDIRI', 'Laki-laki', 'ISLAM', 'WNI', 'PURWOKERTO', '002 / 003', 'NGADILUWIH', 'GURU'),
(1467483571, 'ATMO SWITO', 'MANGGUNG', 'GUNUNG KIDUL, 09-11-1965', 'DAERAH ISTIMEWA YOGYAKARTA', 'GUNUNGKIDUL', 'Laki-laki', 'ISLAM', 'WNI', 'NGALANG', '001 / 004', 'GEDANGSARI', 'MANAGER'),
(1477483572, 'BEJO', 'MENGGER', 'BANTUL, 09-01-1975', 'DAERAH ISTIMEWA YOGYAKARTA', 'GUNUNGKIDUL', 'Laki-laki', 'ISLAM', 'WNI', 'KARANGASEM', '006 / 010', 'PALIYAN', 'PETANI'),
(2147483647, 'MIRA SETIAWAN', 'JL. PASTI CEPAT', 'JAKARTA, 18-02-1986', ' DKI JAKARTA', 'JAKARTA BARAT', 'Perempuan', 'ISLAM', 'WNI', 'PEGADUNGAN ', '007 / 008', 'KALIDERES', 'PEGAWAI SWASTA');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`NIK`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `NIK` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2147483648;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
