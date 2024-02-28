import React, { useState } from "react";
import '../../src/index.scss'


export const Card = ({onClickFavourite,onClickPlus, sneakers, name, price}) => {
    const [isAdded, setIsAdded] = useState(false)
    const [isFavourite, setIsFavourite] = useState(false)
    
    const handleClick = () => {
        onClickPlus({ name, sneakers, price});
        setIsAdded(!isAdded);
    }
    const onFavourite = () => {
        setIsFavourite(!isFavourite)
    }
    React.useEffect(() => {
        console.log('Смена')
    },[isAdded])
    return (
        <div className="card">
                <img src={isFavourite ? './image/heart-active.svg' : './image/heart-unactive.svg'} className="favourite" onClick ={onFavourite}></img>
                <img src={sneakers} width={133} height={112}></img>
                <p>{name}</p>
                <div className="card__action">
                    <div>
                    <span>Цена: </span>
                    <p>{price} руб.</p>
                    </div>
                    <button onClick={handleClick} className="btn">
                        <img src={isAdded ? './image/plus-checked.svg' : './image/plus.svg'}></img>
                    </button>
                </div>
         </div>
    )
}