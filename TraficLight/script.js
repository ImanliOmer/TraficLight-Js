const red = document.getElementById("r-lg");
const yellow = document.getElementById("y-lg");
const green = document.getElementById("g-lg");

function setLights() {
  setTimeout(() => {
    red.classList.add("r-light");
    setTimeout(() => {
      red.classList.remove("r-light");
      yellow.classList.add("y-light");
      setTimeout(() => {
        yellow.classList.remove("y-light");
        green.classList.add("g-light");
        setTimeout(() => {
          green.classList.remove("g-light");
          setLights();
        }, 25000);
      }, 5000);
    }, 20000);
  }, 1000);
}

setLights();
