import React from "react";




export function Drawer({ onRemove, onClose, items = [] }){

    return (
        <div className="overlay">
          <div className="drawer">
            <div>
              <div className="drawer__close">
                <h2>Корзина</h2>
                <img src="./image/close.png" onClick={onClose}></img>
    
              </div>
              {items.length > 0 ? <div className="drawer__content">
                {items.map(obj => {
                  return (
                  <div className="drawer__item">
                  <img width={70} height={70} src={obj.sneakers}></img>
                  <div className="drawer__descr">
                    <p className="drawer__name">{obj.name}</p>
                    <p className="drawer__price">{obj.price} руб.</p>
                  </div>
                  <button onClick={() => {
                    onRemove(obj.id)
                  }}>
                    <img src='./image/delete.svg'></img>
                  </button>
                </div>
                  )
                })} </div>: <div className="drawer__empty"> 
                <img src="./image/box.png"></img>
                <h4>Корзина пустая</h4>
                <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                <button className="drawer__button" onClick={onClose}>Вернуться назад</button>
              </div>}
            </div>
            <div className="offer">
              <div>
                <p className="offer__left">Итого:</p>
                <p className="offer__right">0 руб.</p>
              </div>
              <div>
                <p className="offer__left">Налог 5%</p>
                <p className="offer__right">0 руб.</p>
              </div>
              <button>Оформить заказ</button>
            </div>
          </div>
        </div>
    )
}