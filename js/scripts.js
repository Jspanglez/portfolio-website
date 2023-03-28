menuToggler.addEventListener('click', ev => {
  menu.classList.toggle('open');
  menuToggler.classList.toggle('active');
});

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
