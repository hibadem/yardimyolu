import React, { useState, useEffect} from "react";
import "./index.scss";
import banner from "../assets/images/banner.jpg";
import ahbapLogo from "../assets/images/ahbap-logo.png";
import tatkoLogo from "../assets/images/tatko.png";
import photo1 from "../assets/images/Photo 1.jpg";
import photo2 from "../assets/images/Photo 2.jpg";
import photo3 from "../assets/images/Photo 3.jpg";
import containerGray from "../assets/images/container-gray.svg";
import containerGreen from "../assets/images/container-green.svg";
import  PieChart  from "../PieChart";
import "../assets/fonts/Montserrat-Regular.ttf";
const Home = () => {
  const [formData, setFormData] = useState({
    Fullname: '',
    Company: '',
    Amount: '',
    Image: '',
    NameListApprove: false
  });
  const [activeIndex, setActiveIndex] = useState(0);

  const items = Array.from({ length: 50 }, (_, i) => i);

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.name == 'Image' ? event.target.files[0] : event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const frm = new FormData();
    frm.append("Fullname", formData.Fullname);
    frm.append("Amount", formData.Amount);
    frm.append("Company", formData.Company);
    frm.append("NameListApprove", formData.NameListApprove);
    frm.append("Image", formData.Image);

    const requestOptions = {
      method: 'POST',
      body: frm,
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const [donationAmount, setDonationAmount] = useState(0);

  useEffect(() => {
    for (let i = 1; i <= 50; i++) {
      const currIndex = Number(donationAmount / 45000) + 21;
      setActiveIndex(currIndex);
    }
    fetch('http://localhost:1005/donation')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setDonationAmount(data);
      })
      .catch(error => {
        console.error('Error fetch donation', error);
      });
  }, []);

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
          <h1 className="header__title">??imdi Yard??m Zaman??!</h1>
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
            <h3 className="cards__title">1.Hedefimize ula??t??k!</h3>
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
          <p>Depremzedelerimize Yard??m i??in</p>
          <a href="https://ahbap.org/bagisci-ol" target="_blank" className="btn btn-lg btn-danger">
            BA??I?? YAP
          </a>
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
          Ahbap derne??inin resmi banka hesaplar??na, d??nyan??n her yerinden d??viz
          havalesi yap??labilmektedir.
        </p>
        <p>
          Yurd??????ndan yap??lacak ??demeler i??in xxxx swift kodunu
          kullanabilirsiniz.
        </p>
        <p>
          Yard??mlar??n??z?? iletebilece??iniz Ahbap Derne??i'ne ait hesap numaralar??:
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
        Bar??nma deste??i sa??layacak bir konteynerin bedeli: 45.000 TL
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
              <div className="target__title">Ula????lan Ba?????? Miktar??:</div>
              <div className="target__amount">{donationAmount}</div>
            </div>
          </div>
        </div>
        <div className="chart">
          <PieChart donationAmount={donationAmount} />
        </div>
        
        <div className="form-container">
          <div className="text-center">
            <small className="text-muted">L??tfen dekontun a????klama b??l??m??ne</small>
            <b>"YARDIM YOLU-T"</b>
            <small className="text-muted">ifadesini ekleyiniz.</small> 
          </div>
          <div className="form">
            <form onSubmit={handleSubmit}>
              <div className="form-group pb-3">
                <label>Ad??n??z Soyad??n??z</label>
                <input name="Fullname" onChange={handleChange} defaultValue={formData.Fullname} type="text" className="form-control" required />
              </div>
              <div className="form-group pb-3">
                <label>Kurum Ad??</label>
                <input name="Company" onChange={handleChange} defaultValue={formData.Company} type="text" className="form-control" required/>
              </div>
              <div className="form-group pb-3">
                <label>Ba?????? Miktar??</label>
                <input name="Amount" onChange={handleChange} defaultValue={formData.Amount} type="number" className="form-control" required  />
              </div>
              <div className="form-group pb-3">
                <label>Dekont</label>
                <input type="file" accept="images/*" name="Image" onChange={handleChange} defaultValue={formData.Image}  className="form-control" required />
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" name="NameListApprove" onChange={handleChange} defaultValue={formData.NameListApprove} required />
                <label className="form-check-label">
                Ba?????????? listesinde ismimin yay??nlanmas??na onay veriyorum
                </label>
              </div>  
              <button type="submit" className="btn">G??nder</button>
              <a href="/Aydinlatma_Beyani_Bagis_icin.docx">Ayd??nlatma metni i??in t??klay??n??z</a>
            </form>
          </div>
        </div>
      </div>

      <div className="containers">
        {items.map((item, index) => (
        <div className="containers__item">
          <img key={item} src={index <= activeIndex ? containerGreen : containerGray} />
        </div>
        ))}
      </div>

      <div className="footer">
        <img className="w-100" src={tatkoLogo} alt="" />
        <span>??2023</span>
      </div>
    </div>


  );
};

export default Home;
