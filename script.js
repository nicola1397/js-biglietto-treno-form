let price;
let discounted;
let sconto;
let distance;
let anni;
let showTicket = document.getElementById("ticket");

document.getElementById("send").addEventListener("click", function () {
  distance = parseInt(document.querySelector("#distance").value);
  anni = document.querySelector("#anni").value;

  // CONTROLLO ERRORI
  if (isNaN(distance) || distance <= 0) {
    alert("I dati inseriti non sono corretti!");
  }
  // SCONTO MINORENNI
  else if (anni == 1) {
    price = (distance * 0.21).toFixed(2);
    console.log(price, "Prezzo");
    sconto = "20%";
    console.log(sconto);
    discounted = (price - (price / 100) * 20).toFixed(2);
    console.log(discounted, "Scontato");
  }
  // SCONTO OVER 65
  else if (anni == 3) {
    price = (distance * 0.21).toFixed(2);
    console.log(price, "Prezzo");
    sconto = "40%";
    console.log(sconto);
    discounted = (price - (price / 100) * 40).toFixed(2);
    console.log(discounted, "Scontato");
  }
  // TARIFFA STANDARD
  else {
    price = parseFloat((distance * 0.21).toFixed(2));
    console.log(price, "Prezzo");
    sconto = "Nessuna";
    console.log(sconto);
    discounted = price;
    console.log(discounted, "Scontato");
  }
});

// DISPLAY DEI VALORI IN HTML
document.getElementById("send").addEventListener("click", function () {
  //  VISUALIZZAZIONE BIGLIETTO
  showTicket.classList.remove("d-none");

  // LETTURA NOME
  const nomeCognome = document.getElementById("inputName").value;
  console.log(nomeCognome);
  document.getElementById("nome").innerHTML = nomeCognome;
  // SCONTO
  document.getElementById("offerta").innerHTML = sconto;
  // CARROZZA
  document.getElementById("cart").innerText =
    Math.floor(Math.random() * 15) + 1;
  // CODICE
  document.getElementById("code").innerText =
    Math.floor(Math.random() * 99999) + 1;
  // PREZZO
  document.getElementById("priceNew").innerHTML = discounted;
});
