function clock() {
  const now = new Date();
  const hour = now.getHours();
  const minute = `0${now.getMinutes()}`.slice(-2);
  const second = now.getSeconds();

  const day = now.getDay();

  const dayNum = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();

  const days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];

  let clock = `${hour} : ${minute} : ${second}`;

  document.getElementById("clock").innerHTML = clock;

  document.getElementById("day").innerHTML = days[day];

  console.log(day);

  document.getElementById("date").innerHTML =
    dayNum + " / " + month + " / " + year;
}

setInterval(function () {
  clock();
}, 1000);

let fullName = prompt("İsminizi Giriniz :)");
let myName = document.querySelector(".myName");

myName.innerHTML = `${fullName.toUpperCase()}`;
