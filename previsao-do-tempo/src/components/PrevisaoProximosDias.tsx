import Paper from "@mui/material/Paper";
import React from "react";
import { Box, Typography } from "@mui/material";
import { PrevisaoProximosDiasProps } from "../interface";

const PrevisaoProximosDias: React.FC<PrevisaoProximosDiasProps> = ({
  previsaoCincoDias,
}) => {
  return (
    <Box
      sx={{
        padding: "0.2rem",
        display: "flex",
        gap: "0.8rem",
        alignItems: "center",
        justifyContent: "space-around",
        marginTop: "1rem",
        overflowX: "auto",
        width: "100%",
        height: "150px",
        overflow: "scroll",
        whiteSpace: "nowrap",
        "&::-webkit-scrollbar": {
          display: "none",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        },
      }}
    >
      {previsaoCincoDias ? (
        previsaoCincoDias.map((previsao, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{
              margin: "0",
              height: '60px',
              padding: "0.8rem",
              width: "150px",
              background: "rgba(255, 255, 255, 0.2)",
              borderRadius: "10px",
              transition: "all 0.3s ease",
              "&:hover": {
                background: "rgba(138, 43, 226, 0.7)",
                transform: "scale(1.05)",
              },
            }}
          >
            <Typography variant="h6" fontSize={"1rem"}>
              {previsao.dia} {previsao.mes}
            </Typography>
            <Typography
              variant="body1"
              fontSize={"1rem"}
              color="#6f29e2"
              fontWeight={"bold"}
            >
              {previsao.temperatura !== undefined? Math.floor(previsao.temperatura) : 0}°C
            </Typography>
            <img
              src={previsao.icone}
              width={"40px"}
              alt={`Ícone do tempo para ${previsao.dia}`}
            />
          </Paper>
        ))
      ) : (
        <p>Previsões não disponíveis</p>
      )}
    </Box>
  );
};

export default PrevisaoProximosDias;
