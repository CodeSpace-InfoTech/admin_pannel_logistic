const RememberMeCheckbox = ({ checked, onChange }) => (
  <div className="col-6">
    <div className="checkbox">
      <input
        type="checkbox"
        id="basic_checkbox_1"
        name="rememberMe"
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor="basic_checkbox_1">Remember Me</label>
    </div>
  </div>
);

export default RememberMeCheckbox;
