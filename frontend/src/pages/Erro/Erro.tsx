import "./Erro.scss";
import estudante from "./naoexiste.png";

function Erro() {
  return (
    <div className="Erro">
      <p>404: Tarefa não encontrada. Sugerimos procurar debaixo da pilha de papéis ou invocar a magia do Ctrl+Z!</p>
      <img className="estudante" src={estudante} />
    </div>
  );
}

export default Erro;
