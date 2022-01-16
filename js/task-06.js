const inputRef = document.querySelector("input");
const checkRef = (event) => {
  event.currentTarget.value.length === Number(inputRef.dataset.length)
    ? inputRef.setAttribute('class', 'valid')
    : inputRef.setAttribute('class', 'invalid');
  console.log(event.currentTarget.value.length);
  console.log(Number(inputRef.dataset.length));
  console.log(inputRef);
};
inputRef.addEventListener("blur", checkRef);