import { Link } from "react-router-dom";
import "./register-panel.css";

const RegisterPanel = () => {
  return (
    <div className="container">
      <div className="reg-panel">
        <div className="reg-form">
          <h3 className="reg-panel-title">РЕЄСТРАЦІЯ</h3>
          <form className="reg-form-inputs">
            <div>
              <div>
                <input
                  type="text"
                  placeholder="Email"
                  className="reg-form-input"
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="reg-form-input"
                />
              </div>

              <div>
                <input
                  type="password"
                  placeholder="Repeat Password"
                  className="reg-form-input"
                />
              </div>
              <div className="reg-form-forgot-password">
                <a href="#">Забули пароль?</a>
              </div>
            </div>
            <div>
              <button className="reg-form-button">УВІЙТИ</button>
            </div>
          </form>

          <div className="reg-form-register">
            <span>Уже є акаунт?</span>
            <Link to={"/profileLog"}>Увійти</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPanel;
