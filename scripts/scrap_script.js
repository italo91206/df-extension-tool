async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function JogarFora() {
  //await sleep(3000);

  let tabela = document.getElementById("inventory");
  var inventario = tabela.childNodes;

  for (linha of inventario) {
    for (item of linha.childNodes) {
      if (item.classList.contains("is-scrappable")) {
        let obj = [];
        obj.push([]);
        obj[0].push(parseInt(item.dataset.slot));
        obj[0].push(item.firstElementChild.dataset.type);
        obj[0].push("inventory");
        obj.push(scrapValue(item.firstElementChild.dataset.type, ""));
        console.log({ obj });
        scrapItem(obj);
        await sleep(100);
      }
    }
  }
}

var botao = document.createElement("button");
botao.innerHTML = "Scrap all";
botao.addEventListener("click", JogarFora);

botao.style.position = "absolute";
botao.style.bottom = "86px";
botao.style.right = "28px";
botao.style.fontSize = "14px";
botao.style.zIndex = 1;

var invController = document.getElementById("invController");
invController.appendChild(botao);
