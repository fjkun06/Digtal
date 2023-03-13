export default function ReusableTextField({
  errorText,
  errorState,
  id,
  fieldName,
  sup,field
}) {
  return (
    <div className="textfield">
      <div className={errorState ? "input problem" : "input"}>
        <label htmlFor={id}>
          <span>
            {fieldName} {sup && <sup>*</sup>}
          </span>
          <input type="text" id={id} {...field} />
        </label>
      </div>
      {errorState && <span id="component-helper-text">{errorText}</span>}
    </div>
  );
}
