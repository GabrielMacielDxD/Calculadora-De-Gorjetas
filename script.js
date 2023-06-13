function calculateTip(event) {
  event.preventDefault();
  // aqui eu acrescentei um Number ()  fazendo uma conversão direta do valor recebido de lá que é String para Número, pq o javascript
  // não consegue trabalhar com string direito então sempre que receber um valor do formulário verifica
  // com um console.log o que você tá recebendo é do tipo número
  let bill = Number(document.getElementById('bill').value);
  let serviceQual =Number(document.getElementById('serviceQual').value)
  let numOfPeople = Number(document.getElementById('people').value)
  
    if(bill == '' || serviceQual == 0){
     alert("por favor, preencha os valores")
     return;
    }

    if(numOfPeople == "" || numOfPeople <= 1){
      numOfPeople = 1;
      document.getElementById('each').style.display = "none"
    } else {
      document.getElementById('each').style.display = "block"
    }

    let total = (bill * serviceQual) / numOfPeople;

    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totaltip').style.display = "block";
}

document.getElementById('totaltip').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('tipsform').addEventListener('submit', calculateTip);