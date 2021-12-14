import react from 'react';
import React, { useState } from 'react';

const AccordionMenu = ({ frequentlyAskedQuestionsArray }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const createCards = (data) => {
    const CardList = data.map(({ title, text, id }) => {
      let cardClass = id === activeIndex ? 'activeCard' : 'inactiveCard';
      let sign = id === activeIndex ? '-' : '+';
      return (
        <div
          onClick={() => setActiveIndex(id)}
          key={id}
          id={id}
          className='card'
        >
          <div>
            <h1 className='title'>{title}</h1>
            <p className={cardClass}>{text}</p>
          </div>
          <div>{sign}</div>
        </div>
      );
    });
    return CardList;
  };

  return (
    <div className='accordeonMenuContainer' id='faq'>
      <h1 className='askedQuestionsTitle'>FREQUENTLY ASKED QUESTIONS</h1>
      <div className='container'>
        {createCards(frequentlyAskedQuestionsArray)}
      </div>
    </div>
  );
};

export default AccordionMenu;
