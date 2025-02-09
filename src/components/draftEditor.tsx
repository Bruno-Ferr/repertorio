import { useState } from "react"
import './draftEditor.css';
import Paragraph from "./paragraph";

interface ParagraphProps {
  id: number;
  text: string;
}

export default function DraftEditor() {
  const [paragraphs, setParagraphs] = useState<ParagraphProps[]>([])
  const [newParagraph, setNewParagraph] = useState('');
  const [savedNotification, setSavedNotification] = useState(false);
  
  //Adiciona novo parágrafo a lista
  const handleAddParagraph = () => {
    if (newParagraph.trim()) {
      setParagraphs([...paragraphs, {id: paragraphs.length, text: newParagraph.trim()}]);
      setNewParagraph('');
    }
  };

  const handleSaveDraft = () => {
    setSavedNotification(true);
    setTimeout(() => setSavedNotification(false), 3000);
    //Chama API para salvar no banco de dados
  };

  return (
    <div className="editor-container">
      <div className="editor-card">
        <h1 className="editor-title">Redação</h1>

        {savedNotification && (
            <div className="success-message">
              <p>Rascunho salvo com sucesso!</p>
            </div>
          )}
        
        <div className="editor-content">
          {paragraphs.length > 0 && (
            <div className="preview-card">
              <div className="preview-content">
                {paragraphs.map((paragraph) => (
                  <Paragraph key={paragraph.id} id={paragraph.id} paragraph={paragraph.text} />
                ))}
              </div>
            </div>
          )}

          <textarea
            className="paragraph-input"
            placeholder="Digite seu parágrafo aqui..."
            value={newParagraph}
            onChange={(e) => setNewParagraph(e.target.value)}
          />
          
          <div className="button-group">
            <button 
              className="button primary-button"
              onClick={handleAddParagraph}
            >
              Adicionar Parágrafo
            </button>
            <button 
              className="button secondary-button"
              onClick={handleSaveDraft}
            >
              Salvar Rascunho
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}