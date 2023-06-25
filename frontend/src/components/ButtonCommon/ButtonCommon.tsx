import "./ButtonCommon.scss";

interface ButtonCommonProps {
  conteudo: string;
  largura: string;
}

function ButtonCommon(props: ButtonCommonProps) {
  return (
    <button style={{ width: props.largura }} className="buttonVamos">
      {props.conteudo}
    </button>
  );
}

export default ButtonCommon;
