import { useState } from "react";
import Layout from "../../Components/Layout";
import './style.css'
export default function Login(){
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    return(
        <Layout>
            <div className="loginForm">
                <form>
                    <label>Email</label>
                    <input 
                        type="text" 
                        placeholder="Insira um email"
                        value={loginEmail}
                        onChange={ ev => setLoginEmail( ev.target.value )}
                    />
                    <label>Senha</label>
                    <input 
                        type="password"
                        placeholder="Insira sua senha"
                        value={ loginPassword}
                        onChange={ ev => setLoginEmail( ev.target.value )}
                    />
                    <button>Enviar</button>
                </form>
            </div>
        </Layout>
    )
}