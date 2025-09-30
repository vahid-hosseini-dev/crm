function FormInput({ name, label, type, value, onChange }) {
  return (
    <div className="form-input">
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} value={value} onChange={onChange}></input>
    </div>
  );
}

export default FormInput;
