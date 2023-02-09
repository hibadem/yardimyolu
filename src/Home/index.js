import React from "react";
import "./index.scss";
import banner from "../assets/images/banner.jpg";
import ahbapLogo from "../assets/images/ahbap-logo.png";
import tatkoLogo from "../assets/images/tatko.png";
import photo1 from "../assets/images/Photo 1.jpg";
import photo2 from "../assets/images/Photo 2.jpg";
import photo3 from "../assets/images/Photo 3.jpg";
const Home = () => {
  return (
    <div className="home">
      <header className="header">
        <a
          className="header__site"
          href="https://www.yardimyolu.tatkolastik.com"
        >
          yardimyolu.tatkolastik.com
        </a>
        <a href="#">
          <h1 className="header__title">Şimdi Yardım Zamanı!</h1>
        </a>
        <nav className="">
          <a href="#">TR</a>/<a href="#">EN</a>
        </nav>
      </header>
      <section className="content">
        <img className="w-100" src={banner} alt="" />
      </section>
      <section className="cards mt-4">
        <div className="cards__item">
          <div className="cards__header -active">
            <h3 className="cards__title">1.hedefimize ulaştık!</h3>
          </div>
          <div className="cards__footer">
            <b className="cards__count">22 Adet Konteyner</b>
            <p>1 Milyon TL</p>
          </div>
        </div>
        <div className="cards__item">
          <div className="cards__header">
            <h3 className="cards__title">1.hedefimize ulaştık!</h3>
          </div>
          <div className="cards__footer">
            <b className="cards__count">22 Adet Konteyner</b>
            <p>1 Milyon TL</p>
          </div>
        </div>
      </section>

      <section className="donation mt-4">
        <img src={ahbapLogo} alt="" />
        <div className="donation__inner">
          <p>Depremzedelerimize Yardım için</p>
          <button type="button" className="btn btn-lg btn-danger">
            BAĞIŞ YAP
          </button>
        </div>
        <img src={tatkoLogo} alt="" />
      </section>

      <section className="multibanner">
        <img className="multibanner__image" src={photo1} alt="" />
        <img className="multibanner__image" src={photo2} alt="" />
        <img className="multibanner__image" src={photo3} alt="" />
      </section>
    </div>
  );
};

export default Home;
