import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { Clima } from "../interface";
import SouthIcon from '@mui/icons-material/South';
import NorthIcon from '@mui/icons-material/North';
interface CapitaisProps {
  capitais: Clima[]; 
}
const Capitais = ({capitais}:CapitaisProps) => {
  return (
    <TableContainer component={Paper} sx={{ backgroundColor: "transparent", border: 'none', maxWidth: '550px',
      maxHeight: "330px" }}>
      <Table>
      <TableHead>
        <TableRow>
          <TableCell sx={{ fontSize: "1rem", border:'none', color: "#6f29e2", fontWeight: 'bold'}}> <SouthIcon sx={{ fontSize: "1rem", color: "#6f29e2" }}/> Min</TableCell>
          <TableCell sx={{ fontSize: "1rem", border:'none',color: "#6f29e2", fontWeight: 'bold' }} align="right"> <NorthIcon sx={{ fontSize: "1rem", color: "#6f29e2" }}/>Max</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {capitais.map((capital:Clima) => (
            <TableRow
              key={capital.cidade}
              sx={{'&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row" sx={{ fontSize: "1rem" }}>{capital.tempMin != undefined? Math.floor(capital.tempMin): 0}°C</TableCell>
              <TableCell align="right" sx={{ fontSize: "1rem" }}>{capital.tempMax != undefined? Math.floor(capital.tempMax) : 0}°C</TableCell>
              <TableCell align="right" sx={{ fontSize: "1rem" }}>{capital.cidade}</TableCell>
            </TableRow>
       ))}
      </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Capitais;
