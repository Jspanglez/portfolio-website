const submit = document.getElementById("submit");

submit.addEventListener("click", ev => {
  const textareas = document.getElementsByTagName("textarea");
  let allFieldsNotEmpty = true;
  for (let i = 0; i < textareas.length; i++) {
    const textarea = textareas[i];
    if (textarea.value === "") {
      textarea.classList.add("error");
      allFieldsNotEmpty = false;
    } else {
      textarea.classList.remove("error");
    }
  }

  setTimeout(() => {
    if (allFieldsNotEmpty) {
      alert("Thank you! Your message has been sent!");
    }
  }, 100);
});

const form = document.getElementById('myForm');

form.addEventListener('submit', e => {
  e.preventDefault(); // Prevent the page from refreshing

  const name = document.getElementById('myName').value;
  const email = document.getElementById('myEmail').value;
  const message = document.getElementById('myMessage').value;

  localStorage.setItem('name', name);
  localStorage.setItem('email', email);
  localStorage.setItem('message', message);

  form.reset();
});