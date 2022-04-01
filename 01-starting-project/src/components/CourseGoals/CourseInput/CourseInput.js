import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  // au cas ou l'utilisateur entre une donnée invalide, on cree une variable d'etat 
  const [isValid, setIsValid] = useState(true);


  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* on utilise ` pour evaluer dynamiquement dans une string javascript */}
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        {/* on affectue une couleur differente si la donnée est valide ou invalide selon la variable d'etat  */}
        <label >Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
