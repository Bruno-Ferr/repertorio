import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import DraftEditor from "../draftEditor.tsx";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";

describe("DraftEditor Component", () => {
  it("deve renderizar o componente corretamente", () => {
    render(<DraftEditor />);
    expect(screen.getByText("Redação")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Digite seu parágrafo aqui...")).toBeInTheDocument();
    expect(screen.getByText("Adicionar Parágrafo")).toBeInTheDocument();
    expect(screen.getByText("Salvar Rascunho")).toBeInTheDocument();
  });

  it("deve adicionar um novo parágrafo", () => {
    render(<DraftEditor />);
    
    const input = screen.getByPlaceholderText("Digite seu parágrafo aqui...") as HTMLTextAreaElement;
    const addButton = screen.getByText("Adicionar Parágrafo");

    fireEvent.change(input, { target: { value: "Este é um novo parágrafo." } });
    fireEvent.click(addButton);

    expect(screen.getByText("Este é um novo parágrafo.")).toBeInTheDocument();
    expect(input.value).toBe(""); // Deve resetar o campo de entrada
  });

  it("não deve adicionar parágrafos vazios", () => {
    render(<DraftEditor />);
    
    const addButton = screen.getByText("Adicionar Parágrafo");
    fireEvent.click(addButton);

    expect(screen.queryByText("Este é um novo parágrafo.")).not.toBeInTheDocument();
  });

  it("deve exibir a notificação ao salvar o rascunho", async () => {
    render(<DraftEditor />);
    
    const saveButton = screen.getByText("Salvar Rascunho");
    fireEvent.click(saveButton);

    expect(screen.getByText("Rascunho salvo com sucesso!")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText("Rascunho salvo com sucesso!")).not.toBeInTheDocument();
    }, { timeout: 4000 });
  });
});
