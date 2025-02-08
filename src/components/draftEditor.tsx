import { useState } from "react"
import './draftEditor.css';
import Paragraph from "./paragraph";

export default function DraftEditor() {
  //input de texto/textField
  //Botão de adicionar parágrafo ao rascunho

  //Botão para salvar o rascunho atual

  //Renderize todos os parágrafos em uma área de visualização de texto
  const [paragraphs, setParagraphs] = useState<string[]>([]) //string + id
  const [newParagraph, setNewParagraph] = useState('');
  const [savedNotification, setSavedNotification] = useState(false);
  const [isInputVisible, setIsInputVisible] = useState(false);
  

  const handleAddParagraph = () => {
    if (newParagraph.trim()) {
      setParagraphs([...paragraphs, newParagraph.trim()]);
      setNewParagraph('');
    }
  };

  const handleSaveDraft = () => {
    // Simulando salvamento
    setSavedNotification(true);
    setTimeout(() => setSavedNotification(false), 3000);
  };

  const toggleInput = () => {
    setIsInputVisible(!isInputVisible);
  };

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
                {paragraphs.map((paragraph, index) => (
                  <Paragraph key={index} paragraph={paragraph} />
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