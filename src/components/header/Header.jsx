import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import styles from "./Header.module.css";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const [isHeaderScrolled, setHeaderScrolled] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const scrollToSection = (sectionId) => {
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
		toggleMenu();
	};

	const handleScroll = () => {
		if (window.scrollY > 0) {
			setHeaderScrolled(true);
		} else {
			setHeaderScrolled(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header
			className={`${styles.header} ${
				isHeaderScrolled ? styles.headerScrolled : ""
			}`}>
			<nav className={styles.nav}>
				{/* Logo */}
				<a
					className={styles.logo}
					href="/">
					<img
						src={logo}
						alt="Logo"
					/>
				</a>
				{/* Menu */}
				<div className={`${styles.menu} ${isOpen && styles.open}`}>
					{/* Close Menu Icon */}
					<svg
						className={styles.closeMenuIcon}
						onClick={toggleMenu}
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24">
						<path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path>
					</svg>
					{/* Links */}

					<Link
						className={styles.menuLink}
						onClick={() => scrollToSection("servicios")}>
						Servicios
					</Link>
					<Link
						className={styles.menuLink}
						onClick={() => scrollToSection("sobre-mi")}>
						Acerca De
					</Link>
					<Link
						className={styles.menuLink}
						onClick={() => scrollToSection("testimonios")}>
						Testimonios
					</Link>
					<Link
						className={styles.menuLink}
						onClick={() => scrollToSection("contacto")}>
						FAQ
					</Link>
				</div>
				{/* Open Menu Icon */}
				<button
					className={styles.buttonMenu}
					onClick={toggleMenu}>
					MENU
				</button>
				<a
					className={styles.contactanos}
					onClick={() => scrollToSection("contacto")}>
					Contáctanos
				</a>
			</nav>
		</header>
	);
}
