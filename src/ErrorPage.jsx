import './ErrorPage.css'
import logo from './images/toSalvo-Blue.png'
import errorImg from './images/error.png'
import { Link } from 'react-router-dom';
import './Routes/Homepage.css';
import { GlobalStyle } from './GlobalStyle';
const ErrorPage = () => {
    return (
        <>
            <GlobalStyle />
            <div className="root-main-home">
                <div className="main-content-home">
                    <img src={logo} alt="logo" />
                    <h1>ALGO DE ERRADO OCORREU...</h1>
                    <div className="error">
                        <img src={errorImg} alt="imagem de erro" className='error' />
                        <Link to="/"><button>    RETORNAR PARA A PÁGINA INICIAL</button></Link>

                    </div>

                </div>
            </div>
            <div className="footer">

            </div>


        </>
    )
}
export default ErrorPage;