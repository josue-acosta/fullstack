import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Hola Mundo</h2>
                <a style={{ color: "white" }} href="/auth/google">Sign In</a>
            </header>
        </div>
    );
}

export default App;
