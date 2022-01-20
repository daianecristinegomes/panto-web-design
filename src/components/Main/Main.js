import React from "react";
import "./main.css"
import IconSearch from "../../assets/icon-search.png"
import IconArrow from "../../assets/icon-arrow.png"
import ImgLivingRoom from "../../assets/img-living-room.png"

const Main = () => {
  return (

    <main>
      <section className="section-one">
        <p className="main-text">Make your interior more
          minimalistic & modern</p>
        <p className="sub-title">Turn your room with panto into a lot more minimalist and modern with ease and speed</p>
        <div className="input-search">
          <input className="placeholder" placeholder="Search furniture" />
          <img className="icon-search" src={IconSearch} alt="icone lupa" />
        </div>
      </section>

      <section className="section-two">
        <h3>Why
          Choosing Us</h3>

        <article>
          <h4 className="article-title">Luxury facilities</h4>
          <p className="p-section-two">The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
          <div className="more-info-icon">
            <a className="more-info" href="">More Info</a>
            <img className="icon-arrow" src={IconArrow} alt="icone seta" />
          </div>
        </article>

        <article>
          <h4 className="article-title">Affordable Price</h4>
          <p className="p-section-two">You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.</p>
          <div className="more-info-icon">
            <a className="more-info" href="">More Info</a>
            <img className="icon-arrow" src={IconArrow} alt="icone seta" />
          </div>
        </article>

        <article>
          <h4 className="article-title">Many Choices</h4>
          <p className="p-section-two">We provide many unique work space choices so that you can choose the workspace to your liking.</p>
          <div className="more-info-icon">
            <a className="more-info" href="">More Info</a>
            <img className="icon-arrow" src={IconArrow} alt="icone seta" />
          </div>
        </article>
      </section>

      <section className="section-tree">
        <img className="img-living-room" src={ImgLivingRoom} alt="imagem sala de estar" />
        <div className="experiences">
          <h4 className="title-experiences">experiences</h4>
          <p className="paragraph-section-tree">we provide you the best experience</p>
          <p className="simple-paragraph">You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials</p>
          <div className="more-info-icon">
            <a className="more-info" href="">More Info</a>
            <img className="icon-arrow" src={IconArrow} alt="icone seta" />
          </div>
        </div>
      </section>

    </main>
  );
}

export default Main;