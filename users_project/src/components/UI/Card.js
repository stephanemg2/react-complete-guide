import React from 'react';
import classes from  './Card.module.css';

const Card = props => {
    // on retourne children pour recuperer les balises engloblées dans le tag xml du composant Card 
    // on retourne aussi la classe affectée par props dans la declaration jsx de Card
    // nottamment pour affecter les input englobées dans le formulaire
    return <div className={`${classes.card} ${props.cssClass}`}>{props.children}</div>
};

export default Card;