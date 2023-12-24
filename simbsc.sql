-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 22, 2023 at 06:40 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `simbsc`
--

DROP DATABASE IF EXISTS `simbsc`;
CREATE DATABASE `simbsc` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `simbsc`;

DELIMITER $$
--
-- Procedures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_user_by_id` (IN `StudentId` INT(11))   SELECT
    members.student_id,
    members.student_name,
    members.email,
    members.join_date,
    members.state,
    CONCAT('[', GROUP_CONCAT('"', role.role, '"'), ']') AS permission
FROM
    members RIGHT OUTER JOIN role ON members.student_id = role.student_id
WHERE
	members.student_id = StudentId
GROUP BY
    members.student_id$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `search_user` (IN `user_input` TEXT)   SELECT
    members.student_id,
    members.student_name,
    members.state,
    CONCAT('[', GROUP_CONCAT('"', role.role, '"'), ']') AS permission
FROM
    members RIGHT OUTER JOIN role ON members.student_id = role.student_id
WHERE
    ((CAST(members.student_id AS CHAR) LIKE CONCAT('%', user_input, '%')) OR
    (user_input NOT REGEXP '^[0-9]+$' AND members.student_name LIKE CONCAT('%', user_input, '%')))
GROUP BY
    members.student_id$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `view_users_list` ()   SELECT
    members.student_id,
    members.student_name,
    members.state,
    CONCAT('[', GROUP_CONCAT('"', role.role, '"'), ']') AS permission
FROM
    members RIGHT OUTER JOIN role ON members.student_id = role.student_id
GROUP BY
    members.student_id$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `documents`
--

CREATE TABLE `documents` (
  `document_id` int(11) NOT NULL,
  `doc_name` varchar(256) NOT NULL,
  `type` varchar(256) NOT NULL,
  `author` varchar(256) NOT NULL,
  `publisher` varchar(512) NOT NULL,
  `publish_year` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `text` varchar(2048) NOT NULL,
  `description` varchar(4096) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `documents`
--

INSERT INTO `documents` (`document_id`, `doc_name`, `type`, `author`, `publisher`, `publish_year`, `quantity`, `text`, `description`) VALUES
(1, 'Kiến trúc máy tính', 'Sách cơ sở ngành', 'Phạm Quốc Cường', 'NXB Đại học Quốc gia TPHCM', 2019, 1, 'Kiến trúc máy tính cũng là một trong các môn cơ sở ngành quan trọng, môn học đề cập tới cơ sở về kiến trúc tập lệnh và tổ chức của máy tính, các vấn đề cơ bản trong thiết kế máy tính. Ngoài ra các bạn còn được học cơ bản về ngôn ngữ lập trình gần gũi nhất với máy tính đó là Assembly (cụ thể là MIPS).', 'Chương I: ĐẠI CƯƠNG \\\\n Lịch sử phát triển của máy tính, thông tin và sự mã hoá thông tin \\\\n Chương II: KIẾN TRÚC PHẦN MỀM BỘ XỬ LÝ \\\\n Giới thiệu các thành phần cơ bản của một hệ thống máy tính, kiến trúc máy tính, tập lệnh và các kiểu định vị cơ bản. Khái niệm về kiến trúc RISC và CISC, ngôn ngữ cấp cao và ngôn ngữ máy.'),
(3, 'Cấu trúc dữ liệu và giải thuật', 'Sách cơ sở ngành', 'Nguyễn Trung Trực', 'NXB Đại học Quốc gia TPHCM', 2019, 1, 'Quyển sách Cấu trúc dữ liệu và Giải thuật trình bày cấu trúc dữ liệu tuyến tính (mảng, danh sách liên kết) và cấu trúc dữ liệu phi tuyến (cây, đồ thị) và các giải thuật của các cấu trúc dữ liệu này. Các cấu trúc dữ liệu và giải thuật được trình bày theo kiểu lập trình có cấu trúc (structured programming) (minh họa bằng ngôn ngữ lập trình C++) và theo kiểu lập trình hướng đối tượng (object-oriented programming) (minh họa bằng ngôn ngữ lập trình C#). Các phần phụ lục là các chương trình được viết theo kiểu lập trình tổng quát (generic programming). Quyển sách này bao gồm 12 chương và 9 phụ lục.', 'CHƯƠNG 1: TỔNG QUAN VỀ CẤU TRÚC DỮ LIỆU & GIẢI THUẬT   1.1. Tầm quan trọng của CTDL & GT trong một đề án tin học   1.2. Đánh giá Cấu trúc dữ liệu & Giải thuật   1.3. Kiểu dữ liệu   Câu hỏi và bài tập'),
(4, 'Kiến trúc máy tính', 'Sách cơ sở ngành', 'Phạm Quốc Cường', 'NXB Đại học Quốc gia TPHCM', 2019, 1, 'Kiến trúc máy tính cũng là một trong các môn cơ sở ngành quan trọng, môn học đề cập tới cơ sở về kiến trúc tập lệnh và tổ chức của máy tính, các vấn đề cơ bản trong thiết kế máy tính. Ngoài ra các bạn còn được học cơ bản về ngôn ngữ lập trình gần gũi nhất với máy tính đó là Assembly (cụ thể là MIPS).', 'Chương I: ĐẠI CƯƠNG \\n Lịch sử phát triển của máy tính, thông tin và sự mã hoá thông tin \\n Chương II: KIẾN TRÚC PHẦN MỀM BỘ XỬ LÝ \\n Giới thiệu các thành phần cơ bản của một hệ thống máy tính, kiến trúc máy tính, tập lệnh và các kiểu định vị cơ bản. Khái niệm về kiến trúc RISC và CISC, ngôn ngữ cấp cao và ngôn ngữ máy.'),
(5, 'Kiến trúc máy tính', 'Sách cơ sở ngành', 'Phạm Quốc Cường', 'NXB Đại học Quốc gia TPHCM', 2019, 1, 'Kiến trúc máy tính cũng là một trong các môn cơ sở ngành quan trọng, môn học đề cập tới cơ sở về kiến trúc tập lệnh và tổ chức của máy tính, các vấn đề cơ bản trong thiết kế máy tính. Ngoài ra các bạn còn được học cơ bản về ngôn ngữ lập trình gần gũi nhất với máy tính đó là Assembly (cụ thể là MIPS).', 'Chương I: ĐẠI CƯƠNG \\n Lịch sử phát triển của máy tính, thông tin và sự mã hoá thông tin \\n Chương II: KIẾN TRÚC PHẦN MỀM BỘ XỬ LÝ \\n Giới thiệu các thành phần cơ bản của một hệ thống máy tính, kiến trúc máy tính, tập lệnh và các kiểu định vị cơ bản. Khái niệm về kiến trúc RISC và CISC, ngôn ngữ cấp cao và ngôn ngữ máy.'),
(6, 'Kiến trúc máy tính', 'Sách cơ sở ngành', 'Phạm Quốc Cường', 'NXB Đại học Quốc gia TPHCM', 2019, 1, 'Kiến trúc máy tính cũng là một trong các môn cơ sở ngành quan trọng, môn học đề cập tới cơ sở về kiến trúc tập lệnh và tổ chức của máy tính, các vấn đề cơ bản trong thiết kế máy tính. Ngoài ra các bạn còn được học cơ bản về ngôn ngữ lập trình gần gũi nhất với máy tính đó là Assembly (cụ thể là MIPS).', 'Chương I: ĐẠI CƯƠNG \\n Lịch sử phát triển của máy tính, thông tin và sự mã hoá thông tin \\n Chương II: KIẾN TRÚC PHẦN MỀM BỘ XỬ LÝ \\n Giới thiệu các thành phần cơ bản của một hệ thống máy tính, kiến trúc máy tính, tập lệnh và các kiểu định vị cơ bản. Khái niệm về kiến trúc RISC và CISC, ngôn ngữ cấp cao và ngôn ngữ máy.'),
(7, 'Cấu trúc dữ liệu và giải thuật', 'Sách cơ sở ngành', 'Nguyễn Trung Trực', 'NXB Đại học Quốc gia TPHCM', 2019, 1, 'Quyển sách Cấu trúc dữ liệu và Giải thuật trình bày cấu trúc dữ liệu tuyến tính (mảng, danh sách liên kết) và cấu trúc dữ liệu phi tuyến (cây, đồ thị) và các giải thuật của các cấu trúc dữ liệu này. Các cấu trúc dữ liệu và giải thuật được trình bày theo kiểu lập trình có cấu trúc (structured programming) (minh họa bằng ngôn ngữ lập trình C++) và theo kiểu lập trình hướng đối tượng (object-oriented programming) (minh họa bằng ngôn ngữ lập trình C#). Các phần phụ lục là các chương trình được viết theo kiểu lập trình tổng quát (generic programming). Quyển sách này bao gồm 12 chương và 9 phụ lục.', 'CHƯƠNG 1: TỔNG QUAN VỀ CẤU TRÚC DỮ LIỆU & GIẢI THUẬT   1.1. Tầm quan trọng của CTDL & GT trong một đề án tin học   1.2. Đánh giá Cấu trúc dữ liệu & Giải thuật   1.3. Kiểu dữ liệu   Câu hỏi và bài tập'),
(8, 'Cấu trúc dữ liệu và giải thuật', 'Sách cơ sở ngành', 'Nguyễn Trung Trực', 'NXB Đại học Quốc gia TPHCM', 2019, 1, 'Quyển sách Cấu trúc dữ liệu và Giải thuật trình bày cấu trúc dữ liệu tuyến tính (mảng, danh sách liên kết) và cấu trúc dữ liệu phi tuyến (cây, đồ thị) và các giải thuật của các cấu trúc dữ liệu này. Các cấu trúc dữ liệu và giải thuật được trình bày theo kiểu lập trình có cấu trúc (structured programming) (minh họa bằng ngôn ngữ lập trình C++) và theo kiểu lập trình hướng đối tượng (object-oriented programming) (minh họa bằng ngôn ngữ lập trình C#). Các phần phụ lục là các chương trình được viết theo kiểu lập trình tổng quát (generic programming). Quyển sách này bao gồm 12 chương và 9 phụ lục.', 'CHƯƠNG 1: TỔNG QUAN VỀ CẤU TRÚC DỮ LIỆU & GIẢI THUẬT   1.1. Tầm quan trọng của CTDL & GT trong một đề án tin học   1.2. Đánh giá Cấu trúc dữ liệu & Giải thuật   1.3. Kiểu dữ liệu   Câu hỏi và bài tập'),
(9, 'Kiến trúc máy tính', 'Sách cơ sở ngành', 'Phạm Quốc Cường', 'NXB Đại học Quốc gia TPHCM', 2019, 1, 'Kiến trúc máy tính cũng là một trong các môn cơ sở ngành quan trọng, môn học đề cập tới cơ sở về kiến trúc tập lệnh và tổ chức của máy tính, các vấn đề cơ bản trong thiết kế máy tính. Ngoài ra các bạn còn được học cơ bản về ngôn ngữ lập trình gần gũi nhất với máy tính đó là Assembly (cụ thể là MIPS).', 'Chương I: ĐẠI CƯƠNG \\n Lịch sử phát triển của máy tính, thông tin và sự mã hoá thông tin \\n Chương II: KIẾN TRÚC PHẦN MỀM BỘ XỬ LÝ \\n Giới thiệu các thành phần cơ bản của một hệ thống máy tính, kiến trúc máy tính, tập lệnh và các kiểu định vị cơ bản. Khái niệm về kiến trúc RISC và CISC, ngôn ngữ cấp cao và ngôn ngữ máy.');

-- --------------------------------------------------------

--
-- Table structure for table `members`
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
-- Dumping data for table `members`
--

INSERT INTO `members` (`student_id`, `student_name`, `email`, `password`, `state`, `join_date`, `permission`) VALUES
(0, 'Trần Văn A', 'tranvanA@hcmut.edu.vn', 'tranvana', '', '2023-11-09', ''),
(1, 'a', 'abc', '###v', 'ok', '0000-00-00', 'A'),
(2, 'a', 'abc', '###v', 'ok', '2023-12-11', 'A'),
(4, 'Võ Phúc Tường', 'tuongvo1234@gmail.com', 'tuongvo1234', 'ok', '2023-12-22', ''),
(5, 'Trần Văn C', 'tranvanC1234@gmail.com', 'tranvanC1234', 'blocked', '2023-12-22', ''),
(6, 'Nguyễn Thị B', 'nguyenthiB1234@gmail.com', 'nguyenthiB1234', 'ok', '2023-12-13', ''),
(7, 'Dương Văn D', 'duongvanD1234@gmail.com', 'duongvanD1234', 'ok', '2023-11-30', ''),
(2000000, 'Admin 1', 'admin1@gmail.com', '$2b$10$UpVm2Pt389EY0anjTZAwIulqMNBSo3Wmqk8inN47l9ABQyk5XfWKK', 'Đang hoạt động', '2023-11-14', 'Thành viên ban chủ nhiệm'),
(2000001, 'Admin 2', 'admin2@gmail.com', '$2b$10$ExtohTHcom1BvBpujafeQet/o8rMJNppbF4xQ8J8MbLE9eE3oilJO', 'Đang hoạt động', '2023-11-14', 'Thành viên ban chủ nhiệm'),
(2000002, 'Collab 1', 'collab1@gmail.com', '$2b$10$E30b5YunGc0lJ1G7D/PrZenQXV.oeiHuNaCH2T/QLB6eX3J2DCLFe', 'Đang hoạt động', '2023-11-15', 'Cộng tác viên'),
(2000003, 'Media 1', 'media1@gmail.com', '$2b$10$moDAhs42MpTxRNkxayBSOOe2z959mhTzD.RP6PQMTkFH0Uc1uA2rS', 'Đang hoạt động', '2023-11-15', 'Thành viên ban truyền thông'),
(2000004, 'Content 1', 'content1@gmail.com', '$2b$10$K.arbzneeymcCNZTFfqObOrHfNSTXGsWHPIgR9WtC1YVCcSEKnpcu', 'Đang hoạt động', '2023-11-15', 'Thành viên ban nội dung'),
(2000005, 'Logistic 1', 'logistic1@gmail.com', '$2b$10$nzR46CJ934k6zhXr0y.Pne7frXTbAAXIkgYeFkjNlZIio3okbtEd6', 'Đang hoạt động', '2023-11-15', 'Thành viên ban hậu cần');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `post_id` int(11) NOT NULL,
  `title` text NOT NULL,
  `brief` text NOT NULL,
  `content` text NOT NULL,
  `create_date` date NOT NULL,
  `last_change` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`post_id`, `title`, `brief`, `content`, `create_date`, `last_change`) VALUES
(1, 'Tổ chức sự kiện ra mắt website chính thức của SIMBSC', 'Tổ chức sự kiện ra mắt website chính thức của SIMBSC. Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn. ', 'Lorem Ipsum là gì?\r\nLorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500, khi một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành một bản mẫu văn bản. Đoạn văn bản này không những đã tồn tại năm thế kỉ, mà khi được áp dụng vào tin học văn phòng, nội dung của nó vẫn không hề bị thay đổi. Nó đã được phổ biến trong những năm 1960 nhờ việc bán những bản giấy Letraset in những đoạn Lorem Ipsum, và gần đây hơn, được sử dụng trong các ứng dụng dàn trang, như Aldus PageMaker.\r\n\r\nTại sao lại sử dụng nó?\r\nChúng ta vẫn biết rằng, làm việc với một đoạn văn bản dễ đọc và rõ nghĩa dễ gây rối trí và cản trở việc tập trung vào yếu tố trình bày văn bản. Lorem Ipsum có ưu điểm hơn so với đoạn văn bản chỉ gồm nội dung kiểu \"Nội dung, nội dung, nội dung\" là nó khiến văn bản giống thật hơn, bình thường hơn. Nhiều phần mềm thiết kế giao diện web và dàn trang ngày nay đã sử dụng Lorem Ipsum làm đoạn văn bản giả, và nếu bạn thử tìm các đoạn \"Lorem ipsum\" trên mạng thì sẽ khám phá ra nhiều trang web hiện vẫn đang trong quá trình xây dựng. Có nhiều phiên bản khác nhau đã xuất hiện, đôi khi do vô tình, nhiều khi do cố ý (xen thêm vào những câu hài hước hay thông tục).\r\n\r\n\r\nNó đến từ đâu?\r\nTrái với quan điểm chung của số đông, Lorem Ipsum không phải chỉ là một đoạn văn bản ngẫu nhiên. Người ta tìm thấy nguồn gốc của nó từ những tác phẩm văn học la-tinh cổ điển xuất hiện từ năm 45 trước Công Nguyên, nghĩa là nó đã có khoảng hơn 2000 tuổi. Một giáo sư của trường Hampden-Sydney College (bang Virginia - Mỹ) quan tâm tới một trong những từ la-tinh khó hiểu nhất, \"consectetur\", trích từ một đoạn của Lorem Ipsum, và đã nghiên cứu tất cả các ứng dụng của từ này trong văn học cổ điển, để từ đó tìm ra nguồn gốc không thể chối cãi của Lorem Ipsum. Thật ra, nó được tìm thấy trong các đoạn 1.10.32 và 1.10.33 của \"De Finibus Bonorum et Malorum\" (Đỉnh tối thượng của Cái Tốt và Cái Xấu) viết bởi Cicero vào năm 45 trước Công Nguyên. Cuốn sách này là một luận thuyết đạo lí rất phổ biến trong thời kì Phục Hưng. Dòng đầu tiên của Lorem Ipsum, \"Lorem ipsum dolor sit amet...\" được trích từ một câu trong đoạn thứ 1.10.32.', '2023-12-11', NULL),
(2, 'Sự kiện quyên góp sách ngày 13/11/2023', 'Sự kiện quyên góp sách ngày 13/11/2023. Trích đoạn chuẩn của Lorem Ipsum được sử dụng từ thế kỉ thứ 16 và được tái bản sau đó cho những người quan tâm đến nó.', 'Trái với quan điểm chung của số đông, Lorem Ipsum không phải chỉ là một đoạn văn bản ngẫu nhiên. Người ta tìm thấy nguồn gốc của nó từ những tác phẩm văn học la-tinh cổ điển xuất hiện từ năm 45 trước Công Nguyên, nghĩa là nó đã có khoảng hơn 2000 tuổi. Một giáo sư của trường Hampden-Sydney College (bang Virginia - Mỹ) quan tâm tới một trong những từ la-tinh khó hiểu nhất, \"consectetur\", trích từ một đoạn của Lorem Ipsum, và đã nghiên cứu tất cả các ứng dụng của từ này trong văn học cổ điển, để từ đó tìm ra nguồn gốc không thể chối cãi của Lorem Ipsum. Thật ra, nó được tìm thấy trong các đoạn 1.10.32 và 1.10.33 của \"De Finibus Bonorum et Malorum\" (Đỉnh tối thượng của Cái Tốt và Cái Xấu) viết bởi Cicero vào năm 45 trước Công Nguyên. Cuốn sách này là một luận thuyết đạo lí rất phổ biến trong thời kì Phục Hưng. Dòng đầu tiên của Lorem Ipsum, \"Lorem ipsum dolor sit amet...\" được trích từ một câu trong đoạn thứ 1.10.32.', '2023-12-08', NULL),
(3, 'Tổ chức họp mặt cuối năm của SIMBSC', 'Tổ chức họp mặt cuối năm của SIMBSC. Chúng ta vẫn biết rằng, làm việc với một đoạn văn bản dễ đọc và rõ nghĩa dễ gây rối trí và cản trở việc tập trung vào yếu tố trình bày văn bản.', 'Tại sao lại sử dụng nó?\r\nChúng ta vẫn biết rằng, làm việc với một đoạn văn bản dễ đọc và rõ nghĩa dễ gây rối trí và cản trở việc tập trung vào yếu tố trình bày văn bản. Lorem Ipsum có ưu điểm hơn so với đoạn văn bản chỉ gồm nội dung kiểu \"Nội dung, nội dung, nội dung\" là nó khiến văn bản giống thật hơn, bình thường hơn. Nhiều phần mềm thiết kế giao diện web và dàn trang ngày nay đã sử dụng Lorem Ipsum làm đoạn văn bản giả, và nếu bạn thử tìm các đoạn \"Lorem ipsum\" trên mạng thì sẽ khám phá ra nhiều trang web hiện vẫn đang trong quá trình xây dựng. Có nhiều phiên bản khác nhau đã xuất hiện, đôi khi do vô tình, nhiều khi do cố ý (xen thêm vào những câu hài hước hay thông tục)', '2023-12-10', '2023-12-11');

-- --------------------------------------------------------

--
-- Table structure for table `post_comments`
--

CREATE TABLE `post_comments` (
  `cmt_id` int(11) NOT NULL,
  `post_id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `content` text NOT NULL,
  `last_change` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `post_comments`
--

INSERT INTO `post_comments` (`cmt_id`, `post_id`, `student_id`, `content`, `last_change`) VALUES
(1, 1, 0, '\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"', '2023-12-11'),
(2, 1, 1, 'Trích đoạn chuẩn của Lorem Ipsum được sử dụng từ thế kỉ thứ 16 và được tái bản sau đó cho những người quan tâm đến nó. Đoạn 1.10.32 và 1.10.33 trong cuốn \"De Finibus Bonorum et Malorum\" của Cicero cũng được tái bản lại theo đúng cấu trúc gốc, kèm theo phiên bản tiếng Anh được dịch bởi H. Rackham vào năm 1914.\r\n\r\n', '2023-12-10');

-- --------------------------------------------------------

--
-- Table structure for table `requestborrow`
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
-- Dumping data for table `requestborrow`
--

INSERT INTO `requestborrow` (`student_id`, `document_id`, `request_day`, `state`, `update_date`, `id`, `received_day`, `returned_day`) VALUES
(1, 1, '2023-11-15', 0, '2023-11-20', 1, NULL, NULL),
(5, 3, '0000-00-00', 0, NULL, 2, NULL, NULL),
(5, 1, '2023-12-23', 0, NULL, 3, NULL, NULL),
(5, 2, '2023-11-08', 0, NULL, 4, NULL, NULL),
(5, 2, '2023-11-09', 0, NULL, 5, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `review_id` int(11) NOT NULL,
  `title` varchar(1024) NOT NULL,
  `book_name` varchar(2048) NOT NULL,
  `book_author` varchar(2048) NOT NULL,
  `summary` varchar(10000) NOT NULL,
  `content` mediumtext NOT NULL,
  `submit_date` date NOT NULL,
  `status` varchar(128) NOT NULL,
  `student_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`review_id`, `title`, `book_name`, `book_author`, `summary`, `content`, `submit_date`, `status`, `student_id`) VALUES
(1, 'Đây là tiêu đề bài review', 'Kỹ thuật lập trình', 'Nguyễn Trung Trực', 'Đây là tóm tắt bài review (tối đa 10000 kí tự)', 'Đây là nội dung bài review', '2023-12-01', 'Chấp nhận', 2000002);

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `student_id` int(11) NOT NULL,
  `role` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`student_id`, `role`) VALUES
(0, 'collaborator'),
(0, 'member'),
(5, 'admin'),
(5, 'member'),
(6, 'collaborator'),
(7, 'collaborator'),
(7, 'member'),
(2000000, 'admin'),
(2000001, 'admin'),
(2000002, 'collaborator');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `documents`
--
ALTER TABLE `documents`
  ADD PRIMARY KEY (`document_id`);

--
-- Indexes for table `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`student_id`),
  ADD KEY `student_id` (`student_id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`post_id`),
  ADD UNIQUE KEY `post_id` (`post_id`);

--
-- Indexes for table `post_comments`
--
ALTER TABLE `post_comments`
  ADD PRIMARY KEY (`cmt_id`),
  ADD KEY `post_comments_ibfk_1` (`student_id`),
  ADD KEY `post_comments_ibfk_2` (`post_id`);

--
-- Indexes for table `requestborrow`
--
ALTER TABLE `requestborrow`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`review_id`),
  ADD KEY `student_id` (`student_id`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`student_id`,`role`),
  ADD KEY `student_id` (`student_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `documents`
--
ALTER TABLE `documents`
  MODIFY `document_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `post_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `post_comments`
--
ALTER TABLE `post_comments`
  MODIFY `cmt_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `requestborrow`
--
ALTER TABLE `requestborrow`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `review_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `post_comments`
--
ALTER TABLE `post_comments`
  ADD CONSTRAINT `post_comments_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `members` (`student_id`),
  ADD CONSTRAINT `post_comments_ibfk_2` FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`);

--
-- Constraints for table `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `members` (`student_id`);

--
-- Constraints for table `role`
--
ALTER TABLE `role`
  ADD CONSTRAINT `role_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `members` (`student_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;