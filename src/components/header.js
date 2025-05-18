import React from "react";
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <div className="header">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <div className="rectangle-656"></div>
      <div className="rectangle-657">
        <img className="image2" src="image.png" alt="logo" />
        <div className="rectangle-658">
          <Link to="/catalog"><p className="text-658">Пошук...</p></Link>
        </div>
        <img className="vector" src="vector5.png" alt="search icon" />
      </div>

      <div className="blog">
        <div className="rectangle-10"></div>
        <Link to="/blog" className="div6">Блог</Link>
      </div>
      <div className="shop">
        <div className="rectangle-11"></div>
        <div className="div7">Магазини</div>
      </div>
      <div className="qa">
        <div className="rectangle-12"></div>
        <Link to="/qa" className="div8">Питання-відповідь</Link>
      </div>
      <div className="work">
        <div className="rectangle-47"></div>
        <div className="div9">Робота</div>
      </div>
      <div className="fav">
        <div className="div10">Обране</div>
        <img className="vector2" src="vector2.png" alt="fav icon" />
      </div>
      <div className="prof">
        <Link to="/signin" className="div11">Вхід</Link>
        <img className="vector3" src="vector4.png" alt="profile icon" />
      </div>
      <div className="cart">
        <div className="div12">Кошик</div>
        <img className="group-162" src="group 152.png" alt="cart icon" />
      </div>
      <div className="menu">
        <img className="group-1622" src="group 162.png" alt="menu icon" />
        <div className="div13">Меню</div>
      </div>

      <div className="group-200">
        <Link to="/" className="hyggy2">HYGGY Київ ТЦ Променада</Link>
        <img className="group-199" src="group 199.png" alt="location icon" />
      </div>
    </div>
  );
}