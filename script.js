const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//success ve error fonksiyonları
function hataGoster(input, msg) {
  let formControl = input.parentElement;
  formControl.classList.add("error");
  formControl.classList.remove("success");
  let small = formControl.querySelector("small");
  small.innerText = msg;
}

function successGoster(input) {
  let formControl = input.parentElement;
  let small = formControl.querySelector("small");
  small.innerText = "";
  formControl.classList.remove("error");
  formControl.classList.add("success");
}

//email kontrol regex
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

//eventlistener
form.addEventListener("submit", function (e) {
  e.preventDefault();

  //username hata success koşulları
  if (username.value === "") {
    hataGoster(username, "Kullanıcı adı girmediniz");
  } else {
    successGoster(username);
  };

  //email hata success koşulları
  if (email.value === "") {
    hataGoster(email, "Email girmediniz");
  } else if(!validateEmail(email.value)){
    hataGoster(email, "Lütfen geçerli bir email girin");
  } else {
    successGoster(email);
  };

  //password hata success koşulları
  if (password.value === "") {
    hataGoster(password, "Şifre girmediniz");
  } else {
    successGoster(password);
  };

  //password2 hata success koşulları
  if (password2.value === "") {
    hataGoster(password2, "Şifre tekrarını girmediniz");
  } else {
    successGoster(password2);
  };

});
