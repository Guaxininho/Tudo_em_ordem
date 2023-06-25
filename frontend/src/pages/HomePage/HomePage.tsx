import ButtonCommon from "../../components/ButtonCommon/ButtonCommon";
import "./HomePage.scss";
import logo from "./logo.png";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="gridInicial">
      <h1>Tudo em ordem</h1>
      <p>
        Bem-vindo ao "Tudo em Ordem"! O nosso site é a solução perfeita para
        organizar suas tarefas de forma simples e eficiente. Com recursos de
        criação, leitura, atualização e exclusão de tarefas, você terá o
        controle total sobre sua lista de afazeres. <br />
        <br />
        Essas informações ajudarão você a manter um registro claro de tudo o que
        precisa ser feito. Nossa interface intuitiva e amigável torna o processo
        de adicionar tarefas uma tarefa simples em si. Não se preocupe em perder
        o controle das suas tarefas. Vamos começar?
      </p>
      <Link to="/notes">
        <ButtonCommon conteudo="Vamos!" largura="100%" />
      </Link>
      <img className="logoHome" src={logo} />
    </div>
  );
}

export default HomePage;
