import { Link } from "react-router-dom";
import logoToSalvo from "../images/logo-toSalvo.png";
import "./Homepage.css"
const Layout = () => {
    return (
        <>
            <div className="content">
                <img src={logoToSalvo} alt="" />
                {/* <div className="animated-text">
                    <div className="line">Rápido</div>
                    <div className="line">Preciso</div>
                    <div className="line">Bom</div>
                    <div className="line">Simples!</div>
                </div> */}
                <section>
            

                </section>


                <section className="text-one">
                    <p className="content-text">
                        Bem-vindo ao Tô Salvo, o seu site de calculadora de notas universitárias!   </p>
                    <p className="content-text"> Aqui, estamos comprometidos em ajudar os estudantes a entender melhor suas notas e desempenho acadêmico, para que possam se concentrar em alcançar suas metas!</p>

                </section>
                <button>
                    <Link to="/Office365 - Login" className="link">  </Link>
                    Quero Calcular Minha Nota!
                </button>
                <section className="text-two"><p className="content-text">
                    Com a nossa calculadora de notas, você pode facilmente inserir suas notas em cada disciplina e ver seus resultados em segundos.
                </p></section>
                <section className="text-three">
                    <p className="content-text">Não perca mais tempo tentando calcular manualmente suas notas e fique tranquilo com o Tô Salvo.    </p>
                    <p className="content-text"> Use nosso site para tornar sua vida acadêmica mais fácil e eficiente. Experimente agora mesmo e comece a usar o Tô Salvo para seu sucesso acadêmico!</p>

                </section>
            </div >





        </>
    );
};
export default Layout;
