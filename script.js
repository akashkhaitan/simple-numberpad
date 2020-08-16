function NumberPad() {
  this.numbers = [
    {
      number: 1,
      background: "#6F98A8",
    },
    {
      number: 2,
      background: "#2B8EAD",
    },
    {
      number: 3,
      background: "#2F4546",
    },
    {
      number: 4,
      background: "#2B8EAD",
    },
    {
      number: 5,
      background: "#2F4546",
    },
    {
      number: 6,
      background: "#BFBFBF",
    },
    {
      number: 7,
      background: "#BFBFBF",
    },

    {
      number: 8,
      background: "#6F98A8",
    },
    {
      number: 9,
      background: "#2F4546",
    },
  ];
}

NumberPad.prototype.sort = function () {
  this.numbers.sort((a, b) => {
    return a.number - b.number;
  });
  this.render();
};

NumberPad.prototype.shuffle = function () {
  for (let i = this.numbers.length-1; i > 0; i--) {

    let r = Math.floor((Math.random() * i));

    let temp = this.numbers[i];
    this.numbers[i] = this.numbers[r];
    this.numbers[r] = temp;
  }
  this.render();
};

NumberPad.prototype.render = function () {
  let numberpadKeysContainer = document.getElementById("numberpadKeys");
  if (numberpadKeysContainer.innerHTML !== "") {
    numberpadKeysContainer.innerHTML = "";
  }
  for (let i = 0; i < this.numbers.length; i++) {
    let liNode = document.createElement("li");
    let bgSpan = document.createElement("span");
    let numberSpan = document.createElement("span");
    bgSpan.classList.add("bg");
    bgSpan.style.backgroundColor = this.numbers[i].background;
    numberSpan.classList.add("number");
    numberSpan.innerHTML = this.numbers[i].number;
    liNode.appendChild(bgSpan);
    liNode.appendChild(numberSpan);
    numberpadKeysContainer.appendChild(liNode);
  }
};

let numberPad = new NumberPad();

document.addEventListener("DOMContentLoaded", function (event) {
  numberPad.render();
});
