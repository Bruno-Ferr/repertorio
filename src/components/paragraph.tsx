import { useState } from 'react';
import './paragraph.css';

interface ParagraphProps {
  paragraph: string;
}

export default function Paragraph({paragraph}: ParagraphProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="paragraph"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p>{paragraph}</p>
      {isHovered && (
        <div className="paragraph-buttons">
          <button className="edit-button">Editar</button>
        </div>
      )}
    </div>
  );
};