



var tabHarmo = [
    ["Canastra", "QueijoCanastra", "Harmoniza perfeitamente com tintos de <br>corpo médio e taninos macios."],
    ["Minas", "QueijoMinas", "Quando combinado com goiabada ou mel,<br>espumantes ou brancos de colheita tardia."],
    ["gorgonzola", "QueijoGorgonzola", "Pede vinhos intensamente aromáticos e com <br>tendência adocicada, como os do Porto, os <br>Madeira ou Moscatéis."]
  ];
  
  
  var tabQueijos = [
    ["Canastra", "QueijoCanastra", "500g", 70],
    ["Minas", "QueijoMinas", "400g", 23],
    ["Coalho", "QueijoCoalho", "500g", 40],
    ["Gorgonzola", "QueijoGorgonzola", "200g", 20],
    ["Brie", "QueijoBrie", "200g", 30]
  ];
  

  
  
  function abreJanela(cod){
    var jan = window.open("","","width=500, height=350");
    
    jan.document.write("<html> <head> <meta charset='utf-8'>");
    jan.document.write("<link rel='stylesheet' type='text/css' href='style.css'></head>");
    jan.document.write(`<body><div class="janQueijos"><h3>${tabHarmo[cod][0]}</h3>`);
    jan.document.write(`<img class="HarmoImg" src="${tabHarmo[cod][1]}.jpg">`);
    jan.document.write(`<p>${tabHarmo[cod][2]}</p>`);
    jan.document.write("<button onclick='window.close();'>Fechar</button></div></body></html>");
  }
  
  
  
  function mostra(cod){
    document.getElementById("tipQueijo").innerHTML = `${tabQueijos[cod][0]}`;
    document.getElementById("imgQueijo").src = `${tabQueijos[cod][1]}.jpg`;
    document.getElementById("pesoQueijo").innerHTML = `Peso: ${tabQueijos[cod][2]}`;
    document.getElementById("prcQueijo").innerHTML = `Preço: R$ <span class="preco">${tabQueijos[cod][3]},00</span>`;
  }
  
 






  
  function calculaDV(num)
  {
  var resto = 0, soma = 0;
  for ( i = 2; i < 11; i++ )
  {
  soma = soma + ((num % 10) * i);
  num = parseInt(num / 10);
  }
  resto = (soma % 11);
  return (resto > 1) ? (11 - resto) : 0;
  }


  function VerificaCPF( campo )
  {
  var i, c, cpf;
  var iniCPF;
  var strCPF = campo.value;
  if ( strCPF.length != 11 )
  {
  alert("CPF tem de ter 11 dígitos!");
  return false;
  }
  for ( i = 0; i < 11; i++ )
  {
  c = strCPF.charAt(i);
  if ( (c < '0') || (c > '9'))
  {
  alert("Insira apenas dígitos, caracter " +
  c + " inválido!");
  return false;
  }
  }
  
  iniCPF = strCPF.substring(0, 9);
  pd = calculaDV(iniCPF);
  sd = calculaDV(iniCPF * 10 + pd);
  if ( (pd != strCPF.charAt(9)) || (sd != strCPF.charAt(10)) )
  {
  alert("Dígitos verificadores inválidos!");
  return false;
  }
  return true;
  }



/*Lista de Compras*/

var tabPrcProd = [0, 70, 23, 40, 20, 30];

function IncluiLista(sel) {
    var prod = sel.selectedIndex;
    if (prod != 0) {
        var prc = tabPrcProd[prod];
        sel.selectedIndex = 0;
        with (sel.form) {
            listaPedidos.value += sel.options[prod].text + '\n';
            var totalAtual = parseFloat(TxtTotal.value);
            if (isNaN(totalAtual)) {
                totalAtual = 0;
            }
            TxtTotal.value = totalAtual + prc;
        }
    } else {
        alert("Nenhum Produto selecionado!");
    }
}
