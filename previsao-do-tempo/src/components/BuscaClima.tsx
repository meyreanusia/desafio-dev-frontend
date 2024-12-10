import { Box, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { BuscaClimaProps } from "../interface";

const BuscaClima: React.FC<BuscaClimaProps> = ({ setCidade, clima, setError,}) => {
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    setCidade(event.target.value);
  };
  // Função para qd o usuário pressionar a tecla Enter
  const keyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      clima();
    }
  };

  return (
    <Box
      component="section"
      sx={{
        padding: "0",
        width: "100%",
        display: "flex",
        alignItems: "center",
        margin: "2rem 0",
        justifyContent: "space-between",
        "@media (min-width:600px)": {
          width: "550px",
          maxHeight: "200px",
        },
      }}
    >
      <Box
        component="input"
        onChange={handleChange}
        onKeyDown={keyPress}
        placeholder="Digite o nome da cidade"
        sx={{
          width: "80%",
          height: "40px",
          borderRadius: "10px",
          border: "1px solid #ccc",
          padding: "0 1rem",
          fontSize: "1.2rem",
          outline: "none",
          color: "white",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          "&::placeholder": {
            color: "rgba(255, 255, 255, 0.5)",
          },
          "&:focus": {
            borderColor: "#6f29e2",
          },
        }}
      />
      <IconButton
        onClick={clima}
        size="large"
        aria-label="search"
        color="secondary"
        sx={{
          width: "15%",
          color: "white",
          height: "40px",
          fontSize: "2.5rem",
          padding: "0",
          marginLeft: "0.5rem",
          justifyContent: "end",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderRadius: "10px",
          transition: "all 0.3s ease-in-out",
          display: "flex",
          alignItems: "center",
          WebkitJustifyContent: "center",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.2)",
          },
        }}
      >
        <SearchIcon fontSize="inherit" />
      </IconButton>
    </Box>
  );
};

export default BuscaClima;
