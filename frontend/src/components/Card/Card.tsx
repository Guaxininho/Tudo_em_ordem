import React, { KeyboardEvent } from "react";
import { useState } from "react";
import "./Card.scss";
import lapis from "./lapis.png";
import lixeira from "./lixeira.png";
import salvar from "./salvar.png";
import axiosClient from "../../axios-client";

interface CardProps {
    id: number;
    nome: string;
    descricao: string;
    onSalvarClick?: () => void;
    func: any;
    att: any;
    del: any;
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
        const data = {
            item: {
                nome: nomeEditavel,
                descricao: descricaoEditavel,
            },
        };

        axiosClient
            .put(`item/${props.id}`, data)
            .then(() => {
                console.log("Atualizado com sucesso");
                props.att();
                props.func();
            })
            .catch((error) => {
                console.error("Erro ao tentar atualizar:", error);
            });
        // Aqui você pode fazer qualquer ação necessária para salvar a descrição
        // Por exemplo, enviar uma requisição HTTP para atualizar os dados no servidor
        // ou chamar uma função passada como prop para atualizar o estado no componente pai
        // Neste exemplo, apenas atualizamos o estado do modo de edição
        setModoEdicao(false);
    };

    const handleDeleteClick = () => {
        axiosClient
            .delete(`item/${props.id}`)
            .then(() => {
                console.log("Deletado com sucesso");
                props.del();
                props.func();
            })
            .catch((error) => {
                console.error("Erro ao tentar deletar:", error);
            });
    };

    const enterPressionado = (
        e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        if (e.key === "Enter") {
            handleSalvarClick();
        }
    };
    return (
        <figure className="Card">
            {modoEdicao ? (
                <input
                    onKeyDown={enterPressionado}
                    className="edicaoTitulo"
                    type="text"
                    placeholder="Digite seu novo título aqui e clique na imagem do disquete para atualizar"
                    value={nomeEditavel}
                    onChange={handleNomeChange}
                    autoFocus
                />
            ) : (
                <h1>{nomeEditavel}</h1>
            )}
            {modoEdicao ? (
                <textarea
                    onKeyDown={enterPressionado}
                    rows={1}
                    placeholder="Digite sua nova descrição aqui e clique na imagem do disquete para atualizar"
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
                <button onClick={handleDeleteClick}>
                    <img src={lixeira} alt="Excluir" />
                </button>
            </div>
        </figure>
    );
}

export default Card;
