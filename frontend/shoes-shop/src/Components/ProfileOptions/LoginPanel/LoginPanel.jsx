import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Components/AuthContext/AuthContext.jsx";
import "./login-panel.css";

const LoginPanel = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({ email: formData.email, password: formData.password });
      setError(null);
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="container">
      <div className="login-panel">
        <div className="login-form">
          <h3 className="login-panel-title">УВІЙТИ</h3>
          <form className="login-form-inputs" onSubmit={handleSubmit}>
            <div>
              <div>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="login-form-input"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="login-form-input"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              {error && <div className="login-form-error">{error}</div>}

              <div className="login-form-forgot-password">
                <a href="#">Забули пароль?</a>
              </div>
            </div>
            <div>
              <button type="submit" className="login-form-button">
                УВІЙТИ
              </button>
            </div>
          </form>

          <div className="login-form-register">
            <span>Ще не зареєстровані?</span>
            <Link to={"/profileReg"}>Зареєструватися</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPanel;
