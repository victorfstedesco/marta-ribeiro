async function loadData() {
  try {
    const response = await fetch("../public/data/modulos.json");
    const data = await response.json();

    const containerhtml = document.getElementById("modulos");

    data.forEach((datas) => {
      const div = document.createElement("div");

      div.innerHTML = `
            <h4>${datas.tema}</h4>
            <div style="width: 1px; height: 24px; background-color: #E7E7E7;"></div>
            <p>${datas.descricao}</p>
            `;
      div.classList.add("m-card");
      containerhtml.appendChild(div);
    });
  } catch (erro) {
    console.error("Erro ao carregar os dados ", erro);
  }
}

loadData();

var form = document.getElementById("sheetdb-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if(localStorage.getItem("formularioEnviado")){
    return;
  }
  fetch(form.action, {
    method: "POST",
    body: new FormData(document.getElementById("sheetdb-form")),
  })
    .then(
      (response) => (window.location.href = "../../view/obrigado.html"),
      console.log("sucess")
    )
    .then(localStorage.setItem("formularioEnviado", true));
});

const onload = function () {
  const formulario = document.getElementById("h-campo-form");
  
  if (localStorage.getItem("formularioEnviado")) {
    console.log("O formulário ja foi enviado por essa maquina");
    formulario.innerHTML = `
    <h2 class="bold">Inscrição já cadastrada! Obrigado.</h2>
    `;
  } else {
    console.log("O formulário não foi enviado ainda");
    formulario.innerHTML` 
    <form action="https://sheetdb.io/api/v1/p8swelqoplbtb" method="post" id="sheetdb-form">
      <input type="name" name="Nome" placeholder="Seu nome" required />
      <input type="email" name="Email" placeholder="Seu melhor e-mail" required />
      <input type="telefone" name="Telefone" placeholder="Telefone com DDD" required />
      <input type="hidden" name="Created" value="x-sheetmonkey-current-date-time" />
      <button type="submit" id="submitbutton">
          <h6>Quero participar</h6>
          <img src="/public/assets/arrow-up.svg" alt="">
      </button>
  </form>
`;
  }
};

onload();


