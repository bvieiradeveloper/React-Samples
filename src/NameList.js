function NameList(props) {
  const namesToRender = props.names.map((string, index) => (
    <li key={index}>{string}</li>
  ));

  return (
    <div className="textArea">
      <ul>{namesToRender}</ul>
    </div>
  );
}

export default NameList;
