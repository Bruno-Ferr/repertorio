interface ParagraphProps {
  id: number;
  paragraph: string;
}

export default function Paragraph({id, paragraph}: ParagraphProps) {
  return (
    <p key={id} className="paragraph">
      {paragraph}
    </p>
  )
}