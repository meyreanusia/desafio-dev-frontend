import { URL, ApiKey } from "../config/config";
import { Clima } from "../interface";

const buscarClimaVariasCidades = async (cidades: string[]): Promise<Clima[]> => {
  try {
    // Realiza as chamadas simultâneas para todas as capitais
    const respostas = await Promise.all(
      cidades.map(async (cidade) => {
        try {
          const resposta = await fetch(`${URL}${cidade}&units=metric&appid=${ApiKey}&lang=pt_br`);
          if (!resposta.ok) {
            if (resposta.status === 404) {
              console.log(`Cidade "${cidade}" não encontrada.`);
            }
            console.log(`Erro na API: ${resposta.statusText}`);
          }
          const data = await resposta.json();
          return {
            tempMin: data.main.temp_min,
            tempMax: data.main.temp_max,
            cidade: data.name,
          } as Clima;

        } catch (error) {
          console.error(`Erro ao buscar clima para "${cidade}":`, error);
          return null; 
        }
      })
    );
    console.log(respostas);
    return respostas.filter((res) => res !== null) as Clima[];
  } catch (error) {
    console.error("Erro geral ao buscar climas:", error);
    return [];
  }
};

export default buscarClimaVariasCidades;
