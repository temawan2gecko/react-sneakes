import React from "react";
import { Card } from "./Card";

export function Header(props) {
    return (
        <header className="header">
          <div className="header__left left-header">
            <img width={40} height={40} src='./image/logo.png'></img>
            <div className="left-header__info">
              <h3>React Sneakers</h3>
              <p>Магазин лучших кроссовок</p>
            </div>
          </div>
          <ul className="header__right">
            <li onClick={props.onClickCard}>
              <a href="#">
                <img width={18} height={18} src='./image/cart.svg'></img>
                <span>{props.price} руб.</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img width={18} height={18} src='./image/favourite.svg'></img>
                <p>Закладки</p>
              </a>
            </li>
            <li>
              <a href="#">
                <img width={18} height={18} src='./image/profile.svg'></img>
                <p>Профиль</p>
              </a>
            </li>
          </ul>
        </header>
    )
}