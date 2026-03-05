import { Link } from "react-router-dom";
import { Icons } from "@shared/icons";
import "@styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* MAPA */}
        <div className="footer-section footer-map">
          <h3>Encuéntranos</h3>
          <iframe
            src="https://www.google.com/maps?q=Santiago,Chile&output=embed"
            loading="lazy"
          ></iframe>
        </div>

        {/* NAVEGACIÓN */}
        <div className="footer-section footer-links">
          <h3>Navegación</h3>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/menu">Menú</Link></li>
            <li><Link to="/pedido">Pedido</Link></li>
            <li><Link to="/perfil">Perfil</Link></li>
          </ul>
        </div>

        {/* REDES */}
        <div className="footer-section footer-social">
          <h3>Síguenos</h3>
          <div className="footer-social-icons">
            <a href="#">
              <Icons.Instagram size={28}/>
            </a>
            <a href="#">
              <Icons.Facebook size={28}/>
            </a>
            <a href="#">
              <Icons.Tiktok size={28}/>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copy">
        <p>© 2026 Mega Burguer. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;