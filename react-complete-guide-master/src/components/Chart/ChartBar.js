import React from 'react';
import './ChartBar.css'

const ChartBar = props => {
    let barFillHeight = '0%';
    // recalcul de la taille de la barre en fonction de la valeur fournie 
    if (props.max > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100);
    }

    return (<div className="chart-bar">
        <div className='chart-bar__inner'>
                    {/* on envoie en parametre de taille un objet javascript, donc entouré par {} et aussi dans une balise de code javascript, d'ou le double entourage  */}
            <div className='chart-bar__fill' style={{height: barFillHeight}}></div>
        </div>
        <div className='chart-bar__label'>{props.label}</div>
    </div>);
};

export default ChartBar;