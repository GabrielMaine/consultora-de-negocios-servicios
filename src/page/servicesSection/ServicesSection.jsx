import { Link } from "react-router-dom";
import { dataServices } from "../../data/dataServices";
import SubTitleSection from "../../components/subtitleSection/SubTitleSection";
import TitleSection from "../../components/titleSection/TitleSection";
import styles from "./ServicesSection.module.css";
import serviceArrow from "../../assets/serviceArrow.png";
import ServicesCard from "../../components/servicesCard/ServicesCard";

export default function ServicesSection() {
	return (
		<section
			className={styles.section}
			id="servicios">
			<div className={styles.container}>
				<SubTitleSection content="Soluciones a tu alcance" />
				<TitleSection content="Nuestros servicios" />
				<div className={styles.row}>
					{dataServices.slice(0,3).map((service) => (
						<ServicesCard content={ service } />
					))}
				</div>
				<div className={styles.seeMore}>
					<Link
						className={styles.seeMoreButton}
						to={`/servicios`}>
							<span>Ver todos los servicios</span>
					</Link>
				</div>
			</div>
		</section>
	);
}
