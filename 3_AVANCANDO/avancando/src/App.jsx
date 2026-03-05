import "./App.css";
// 2. Imagem em Assets
import night from "./assets/night.jpg";
// 3. useState
import Data from "./components/Data";
// 4. Renderização de Lista
import ListRender from "./components/ListRender";
// 7. Render Condicional
import ConditionalRender from "./components/ConditionalRender";
// 9. Props
import ShowUserName from "./components/ShowUserName";
// 10. Desestruturando Props
import CarDetails from "./components/CarDetails";
// 12. Renderização de Listas com Componente
const cars = [
  { id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
  { id: 2, brand: "KIA", color: "Branco", km: 200000 },
  { id: 3, brand: "Renault", color: "Azul", km: 32000 },
];
// 13. Fragment
import Fragment from "./components/Fragment";
// 14. Children
import Container from "./components/Container";
// 15. Função em Prop
import ExecuteFunction from "./components/ExecuteFunction";
// 16. State Lift
import { useState } from "react";
import MessageState from "./components/MessageState";
import ChangeMessageState from "./components/ChangeMessageState";

function App() {
  // 15. Função em Prop
  function showMessage() {
    console.log("Evento do componente pai");
  }

  // 16. State Lift
  const [message, setMessage] = useState("");
  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div style={{ paddingBottom: "500px" }}>
      <h1>Avançando em React</h1>
      {/* 1. Imagem em Public */}
      <img src="/img.jpg" alt="Alguma Imagem" />
      {/* 2. Imagem em Assets */}
      <img src={night} alt="Outra Imagem" />
      {/* 3. useState */}
      <Data></Data>
      {/* 4. Renderização de Lista */}
      <ListRender></ListRender>
      {/* 7. Render Condicional */}
      <ConditionalRender></ConditionalRender>
      {/* 9. Props */}
      <ShowUserName name="Maurice"></ShowUserName>
      {/* 10. Desestruturando Props */}
      <CarDetails brand="VW" km={150} color="Vermelho"></CarDetails>
      {/* 11. Reaproveitamento de Components */}
      <CarDetails brand="Fiat" km={910} color="Branco"></CarDetails>
      <CarDetails brand="Audi" km={123} color="Azul"></CarDetails>
      {/* 12. Renderização de Listas com Componente*/}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
        ></CarDetails>
      ))}
      {/* 13. Fragment */}
      <Fragment></Fragment>
      {/* 14. Children */}
      <Container>
        <h2>Teste</h2>
        <p>Meu Container</p>
      </Container>
      {/* 15. Função em Prop */}
      <ExecuteFunction myFunction={showMessage}></ExecuteFunction>
      {/* 16. State Lift */}
      <MessageState msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
    </div>
  );
}

export default App;
