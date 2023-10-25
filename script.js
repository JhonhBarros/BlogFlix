document.addEventListener("DOMContentLoaded", function () {
  // Caminho para o arquivo JSON existente
  const jsonFilePath = "news.json";

  // Encontre a tag p
  const titulo = document.getElementById("titulo");
  const conteudo = document.getElementById("conteudo");

  // Verifique se a tag existir
  if (titulo) {
    // Use o método fetch para ler o arquivo JSON
    fetch(jsonFilePath)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Falha ao carregar o arquivo JSON: ${response.status}`
          );
        }
        return response.json();
      })
      .then((jsonData) => {
        // Define o conteúdo da div como a string JSON
        titulo.innerText = jsonData.titulo;
        conteudo.innerText = jsonData.conteudo;
      })
      .catch((error) => {
        console.error(error);
      });
  } else {
    console.error("A tag com o ID 'conteudo' não foi encontrada.");
  }
});
