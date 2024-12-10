import { Card, CardContent, Typography, Box } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import AirIcon from "@mui/icons-material/Air";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import PrevisaoProximosDias from "./PrevisaoProximosDias";
import { PrevisaoTempoProps } from "../interface";

const PrevisaoTempo: React.FC<PrevisaoTempoProps> = ({
  dadosClima,
  previsaoCincoDias,
}) => {
  const {
    temperatura,
    humidade,
    cidade,
    condicaoClimatica,
    vento,
    icone,
    tempMin,
    tempMax,
  } = dadosClima || {};

  // Data atual
  const dataHoje = new Date();
  const formatoData = dataHoje.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
  const dataFormatada = formatoData;
  if (!dadosClima) {
    return null;
  }

  return (
    <Card
      sx={{
        boxSizing: "border-box",
        background: "rgba(255, 255, 255, 0.6)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        borderRadius: "20px",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        width: "100%",
        height: "100%",
        maxHeight: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
        // Media query para telas maiores
        "@media (min-width:600px)": {
          maxWidth: "550px",
          maxHeight: "330px",
        },
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          alignContent: "center",
          width: "100%",
          gap: "0.5rem",
          boxSizing: "content-box",
          padding: "0.1rem",
          "@media (min-width:600px)": {
            maxWidth: "550px",
            maxHeight: "300px",
          },
        }}
      >
        <Typography sx={{ color: "text.secondary", fontSize: "1.4rem", marginTop: '1rem'}}>
          {dataFormatada}
        </Typography>

        <Box
          sx={{
            height: 'o auto',
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            padding: "0",
          }}
        >
          <LocationOnIcon sx={{ fontSize: "1.4rem", color: "#6f29e2" }} />
          <Typography
            variant="h5"
            component="div"
            sx={{
              color: "text.secondary",
              fontSize: "1.4rem",
              marginRight: "1rem",
            }}
          >
            {cidade}
          </Typography>

          <Typography
            sx={{
              fontSize: "5rem",
              fontWeight: "bold",
              color: "transparent",
              background: "linear-gradient(145deg, #6f29e2, #9b67f5)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              textFillColor: "transparent",
              WebkitTextFillColor: "transparent",
            }}
          >
            {temperatura !== undefined ? Math.floor(temperatura) : 0}°C
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", fontSize: "1.4rem" }}
          >
            {condicaoClimatica}
          </Typography>

          <img src={icone} alt="" />
        </Box>

        <Box
          sx={{
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.5rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.2rem",
              flex: 1,
            }}
          >
            <DeviceThermostatIcon sx={{ fontSize: "1.4rem", color: "blue" }} />
            <Typography
              variant="body2"
              sx={{ fontSize: "1.4rem", fontWeight: "600", color: "#6f29e2" }}
            >
              {tempMin !== undefined ? Math.floor(tempMin) : 0}Cº
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.2rem",
              flex: 1,
            }}
          >
            <DeviceThermostatIcon sx={{ fontSize: "1.4rem", color: "red" }} />
            <Typography
              variant="body2"
              sx={{ fontSize: "1.4rem", fontWeight: "600", color: "#6f29e2" }}
            >
              {tempMax !== undefined ? Math.floor(tempMax) : 0}°C
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.2rem",
              flex: 1,
            }}
          >
            <WaterDropIcon sx={{ fontSize: "1.4rem", color: "#6f29e2" }} />
            <Typography
              variant="body2"
              sx={{ fontSize: "1.4rem", fontWeight: "600", color: "#6f29e2" }}
            >
              {humidade}%
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.2rem",
              flex: 1,
            }}
          >
            <AirIcon sx={{ fontSize: "1.4rem", color: "#6f29e2" }} />
            <Typography
              variant="body2"
              sx={{ fontSize: "1.4rem", fontWeight: "600", color: "#6f29e2" }}
            >
              {vento}
            </Typography>
          </Box>
        </Box>
        <PrevisaoProximosDias previsaoCincoDias={previsaoCincoDias} />
      </CardContent>
    </Card>
  );
};

export default PrevisaoTempo;
