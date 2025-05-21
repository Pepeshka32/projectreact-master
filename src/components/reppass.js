import React from "react";
import { Link } from 'react-router-dom';

export function Repassword() {
    return (
        <div className="div-pss">
            <div className="div2-pss">Забули пароль?</div>
            <input
                type="email"
                className="input-field-pss"
                placeholder="E-mail"
            />
            <input
                type="password"
                className="input-field-pss1"
                placeholder="Новий пароль"
            />
            <div className="rectangle-441-pss"></div>
            <Link to="/done" className="div31-pss">Надіслати</Link>
            <Link to="/" className="div4-pss">Домашня сторінка</Link>
            <Link to="/profile" className="div5-pss">Моя сторінка</Link>
            <Link to="/signin" className="div6-pss">Вхід</Link>

            <Link to="/signin" className="div71-pss">Скасувати</Link>
            <div className="div8-pss">
                Напишіть свою електронну адресу для того, щоб скинути пароль. Ми відправимо
                вам лист з посиланням, де ви зможете ввести новий пароль.
            </div>
        </div>
    );
}