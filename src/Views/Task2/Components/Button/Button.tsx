
type ButtonType = "primary" | "secondary" | "tertiary" | "disabled";

interface ButtonProps {
  type?: ButtonType;
  label?: string;
  onClick?: () => void;
};

const defaultStyle: React.CSSProperties = {
  height: "40px",
  width: "120px",
  borderRadius: "3px",
  margin: "10px 40px",
  cursor: "pointer",
  border: "1px solid",
};

const primaryStyle: React.CSSProperties = {
  backgroundColor: "#F10E3B",
};

const secondaryStyle: React.CSSProperties = {
  backgroundColor: "#0EF1C4",
};

const tertiaryStyle: React.CSSProperties = {
  backgroundColor: "transparent",
  border: "none",
};

const disabledStyle: React.CSSProperties = {
  backgroundColor: "lightgrey",
  border: "none",
  cursor: "not-allowed"
};

const getStyles = (type: ButtonType) => {
  switch (type) {
    case "secondary":
      return { ...defaultStyle, ...secondaryStyle };

    case "tertiary":
      return { ...defaultStyle, ...tertiaryStyle };

    case "disabled":
      return { ...defaultStyle, ...disabledStyle };

    default:
      return { ...defaultStyle, ...primaryStyle };
  };
};

const Button: React.FC<ButtonProps> = ({
  type = "primary",
  label,
  onClick,
}) => {
  const style = getStyles(type);
  const handleOnClick = type === "disabled" ? undefined : onClick;

  return (
    <button style={style} onClick={handleOnClick}>
      <span className="btn-text">{label}</span>
    </button>
  );
};

export default Button;
