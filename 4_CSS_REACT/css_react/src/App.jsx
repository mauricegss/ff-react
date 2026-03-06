import "./App.css";
// 2. CSS de Componente
import MyComponent from "./components/MyComponent";
// 6. CSS Modules
import Title from "./components/Title";

function App() {
  // 4. Inline Style Dinâmico
  const n = 15;
  // 5. Classes Dinâmicas
  const redTitle = true;

  return (
    <>
      {/* 1. CSS Global */}
      <h1>CSS no React</h1>
      {/* 2. CSS de Componente */}
      <MyComponent></MyComponent>
      <p>Pegou o CSS do Componente</p>
      {/* 3. Inline Style */}
      <p
        style={{ color: "blue", padding: "25px", borderTop: "1px solid black" }}
      >
        Este parágrafo tem Inline Style
      </p>
      {/* 4. Inline Style Dinâmico */}
      <h2 style={n > 10 ? { color: "purple" } : { color: "magenta" }}>
        CSS Dinâmico
      </h2>
      <h2 style={n > 20 ? { color: "purple" } : { color: "magenta" }}>
        CSS Dinâmico 2
      </h2>
      {/* 5. Classes Dinâmicas */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este Título vai ter uma classe
      </h2>
      {/* 6. CSS Modules */}
      <Title></Title>
    </>
  );
}

export default App;
