let titulo = document.createElement("h1");
titulo.id = "titulo";
titulo.innerText = "ELETRÔNICOS";

let body = document.querySelector("body");
body.appendChild(titulo);

let produto = document.createElement("div");
produto.innerHTML = `
<div>
    <h2>Notebook Vaio</h2>
    <img src="notebook.jpg" height=300px alt="notebook">
    <p>Notebook - Core i7 de 13ª Geração. 16Gb RAM. SSD 512Gb.</p>
    <p id="preco-notebook">R$ 3.000,00</p>
</div>
`;
body.appendChild(produto)


// Crie um projeto com dois arquivos: index.html e script.js. No arquivo 'index' insira apenas a estrutura base HTML e a tag script para conectar o arquivo HTML com o arquivo de extensão JavaScript.

// Usando os conceitos aprendidos nesse módulo, e sem alterar o arquivo index.html, adicione um título simples ao site com o id 'titulo', e um elemento que represente um produto à venda. O produto precisa incluir pelo menos o nome, a descrição e o preço. Pode incluir outros "elementos filhos" se achar necessário como, por exemplo, uma imagem. Procure usar o método simples e o método complexo, ensinados neste tópico. 