export interface Clima {
    temperatura: number,
    humidade: number,
    cidade: string,
    condicaoClimatica: string,
    vento: number,
    icone: string,
    tempMin: number,
    tempMax: number
}
export interface PrevisaoCincoDias {
    dia: string,
    mes: string,
    temperatura: number;
    icone: string;
}
export interface Previsao {
    dt_txt: string;
    main: {
        temp: number;
    };
    weather: [
        {
            icon: string;
        }
    ];
}
export interface PrevisaoTempoProps {
    dadosClima: Clima | null;
    previsaoCincoDias: PrevisaoCincoDias[] | null;
}
export interface PrevisaoProximosDiasProps {
    previsaoCincoDias: PrevisaoCincoDias[] | null;
}
export interface BuscaClimaProps {
    setCidade: (cidade: string) => void;
    clima: () => void;
    setError: (mensagem: string) => void;
}
