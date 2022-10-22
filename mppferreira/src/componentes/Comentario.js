import React from "react";

// Comando para refrescar os brnaches: git fetch
// Comando para ir buscar alterações: git pull
// Comando para visualizar a branch: git branch

function Comentario() {
  const comentarios2 = [
    { id: 1, texto: "Comentario um" },
    { id: 2, texto: "Comentario dois" },
    { id: 3, texto: "Comentario três" },
    { id: 4, texto: "Comentario quatro" },
    { id: 5, texto: "Comentario cinco" },
    { id: 6, texto: "Comentario seis" },
    { id: 7, texto: "Comentario sete" },
  ];

  return (
    <>
      <h5>Número de comentários : {comentarios2.length} </h5>
      <ul>
        {comentarios2.map((comentario) => (
          <li key={comentario.id}>{comentario.texto}</li>
        ))}
      </ul>
    </>
  );
}

export default Comentario;