const submit = document.getElementById("submit");

submit.addEventListener("click", function() {
  const textareas = document.getElementsByTagName("textarea");
  for (let i = 0; i < textareas.length; i++) {
    const textarea = textareas[i];
    if (textarea.value === "") {
      textarea.classList.add("error")
    } else {
      textarea.classList.remove("error");
    }
  }
});

const form = document.getElementById('myForm');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent the page from refreshing

  const name = document.getElementById('myName').value;
  const email = document.getElementById('myEmail').value;
  const message = document.getElementById('myMessage').value;

  localStorage.setItem('name', name);
  localStorage.setItem('email', email);
  localStorage.setItem('message', message);

  form.reset();
});