// 4. Template Expression
const TemplateExpression = () => {
  const name = "Maurice";

  const data = {
    age: 21,
    job: "Programador",
  };

  return (
    <div>
      <p>A soma é {2 + 2}!</p>
      <h3>Bem Vindo {name}!</h3>
      <p>Sua Idade é {data.age} e você é um {data.job}!</p>
    </div>
  );
};

export default TemplateExpression;
