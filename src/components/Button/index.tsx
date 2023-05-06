import "./styles.css";

type Props = {
  name: string;
};

const Button = ({ name }: Props) => {
  return <button className="btn">{name}</button>;
};

export default Button;
