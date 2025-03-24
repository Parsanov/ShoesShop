import { Link } from "react-router-dom";
import "./login-panel.css";

const LoginPanel = () => {
  return (
    <div className="container">
      <div className="login-panel">
        <div className="login-form">
          <h3 className="login-panel-title">УВІЙТИ</h3>
          <form className="login-form-inputs">
            <div>
              <div>
                <input
                  type="text"
                  placeholder="Email"
                  className="login-form-input"
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="login-form-input"
                />
              </div>

              <div className="login-form-forgot-password">
                <a href="#">Забули пароль?</a>
              </div>
            </div>
            <div>
              <button className="login-form-button">УВІЙТИ</button>
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
