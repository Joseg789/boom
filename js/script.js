let countId = document.getElementById("countdown");
const userInput = document.getElementById("userInput");
const result = document.getElementById("result");
const restart = document.getElementById("restart");

const getNumber = () => {
  return Math.floor(Math.random() * 3 + 1);
};

const mostrarResultados = (win, numberAll) => {
  if (win) {
    result.innerHTML = `<p class="green">HAS SALVADO AL MUNDO 👑</p>
    <p>Tu numero ${+userInput.value} es igual a ${numberAll}</p>`;
  } else {
    result.innerHTML = `<p class="red">BOOM!!💣💣💣</p>
    <p>Tu numero ${+userInput.value} es diferente a ${numberAll}</p>`;
  }
};

const startGame = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getNumber()); // resolvemos cuando termina el conteo
    }, 6000);
  });
};
//events
userInput.addEventListener("change", () => {
  result.innerHTML = "";
  let count = 6; // segundos iniciales
  userInput.disabled = true;
  countId.classList.remove("count");

  const interval = setInterval(() => {
    count--;
    countId.textContent = `cuenta atrás: ${count}`;

    if (count === 0) {
      clearInterval(interval);
      countId.classList.add("count");
    }
  }, 1000);

  startGame().then((numberAll) => {
    if (numberAll === +userInput.value) {
      mostrarResultados(true, numberAll);
    } else {
      mostrarResultados(false, numberAll);
    }
    userInput.disabled = false;
  });
  countId.innerHTML = "";
});

restart.addEventListener("click", () => {
  location.reload();
});
