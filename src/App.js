import React, { useState } from "react";
import "./App.css";
import logo from "./assets/logo_hd.png";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  return (
    <div>
      {/* Menu de navigation */}
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="Logo TCVB" className="logo" />
        </div>
        <nav className={isOpen ? "nav open" : "nav"}>
          <ul>
            <li><a href="#">Accueil</a></li>
            <li className="dropdown">
              <a href="#" onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}>Le club ▼</a>
              {isSubMenuOpen && (
                <ul className="submenu">
                  <li><a href="#">Les coachs</a></li>
                </ul>
              )}
            </li>
            <li><a href="#">Réservations</a></li>
            <li><a href="#">Tournois</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <div className="burger" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>
      </header>
      
      {/* Section Accueil */}
      <section className="hero">
        <h2>Bienvenue au Tennis Club Val de Bussy</h2>
        <p>Rejoignez notre club dynamique et profitez d'infrastructures modernes pour tous les niveaux.</p>
      </section>

      {/* Section Présentation du club */}
      <section className="about">
        <h2>À propos du club</h2>
        <p>Le Tennis Club Val de Bussy est une référence pour les passionnés de tennis, offrant un cadre idéal pour la pratique et la compétition.</p>
        <ul>
          <li>🎾 **Des infrastructures modernes** : plusieurs terrains en terre battue et en résine.</li>
          <li>🏆 **Des entraînements pour tous** : cours pour enfants, adultes et compétiteurs.</li>
          <li>🎉 **Une ambiance conviviale** : animations, tournois et événements tout au long de l'année.</li>
        </ul>
      </section>

      {/* Section Les coachs */}
      <section className="coaches">
        <h2>Nos coachs</h2>
        <p>Nos entraîneurs qualifiés vous accompagnent dans votre progression et votre performance.</p>
        <ul>
          <li>🎾 <strong>Frédéric Blocus</strong> - Moniteur Diplômé d'État</li>
          <li>🏆 <strong>Dimitri Antonio Ramirez</strong> - Directeur Sportif</li>
          <li>📋 <strong>Bernard Vernier</strong> - Entraîneur des jeunes compétiteurs</li>
        </ul>
      </section>

      {/* Pied de page */}
      <footer className="footer">
        <p>Contactez-nous : contact@tcvb.fr</p>
        <p>Suivez-nous sur <a href="#">Facebook</a> et <a href="#">Instagram</a></p>
      </footer>
    </div>
  );
}

export default App;
