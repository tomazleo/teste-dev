import logo from '../../assets/Frame.png'
import form from '../../assets/monitoring 1.png';
import { IoEyeOutline } from "react-icons/io5";
import "./Login.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    

    const handleSubmit = (event) => {
        event.preventDefault();
        if (username === "admin@example.com" && password === "1234") {
            console.log("Login bem-sucedido");
            navigate('/Dashboard');
        } else {
            alert("Usuário ou senha inválidos");
        }
        if (!username || !password) {
            alert("Preencha todos os campos");
            return;
        }
        console.log("envio", username, password);

    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className='dados'>
                    <img src={logo} alt='logo' className='logo' />

                    <div className='titulo'>
                        <h1>Bem-Vindo de Volta</h1>
                        <p>entre com sua conta para acessar o painel.</p>
                    </div>
                    <div >
                        <p className='input-name'>E-mail</p>
                        <input type="email" placeholder='E-mail'
                            onChange={(e) => setUsername(e.target.value)} className='input' />

                    </div>
                    <div className='junto'>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Senha"
                            onChange={(e) => setPassword(e.target.value)}
                            className='input'
                        />
                        <IoEyeOutline
                            className='olhos'
                            onClick={() => setShowPassword(!showPassword)}
                        />
                    </div>

                    {/* <div className="recal-forget">
                        <label>
                            <input type='checkbox' />
                            Lembre de mim
                        </label>
                        <a href='#'>Esqueci minha senha</a>
                    </div> */}
                    <button type='submit' className='enviar'>Enviar</button>

                    {/* <div className="singup-link">
                        <p>Não tem uma conta?<a href='#'>registrar</a></p>
                    </div> */}
                </div>
                <div className="jovem-pc">
                    <img src={form} alt='joven-no-pc' className='menino' />
                </div>
            </form>

        </div>
    )
}

export default Login
