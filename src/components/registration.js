import React from "react";
import { Link } from 'react-router-dom';

export function Registration() {
  return (
    <div class="div-reg">
      <img class="vector-2-reg" src="vector-20.svg" />
      <img class="vector-11-reg" src="vector-110.svg" />
      <div class="div2-reg">Створити обліковий запис</div>
      <div class="rectangle-39-reg"></div>
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
      <input
        type="password"
        className="input-field-in repass-input-in"
        placeholder="Повторити пароль"
      />

      <input
        type="name"
        className="input-field-in name-input-in"
        placeholder="Ім'я"
      />

      <div className="rectangle-441-in"></div>
      
      <Link to="/regacces" className="div6-reg">Створити обліковий запис</Link>
      <Link to="/signin" className="div7-reg">Скасувати</Link>
      <div class="div8-reg">Домашня сторінка</div>
      <div class="div9-reg">Моя сторінка</div>
      <div class="div10-reg">Створити обліковий запис</div>
      
      

      <div className="checkbox-container">
        <label className="checkbox-label">
          <input type="checkbox" className="custom-checkbox" />
          <span>Прийняти <a href="#">Умови та Положення</a></span>
        </label>

        <label className="checkbox-label">
          <input type="checkbox" className="custom-checkbox" />
          <span>Знайти минулі замовлення для цього облікового запису</span>
        </label>

        <label className="checkbox-label">
          <input type="checkbox" className="custom-checkbox" />
          <span>Підписатися на наші новини</span>
        </label>
      </div>
    </div>
  );
}