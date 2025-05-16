import React from "react";
import { Link } from 'react-router-dom';

export function Footer() {
    return (
        
        <div className="footer">
         <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <div className="footer-rectangle-656"></div>
            <img className="footer-image-2" src="image 2.png" />
            <img className="footer-image-3" src="image 3.png" />
            <img className="footer-image-4" src="image 4.png" />
            <div className="footer-div">Категорії товарів</div>
            <div className="footer-div2">Спальня</div>
            <div className="footer-div3">Ванна</div>
            <div className="footer-div4">Офіс</div>
            <div className="footer-div5">Вітальня</div>
            <div className="footer-div6">Кухня та їдальня</div>
            <div className="footer-div7">Зберігання</div>
            <div className="footer-div8">Для вікон</div>
            <div className="footer-div9">Для саду</div>
            <div className="footer-div10">Для дому</div>
            <div className="footer-div11">Усі категорії</div>
            <div className="footer-div12">Інформація</div>
            <div className="footer-div13">Зворотній зв'язок</div>
            <div className="footer-div14">Магазини і графіки роботи</div>
            <div className="footer-div15">Умови та положення</div>
            <div className="footer-div16">Доставка</div>
            <div className="footer-div17">Політика конфіденційності</div>
            <div className="footer-hyggy">Hyggy</div>
            <Link to="/blog" className="footer-div18">Про нас</Link>
            <div className="footer-hyggy2">Робота в Hyggy</div>
            <div className="footer-div19">Підписатись на розсилку</div>
            <Link to="/blog" className="footer-div20">Блог</Link>
            <div className="footer-b-2-b">B2B</div>
            <div className="footer-div21">Корисні посилання</div>
            <div className="footer-div22">Центральний офіс</div>
            <div className="footer-21-123456">
                м. Київ
                <br />
                вул. Іоанна Павла, 21
                <br />
                123456
            </div>
            <div className="footer-hyggy-b-2-b">HYGGY B2B</div>
            <div className="footer-380123456789">
                <span>
                    <span className="footer-380123456789-span">Тел:</span>
                    <span className="footer-380123456789-span2">+380123456789</span>
                </span>
            </div>
            <div className="footer-b-2-b-hyggy-com">Імейл: b2b@hyggy.com</div>
            <div className="footer-div23">Зв'яжіться з нами</div>
            <div className="footer-div24">
                <span>
                    <span className="footer-div-24-span"></span>
                    <span className="footer-div-24-span2">Зворотній зв'язок:</span>
                </span>
            </div>
            <div className="footer-email-hyggy-com">email@hyggy.com</div>
            <div className="footer-3801234567892">
                <span>
                    <span className="footer-3801234567892-span">Тел:</span>
                    <span className="footer-3801234567892-span2">+380123456789</span>
                </span>
            </div>
            <div className="footer-div25">Зв'яжіться з нами</div>
            <img className="footer-networks" src="networks.png" />
        </div>
    )
}