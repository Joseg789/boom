let countId = document.getElementById("countdown");
const userInput = document.getElementById("userInput");
const result = document.getElementById("result");
let p = document.createElement("p");
let res = document.createElement("p");
const restart = document.getElementById("restart");

const getNumber = () => {
  return Math.floor(Math.random() * 3 + 1);
};

userInput.addEventListener("change", () => {
  res.textContent = "";
  let count = 6; // segundos iniciales
  userInput.disabled = true;
  countId.classList.remove("count");
  const promesa = new Promise((resolve) => {
    setTimeout(() => {
      const interval = setInterval(() => {
        count--;
        countId.textContent = `cuenta atras: ${count}`;

        if (count === 0) {
          clearInterval(interval); //para que no se vuelva a llamar el intervalo
          resolve(getNumber());
          countId.classList.add("count");
        }
      }, 1000);
      p.innerHTML = "";
    });
  }, 5000);

  promesa.then((numberAll) => {
    if (numberAll === +userInput.value) {
      p.textContent = "HAS SALVADO AL MUNDO 👑";
      p.classList.add("green");
      p.classList.remove("red");
      result.appendChild(p);
      res.textContent = `Tu numero ${+userInput.value} es igual a ${numberAll} `;
      result.appendChild(res);
    } else {
      p.textContent = "BOOM!! 💣💣💣";
      p.classList.add("red");
      p.classList.remove("green");
      res.textContent = `Tu numero ${+userInput.value} es diferente a ${numberAll} `;
      result.appendChild(p);
      result.appendChild(res);
    }
    userInput.disabled = false;
  });

  restart.addEventListener("click", () => {
    location.reload();
  });
});
