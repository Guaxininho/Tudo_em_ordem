import "./Notificacao.scss";

interface NotificacaoProps {
    mensagem: string;
    cor: string;
}

function Notificacao(props: NotificacaoProps) {
    return (
        <figure
            className="Notificacao"
            style={{ backgroundColor: `${props.cor}` }}
        >
            <h1>{props.mensagem}</h1>
        </figure>
    );
}

export default Notificacao;
