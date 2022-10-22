import React from "react";

function Media() {
  let nrPosts = 100;
  let nrTotal = 25;

  return (
    <>
      <h3> ------> Média de Posts: {nrPosts / nrTotal} </h3>
    </>
  );
}

export default Media;

// Comando para gerar componente React : rfce