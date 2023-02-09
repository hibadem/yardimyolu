import React from "react";
import "./index.scss";
import banner from "../assets/images/banner.jpg";
import ahbapLogo from "../assets/images/ahbap-logo.png";
import tatkoLogo from "../assets/images/tatko.png";
import photo1 from "../assets/images/Photo 1.jpg";
import photo2 from "../assets/images/Photo 2.jpg";
import photo3 from "../assets/images/Photo 3.jpg";
import containerGray from "../assets/images/container-gray.svg";
import containerGreen from "../assets/images/container-green.svg";
import chart from "../assets/images/chart.png"
import "../assets/fonts/Montserrat-Regular.ttf";
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
            <h3 className="cards__title">1.Hedefimize ulaştık!</h3>
          </div>
          <div className="cards__footer">
            <b className="cards__count">22 Adet Konteyner</b>
            <p>1 Milyon TL</p>
          </div>
        </div>
        <div className="cards__item">
          <div className="cards__header">
            <h3 className="cards__title">2.Hedefimiz Devam Ediyor</h3>
          </div>
          <div className="cards__footer">
            <b className="cards__count">28 Adet Konteyner</b>
            <p>1 Milyon 260 Bin TL</p>
          </div>
        </div>
      </section>

      <section className="donation mt-4">
        <img className="donation__image" src={ahbapLogo} alt="" />
        <div className="donation__inner">
          <p>Depremzedelerimize Yardım için</p>
          <button type="button" className="btn btn-lg btn-danger">
            BAĞIŞ YAP
          </button>
        </div>
        <img className="donation__image" src={tatkoLogo} alt="" />
      </section>

      <section className="multibanner mt-4">
        <img className="multibanner__image" src={photo1} alt="" />
        <img className="multibanner__image" src={photo2} alt="" />
        <img className="multibanner__image" src={photo3} alt="" />
      </section>

      <section className="transfer">
        <p>
          Ahbap derneğinin resmi banka hesaplarına, dünyanın her yerinden döviz
          havalesi yapılabilmektedir.
        </p>
        <p>
          Yurdışından yapılacak ödemeler için xxxx swift kodunu
          kullanabilirsiniz.
        </p>
        <p>
          Yardımlarınızı iletebileceğiniz Ahbap Derneği'ne ait hesap numaraları:
        </p>
      </section>

      <div className="accounts">
        <section className="account">
          <h5 className="account__item">TL HESABI</h5>
          <div className="account__item">1021-1380059</div>
          <div className="account__item">IBAN</div>
          <div className="account__item">TR12000640000011380059</div>
        </section>

        <section className="account">
          <h5 className="account__item">USD HESABI</h5>
          <div className="account__item">1021-2150262</div>
          <div className="account__item">IBAN</div>
          <div className="account__item">TR320006400000210212150262</div>
        </section>

        <section className="account">
          <h5 className="account__item">EUR HESABI</h5>
          <div className="account__item">1021-1380059</div>
          <div className="account__item">IBAN</div>
          <div className="account__item">TR150006400000210212150277</div>
        </section>

        <section className="account">
          <h5 className="account__item">GBP STERLIN HESABI</h5>
          <div className="account__item">1021-1380059</div>
          <div className="account__item">IBAN</div>
          <div className="account__item">TR370006400000210212260849</div>
        </section>
      </div>

      <div className="info">
        Barınma desteği sağlayacak bir konteynerin bedeli: 45.000 TL
      </div>

      <div className="donation-section container mt-4">
        <div className="target">
          <div className="target-item">
            <div className="target__circle"></div>
            <div className="target__content">
              <div className="target__title">Hedefimiz:</div>
              <div className="target__amount">1.260.000 TL</div>
            </div>
          </div>

          <div className="target-item -active">
            <div className="target__circle"></div>
            <div className="target__content">
              <div className="target__title">Ulaşılan Bağış Miktarı:</div>
              <div className="target__amount">270.000 TL</div>
            </div>
          </div>
        </div>
        <div className="chart">
          <img className="w-100"src={chart} alt="" />
        </div>
        
        <div className="form-container">
          <div className="text-center">
            <small className="text-muted">Lütfen dekontun açıklama bölümüne</small>
            <b>"YARDIM YOLU-T"</b>
            <small className="text-muted">ifadesini ekleyiniz.</small> 
          </div>
          <div className="form">
            <form>
              <div class="form-group pb-3">
                <label for="nameSurname">Adınız Soyadınız</label>
                <input type="text" class="form-control" id="nameSurname" />
              </div>
              <div class="form-group pb-3">
                <label for="companyName">Kurum Adı</label>
                <input type="text" class="form-control" id="companyName" />
              </div>
              <div class="form-group pb-3">
                <label for="donationAmount">Bağış Miktarı</label>
                <input type="number" class="form-control" id="donationAmount" />
              </div>
              <div class="form-group pb-3">
              <label for="receipt">Dekont</label>
              <input type="file" class="form-control" id="receipt" />
              </div>
              <button type="submit" class="btn">Gönder</button>
              <div>Aydınlatma metni için tıklayınız</div>
            </form>
          </div>
        </div>
      </div>

      <div class="containers">
        <div>
          1. Konteyner
          <img src={containerGreen} alt="" />
        </div>
        <div>
          1. Konteyner
          <img src={containerGreen} alt="" />
        </div>
        <div>
          1. Konteyner
          <img src={containerGreen} alt="" />
        </div>
        <div>
          1. Konteyner
          <img src={containerGreen} alt="" />
        </div>
        <div>
          1. Konteyner
          <img src={containerGreen} alt="" />
        </div>
        <div>
          1. Konteyner
          <img src={containerGreen} alt="" />
        </div>
        <div>
          1. Konteyner
          <img src={containerGreen} alt="" />
        </div>
        <div>
          1. Konteyner
          <img src={containerGreen} alt="" />
        </div>
        <div>
          1. Konteyner
          <img src={containerGreen} alt="" />
        </div>
        <div>
          1. Konteyner
          <img src={containerGreen} alt="" />
        </div>
        <div>
          1. Konteyner
          <img src={containerGreen} alt="" />
        </div>
        <div>
          1. Konteyner
          <img src={containerGreen} alt="" />
        </div>
        <div>
          1. Konteyner
          <img src={containerGreen} alt="" />
        </div>
        <div>
          1. Konteyner
          <img src={containerGreen} alt="" />
        </div>
        <div>
          1. Konteyner
          <img src={containerGreen} alt="" />
        </div>
        <div>
          1. Konteyner
          <img src={containerGray} alt="" />
        </div>
        <div>
          1. Konteyner
          <img src={containerGray} alt="" />
        </div>
        <div>
          1. Konteyner
          <img src={containerGray} alt="" />
        </div>
        <div>
          1. Konteyner
          <img src={containerGray} alt="" />
        </div>
        <div>
          1. Konteyner
          <img src={containerGray} alt="" />
        </div>
        <div>
          1. Konteyner
          <img src={containerGray} alt="" />
        </div>
        <div>
          1. Konteyner
          <img src={containerGray} alt="" />
        </div>
        <div>
          1. Konteyner
          <img src={containerGray} alt="" />
        </div>
        <div>
          1. Konteyner
          <img src={containerGray} alt="" />
        </div>
      </div>

      <div class="footer">
        <img className="w-100" src={tatkoLogo} alt="" />
        <span>©2023</span>
      </div>
    </div>


  );
};

export default Home;
