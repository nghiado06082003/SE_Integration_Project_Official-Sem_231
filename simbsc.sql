-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 15, 2023 lúc 01:53 AM
-- Phiên bản máy phục vụ: 10.4.27-MariaDB
-- Phiên bản PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `simbsc`
--
CREATE DATABASE IF NOT EXISTS `simbsc` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `simbsc`;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `borrow`
--

CREATE TABLE `borrow` (
  `student_id` int(11) NOT NULL,
  `document_id` int(11) NOT NULL,
  `borrow_date` date NOT NULL DEFAULT current_timestamp(),
  `return_date` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `documents`
--

CREATE TABLE `documents` (
  `document_id` int(11) NOT NULL,
  `doc_name` varchar(4096) NOT NULL,
  `type` varchar(255) NOT NULL,
  `author` varchar(4096) NOT NULL,
  `publisher` varchar(4096) NOT NULL,
  `publish_year` int(11) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `documents`
--

INSERT INTO `documents` (`document_id`, `doc_name`, `type`, `author`, `publisher`, `publish_year`, `quantity`) VALUES
(1, 'Kiến trúc máy tính', 'Sách cơ sở ngành', 'Phạm Quốc Cường', 'NXB Đại học Quốc gia TPHCM', 2019, 1),
(3, 'Cấu trúc dữ liệu và giải thuật', 'Sách cơ sở ngành', 'Nguyễn Trung Trực', 'NXB Đại học Quốc gia TPHCM', 2019, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `members`
--

CREATE TABLE `members` (
  `student_id` int(11) NOT NULL,
  `student_name` varchar(255) NOT NULL,
  `email` varchar(127) NOT NULL,
  `password` varchar(127) NOT NULL,
  `state` varchar(127) NOT NULL,
  `join_date` date NOT NULL DEFAULT current_timestamp(),
  `permission` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `members`
--

INSERT INTO `members` (`student_id`, `student_name`, `email`, `password`, `state`, `join_date`, `permission`) VALUES
(0, 'Trần Văn A', 'tranvanA@hcmut.edu.vn', 'tranvana', '', '2023-11-09', ''),
(1, 'a', 'abc', '###v', 'ok', '0000-00-00', 'A'),
(2, 'a', 'abc', '###v', 'ok', '2023-12-11', 'A'),
(2000000, 'Admin 1', 'abc@def.com', '$2b$10$UpVm2Pt389EY0anjTZAwIulqMNBSo3Wmqk8inN47l9ABQyk5XfWKK', 'Đang hoạt động', '2023-11-14', 'Thành viên ban chủ nhiệm'),
(2000001, 'Admin 2', 'abd@def.com', '$2b$10$ExtohTHcom1BvBpujafeQet/o8rMJNppbF4xQ8J8MbLE9eE3oilJO', 'Đang hoạt động', '2023-11-14', 'Thành viên ban chủ nhiệm'),
(2000002, 'Collab 1', 'abe@def.com', '$2b$10$E30b5YunGc0lJ1G7D/PrZenQXV.oeiHuNaCH2T/QLB6eX3J2DCLFe', 'Đang hoạt động', '2023-11-15', 'Cộng tác viên');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `requestborrow`
--

CREATE TABLE `requestborrow` (
  `student_id` int(11) NOT NULL,
  `document_id` int(11) NOT NULL,
  `request_day` date NOT NULL,
  `state` int(11) NOT NULL DEFAULT 0,
  `update_date` date DEFAULT NULL,
  `id` int(11) NOT NULL,
  `received_day` date DEFAULT NULL,
  `returned_day` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `requestborrow`
--

INSERT INTO `requestborrow` (`student_id`, `document_id`, `request_day`, `state`, `update_date`, `id`, `received_day`, `returned_day`) VALUES
(1, 1, '2023-11-15', 0, '2023-11-20', 1, NULL, NULL),
(5, 3, '0000-00-00', 0, NULL, 2, NULL, NULL),
(5, 1, '2023-12-23', 0, NULL, 3, NULL, NULL),
(5, 2, '2023-11-08', 0, NULL, 4, NULL, NULL),
(5, 2, '2023-11-09', 0, NULL, 5, NULL, NULL);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `borrow`
--
ALTER TABLE `borrow`
  ADD KEY `student_id` (`student_id`),
  ADD KEY `document_id` (`document_id`);

--
-- Chỉ mục cho bảng `documents`
--
ALTER TABLE `documents`
  ADD PRIMARY KEY (`document_id`);

--
-- Chỉ mục cho bảng `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`student_id`);

--
-- Chỉ mục cho bảng `requestborrow`
--
ALTER TABLE `requestborrow`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `documents`
--
ALTER TABLE `documents`
  MODIFY `document_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `requestborrow`
--
ALTER TABLE `requestborrow`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `borrow`
--
ALTER TABLE `borrow`
  ADD CONSTRAINT `borrow_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `members` (`student_id`),
  ADD CONSTRAINT `borrow_ibfk_2` FOREIGN KEY (`document_id`) REFERENCES `documents` (`document_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
