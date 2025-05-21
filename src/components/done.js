import React from "react";
import { Link } from 'react-router-dom';

export function Done() {
    return (
        <div class="_2-d">
            <img class="vector-2-d" src="vector-20.svg" />
            <img class="vector-11-d" src="vector-110.svg" />
            <div class="div-d">Пароль успішно змінено</div>
            <Link to="/signin" className="div2-d">Перейти до входу</Link>
            <div class="div3-d">Домашня сторінка</div>
            <div class="div4-d">Моя сторінка</div>
            <div class="div5-d">Створити обліковий запис</div>
            <img class="vector-9-d" src="vector-90.svg" />
            <img class="vector-10-d" src="vector-100.svg" />
        </div>

    );
}