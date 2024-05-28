-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: bdwlnisyrlmecyq1n6tl-mysql.services.clever-cloud.com:3306
-- Tiempo de generación: 28-05-2024 a las 16:43:55
-- Versión del servidor: 8.0.22-13
-- Versión de PHP: 8.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bdwlnisyrlmecyq1n6tl`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Pelis`
--

CREATE TABLE `Pelis` (
  `nombre` text NOT NULL,
  `precioTotal` float NOT NULL,
  `añoEstreno` date NOT NULL,
  `premios` text NOT NULL,
  `id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `Pelis`
--

INSERT INTO `Pelis` (`nombre`, `precioTotal`, `añoEstreno`, `premios`, `id`) VALUES
('Avatar', 2923710000, '2009-12-17', '31', 1),
('Vengadores: Endgame', 2799440000, '2019-04-25', '18', 2),
('Avatar 2', 2320250000, '2022-12-16', '10', 3),
('Titanic', 2264740000, '1998-02-13', '54', 4),
('Star Wars: Episodio VII - El despertar de la Fuerza', 2071520000, '2015-12-17', '0', 5);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Pelis`
--
ALTER TABLE `Pelis`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Pelis`
--
ALTER TABLE `Pelis`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
