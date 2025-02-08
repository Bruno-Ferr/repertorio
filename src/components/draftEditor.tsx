import { useState } from "react"
import './draftEditor.css';

export default function DraftEditor() {
  //input de texto/textField
  //Botão de adicionar parágrafo ao rascunho

  //Botão para salvar o rascunho atual

  //Renderize todos os parágrafos em uma área de visualização de texto
  const [paragraphs, setParagraphs] = useState<string[]>([]) //string + id
  const [newParagraph, setNewParagraph] = useState('');
  const [savedNotification, setSavedNotification] = useState(false);
  

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
            <div className="preview-card">
              <div className="preview-content">
                {paragraphs.map((paragraph, index) => (
                  <p key={index} className="paragraph">
                    {paragraph}
                  </p>
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