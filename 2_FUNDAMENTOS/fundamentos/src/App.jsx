import './App.css'

// 2. Importando Componente
import FirstComponent from './components/FirstComponent'
// 4. Template Expression
import TemplateExpression from './components/TemplateExpression'
// 5. Hierarquia de Componentes
import MyComponent from './components/MyComponent'
// 6. Click
import Events from './components/Events'

function App() {
  // 3. Comentários
  return (
    <>
      {/* 3. Comentários */}
      <h1>Fundamentos do React</h1>
      <FirstComponent/>
      <TemplateExpression/>
      <MyComponent/>
      <Events/>
    </>
  )
}

export default App
