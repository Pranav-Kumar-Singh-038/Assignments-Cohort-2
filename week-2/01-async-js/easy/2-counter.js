let counter = 0;

function displayCounter() {
  console.clear();
  console.log(counter);
  counter++;

  setTimeout(displayCounter, 1000);
}

displayCounter();