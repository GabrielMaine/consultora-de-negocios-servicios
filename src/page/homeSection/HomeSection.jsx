import { useState } from "react";
import Modal from "../../components/modal/Modal";
import styles from "./HomeSection.module.css";
import iconPresentation from "../../assets/PlayPresentation.png";

export default function HomeSection() {
	const [modalVisible, setModalVisible] = useState(false);

	const openModal = () => {
		setModalVisible(true);
	};

	const closeModal = () => {
		setModalVisible(false);
	};

	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<div className={styles.col1}>
					<h1 className={styles.mainTitle}>
						Transformamos <br /> Tu Negocio en una <br /> Historia de Éxito.
					</h1>
					<p className={styles.paragraph}>
						¿Estás buscando ayuda para tu negocio? ¿Querés alcanzar el éxito? Te
						ofrecemos los servicios que necesitás para lograrlo.
					</p>
					<span>
						<button
							className={styles.button}
							onClick={openModal}>
							Empieza ahora
							<svg
								className={styles.arrow}
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24">
								<path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
							</svg>
						</button>
						<button
							className={styles.secondaryButton}
							onClick={openModal}>
							<img
								src={iconPresentation}
								alt="Icono de Presentación"
							/>
							Conócenos
						</button>
					</span>
				</div>
				<div className={styles.col2}>
					<img
						className={styles.image}
						src="https://res.cloudinary.com/dwqk2mkgh/image/upload/v1698069669/consultora-de-negocios/homeImage_elh9lk.png"
						alt="Imagen del Home"
					/>
				</div>
			</div>
			{modalVisible && <Modal closeModal={closeModal} />}
		</section>
	);
}
