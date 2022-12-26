function writer(element) {
  const textArray = element.innerHTML.split('');
  element.innerHTML = '';
  textArray.forEach((letter, index) => {
    setTimeout(() => element.innerHTML += letter, index * 100);
  });
}

const myName = document.querySelector(".myName");
writer(myName)