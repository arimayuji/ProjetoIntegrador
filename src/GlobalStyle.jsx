import { createGlobalStyle } from "styled-components";
// criar constantes que começam com letra maiúsculas
export const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  font-size: 1.2rem;
  font-weight: 550;
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
    background-color:white;
  }
  body {
  width: 100%;
  min-height: 100vh;
  }
  form input,form input[type="number"],
  form select {
    display: flex;
    font-size: 1rem;
    font-weight:bolder;
    height: 5rem;
    width: 20rem;
    color: #004684;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: 0 1rem;
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
  button[type="reset"] {
  background-color: red;
  width: 8rem;
  box-shadow: red 0px 2px 4px, red 0px 7px 13px -3px, red 0px -3px 0px inset;
}

button {
  background-color: #004684;
  width: 20rem;
  box-shadow: #004684 0px 2px 4px, #004684 0px 7px 13px -3px,
    #004684 0px -3px 0px inset;
}

button[type="button"] {
  background-color: green;
  width: 8rem;
  box-shadow: green 0px 2px 4px, green 0px 7px 13px -3px,
    green 0px -3px 0px inset;
}

  button:hover{
    background-color:white;
    color: #004684;
    font-weight: bold;
  }
  button.sbn{
    display: flex;
    margin: 0 auto;
    padding: .5rem 2rem;
    width: fit-content;
    background-color: white;
    border-radius:.5rem;
    outline: 0;
    border: 0;
    box-shadow: #004684 0px 2px 4px, #004684 0px 7px 13px -3px, #004684 0px -3px 0px inset;
    color: black;
    
    
  }
  button.sbn:hover{
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
  font-weight: 550;
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
  color: #004684;
  font-size: 2rem;
  
}

`
