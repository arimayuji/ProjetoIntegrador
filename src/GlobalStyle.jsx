import { createGlobalStyle } from "styled-components";
// criar constantes que começam com letra maiúsculas
export const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  font-size: 1.2rem;
  font-weight: 400;
  transition: 0.5s;
  font-family: "Oxygen", sans-serif;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    border: 0.2rem solid #004684;
    padding: 2rem;
    row-gap: 2rem;
  }
  body {
  width: 100%;
  min-height: 100vh;
  }
  form input,
  form select {
    display: flex;
    font-size: 1rem;
    font-weight:bolder;
    height: 2rem;
    color: black;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: 10%;
    text-align: center;
    outline: 0;
    border-radius: 0.5rem;
    border: 0.2rem solid #004684;
  }
  option{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  select::-ms-expand {
  display: none; /* Remove o botão de seta no Internet Explorer */
  }
  select::after {
  position: absolute;
  top: 10px;
  right: 10px;
  color: blue; /* Define a cor do botão de seta */
  pointer-events: none; /* Evita que o botão de seta seja clicável */
  background-color: transparent;
  } 
   form input :focus{
     border: 0;
     text-decoration:underline;
     text-decoration-color:#004684;
  }
  
  input[type=number]::-webkit-inner-spin-button { 
  all: unset; 
  min-width: 21px;
  min-height: 45px;
  margin: 17px;
  padding: 0px;
  background-image: 
  linear-gradient(to top, transparent 0px, transparent 16px, #fff 16px, #fff 26px, transparent 26px, transparent 35px, #004684 35px,#004684 36px,transparent 36px, transparent 40px),
  linear-gradient(to right, transparent 0px, transparent 10px, #004684 10px, #004684 11px, transparent 11px, transparent 21px);
  transform: rotate(90deg) scale(0.8, 0.9);
  cursor:pointer;
}

  button{
    display: flex;
    margin: 0 auto;
    padding: .5rem 2rem;
    width: fit-content;
    background-color: #004684;
    border-radius:.5rem;
    outline: 0;
    border: 0;
    box-shadow: #004684 0px 2px 4px, #004684 0px 7px 13px -3px, #004684 0px -3px 0px inset;
    
  }
  button:hover{
    background-color:white;
    color: #004684;
    font-weight: bold;
  }
  span {
  display: flex;
  font-size: 1rem;
  font-weight: bold;
  margin: 0 auto;
}
a.link {
  display: flex;
  text-decoration: none;
}

img{
  display: flex;
  width: fit-content;
  height: 5rem;
}
i{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #004684;
  color: white;
  border-radius:.5rem;
  padding: .5rem;

}
`;
