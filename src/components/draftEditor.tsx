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
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  

  const handleAddParagraph = () => {
    if (newParagraph.trim()) {
      //Se tiver editando algum paragraph
      if (editingId !== null) {
        setParagraphs(paragraphs.map(p =>
          p.id === editingId ? { ...p, text: newParagraph.trim() } : p
        ));
        setEditingId(null);
      } else {
        setParagraphs([...paragraphs, {id: paragraphs.length, text: newParagraph.trim()}]);
      }
      setNewParagraph('');
    }
  };

  const handleSaveDraft = () => {
    setSavedNotification(true);
    setTimeout(() => setSavedNotification(false), 3000);
    //Executa chamada para a API salvar no banco de dados
  };

  const toggleInput = () => {
    setIsInputVisible(!isInputVisible);
  };

  const handleEditParagraph = (id: number, text: string) => {
    setNewParagraph(text);
    setEditingId(id); 
    setIsInputVisible(true);
  }
  

  return (
    <div className="editor-container">
      <div className="editor-card">
        <h1 className="editor-title">Rascunho</h1>

        {savedNotification && (
            <div className="success-message">
              <p>Rascunho salvo com sucesso!</p>
            </div>
          )}
        
        <div className="editor-content">
          {paragraphs.length > 0 && (
            <div className={`preview-card ${!isInputVisible ? "expanded-preview" : ""}`}>
              <div className="preview-content">
                {paragraphs.map((paragraph) => (
                  <Paragraph key={paragraph.id} paragraph={paragraph.text} id={paragraph.id} editParagraph={handleEditParagraph} />
                ))}
              </div>
            </div>
          )}

          <div className="toggle-button-container">
            <button className="button toggle-button" onClick={toggleInput}>
              {isInputVisible ? "Fechar" : "Abrir"}
            </button>
            {isInputVisible && (
              <textarea
                className="paragraph-input"
                placeholder="Digite seu parágrafo aqui..."
                value={newParagraph}
                onChange={(e) => setNewParagraph(e.target.value)}
              />
            )}
          </div>
          
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