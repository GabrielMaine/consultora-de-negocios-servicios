import aboutImage from "../../assets/about.jpg";
import SubTitleSection from "../../components/subtitleSection/SubTitleSection";
import TitleSection from "../../components/titleSection/TitleSection";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <section className={styles.section} id="sobre-mi">
      <div className={styles.container}>
        <SubTitleSection content="Mi camino profesional" />
        <TitleSection content="Quién Soy" />
        <div className={styles.row}>
          <div className={styles.col1}>
            <img
              className={styles.image}
              src={aboutImage}
              alt="Imagen de Emmanuel Mansilla en una oficina"
            />
          </div>
          <div className={styles.col2}>
            <p>
              Soy Emmanuel Mansilla, un apasionado del mundo de los negocios y
              estoy aquí para guiarte en el camino hacia el crecimiento de tu
              empresa.
            </p>
            <p>
              Junto a mi equipo, hemos capacitado a más de 200 clientes,
              incluyendo empresarios, profesionales, emprendedores y personas
              decididas a llevar a cabo una transformación profunda en sus
              negocios.
            </p>
            <p>
              Mi única misión es proporcionarte la información necesaria para
              que puedas formar parte de ese exclusivo 5% de emprendedores que
              se atreven a cambiar sus negocios y lograr resultados exitosos.
            </p>
            <p>
              ¿Te gustaría que te ayudara a convertirte en uno de esos
              emprendedores exitosos y revolucionar tu negocio?
            </p>
            <p>¡No dudes en contactarme!</p>
            <a
              className={styles.button}
              href="https://api.whatsapp.com/send?phone=2604018208"
              aria-label="Solicitar asesoramiento a través de Whatsapp"
              target="_blank"
              rel="noreferrer"
            >
              Solicitar asesoramiento
              <svg
                className={styles.arrow}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
