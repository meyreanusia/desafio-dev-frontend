import { render, screen } from "@testing-library/react";
import PrevisaoProximosDias from "../components/PrevisaoProximosDias";

describe("O componente PrevisaoProximosDias", () => {
  test("Deve renderizar corretamente as previsões de cinco dias", () => {
    const previsaoCincoDias = [
      { dia: "Segunda", mes: "Jan", temperatura: 25, icone: "icone1.png" },
      { dia: "Terça", mes: "Jan", temperatura: 22, icone: "icone2.png" },
    ];
    render(<PrevisaoProximosDias previsaoCincoDias={previsaoCincoDias} />);

    expect(screen.getByText("Segunda Jan")).toBeInTheDocument();
    expect(screen.getByText("Terça Jan")).toBeInTheDocument();

    expect(screen.getByText("25°C")).toBeInTheDocument();
    expect(screen.getByText("22°C")).toBeInTheDocument();

    expect(
      screen.getByAltText("Ícone do tempo para Segunda")
    ).toBeInTheDocument();
    expect(
      screen.getByAltText("Ícone do tempo para Terça")
    ).toBeInTheDocument();
  });

  test("Deve exibir mensagem quando as previsões não estão disponíveis", () => {
    render(<PrevisaoProximosDias previsaoCincoDias={[]} />);
    expect(screen.getByText("Previsões não disponíveis")).toBeInTheDocument();
  });
});
