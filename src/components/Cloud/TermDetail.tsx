import { useState } from 'react';
import './CloudConceptBenefits.css';

interface TermDetailProps {
  term: string;
  definition: string;
  additionalInfo?: string; 
}

const TermDetail: React.FC<TermDetailProps> = ({ term, definition, additionalInfo }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`termDetail ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
      <dt>{term} <span className="toggleIndicator">{isOpen ? '▲' : '▼'}</span></dt>
      {isOpen && (
        <dd>
          <p>{definition}</p>
          {additionalInfo && <p>{additionalInfo}</p>}
        </dd>
      )}
    </div>
  );
};

export default TermDetail;
