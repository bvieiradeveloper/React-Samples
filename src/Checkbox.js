export function Checkbox(props) {
  return (
    <div className="checkbox">
      <input
        type="checkbox"
        checked={props.isChecked}
        onChange={(e) => props.setIsChecked(e.target.checked)}
        id="counter"
        name="counter"
      />
      <label for="counter">Show number of registers</label>
    </div>
  );
}

export default Checkbox;
