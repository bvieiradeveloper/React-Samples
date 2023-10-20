function InputText(props) {
  return (
    <div>
      <input
        className="fullName"
        type="text"
        placeholder={props.text}
        value={props.value}
        onChange={(event) => {
          props.changeState(event.target.value);
        }}
      />
    </div>
  );
}

export default InputText;
