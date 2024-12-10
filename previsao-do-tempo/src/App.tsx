import React, { useEffect, useState } from "react";
import "./App.css";
import { Box, Typography } from "@mui/material";
import BuscaClima from "./components/BuscaClima";
import PrevisaoTempo from "./components/PrevisaoTempo";
import buscarClimaVariasCidades from "./API/ApiCapitais";
import buscarDadosClima from "./API/buscarDadosClima";
import { Clima, PrevisaoCincoDias } from "./interface";
import Capitais from "./components/Capitais";

function App() {
  const [cidade, setCidade] = useState<string>("");
  const [dadosClima, setDadosClima] = useState<Clima | null>(null);
  const [previsaoCincoDias, setPrevisaoCincoDias] = useState<PrevisaoCincoDias[] | null>(null);
  const [error, setError] = useState<string>("");
  const [capitais, setCapitais] = useState<Clima[]>([]);

  const cidades = [
    "Recife",
    "São Paulo",
    "Curitiba",
    "Rio de Janeiro",
    "Florianópolis",
    "Maceió",
  ];

  useEffect(() => {
    const fetchCapitais = async () => {
      try {
        const capitaisData = await buscarClimaVariasCidades(cidades);
        setCapitais(capitaisData);
      } catch (error) {
        console.error("Erro ao buscar capitais:", error);
      }
    };
    fetchCapitais();
  }, []);

  // Busca os dados na API
  const clima = async () => {
    try {
      const climaApi = await buscarDadosClima(cidade);
      if (climaApi && climaApi.climaAtual && climaApi.previsaoCincoDias) {
        setDadosClima(climaApi.climaAtual);
        setPrevisaoCincoDias(climaApi.previsaoCincoDias);
      } else {
        setError("Cidade não encontrada. Por favor, tente novamente!");
      }
    } catch (error) {
      console.error("Erro ao buscar o clima:", error);
    }
  };

  return (
    <Box
      className="App"
      sx={{
        display: "flex",
        padding: "2rem 2rem",
        flexDirection: "column",
        alignItems: "center",
        background: "linear-gradient(180deg, #7267ea 0%, #8dd0f5 100%)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        width: "100vw",
        minHeight: "100vh",
        boxSizing: "border-box",
      }}
    >
      <Box
        width={"100%"}
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ textAlign: "center", padding: "1rem" }}
          variant="h1"
          component={"h1"}
        >
          Previsão do tempo
        </Typography>
        <BuscaClima setCidade={setCidade} clima={clima} setError={setError} />

        {error && (
          <Typography
            sx={{
              color: "text.secondary",
              fontSize: "1.2rem",
              marginBottom: "2rem",
              "@media (min-width:600px)": {
                fontSize: "1.4rem",
              },
            }}
          >
            {error}
          </Typography>
        )}
        <PrevisaoTempo
          dadosClima={dadosClima}
          previsaoCincoDias={previsaoCincoDias}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "@media (min-width:600px)": {
              width: "550px",
            },
          }}
        >
          <Typography
            sx={{ marginBottom: "2rem", fontWeight: "700" }}
            variant="h2"
            component={"h2"}
          >
            Capitais
          </Typography>
        </Box>

        {capitais.length > 0 ? (
          <Capitais capitais={capitais} />
        ) : (
          <Typography>Carregando as principais Capitais...</Typography>
        )}
      </Box>
    </Box>
  );
}

export default App;
