import "./MyForm.css";

import { useState } from "react";

const MyForm = ({ userName, userEmail }) => {
  // 3. Gerenciamento de Estados
  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(userEmail);

  const [bio, setBio] = useState("");

  const [role, setRole] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  //   5. Envio de Form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, bio, role);
    // Validação
    // Envio
    // 7. Limpar Form
    setName("");
    setEmail("");
    setBio("");
    setRole("");
  };

  return (
    <div>
      {/* 1. Criação de Form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            onChange={handleName}
            // 6. Controlled Inputs
            value={name}
          />
        </div>
        {/* 2. Label envolvendo input */}
        <label>
          <span>Email:</span>
          <input
            type="text"
            name="email"
            placeholder="Digite seu email"
            // 4. Simplificando a manipulação
            onChange={(e) => setEmail(e.target.value)}
            // 6. Controlled Inputs
            value={email}
          />
        </label>
        {/* 8. textarea */}
        <label>
          <span>Biografia:</span>
          <textarea
            name="bio"
            placeholder="Descrição do usuário"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>
        {/* 9. select */}
        <label>
          <span>Função no sistema:</span>
          <select
            name="role"
            onChange={(e) => setRole(e.target.value)}
            value={role}
          >
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Admin</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
