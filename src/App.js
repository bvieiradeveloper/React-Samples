import { useEffect, useState } from "react";
import Button from "./Button";
import InputText from "./InputText";
import Checkbox from "./Checkbox";
import NameList from "./NameList";
import Body from "./Body";

function Render() {
  const [fullName, setFullName] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    window.alert("Application ready");
  }, []);

  useEffect(() => {
    window.alert(
      isChecked ? "Show amount of registers" : "Hidden amount of registers"
    );
  }, [isChecked]);

  const handleFirstName = (prop) => {
    setFirstName(prop);
  };

  const handleLastName = (prop) => {
    setLastName(prop);
  };

  const handleSave = () => {
    if (firstName === "" || lastName === "") {
      window.alert("Must to insert first and last name");
      return;
    }

    const name = [...fullName, firstName + " " + lastName + "\n"];
    setFullName(name);
    handleFirstName("");
    handleLastName("");
  };
  const handleClear = () => {
    setFullName([]);
  };

  const renderButtons = () => {
    return fullName.length > 0 ? (
      <div className="buttons">
        <Button label="Save" changeState={handleSave} />
        <Button label="Clear" changeState={handleClear} />
      </div>
    ) : (
      <div className="buttons">
        <Button label="Save" changeState={handleSave} />
      </div>
    );
  };

  return (
    <Body
      title={`Add names`}
      registersCount={isChecked ? fullName.length.toString() : ""}
    >
      <div className="inputText">
        <InputText
          text={"first name"}
          value={firstName}
          changeState={handleFirstName}
        />
        <InputText
          text={"last name"}
          value={lastName}
          changeState={handleLastName}
        />
      </div>
      {renderButtons()}
      <NameList names={fullName} />
      <Checkbox isChecked={isChecked} setIsChecked={setIsChecked} />
    </Body>
  );
}

export default Render;
