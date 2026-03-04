import React from "react";

const Events = () => {
  const handleClick = () => {
    console.log("Executou!");
  };

  // 8. Função de renderização
  const renderSomething = (x) => {
    if(x) {
        return <h1>Renderizando isso!</h1>
    } else {
        return <h1>Renderizando outra coisa!</h1>
    }
  }

  return (
    <div>
      <button onClick={() => console.log("Teste")}>Clique aqui</button>
      {/* 7. Evento com Função */}
      <div>
        <button onClick={handleClick}>Clique aqui - com função</button>
      </div>
      {/* 8. Função com Render */}
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
};

export default Events;
