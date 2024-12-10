import { ApiKey, URL, URLPrevisaoCincoDias } from "../config/config";
import { Clima, Previsao } from "../interface";

// funçao que pega a previsão atual
const buscaInfoClima = async (cidade: string): Promise <Clima | null> => {
  try {
    const buscaClima = await fetch(`${URL}${cidade}&units=metric&appid=${ApiKey}&lang=pt_br`);
    if (!buscaClima.ok) {
        console.log(`Cidade "${cidade}" não encontrada.`);
        return null
    }
    const data = await buscaClima.json();
    const clima = {
      tempMin: data.main.temp_min,
      tempMax: data.main.temp_max,
      temperatura: data.main.temp,
      humidade: data.main.humidity,
      cidade: data.name,
      condicaoClimatica: data.weather[0].description,
      vento: data.wind.speed,
      icone: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
    };
    return clima;
  } catch (error) {
    console.log("Erro ao buscar informações climáticas:");
    return null
  }

};

// funçao que pega o previsao dos proximos 5 dias 
const buscaPrevisaoCincoDias = async (cidade: string) => {
  try {
    const buscaClima = await fetch(
      `${URLPrevisaoCincoDias}${cidade}&units=metric&appid=${ApiKey}&lang=pt_br`
    );

    if (!buscaClima.ok) {
      if (buscaClima.status === 404) {
        console.log(`Cidade "${cidade}" não encontrada.`);
        return null
      }
      console.log(`Erro ao buscar clima atual: ${buscaClima.statusText}`);
      return null
    }

    const data = await buscaClima.json();
    const climaHora = '12:00:00'
    const dataAtual = new Date().toISOString().split('T')[0]

    const previsoes: Array<{
      dia: string;
      mes: string;
      temperatura: number;
      icone: string;
    }> = [];

    // filtra apenas as previsoes dàs 12:00H
    data.list.forEach((previsao: Previsao) => {
      if (previsao.dt_txt.includes(climaHora) && !previsao.dt_txt.includes(dataAtual)) {
        const dataPrevisao = new Date(previsao.dt_txt);
        const newPrevisao = {
          dia: dataPrevisao.toLocaleDateString("pt-BR", { day: "2-digit" }),
          mes: dataPrevisao.toLocaleDateString("pt-BR", { month: "short" }).replace(".", ""),
          temperatura: previsao.main.temp,
          icone: `https://openweathermap.org/img/wn/${previsao.weather[0].icon}.png`
        }

        // Add a previsão ao Array
        previsoes.push(newPrevisao);
      }
    });
    return previsoes

  } catch (error) {
    if (error instanceof Error) {
      console.error("Erro ao buscar previsão de 5 dias:", error.message);
    } else {
      console.error("Erro desconhecido ao buscar previsão de 5 dias:", error);
    }
    return null;
  }
}

export { buscaInfoClima, buscaPrevisaoCincoDias }


