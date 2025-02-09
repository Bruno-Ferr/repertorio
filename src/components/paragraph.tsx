import { useState } from 'react';
import './paragraph.css';

interface ParagraphProps {
  id: number;
  paragraph: string;
  editParagraph: (id: number, text: string) => void;
}

export default function Paragraph({id, paragraph, editParagraph}: ParagraphProps) {
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
          <button className="edit-button" onClick={() => editParagraph(id, paragraph)}>Editar</button>
        </div>
      )}
    </div>
  );
};