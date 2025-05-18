import React from "react";
import { Link } from 'react-router-dom';

export function Signin() {
    return (
        <div className="div-in">
            <div className="div2-in">Вхід</div>

            <input
                type="email"
                className="input-field-in email-input-in"
                placeholder="E-mail"
            />

            <input
                type="password"
                className="input-field-in password-input-in"
                placeholder="Пароль"
            />

            <div className="rectangle-44-in"></div>
            <div className="div3-in">Створити новий обліковий запис</div>
            <div className="rectangle-45-in"></div>
            <div className="div4-in">Створити новий обліковий запис</div>
            <Link to="/forgpass" className="div6-in">Забули пароль?</Link>
            <div className="div7-in">Увійти</div>
            <div className="div8-in">
                <ul className="div-8-span-in">
                    <li>Відстежуйте ваші посилки від замовлення до доставки</li>
                    <li>Зберігайте історію замовлень</li>
                    <li>Додавайте товари до списку бажань</li>
                    <li>Зберігайте інформацію для майбутніх покупок</li>
                </ul>
            </div>
            <Link to="/" className="div9-in">Домашня сторінка</Link>
            <div className="div10-in">Моя сторінка</div>
            <div className="div11-in">Вхід</div>
        </div>
    );
}