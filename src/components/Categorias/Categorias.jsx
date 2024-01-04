import { categorias } from "../../data/categorias";
import {
  CategoriasContainer,
  CategoriasWrapper,
  EstiloH2Titulo,
} from "./CategoriasStyles";
import Categoria from "./Categoria";

function Categorias() {
  return (
    <CategoriasWrapper>
      <EstiloH2Titulo>
        <h2>Diferentes Productos</h2>
      </EstiloH2Titulo>
      <CategoriasContainer>
        {/* //usar... para traer todo el array */}
        {categorias.map((cat) => (
          <Categoria key={cat.id} {...cat} />
        ))}
      </CategoriasContainer>
    </CategoriasWrapper>
  );
}

export default Categorias;
