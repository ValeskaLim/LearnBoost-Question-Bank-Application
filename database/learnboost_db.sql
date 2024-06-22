-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 22, 2024 at 11:42 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `learnboost`
--

-- --------------------------------------------------------

--
-- Table structure for table `answers`
--

CREATE TABLE `answers` (
  `answer_id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  `correct_option_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `answers`
--

INSERT INTO `answers` (`answer_id`, `question_id`, `correct_option_id`) VALUES
(1, 1, 1),
(2, 2, 7),
(3, 3, 11),
(4, 4, 14),
(5, 5, 20),
(6, 6, 21),
(7, 7, 27),
(8, 8, 30),
(9, 9, 33),
(10, 10, 39),
(11, 12, 41),
(12, 13, 45),
(13, 14, 50),
(14, 15, 56),
(15, 16, 60),
(16, 17, 61),
(17, 18, 66),
(18, 19, 70),
(19, 20, 74),
(20, 21, 78),
(21, 22, 81),
(22, 23, 86),
(23, 24, 91),
(24, 25, 96),
(25, 26, 99),
(26, 27, 103),
(27, 28, 105),
(28, 29, 112),
(29, 30, 116),
(30, 31, 117),
(31, 32, 122),
(32, 33, 127),
(33, 34, 130),
(34, 35, 134),
(35, 36, 138),
(36, 37, 142),
(37, 38, 146),
(38, 39, 152),
(39, 40, 155),
(40, 41, 160),
(41, 42, 164),
(42, 43, 168),
(43, 44, 170),
(44, 45, 175),
(45, 46, 177),
(46, 47, 184),
(47, 48, 185),
(48, 49, 191),
(49, 50, 193),
(50, 51, 199),
(51, 52, 201),
(52, 53, 206),
(53, 54, 211),
(54, 55, 214),
(55, 56, 220),
(56, 57, 221),
(57, 58, 228),
(58, 59, 232),
(59, 60, 234),
(60, 61, 238),
(61, 62, 243),
(62, 63, 247),
(63, 64, 251),
(64, 65, 255),
(65, 66, 259),
(66, 67, 261),
(67, 68, 268),
(68, 69, 270),
(69, 70, 276),
(70, 71, 280),
(71, 72, 282),
(72, 73, 286),
(73, 74, 289),
(74, 75, 294),
(75, 76, 297),
(76, 77, 301),
(77, 78, 308),
(78, 79, 311),
(79, 80, 315),
(80, 81, 317),
(81, 82, 321),
(82, 83, 328),
(83, 84, 331),
(84, 85, 336),
(85, 86, 340),
(86, 87, 342),
(87, 88, 347),
(88, 89, 352),
(89, 90, 354),
(90, 91, 359),
(91, 92, 363),
(92, 93, 365),
(93, 94, 372),
(94, 95, 373),
(95, 96, 378);

-- --------------------------------------------------------

--
-- Table structure for table `options`
--

CREATE TABLE `options` (
  `option_id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  `option_text` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `options`
--

INSERT INTO `options` (`option_id`, `question_id`, `option_text`) VALUES
(1, 1, 'Pembelahan biner'),
(2, 1, 'Kojugasi'),
(3, 1, 'Transduksi'),
(4, 1, 'Transformasi'),
(5, 2, 'Pyrococcusa'),
(6, 2, 'Thermoplasma'),
(7, 2, 'Haloferax'),
(8, 2, 'Solfolobus'),
(9, 3, 'Bekicot, ubur-ubur, dan cumi-cumi'),
(10, 3, 'Udang, mentimun laut, dan cumi-cumi'),
(11, 3, 'Nautilus, sotong, dan cumi-cumi'),
(12, 3, 'Cacing wawo, kerang, dan sotong'),
(13, 4, 'Pengeluaran'),
(14, 4, 'Pernapasan'),
(15, 4, 'Berkembang biak'),
(16, 4, 'Pertahanan tubuh'),
(17, 5, 'Tubuhnya bersegmen'),
(18, 5, 'Tubuhnya lunak dan dilindungi cangkang'),
(19, 5, 'Mempunyai rangka luar'),
(20, 5, 'Alat napasnya dengan badan Malpighi'),
(21, 6, 'Mengubah gula menjadi alkohol'),
(22, 6, 'Memecah protein'),
(23, 6, 'Menguraikan sampah'),
(24, 6, 'Menghasilkan antibiotik'),
(25, 7, 'Ascomycota'),
(26, 7, 'Basidiomycota'),
(27, 7, 'Deuteromycota'),
(28, 7, 'Myxomycota'),
(29, 8, 'Neurospora sitophila'),
(30, 8, 'Lactobacillus casel'),
(31, 8, 'Lactobacillus bulgaricus'),
(32, 8, 'Saccaromyces cereviceae'),
(33, 9, 'Dapat hidup dari zat anorganik'),
(34, 9, 'Dapat hidup tanpa oksigen'),
(35, 9, 'Dapat hidup tanpa cahaya'),
(36, 9, 'Dapat hidup dari zat organik'),
(37, 10, 'Pektin'),
(38, 10, 'Kitin'),
(39, 10, 'Selulosa'),
(40, 10, 'Lignin'),
(41, 12, 'Memiliki alat gerak'),
(42, 12, 'Berklorofil'),
(43, 12, 'Prokariot'),
(44, 12, 'Multiseluler'),
(45, 13, 'Amoeba'),
(46, 13, 'Bulu cambuk'),
(47, 13, 'Cephalothorax'),
(48, 13, 'Moluska'),
(49, 14, 'Amoeba'),
(50, 14, 'Foraminifera'),
(51, 14, 'Plamodium vivax'),
(52, 14, 'Radiozoa'),
(53, 15, 'Euglena'),
(54, 15, 'Trypanosoma'),
(55, 15, 'Paramaecium'),
(56, 15, 'Plasmodium'),
(57, 16, 'Fase generatif Acrasiomycota '),
(58, 16, 'Fase generatif Myxomycota'),
(59, 16, 'Fase generatif Oomycota '),
(60, 16, 'Fase vegetatif Myxomycota'),
(61, 17, 'Dapat dikristalkan'),
(62, 17, 'Dapat melakukan pembuahan'),
(63, 17, 'Dapat bergerak'),
(64, 17, 'Dapat berkembang biak'),
(65, 18, '10 milimikron '),
(66, 18, '20 – 300 milimikron'),
(67, 18, '1 – 3 milimikron '),
(68, 18, '200 – 3000 milimikron'),
(69, 19, 'Virion'),
(70, 19, 'Kapsid'),
(71, 19, 'Hospes'),
(72, 19, 'Selulosa'),
(73, 20, 'Mikrobakteri'),
(74, 20, 'Bakteriofag'),
(75, 20, 'Profag'),
(76, 20, 'Mikropofag'),
(77, 21, 'Adsorbsi'),
(78, 21, 'Injeksi'),
(79, 21, 'Sintesis'),
(80, 21, 'Absorpsi'),
(81, 22, 'pohon kelapa – aren'),
(82, 22, 'Kucing anggora – kucing persia'),
(83, 22, 'Harimau sumatera – harimau jawa'),
(84, 22, 'Ayam kampung – ayam negeri'),
(85, 23, 'Mawar merah-mawar putih '),
(86, 23, 'Mawar berbatang tinggi-melati berbatang tinggi '),
(87, 23, 'Pohon kelapa hijau – pohon kelapa kuning'),
(88, 23, 'Padi IR 94 – padi rojo lele '),
(89, 24, 'Habitat hidup yang berbeda '),
(90, 24, 'Persaingan antar individu'),
(91, 24, 'Penyesuaian diri oleh makhluk hidup'),
(92, 24, 'Perbedaan tingkah laku antar individu'),
(93, 25, 'Makan-dimakan '),
(94, 25, 'Rantai makanan'),
(95, 25, 'Jaringan kehidupan'),
(96, 25, 'Pengambilan energy'),
(97, 26, 'Variasi'),
(98, 26, 'Mutasi'),
(99, 26, 'Domestikasi'),
(100, 26, 'Modifikasi'),
(101, 27, 'Positron'),
(102, 27, 'Neutron'),
(103, 27, 'Proton, Elektron, Neutron'),
(104, 27, 'Elektron'),
(105, 28, 'tidak dapat menentukan posisi elektron dengan pasti '),
(106, 28, 'bertentangan dengan hukum-hukum fisika klasik dar Maxwell'),
(107, 28, 'tidak dapat menjelaskan spektrum unsur hidrogen'),
(108, 28, ' tidak dapat menentukan perubahan energi pada perpindahan elektron dalam atom'),
(109, 29, '18 neutron dan 18 proton'),
(110, 29, '22 neutron dan 22 proton'),
(111, 29, '40 proton dan 18 elektron'),
(112, 29, '18 proton dan 22 neutron'),
(113, 30, '(26, 56) : (88, 138)'),
(114, 30, '(26, 26) : (88, 88)'),
(115, 30, '(26, 30) : (88, 266)'),
(116, 30, ' (26, 30) : (88, 138) '),
(117, 31, 'Dalton'),
(118, 31, 'Thomson'),
(119, 31, 'Max Planck'),
(120, 31, 'Rutherford'),
(121, 32, '12 proton, 12 elektron, 12 neutron '),
(122, 32, '12 proton, 10 elektron, 12 neutron'),
(123, 32, ' 12 proton, 14 elektron, 12 neutron'),
(124, 32, '10 proton, 12 elektron, 12 neutron'),
(125, 33, '(Ar) 4s² 3d4'),
(126, 33, '(Ar)  3d4 4p6'),
(127, 33, '(Ar) 4s1 3d5'),
(128, 33, '(Ar) 3d6'),
(129, 34, 'elektron valensi  = 9 '),
(130, 34, 'elektron valensi = 1 '),
(131, 34, ' elektron valensi = 7'),
(132, 34, ' elektron valensi = 2 '),
(133, 35, ' n = 2, l = 0, m=0, s= -1/2 '),
(134, 35, 'n = 3, l = 1, m=-1, s= -1/2'),
(135, 35, ' n = 3, l = 1, m=0, s= -1/2'),
(136, 35, 'n = 3, l = 1, m=0, s= +1/2'),
(137, 36, '1s2 2s2 2p6 3s2'),
(138, 36, '1s2 2s2 2p6 3s2 3p6'),
(139, 36, '1s2 2s2 2p6 3s2 3p6 4s2 '),
(140, 36, '1s2 2s2 2p6 3s2 3p6 4s2 4p6'),
(141, 37, 'jarak benda tidak berubah terhadap benda lain'),
(142, 37, 'kedudukan benda berubah terhadap benda lain'),
(143, 37, ' jarak benda kadang berubah, kadang tetap terhadap benda lain'),
(144, 37, 'kedudukan benda tetap terhadap benda lain'),
(145, 38, 'mobil berjalan pada jalan pada jalan tol'),
(146, 38, 'benda jatuh'),
(147, 38, 'orang berjalan '),
(148, 38, 'kapal berlayar '),
(149, 39, 'resultan gaya yang bekerja pada benda sama dengan nol '),
(150, 39, 'resultan gaya yang bekerja pada benda tidak sama dengan nol'),
(151, 39, 'percepatan benda tidak sama dengan nol '),
(152, 39, 'percepatan benda sama dengan nol'),
(153, 40, '20 km'),
(154, 40, '40 km'),
(155, 40, '80 km'),
(156, 40, '140 km'),
(157, 41, '90 sekon'),
(158, 41, '120 sekon'),
(159, 41, '180 sekon'),
(160, 41, '250 sekon'),
(161, 42, 'gerak parabola merupakan gabungan antara gerak melingkar dan gerak lurus'),
(162, 42, 'percepatan arah vertikal pada gerak parabola berubah-ubah terhadap waktu'),
(163, 42, 'kecepatan arah horisontal pada gerak parabola sebanding dengan waktu'),
(164, 42, 'percepatan pada gerak parabola hanya percepatan gravitasi'),
(165, 43, 'Jarak benda secara vertikal'),
(166, 43, 'kecepatan pada sumbu y'),
(167, 43, 'percepatan pada sumbu x'),
(168, 43, 'percepatan pada sumbu y'),
(169, 44, 'kecepatan pada sumbu x'),
(170, 44, 'kecepatan pada sumbu y'),
(171, 44, 'percepatan pada sumbu x'),
(172, 44, 'percepatan pada sumbu y'),
(173, 45, 'percepatan benda sama dengan percepatan gravitasi'),
(174, 45, 'kecepatan benda hanya pada kecepatan sumbu x'),
(175, 45, 'kecepatan benda sama dengan nol'),
(176, 45, 'waktu untuk mencapai titik tertinggi adalah setengah dari waktu maksimum'),
(177, 46, 'nol'),
(178, 46, '10 m/s2'),
(179, 46, 'sebagian dengan waktu tempuh'),
(180, 46, 'sebanding dengan ketinggian benda'),
(181, 47, 'Berbanding lurus dengan jarak kedua benda'),
(182, 47, 'Berbanding terbalik dengan jarak kedua benda'),
(183, 47, 'Berbanding lurus dengan kuadrat jarak kedua benda'),
(184, 47, 'Berbanding terbalik dengan kuadrat jarak kedua benda'),
(185, 48, 'Pengaruhnya sangat kecil'),
(186, 48, 'Partikel-partikel elementer tidak ada gaya gravitasinya'),
(187, 48, 'Pengaruhnya sangat besar'),
(188, 48, 'Terlalu sulit perhitungannya'),
(189, 49, 'Benda-benda bergerak relatif'),
(190, 49, 'Benda-benda yang ditinjau memiliki massa yang kecil'),
(191, 49, 'Benda-benda yang ditinjau memiliki massa yang besar'),
(192, 49, 'Benda-benda yang ditinjau diam'),
(193, 50, '3,0 meter'),
(194, 50, '3,5 meter'),
(195, 50, '4,0 meter'),
(196, 50, '4,5 meter'),
(197, 51, '8 kg'),
(198, 51, '6 kg'),
(199, 51, '3 kg'),
(200, 51, '2 kg'),
(201, 52, '302 kg.m/s'),
(202, 52, '152 kg.m/s'),
(203, 52, '202 kg.m/s'),
(204, 52, '102 kg.m/s'),
(205, 53, '7 m/s'),
(206, 53, '– 7 m/s'),
(207, 53, '14 m/s'),
(208, 53, '– 14 m/s'),
(209, 54, '20 m/s'),
(210, 54, '30 m/s'),
(211, 54, '40 m/s'),
(212, 54, '50 m/s'),
(213, 55, '140 N'),
(214, 55, '280 N'),
(215, 55, '70 N'),
(216, 55, '210 N'),
(217, 56, '100 N'),
(218, 56, '200 N'),
(219, 56, '400 N'),
(220, 56, '800 N'),
(221, 57, 'Gaya pemulih'),
(222, 57, 'Gaya bandul'),
(223, 57, 'Gaya normal'),
(224, 57, 'Gaya pegas'),
(225, 58, '(1/4)x'),
(226, 58, '(1/2)x'),
(227, 58, 'x'),
(228, 58, '2x'),
(229, 59, '0,02 cm'),
(230, 59, '0,2 cm'),
(231, 59, '2 cm'),
(232, 59, '200 cm'),
(233, 60, '2 Hz'),
(234, 60, '5 Hz'),
(235, 60, '8 Hz'),
(236, 60, '10 Hz'),
(237, 61, '0,1 s'),
(238, 61, '0,2 s'),
(239, 61, '0,5 s'),
(240, 61, '0,8 s'),
(241, 62, '1:4'),
(242, 62, '2:4'),
(243, 62, '6:7'),
(244, 62, '1:5'),
(245, 63, 'x = 1'),
(246, 63, 'x = -1'),
(247, 63, 'x = 2'),
(248, 63, 'x = -2'),
(249, 64, '50'),
(250, 64, '60'),
(251, 64, '40'),
(252, 64, '55'),
(253, 65, '3/(3)'),
(254, 65, '3/(23)'),
(255, 65, '3/(2-3)'),
(256, 65, '3/2(3)'),
(257, 66, ' 3 – (-5)'),
(258, 66, '3 – 5(-3)'),
(259, 66, '3 – 5'),
(260, 66, ' – 3 – 5'),
(261, 67, 'y – 2x = 13'),
(262, 67, 'y + 2x = 13'),
(263, 67, 'y – 2x = –13'),
(264, 67, 'y + 2x = –13'),
(265, 68, '3y + x = 14'),
(266, 68, '3y + x = –14'),
(267, 68, '3y – x = 14'),
(268, 68, '3y – x = –14'),
(269, 69, '2x + 3y = 1'),
(270, 69, '2x + 3y = –1'),
(271, 69, '2x – 3y = –1'),
(272, 69, '2x – 3y = 1'),
(273, 70, '-2'),
(274, 70, '-0.5'),
(275, 70, '0.5'),
(276, 70, '2'),
(277, 71, '-5'),
(278, 71, '-0.5'),
(279, 71, '0.5'),
(280, 71, '5'),
(281, 72, 'has send'),
(282, 72, 'has sent'),
(283, 72, 'have sent'),
(284, 72, 'have send'),
(285, 73, 'since'),
(286, 73, 'for'),
(287, 73, 'after'),
(288, 73, 'before'),
(289, 74, 'has'),
(290, 74, 'is'),
(291, 74, 'have'),
(292, 74, 'had'),
(293, 75, 'has walked'),
(294, 75, 'have walked'),
(295, 75, 'has walking'),
(296, 75, 'are walking'),
(297, 76, 'have'),
(298, 76, 'has'),
(299, 76, 'is'),
(300, 76, 'were'),
(301, 77, 'Will'),
(302, 77, 'Wills'),
(303, 77, 'Is'),
(304, 77, 'Are'),
(305, 78, 'Sleep'),
(306, 78, 'Healthy'),
(307, 78, 'Health'),
(308, 78, 'Sick'),
(309, 79, 'Finish'),
(310, 79, 'Finishes'),
(311, 79, 'Finishing'),
(312, 79, 'not finishing'),
(313, 80, 'Comes'),
(314, 80, 'Coming'),
(315, 80, 'Come'),
(316, 80, 'Came'),
(317, 81, 'Do'),
(318, 81, 'Did'),
(319, 81, 'Does'),
(320, 81, 'Doing'),
(321, 82, 'Doing'),
(322, 82, 'Done'),
(323, 82, 'Does'),
(324, 82, 'Do'),
(325, 83, 'Sleep'),
(326, 83, 'Slept'),
(327, 83, 'Am sleeping'),
(328, 83, 'Was sleeping'),
(329, 84, 'Is'),
(330, 84, 'Are'),
(331, 84, 'Was'),
(332, 84, 'Were'),
(333, 85, 'Are Kintan and I drawing a view of Bromo mountain two days ago?'),
(334, 85, 'Do Kintan and I draw a view of Bromo mountain two days ago?'),
(335, 85, 'Did Kintan and I draw a view of Bromo mountain two days ago?'),
(336, 85, 'Were Kintan and I drawing a view of Bromo mountain two days ago?'),
(337, 86, 'Lalita didn\'t care about Qinna\'s activities.'),
(338, 86, 'Lalita was watching a cartoon when somebody came.'),
(339, 86, 'Qinna was not doing anything when somebody came.'),
(340, 86, 'Qinna was watching a cartoon when somebody came.'),
(341, 87, 'Study'),
(342, 87, 'Studied'),
(343, 87, 'Will study'),
(344, 87, 'Studying'),
(345, 88, 'Will'),
(346, 88, 'Has'),
(347, 88, 'Had'),
(348, 88, 'Was'),
(349, 89, 'Have'),
(350, 89, 'Has'),
(351, 89, 'Will have'),
(352, 89, 'Had'),
(353, 90, 'See'),
(354, 90, 'Saw'),
(355, 90, 'Seen'),
(356, 90, 'Will see'),
(357, 91, 'Has'),
(358, 91, 'Have'),
(359, 91, 'Had'),
(360, 91, 'Will have'),
(361, 92, 'Am - doing'),
(362, 92, 'Were - doing'),
(363, 92, 'Are - doing'),
(364, 92, 'Is - doing'),
(365, 93, 'Is'),
(366, 93, 'Are'),
(367, 93, 'Am'),
(368, 93, 'Were'),
(369, 94, 'Are not snowing'),
(370, 94, 'Am not snowing'),
(371, 94, 'Was not snowing'),
(372, 94, 'Is not snowing'),
(373, 95, 'At the moment'),
(374, 95, 'Yesterday'),
(375, 95, 'Tomorrow'),
(376, 95, 'Next week'),
(377, 96, 'Was you'),
(378, 96, 'Are you'),
(379, 96, 'Does you'),
(380, 96, 'Is you');

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `question_id` int(11) NOT NULL,
  `subject_id` int(11) NOT NULL,
  `question_text` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`question_id`, `subject_id`, `question_text`) VALUES
(1, 1, 'Reproduksi aseksual bakteri dilakukan secara ...'),
(2, 1, 'Anggota Archaebacteria yang hidup di lingkungan berkadar garam tinggi adalah...'),
(3, 5, 'Moluska berikut yang termasuk dalam Chepalopoda adalah....'),
(4, 5, 'Fungsi sistem ambulakral pada Echinodermata adalah sebagai alat ...'),
(5, 5, 'Berikut ini sifat Arthropoda, kecuali ....'),
(6, 5, 'Saccharomyces cerevisiae memiliki kemampuan untuk ...'),
(7, 5, 'Beberapa jamur belum diketahui cara reproduksinya secara generatif sehingga dimasukkan dalam kelompok ....'),
(8, 1, 'Bakteri yang digunakan dalam pembuatan keju adalah...'),
(9, 1, 'Bakteri Nitrat adalah bakteri autotrof karena...'),
(10, 1, 'Apa kandungan dari dinding sel bakteri...'),
(12, 2, 'Pada saat praktikum seorang siswa mengamati spesies air yang di ambil dari dasar kolam. Dari hasil pengamatan siswa menyimpulkan bahwa mikroorganisme yang diamati berasal dari kelompok protista mirip hewan karena...'),
(13, 2, 'Contoh Protista adalah...'),
(14, 2, 'Kelompok protozoa yang digunakan sebagai indikator/penunjuk sumber minyak bumi dan penentu umur relatif batuan sedimen laut adalah...'),
(15, 2, 'Di bawah ini yang tergolong ke dalam jenis kelompok sporozoa ialah...'),
(16, 2, 'Daur hidup protista mirip jamur yang bergerak amuboid untuk mengelilingi dan menelan bahan makanan, ditemukan pada...'),
(17, 3, 'Virus tidak dapat termasuk kedalam kelompok makhluk hidup karena..'),
(18, 3, 'Ukuran virus sangat kecil, yaitu berkisar...'),
(19, 3, 'Virus tersusun dari selubung protein yang disebut... '),
(20, 3, 'Virus yang menginfeksi bakteri disebut...'),
(21, 3, 'Materi genetik virus masuk kedalam inang terjadi pada saat...'),
(22, 4, 'Berikut di bawah ini yang bukan merupakan contoh keanekaragaman hayati tingkat gen yaitu…'),
(23, 4, 'Keanekaragaman hayati tingkat spesies dapat ditunjukkan pada tumbuhan berikut…'),
(24, 4, 'Faktor penyebab munculnya keanekaragaman makhluk hidup salah satunya adalah …'),
(25, 4, 'Keanekaragaman hayati yang membentuk sebuah ekosistem melahirkan suatu interaksi \r\nsebagaimana berikut, kecuali …'),
(26, 4, 'Terjadinya perubahan ukuran bentuk fisik makhluk hidup salah satunya diakibatkan oleh \r\nadanya faktor lingkungan. Akan tetapi, perubahan tersebut tidak diikuti oleh keturunan pada \r\ngenerasi selanjutnya. '),
(27, 16, 'Apakah struktur pembentuk atom?'),
(28, 16, 'Kelemahan teori atom Niels Bohr adalah . . .'),
(29, 16, 'Lambang suatu unsur 18X40 dapat disimpulkan bahwa pada satu atom unsur X mempunyai '),
(30, 16, 'Pada isotop unsur 26Fe56 dan 88Ra226, jumlah proton dan netron kedua unsur secara \r\nberturut-turut adalah...'),
(31, 16, 'Reaksi kimia merupakan pemisahan, penggabungan, atau penyusunan kembali atom-atom, sehingga atom tidak bisa dibuat atau dimusnahkan. Teori ini dikemukakan oleh.....'),
(32, 17, 'Atom magnesium atau (Mg) memiliki nomor atom 12 dan nomor massa 24. Dalam \r\nMg²⁺  terdapat ……'),
(33, 17, 'Konfigurasi elektron dari unsur yang memiliki nomor atom 24 adalah..'),
(34, 17, 'Jika atom yang nomor atomnya 19 dituliskan konfigurasi elektronnya maka atom itu \r\nmemiliki ciri-ciri…'),
(35, 17, 'Harga keempat bilangan kuantum elektron terakhir dari ₁6S adalah..'),
(36, 17, 'Konfigurasi elektron yang manakah dibawah ini yang menunjukkan konfigurasi \r\nelektron gas mulia?'),
(37, 6, 'Suatu benda dikatakan bergerak apabila ....'),
(38, 6, 'Yang termasuk gerak lurus berubah beraturan adalah ....'),
(39, 6, 'Saat sebuah benda bergerak dengan kecepatan tetap, maka . . . .'),
(40, 6, 'Sebuah mobil bergerak dengan kelajuan rata-rata 80 km/jam selama 60 menit. Jarak yang \r\nditempuh mobil tersebut adalah ....'),
(41, 6, 'Budi berlari dengan kelajuan 6 m/s. Berapa selang waktu yang dibutuhkan Budi untuk \r\nberlari sejauh 1,5 km ?'),
(42, 7, 'Berikut ini pernyataan yang benar terkait gerak parabola adalah . . .'),
(43, 7, 'Besaran yang selalu konstan dalam gerak parabola adalah . . .'),
(44, 7, 'Besaran yang mungkin bernilai nol selama bergerak dalam gerak parabola adalah  . . . '),
(45, 7, 'Berikut ini pernyataan yang salah terkait benda yang berada pada titik tertinggi gerak parabola adalah . . '),
(46, 7, 'Percepatan benda pada gerak parabola di sumbu x adalah . . .'),
(47, 8, 'Besar gaya gravitasi antara dua massa yang berjarak tertentu satu sama lain adalah . . '),
(48, 8, 'Kita dapat mengabaikan gaya gravitasi dalam tinjauan partikel elementer. Hal ini karena \r\n. . . '),
(49, 8, 'Kita dapat mengamati gaya gravitasi saat . . .'),
(50, 8, 'Gaya gravitasi antara dua benda adalah 2,001e-10 N.  Jika massa benda adalah 3 kg dan 9 kg, jarak antara kedua benda tersebut adalah . . . '),
(51, 8, 'Benda A bermassa 5 kg terpisah pada jarak 2 m dari benda B. Jika besar gaya gravitasi \r\nantara kedua benda adalah 2,5e-10 N, maka massa benda B adalah . . . '),
(52, 9, 'Sebuah bola dengan massa 2 kg terjatuh setinggi 10 meter dari permukaan tanah. \r\nLalu, bola tersebut memantul dan berhasil mencapai ketinggian 2,5 meter. Jika g = 10 \r\nm/s2, tentukanlah berapa impuls yang bekerja pada bola tersebut!'),
(53, 9, '2 buah bola voli dengan massa sama bergerak saling mendekat. Bila v1 = 8 m/s dan \r\nv2 = 10 m/s, v2 merupakan kecepatan benda setelah tumbukan ke kanan berlaju 5 \r\nm/s, tentukanlah besar kecepatan v1 setelah tumbukan terjadi!'),
(54, 9, 'Sebuah bola dengan massa M = 1,90 kg menggantung pada seutas tali dan posisinya \r\ndiam. Lalu, sebuah peluru dengan massa m = 0,10 kg menembak dan bersarang ke dalam bola tersebut. Posisi bola pun mengalami kenaikan h = 20 cm dengan percepatan gravitasi bumi g = 10 m/s2. Maka besar laju pada peluru adalah…'),
(55, 9, 'Bola kasti dalam keadaan diam dan bermassa 0,2 kg dipukul sehingga menjadi \r\nbergerak dengan kecepatan 14 m/s. Hitunglah gaya Ferdi yang diberikan pada bola \r\nkasti tersebut bila gaya diberikan selama 0,01 sekon!'),
(56, 9, 'Bola sepak bermassa 200 gram ditendang oleh Freddy dengan kecepatan 4 m/s. Kemudian bola tersebut ditendang lagi oleh Freddy dengan arah sama seperti semula. Lama bola bersentuhan dengan kaki Andrian adalah selama 2 milisekon dan kecepatannya berubah menjadi 12 m/s. Hitunglah berapa besar gaya yang diberikan oleh Freddy pada bola tersebut!'),
(57, 10, 'Gaya yang berlawanan dengan arah gerak dan menuju ke titik setimbang disebut . . .'),
(58, 10, 'Pegas saat diberi beban m, pegas mengalami perpanjangan sebesar x. Jika beban yang \r\ndigantungkan sebesar 2m, maka perpanjangan sebesar . . '),
(59, 10, 'Benda mengalami gerak harmonis sesuai dengan persamaan x = 2 sin 10πt dengan x dalam \r\ncm dan t dalam s. \r\nAmplitudo gerak benda adalah . . .'),
(60, 10, 'Benda mengalami gerak harmonis sesuai dengan persamaan x = 2 sin 10πt dengan x dalam \r\ncm dan t dalam s. \r\nFrekuensi gerak benda tersebut adalah . . . '),
(61, 10, 'Benda mengalami gerak harmonis sesuai dengan persamaan x = 2 sin 10πt dengan x dalam \r\ncm dan t dalam s. \r\nPeriode getaran benda sebesar . . .'),
(62, 21, 'Sepuluh tahun lalu perbandingan antara umur Oliv dan Via adalah 2:3. Namun, \r\nsekarang perbandingan umur mereka adalah 4:5. Dari keterangan tersebut, berapakah \r\nperbandingan umur mereka di 10 tahun mendatang?'),
(63, 21, 'Diketahui sebuah persamaan linear 2 + 5(x-2) = 4 – 2(x-1). Tentukan himpunan \r\npenyelesaiannya!'),
(64, 21, 'Umur Paman adalah empat kali umur Isya. Umur Paman empat tahun yang lalu sama dengan \r\nlima kali umur Isya ditambah dengan delapan tahun. Berapakah jumlah umur Isya dan Paman \r\nsekarang?'),
(65, 21, 'Tentukanlah nilai mutlak dari |3/(2-3)| !'),
(66, 21, 'Tentukanlah nilai mutlak dari |5-3| !'),
(67, 22, 'Persamaan garis yang melalui titik (–5,3) dan memiliki gradien 2 adalah... .'),
(68, 22, 'Garis yang melalui titik (5, –3) dan sejajar dengan garis yang mempunyai gradien 1/3 adalah... .'),
(69, 22, 'Persamaan garis yang melalui titik (4, –3) dan tegak lurus dengan garis 4y – 6x +10 = 0 adalah ....'),
(70, 22, 'Gradien garis dengan persamaan 6x – 3y – 8 = 0 adalah... .'),
(71, 22, 'Garis yang melalui titik A(-2, 3) dan B(2, p) memiliki kemiringan 1/2. Tentukan nilai p'),
(72, 11, 'Rendy ... some application letters to the company but they never call him.'),
(73, 11, 'Rolly\'s been a vegetarian ... five years'),
(74, 11, 'Tika ... not been to France.'),
(75, 11, 'My brother and Dika ... round the park many times but they\'ve never seen the lamp'),
(76, 11, '... you finished your homework?'),
(77, 13, 'Ara and Dani ... come to my house tomorrow'),
(78, 13, 'I will be ... if I don\'t eat'),
(79, 13, 'She will be ... all of this tasks tomorrow'),
(80, 13, 'My mother will ... tomorrow night'),
(81, 13, 'They will ... this project together'),
(82, 12, 'Olla: What were you doing when I rang you up? \r\nQolli: I was ... my home works.'),
(83, 12, 'Dicky: I called you last night but there was no answer. Where were you? \r\nVira: Sorry. I ... when you called me last night.'),
(84, 12, 'Oni Shahrial ... dubbing Shinchan voice at this time last year.'),
(85, 12, 'Kintan and I were drawing a view of Bromo mountain two days ago. \r\nThe interrogative construction of past continuous tense above is?'),
(86, 12, 'Lalita: Were you watching \'Strawberry Shortcake\' cartoon when I came? \r\nQinna: Yes I was. \r\nThe underlined sentence means that ...'),
(87, 14, 'You had ... hard before National Examination'),
(88, 14, '.. they finished it?'),
(89, 14, 'He ... done his job'),
(90, 14, 'When I ... him, I realized that he had had a new bag'),
(91, 14, '... she ever visited Japan before?'),
(92, 15, 'What ... you ...?'),
(93, 15, 'Why ... your sister crying so loud? Please give her candies or something.'),
(94, 15, 'Diana: Look! It\'s snowing. \r\nAnggi: So beautiful. This is the first time I have ever seen snow. It ... (snow, not) in my country. ...'),
(95, 15, 'Ratih is helping her mum with the housework. She is dusting the furniture …'),
(96, 15, '.. listening to me now?');

-- --------------------------------------------------------

--
-- Table structure for table `subjects`
--

CREATE TABLE `subjects` (
  `subject_id` int(11) NOT NULL,
  `subject_name` varchar(50) NOT NULL,
  `subchapter_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `subjects`
--

INSERT INTO `subjects` (`subject_id`, `subject_name`, `subchapter_name`) VALUES
(1, 'Biology', 'Bacteria dan Archaebacteria'),
(2, 'Biology', 'Protista'),
(3, 'Biology', 'Virus'),
(4, 'Biology', 'Keanekaragaman Hayati'),
(5, 'Biology', 'Klasifikasi Makhluk Hidup'),
(6, 'Fisika', 'Gerak Lurus'),
(7, 'Fisika', 'Parabola'),
(8, 'Fisika', 'Hukum Newton tentang Gravitas'),
(9, 'Fisika', 'Momentum'),
(10, 'Fisika', 'Getaran Harmonis'),
(11, 'English', 'Present Perfect Tense'),
(12, 'English', 'Past Continous Tense'),
(13, 'English', 'Simple Future Tense'),
(14, 'English', 'Past Perfect Tense'),
(15, 'English', 'Present Continous Tense'),
(16, 'Chemistry', 'Teori Atom'),
(17, 'Chemistry', 'Strutur Atom dan Bilangan Kuantum'),
(18, 'Chemistry', 'Tata Nama Senyawa dan Persaman Reaksi'),
(19, 'Chemistry', 'Hukum Dasar Kimia'),
(20, 'Chemistry', 'Ikatan Kimia'),
(21, 'Math', 'Persaman dan Pertidaksamaan Linear'),
(22, 'Math', 'Persaman Garis Lurus'),
(23, 'Math', 'Persamaan Kuadrat'),
(24, 'Math', 'Polynomial'),
(25, 'Math', 'Trigonometri');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `grade` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `email`, `grade`) VALUES
(1, 'admin', 'admin', 'adminlearnboost@gmail.com', 10),
(2, 'ogi', '55432', 'ogi@gmail.com', 2),
(3, 'Stanley', 'stanley', 'stanley@gmail.com', 11),
(4, 'Admin1', 'Admin1', 'Admin1@gmail.com', 12),
(8, 'Raphael Yedija', 'yedija', 'yedija@gmail.com', 12),
(9, 'AdminDummy', 'AdminDummy', 'AdminDummy@gmail.com', 10);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `answers`
--
ALTER TABLE `answers`
  ADD PRIMARY KEY (`answer_id`),
  ADD KEY `FK3` (`question_id`),
  ADD KEY `FK4` (`correct_option_id`);

--
-- Indexes for table `options`
--
ALTER TABLE `options`
  ADD PRIMARY KEY (`option_id`),
  ADD KEY `FK2` (`question_id`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`question_id`),
  ADD KEY `FK1` (`subject_id`);

--
-- Indexes for table `subjects`
--
ALTER TABLE `subjects`
  ADD PRIMARY KEY (`subject_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `answers`
--
ALTER TABLE `answers`
  MODIFY `answer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=96;

--
-- AUTO_INCREMENT for table `options`
--
ALTER TABLE `options`
  MODIFY `option_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=381;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `question_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=97;

--
-- AUTO_INCREMENT for table `subjects`
--
ALTER TABLE `subjects`
  MODIFY `subject_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `answers`
--
ALTER TABLE `answers`
  ADD CONSTRAINT `FK3` FOREIGN KEY (`question_id`) REFERENCES `questions` (`question_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK4` FOREIGN KEY (`correct_option_id`) REFERENCES `options` (`option_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `options`
--
ALTER TABLE `options`
  ADD CONSTRAINT `FK2` FOREIGN KEY (`question_id`) REFERENCES `questions` (`question_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `questions`
--
ALTER TABLE `questions`
  ADD CONSTRAINT `FK1` FOREIGN KEY (`subject_id`) REFERENCES `subjects` (`subject_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
