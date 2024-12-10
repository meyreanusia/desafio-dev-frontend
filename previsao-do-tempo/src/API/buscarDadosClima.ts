import { buscaInfoClima, buscaPrevisaoCincoDias } from "./Api";

const buscarDadosClima = async (cidade: string) => {
  try {
    const climaAtual = await buscaInfoClima(cidade);
    const previsaoCincoDias = await buscaPrevisaoCincoDias(cidade);
    if (climaAtual && previsaoCincoDias) {
      return {
        climaAtual,
        previsaoCincoDias
      };
    } else {
      return null;
    }
  } catch (error) {
    console.error("Erro ao buscar clima e previsão:", error);
    return null;
  }
};


export default buscarDadosClima;