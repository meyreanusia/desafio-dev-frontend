import { render, screen } from "@testing-library/react";
import PrevisaoTempo from "../components/PrevisaoTempo";

describe("Componente PrevisaoTempo", () => {
  const dadosClimaMock = {
    temperatura: 27,
    humidade: 60,
    cidade: "Joinville",
    condicaoClimatica: "Ensolarado",
    vento: 12,
    icone: "icone-ensolarado.png",
    tempMin: 20,
    tempMax: 30,
  };
  const previsaoCincoDiasMock = [
    { dia: "Segunda", mes: "Jan", temperatura: 25, icone: "icone1.png" },
    { dia: "Terça", mes: "Jan", temperatura: 22, icone: "icone2.png" },
  ];
  test("Deve renderizar os dados do clima corretamente", () => {
    render(
      <PrevisaoTempo
        dadosClima={dadosClimaMock}
        previsaoCincoDias={previsaoCincoDiasMock}
      />      
    );

    expect(screen.getByText("Joinville")).toBeInTheDocument();
    expect(screen.getByText("27°C")).toBeInTheDocument();
    expect(screen.getByText("Ensolarado")).toBeInTheDocument();
    expect(screen.getByText("60%")).toBeInTheDocument();
    expect(screen.getByText("12")).toBeInTheDocument();
    expect(screen.getByText("20Cº")).toBeInTheDocument();
    expect(screen.getByText("30°C")).toBeInTheDocument();
    expect(screen.getByAltText("")).toHaveAttribute(
        "src",
        "icone-ensolarado.png"
      );
  });

  test("Não deve renderizar nada se `dadosClima` for null", () => {
    render(<PrevisaoTempo dadosClima={null} previsaoCincoDias={[]} />);

    expect(screen.queryByText("Joinville")).not.toBeInTheDocument();
    expect(screen.queryByText("27°C")).not.toBeInTheDocument();
  });
});
