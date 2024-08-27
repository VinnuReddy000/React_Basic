import './App.css';

function App() {
  return (
  <form className='Auth' noValidate="novalidate" id='signin_form'>
    <div className="container">
      <div className="left-panel">
        <img src="https://azuintone-hrms-dev-appsvc01.azurewebsites.net/assets/media/logos/intone-hrms-logo.png" alt="Intone Logo" className="logo" />
        <div className="info-section">
          <div className="image-container">
            <img src="https://azuintone-hrms-dev-appsvc01.azurewebsites.net/assets/media/misc/auth-screens.png" alt="Woman with Laptop" />
          </div>
          <h2>Fast, Efficient and Productive</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
      <div className="right-panel">
        <div className="login-box">
          <div>
            <img src="https://azuintone-hrms-dev-appsvc01.azurewebsites.net/assets/media/microsoft-logo.png" alt="Microsoft-logo" className="Microsoft_logo"/>
          </div>
          <h3>Login With Microsoft</h3>
          <button type='submit' id='signin_form' className="login-button" onClick="sudmit()">Login</button>
          <p>Or</p>
          <button className="credentials-button">Login with Credentials</button>
        </div>
      </div>
    </div>
    </form>
  );
}

export default App;
