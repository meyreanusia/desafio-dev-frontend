import { fireEvent, render, screen } from "@testing-library/react";
import BuscaClima from "../components/BuscaClima";

describe("Componente BuscarClima", () => {
  test("deve renderizar corretamente o input", () => {
    render(
      <BuscaClima
        setCidade={jest.fn()}
        setError={jest.fn()}
        clima={jest.fn()}
      />
    );
    const input = screen.getByPlaceholderText("Digite o nome da cidade");
    expect(input).toBeInTheDocument();
  });

  test("deve renderizar corretamente o botão", () => {
    render(
      <BuscaClima
        setCidade={jest.fn()}
        setError={jest.fn()}
        clima={jest.fn()}
      />
    );
    const button = screen.getByRole("button", { name: /search/i });
    expect(button).toBeInTheDocument();
  });

  test("Deve chamar a função clima ao pressionar Enter", () => {
    const climaMock = jest.fn();
    render(
      <BuscaClima
        setCidade={jest.fn()}
        setError={jest.fn()}
        clima={climaMock}
      />
    );
    const input = screen.getByPlaceholderText("Digite o nome da cidade");
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });
    expect(climaMock).toHaveBeenCalled();
  });

  test("Deve chamar a função clima ao clicar no Botão de busca", () => {
    const climaMock = jest.fn();
    render(
      <BuscaClima
        setCidade={jest.fn()}
        setError={jest.fn()}
        clima={climaMock}
      />
    );
    const button = screen.getByRole("button", { name: /search/i });
    fireEvent.click(button);
    expect(climaMock).toHaveBeenCalled();
  });
});
