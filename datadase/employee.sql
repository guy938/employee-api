-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 21, 2025 at 09:43 AM
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
-- Database: `employees`
--

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `id` int(11) NOT NULL,
  `fullname` varchar(100) NOT NULL,
  `age` int(11) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phone` int(11) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `employment_status` varchar(20) DEFAULT NULL,
  `salary` decimal(10,2) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`id`, `fullname`, `age`, `address`, `phone`, `email`, `employment_status`, `salary`, `created_at`, `updated_at`) VALUES
(4, 'John Doe Updatedddd', 31, '456 New St', 2147483647, 'john.doe.updated@example.com', 'Part-Time', 55000.00, '2025-02-21 06:50:28', '2025-02-21 06:59:31'),
(5, 'Jane Smith', 28, '456 Elm St', 2147483647, 'jane.smith@example.com', 'Part-Time', 40000.00, '2025-02-21 06:50:28', '2025-02-21 06:50:28'),
(6, 'Alice Johnson', 35, '789 Oak St', 1122334455, 'alice.johnson@example.com', 'Full-Time', 55000.00, '2025-02-21 06:50:28', '2025-02-21 06:50:28'),
(7, 'Bob Brown', 40, '321 Pine St', 2147483647, 'bob.brown@example.com', 'Contract', 45000.00, '2025-02-21 06:50:28', '2025-02-21 06:50:28'),
(8, 'Charlie Davis', 29, '654 Cedar St', 2147483647, 'charlie.davis@example.com', 'Full-Time', 60000.00, '2025-02-21 06:50:28', '2025-02-21 06:50:28'),
(9, 'Emily Wilson', 32, '987 Maple St', 2147483647, 'emily.wilson@example.com', 'Part-Time', 42000.00, '2025-02-21 06:50:28', '2025-02-21 06:50:28'),
(10, 'Jon Doe', 30, '123 Main St', 1234567890, 'john.doe@example.com', 'Full-Time', 50000.00, '2025-02-21 06:52:29', '2025-02-21 06:52:29');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
