/* <div  id="titulo"></div> */

fetch("news.json")
  .then((response) => response.json())
  .then((json) =>
    console.log(
      json.noticias.map((noticia) => {
        let d = document.getElementById("titulo");
        let p = document.createElement("p");
        p.innerText = noticia.titulo;
        d.appendChild(p);
      })
    )
  );
