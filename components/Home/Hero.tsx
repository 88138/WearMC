import { useContext } from "react";
import CartContext from "../../context/cart.context";
// import Image from "next/image";

export default function Hero() {
  const { addToCartContext } = useContext(CartContext);

  return (
    <section className="home" id="home">
      <div className="home__container bd-grid">
        <div className="home__sneaker">
          <div className="home__shape"></div>
          <img
            width={300}
            height={500}
            src="/assets/img/imghome.png"
            alt=""
            className="home__img"
          />
        </div>

        <div className="home__data">

          <h1 className="home__title">
            YEEZY BOOST <br />
            SPLY-350
          </h1>
          <p className="home__description">
            
          </p>
          <a onClick={() => addToCartContext("vtun", 1)} className="button">
            Zet In Winkelmand
          </a>
        </div>
      </div>
    </section>
  );
}
