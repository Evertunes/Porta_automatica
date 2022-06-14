let sense1 = true;
let sense2 = true;
let sense3 = true;
let sense4 = true;

function condic(sense1, sense2, sense3, sense4) {
  if (sense1 == true && sense2 == true && sense3 == true && sense4 == true) {
    let result = "Portas Liberadas";
    console.log(result);
  } else {
    let result = "Acesso Negado";
    console.log(result);
  }

  return;
}

condic(sense1, sense2, sense3, sense4);
