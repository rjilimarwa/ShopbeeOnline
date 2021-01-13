import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
        <div className="home__container">
        <img
    className="home__image"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1gXjMEx0VU-STBGr0n8mESHBavZKCeNc51Q&usqp=CAU"
    alt=""
        />

        <div className="home__row">
        <Product
    id="12321341"
    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
    price={11.96}
    rating={5}
    image="https://tse4.mm.bing.net/th?id=OIP.6XouaSk--lOmenuXiRBvBgHaE8&pid=Api&P=0&w=236&h=158"
        />
        <Product
    id="49538094"
    title="PROPOLIA Gommes De Propolis Miel & Eucalyptus Sachet"
    price={239.0}
    rating={4}
    image="https://static.greenweez.com/images/products/76000/600/propolia-gommes-de-propolis-miel-eucalyptus-sachet-45-g.jpg"
        />
        </div>

        <div className="home__row">
        <Product
    id="4903850"
    title="NACTALIA BIO Nactalia Bio Lait bio infantile 3ème Age 10-36 mois 800g"
    price={199.99}
    rating={3}
    image="https://static.greenweez.com/images/products/119000/600/nactalia-bio-nactalia-bio-lait-bio-infantile-3eme-age-10-36-mois-800g.jpg"
        />
        <Product
    id="23445930"
    title="GREENWEEZ Poudre d'amandes 500g"
    price={98.99}
    rating={5}
    image="https://static.greenweez.com/images/products/109000/600/greenweez-poudre-d-amande-500gr.jpg"
        />
        <Product
    id="3254354345"
    title="MARKAL Graines de chia 250g"
    price={59}
    rating={4}
    image="https://static.greenweez.com/images/products/76000/600/markal-graines-de-chia-250g.jpg"
        />
        </div>

        <div className="home__row">
        <Product
    id="90829332"
    title="MARKAL Graines de tournesol décortiquées 250g"
    price={35}
    rating={4}
    image="https://static.greenweez.com/images/products/76000/600/markal-graines-de-tournesol-decortiquees-250g.jpg"
        />
        <Product
    id="90829334"
    title="CELNAT Graines de tournesol - 250g"
    price={30}
    rating={4}
    image="https://static.greenweez.com/images/products/5000/600/primeal-graine-de-tournesol-250g.jpg"
        />
        <Product
    id="90829330"
    title="MARKAL Graines de tournesol décortiquées 250g"
    price={94}
    rating={4}
    image="https://static.greenweez.com/images/products/68000/600/celnat-graines-de-tournesol-250g.jpg"
        />
        </div>
        </div>
        </div>
);
}

export default Home;