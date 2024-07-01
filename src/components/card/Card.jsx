import React from "react";
import './Card.css'

export const Card = ({url ='https://cdn.culturagenial.com/es/imagenes/el-gran-desfile-cke.jpg', titulo='sin titulo', descripcion= 'no hay dato'}) => {

    return (
        <>
        <div className="card">
            <img src={url} alt="imagen" />
            <div className="card__content">
                <p className="card__title">{titulo}</p>
                <p className="card__description">{descripcion}</p>
            </div>
        </div>
        </>
    );
}