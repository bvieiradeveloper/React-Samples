function Button(props) {
  return <button onClick={props.changeState}>{props.label}</button>;
}

export default Button;
