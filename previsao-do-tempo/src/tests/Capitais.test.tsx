import { render, screen } from "@testing-library/react";
import Capitais from "../components/Capitais";

describe("O componente Capitais", () => {
  test("Deve renderizar as temperaturas mínimas e máximas corretamente", () => {
    const capitais = [
      { cidade: "Recife", tempMin: 23.4, tempMax: 30.0 },
      { cidade: "São Paulo", tempMin: 20.2, tempMax: 28.7 },
    ];
    render(<Capitais capitais={capitais} />);
    
    expect(screen.getByText("23°C")).toBeInTheDocument(); 
    expect(screen.getByText("30°C")).toBeInTheDocument();
  });

  test("Deve renderizar as temperaturas cidades corretamente", () => {
    const capitais = [
      { cidade: "Recife"},
      { cidade: "São Paulo"},
    ];
    render(<Capitais capitais={capitais} />);

    expect(screen.getByText("Recife")).toBeInTheDocument();
    expect(screen.getByText("São Paulo")).toBeInTheDocument();
  });

  test("Deve substituir valores undefined por 0", () => {
    const capitais = [
      { cidade: "Curitiba", tempMin: undefined, tempMax: 35 },
    ];
    render(<Capitais capitais={capitais} />);
    expect(screen.getByText("0°C")).toBeInTheDocument();
  });
});
