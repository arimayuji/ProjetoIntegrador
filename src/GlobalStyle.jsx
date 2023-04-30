import { createGlobalStyle } from "styled-components";
// criar constantes que começam com letra maiúsculas
export const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  color: white;
  font-size: 1.2rem;
  font-weight: 400;
  transition: 0.5s;
  font-family: "Oxygen", sans-serif;
  }
  form {
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;
    border: 0.2rem solid #004684;
    padding: 1rem;
    row-gap: 2rem;
  }
  body {
  width: 100%;
  min-height: 100vh;
  }
  form input,
  form select {
    display: flex;
    color: black;
    padding: 1% 0;
    text-align: center;
    outline: 0;
    overflow-x:hidden;
    border-radius: 0.5rem;
    border: 0.1rem solid #004684;
  }
  form input :focus{
     border: 0;
     text-decoration:underline;
     text-decoration-color:#004684;
  }
  main{
  display: flex;
  margin: 2rem auto;
  background-color: white;
  }

  
  button{
    display: flex;
    margin: 0 auto;
    padding: .5rem;
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
`;
