import React from "react";
import { Link } from 'react-router-dom';

export function Forgotpassword() {
    return (
        <div className="div-pss">

            <div className="div2-pss">Забули пароль?</div>
            <input
                type="email"
                className="input-field-pss"
                placeholder="E-mail"
            />
            <div className="rectangle-44-pss"></div>
            <Link to="/repass" className="div3-pss">Надіслати</Link>
            <Link to="/" className="div4-pss">Домашня сторінка</Link>
            <div className="div5-pss">Моя сторінка</div>
            <div className="div5-pss">Моя сторінка</div>
            <Link to="/signin" className="div6-pss">Вхід</Link>

                        <Link to="/signin" className="div7-pss">Скасувати</Link>
            <div className="div8-pss">
                Напишіть свою електронну адресу для того, щоб скинути пароль. Ми відправимо
                вам лист з посиланням, де ви зможете ввести новий пароль.
            </div>
        </div>
    );
}