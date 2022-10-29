import logo from "./logo.svg";
import "./App.css";
import Media from "./componentes/Media";
import Comentario from "./componentes/Comentario";

function App() {
  const title = "Blog";
  let nrPosts = 100;
  let nrTotal = 25;
  const atencao = "Número de comentários";

  const comentarios = ["1", "2", "3", "4", "cinco", "zé", "pedro", "silva"];

  const comentarios2 = [
    { id: 1, texto: "Comentario um" },
    { id: 2, texto: "Comentario dois" },
    { id: 3, texto: "Comentario três" },
    { id: 4, texto: "Comentario quatro" },
    { id: 5, texto: "Comentario cinco" },
    { id: 6, texto: "Comentario seis" },
    { id: 7, texto: "Comentario sete" },
  ];

  const show = false;

  // ciclo If- Else
  // if(corDoPorto == azul){
  //   "futuro campeão"
  // }else{
  //   "não há liga"
  // }
  // ciclo If- Else
  // corDoPorto == azul ? "futuro campeão" : "não há liga";

  return (
    <>
      <h1 className="meuEstilo"> {title} </h1>
      <p> Posts </p>
      <h3> Número de Posts: {nrPosts}</h3>

      {show ? <Media /> : null}

      <h4>
        {" "}
        {atencao.toUpperCase()} : {comentarios.length}{" "}
      </h4>

      <h5>
        {" "}
        {atencao.toUpperCase()} : {comentarios.length}{" "}
      </h5>
      <ul>
        {comentarios.map((comentario) => (
          <li key={comentario}>{comentario}</li>
        ))}
      </ul>

      <Comentario />
      {/* <h5>
        {" "}
        {atencao.toUpperCase()} : {comentarios.length}{" "}
      </h5>
      <ul>
        {comentarios2.map((comentario) => (
          <li key={comentario.id}>{comentario.texto}</li>
        ))}
      </ul> */}
    </>
  );
}

export default App;