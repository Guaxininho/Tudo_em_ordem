import { useState } from "react";
import "./Card.scss";
import lapis from "./lapis.png";
import lixeira from "./lixeira.png";
import salvar from "./salvar.png";

interface CardProps {
    nome: string;
    descricao: string;
}

function Card(props: CardProps) {
    const [modoEdicao, setModoEdicao] = useState(false);
    const [nomeEditavel, setNomeEditavel] = useState(props.nome);
    const [descricaoEditavel, setDescricaoEditavel] = useState(props.descricao);

    const handleLapisClick = () => {
        setModoEdicao(true);
    };

    const handleNomeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNomeEditavel(event.target.value);
    };

    const handleDescricaoChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setDescricaoEditavel(event.target.value);
    };

    const handleSalvarClick = () => {
        // Aqui você pode fazer qualquer ação necessária para salvar a descrição
        // Por exemplo, enviar uma requisição HTTP para atualizar os dados no servidor
        // ou chamar uma função passada como prop para atualizar o estado no componente pai
        // Neste exemplo, apenas atualizamos o estado do modo de edição
        setModoEdicao(false);
    };
    return (
        <figure className="Card">
            {modoEdicao ? (
                <input
                    className="edicaoTitulo"
                    type="text"
                    value={nomeEditavel}
                    onChange={handleNomeChange}
                    autoFocus
                />
            ) : (
                <h1>{nomeEditavel}</h1>
            )}
            {modoEdicao ? (
                <textarea
                    className="edicaoDescricao"
                    value={descricaoEditavel}
                    onChange={handleDescricaoChange}
                />
            ) : (
                <p>{descricaoEditavel}</p>
            )}
            <div className="flexBotaoCard">
                {modoEdicao ? (
                    <button onClick={handleSalvarClick}>
                        <img src={salvar} alt="Salvar" />
                    </button>
                ) : (
                    <button onClick={handleLapisClick}>
                        <img src={lapis} alt="Editar" />
                    </button>
                )}
                <button>
                    <img src={lixeira} alt="Excluir" />
                </button>
            </div>
        </figure>
    );
}

export default Card;
