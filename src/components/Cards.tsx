import React from 'react';
import './Card.css';

interface CardProps {
    title: string;
    description: string;
    examples: string;
    advantages: string;
    disadvantages: string;
    providerResponsibility: string;
    consumerResponsibility: string;
    imageUrl: string;
  }
  

  const Card: React.FC<CardProps> = ({
    title,
    description,
    examples,
    advantages,
    disadvantages,
    providerResponsibility,
    consumerResponsibility,
    imageUrl,
  }) => {
    return (
      <div className='card'>
        <h3 className='cardTitle'>{title}</h3>
        <img src={imageUrl} alt={title} />
        <div className='cardBottom'>
            <div>
            <p>{description}</p>
            <p><strong>Analogi:</strong> {examples}</p>
            <p><strong>Fordele:</strong> {advantages}</p>
            <p><strong>Ulemper:</strong> {disadvantages}</p>
            </div>
            <div className="responsibilityChart">
            <div className='udbyder'><strong>Udbyderens ansvar:</strong> {providerResponsibility}</div>
            <div className='brugerAnsvar'><strong>Brugerens ansvar:</strong> {consumerResponsibility}</div>
            </div>
        </div>
      </div>
    );
  };
  

export default Card;
