function gerar() {
  /*pegando as funcoes*/
  const template = document.getElementById("template").value;
  let nomeProjeto = document.getElementById("nomeProjeto").value;
  const descricao = document.getElementById("descricao").value;
  const tecnologias = document.getElementById("tecnologias").value;
  const autor = document.getElementById("autor").value;

  /*se não tiver nome*/
  if (nomeProjeto.trim() === "") {
    nomeProjeto = "Projeto sem nome";
  }

  /*conferindo se é back, front, full*/
  let ehFront = false;
  let ehBack = false;

  let tech = tecnologias.toLowerCase();
  if (
    tech.includes("html") ||
    tech.includes("css") ||
    tech.includes("javascript")
  ) {
    ehFront = true;
  }
  if (
    tech.includes("node") ||
    tech.includes("python") ||
    tech.includes("java") ||
    tech.includes("php")
  ) {
    ehBack = true;
  }

  let tipoProjetoFinal = "";
  if (ehFront && ehBack) {
    tipoProjetoFinal = "um projeto fullstack";
  } else if (ehFront) {
    tipoProjetoFinal = "um projeto front-end";
  } else if (ehBack) {
    tipoProjetoFinal = "um projeto back-end";
  } else {
    tipoProjetoFinal = "um projeto de software";
  }

  /*definindo o tipo do projeto*/

  let tipoProjeto = "";

  if (tech.includes("javascript")) {
    tipoProjeto = "uma aplicação web interativa";
  } else if (tech.includes("html")) {
    tipoProjeto = "uma interface web";
  } else {
    tipoProjeto = "um projeto de software";
  }

  /*gerando uma descrição*/

  let descricaoGerada = `O projeto ${nomeProjeto} é ${tipoProjeto} ${tipoProjetoFinal}, desenvolvido com ${tecnologias}. ${descricao}`;

  if (descricao.trim() === "") {
    descricaoGerada = `O projeto ${nomeProjeto} consiste em ${tipoProjeto}, sendo ${tipoProjetoFinal}, desenvolvido com ${tecnologias}. Ele foi criado com foco em organização, eficiência e facilidade de uso.`;
  }

  /*execução a partir das tecnologias*/

  let execucaoGerada = "";

  if (tech.includes("node")) {
    execucaoGerada += "- Execute 'npm install'\n- Execute 'npm start'\n";
  }

  if (tech.includes("python")) {
    execucaoGerada += "- Execute 'python arquivo.py'\n";
  }

  if (tech.includes("html")) {
    execucaoGerada += "- Abra o arquivo index.html no navegador\n";
  }

  if (execucaoGerada === "") {
    execucaoGerada = "Instruções dependem do ambiente do projeto.";
  }

  let listaTecnologias = tecnologias
    .split(",")
    .map((t) => `- ${t.trim()}`)
    .join("\n");

  /*final*/

  let texto = "";
  if (template === "simples") {
    texto = `
# ${nomeProjeto}

## Descrição
${descricaoGerada}

## Tecnologias
${listaTecnologias}

## Execução
${execucaoGerada}
`;
  } else if (template === "profissional") {
    texto = `
# 🚀 ${nomeProjeto}

## 📌 Descrição
${descricaoGerada}

## 🛠 Tecnologias Utilizadas
${listaTecnologias}

## ▶️ Como executar o projeto
${execucaoGerada}

## 👤 Autor
${autor}
`;
  } else if (template === "avancado") {
    texto = `
# 🚀 ${nomeProjeto}

## 📌 Visão Geral
${descricaoGerada}

---

## 🛠 Stack utilizada
${listaTecnologias}

---

## ▶️ Instalação e execução
${execucaoGerada}

---

## 📈 Sobre o projeto
Este projeto foi desenvolvido como ${tipoProjetoFinal}, utilizando boas práticas de desenvolvimento e organização de código.

---

## 👤 Desenvolvedor
${autor}
`;
  } else {
    texto = `
# ${nomeProjeto}

## 📌 Descrição
${descricaoGerada}

## 🚀 Tecnologias
${listaTecnologias}

## ▶️ Como executar
${execucaoGerada}

## 👤 Autor
${autor}
`;
  }

  document.getElementById("resultado").innerText = texto;
}

document.getElementById("gerar").addEventListener("click", gerar);

/*copiar*/
function copiarTexto() {
  const texto = document.getElementById("resultado").textContent;

  if (texto.trim() === "") {
    alert("Gere o README antes de copiar.");
    return;
  }

  navigator.clipboard.writeText(texto);

  const botao = document.getElementById("copiar");
  botao.innerText = "Copiado!";

  setTimeout(() => {
    botao.innerText = "Copiar README";
  }, 2000);
}

document.getElementById("copiar").addEventListener("click", copiarTexto);
