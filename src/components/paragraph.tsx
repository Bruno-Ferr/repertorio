import './draftEditor.css';

interface ParagraphProps {
  paragraph: string;
}

export default function Paragraph({paragraph}: ParagraphProps) {
  return (
    <p className="paragraph">
      {paragraph}
    </p>
  )
}