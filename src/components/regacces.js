import React from "react";
import { Link } from 'react-router-dom';

export function Regacces() {
    return (
        <div className="div-pss">

            <div className="div2-pss">Забули пароль?</div>
            <input
                type="code"
                className="input-field-pss"
                placeholder="Code"
            />
            <div className="rectangle-44-pss"></div>
            <Link to="/done2" className="div3-pss">Надіслати</Link>
            <Link to="/" className="div4-pss">Домашня сторінка</Link>
            <div className="div5-pss">Моя сторінка</div>
            <div className="div5-pss">Моя сторінка</div>
            <Link to="/signin" className="div6-pss">Вхід</Link>

                        <Link to="/signin" className="div7-pss">Скасувати</Link>
            <div className="div8-pss">
            Ми відправили на вказану вами електронну адресу лист з кодом для
    підтвердження облікового запису.
            </div>
        </div>
    );
}