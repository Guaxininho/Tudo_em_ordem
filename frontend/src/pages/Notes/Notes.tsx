import React, { useEffect } from "react";
import "./Notes.scss";
import ButtonCommon from "../../components/ButtonCommon/ButtonCommon";
import Card from "../../components/Card/Card";
import { FormEvent, useRef, useState } from "react";
import axiosClient from "../../axios-client.ts";
import Notificacao from "../../components/Notificacao/Notificacao.tsx";

interface Item {
    id: number;
    nome: string;
    descricao: string;
}

function Notes() {
    // Criação de itens (create)
    //================================================================

    // Controle de estado do nome e descrição da criação
    const [nomeValor, setNomeValor] = useState("");
    const [descValor, setDescValor] = useState("");

    const [caractereRestanteNome, setCaractereRestanteNome] = useState(57);
    const [caractereRestanteDescricao, setCaractereRestanteDescricao] =
        useState(88);

    // Aqui eu criei separado uma função que seta o valor para o atual valor digitado, ela é disparada sempre que tem mudanças com o evento onchange. Sem ela seria impossível digitar no campo do formulário, já que a variável lá é um state que não mudaria o valor
    const nomeMudanca = (evento: React.ChangeEvent<HTMLInputElement>) => {
        setNomeValor(evento.target.value);
        setCaractereRestanteNome(57 - evento.target.value.length);
    };
    const descMudanca = (evento: React.ChangeEvent<HTMLInputElement>) => {
        setDescValor(evento.target.value);
        setCaractereRestanteDescricao(88 - evento.target.value.length);
    };
    // Aqui estou guardando em uma variável react o campo nome do formulário e o de descrição, a ideia é usar como usaria o DOM. Se eu fizesse isso aqui com useState (que também dá pra fazer), ficaria mais pesado porque ia medir cada atualização, já esse vai ser usado só quando enviar.
    const nomeRef = useRef<HTMLInputElement>(null);
    const descricaoRef = useRef<HTMLInputElement>(null);

    const submit = (evento: FormEvent) => {
        evento.preventDefault(); // prevenindo que ele atualize a página que é o comportamento padrão
        if (nomeRef.current && descricaoRef.current) {
            // aqui eu salvo os valores digitados nos campos depois de conferir que eles existem, mais tarde vou enviar essa variável dados para a database através de um post
            const dados = {
                item: {
                    nome: nomeRef.current.value,
                    descricao: descricaoRef.current.value,
                },
            };
            setNomeValor(""); // setando o valor do campo nome para vazio, para limpar o campo depois do botão ser pressionado
            setDescValor(""); // setando o valor do campo desc para vazio, para limpar o campo depois do botão ser pressionado
            axiosClient
                .post("item/store", dados)
                .then((response) => {
                    console.log("Foi postado com sucesso!", response);
                    notificandoPost();
                    renderizandoItems();
                })
                .catch((error) => {
                    console.error("Erro ao tentar fazer o post:", error);
                });
        }
    };

    // Leitura e renderização dos itens em cards (read)
    //================================================================
    const [items, setItems] = useState<Item[]>([]);
    const [carregando, setCarregando] = useState(true); // Estado para controlar o carregamento dos dados

    const renderizandoItems = () => {
        axiosClient
            .get("items")
            .then((response) => {
                setItems(response.data);
                setCarregando(false); // Definindo o estado de carregamento como false após a obtenção dos dados
            })
            .catch((error) => {
                console.error("Erro ao tentar coletar items:", error);
                setCarregando(false); // Estado de carregamento como false se der erro também
            });
    };

    useEffect(() => {
        renderizandoItems();
    }, []);

    // Atualização e exclusão estão no componente Card (update, delete)
    // Lógica para notificações que vem dos filhos
    //================================================================
    const [notificacaoPost, setnotificacaoPost] = useState(false);
    const [notificacaoAtt, setnotificacaoAtt] = useState(false);
    const [notificacaoDel, setnotificacaoDel] = useState(false);

    const notificandoPost = () => {
        setnotificacaoPost(true);
        setTimeout(() => {
            setnotificacaoPost(false);
        }, 5000);
    };

    const notificandoAtt = () => {
        setnotificacaoAtt(true);
        setTimeout(() => {
            setnotificacaoAtt(false);
        }, 5000);
    };

    const notificandoDel = () => {
        setnotificacaoDel(true);
        setTimeout(() => {
            setnotificacaoDel(false);
        }, 5000);
    };

    return (
        <div className="paginaCompleta">
            {notificacaoPost ? (
                <Notificacao
                    mensagem="Post criado com sucesso!"
                    cor="#e03131"
                />
            ) : undefined}
            {notificacaoAtt ? (
                <Notificacao
                    mensagem="Post atualizado com sucesso!"
                    cor="#e03131"
                />
            ) : undefined}
            {notificacaoDel ? (
                <Notificacao
                    mensagem="Post deletado com sucesso!"
                    cor="#e03131"
                />
            ) : undefined}
            <form onSubmit={submit} className="novoFormulario" action="">
                <div className="formRelative">
                    <input
                        maxLength={57}
                        value={nomeValor}
                        ref={nomeRef}
                        onChange={nomeMudanca}
                        placeholder="Escreva um nome para a tarefa"
                        type="text"
                    />
                    <p className="numeroMaximo">{caractereRestanteNome}</p>
                </div>
                <div className="formRelative">
                    <input
                        maxLength={88}
                        value={descValor}
                        ref={descricaoRef}
                        onChange={descMudanca}
                        placeholder="Descreva como gostaria de ser lembrado desta tarefa"
                        type="text"
                    />
                    <p className="numeroMaximo">{caractereRestanteDescricao}</p>
                </div>

                <div className="botoesForm">
                    <ButtonCommon conteudo="fechar" largura="50%" />
                    <ButtonCommon conteudo="postar" largura="50%" />
                </div>
            </form>
            {carregando ? (
                <div>Carregando...</div>
            ) : (
                items.map((item) => (
                    <Card
                        id={item.id}
                        key={item.id}
                        nome={item.nome}
                        descricao={item.descricao}
                        func={renderizandoItems}
                        att={notificandoAtt}
                        del={notificandoDel}
                    />
                ))
            )}
        </div>
    );
}

export default Notes;
