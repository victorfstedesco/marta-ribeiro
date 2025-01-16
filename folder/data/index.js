const onload = function () {
  const formulario = document.getElementById("h-campo-form");
  
  if (localStorage.getItem("formularioEnviado")) {
    console.log("O formulário ja foi enviado por essa maquina");
    formulario.innerHTML = `
    <h2 class="bold">Inscrição já cadastrada! Obrigado.</h2>
    `;
  } else {
    console.log("O formulário não foi enviado ainda");
    formulario.innerHTML = `
    <form action="https://sheetdb.io/api/v1/nxyqjiu1bz6ic" method="post" id="sheetdb-form">
      <input type="name" name="Nome" placeholder="Seu nome" required maxlength="100" />
      <input type="email" name="Email" placeholder="Seu melhor e-mail" required maxlength="100" />
      <input type="telefone" maxlength="11" name="Telefone" placeholder="Telefone com DDD" required />
      <input type="hidden" name="Created" value="x-sheetmonkey-current-date-time" />
      <button type="submit" id="submitbutton">
          <h6>Quero participar</h6>
          <img src="/folder/assets/arrow-up.svg" alt="">
      </button>
  </form>
   <p style = "font-size: 12px">Prometemos não usar nenhuma informação de contato para enviar qualquer tipo de SPAM. Os dados coletados são tratados nos termos da Lei Geral de Proteção de Dados e você pode se descadastrar da nossa lista a qualquer momento. Para mais informações, acesse nossa <a style="color: black; font-size: 12px;" href = "./politicaprivacidade" target="_blank">Política de Privacidade.</a></p>

  `;
  }
};

onload();

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
      (response) => (window.location.href = "./obrigado"),
      console.log("sucess")
    )
    .then(localStorage.setItem("formularioEnviado", true));
});



