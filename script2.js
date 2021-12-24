//form validation v2

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//error fonksiyonu
function hataGoster(input, msg) {
  let formControl = input.parentElement;
  formControl.classList.add("error");
  formControl.classList.remove("success");
  let small = formControl.querySelector("small");
  small.innerText = msg;
}

//success fonksiyonu
function successGoster(input) {
  let formControl = input.parentElement;
  let small = formControl.querySelector("small");
  small.innerText = "";
  formControl.classList.remove("error");
  formControl.classList.add("success");
}

//email kontrol regex
function emailKontrol(input) {
  let re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (re.test(input.value)) {
    successGoster(input);
  } else {
    hataGoster(input, "Geçersiz email");
  }
}

//ilk harfi capital yapmak
function ilkHarfCap(kelime) {
  return kelime.charAt(0).toUpperCase() + kelime.slice(1);
}

//input boş karakter kontrol
function kontrol(inputArr) {
  inputArr.forEach(function (item) {
    if (item.value == "") {
      hataGoster(item, `${ilkHarfCap(item.id)} boş bırakılamaz!`);
    } else {
      successGoster(item);
    }
  });
}

//input length kontrol
function kontrol2(input, min, max) {
  if (input.value.length < min) {
    hataGoster(
      input,
      `${ilkHarfCap(input.id)} ${min} karakterden küçük olamaz`
    );
  } else if (input.value.length > max) {
    hataGoster(
      input,
      `${ilkHarfCap(input.id)} ${max} karakterden fazla olamaz`
    );
  } else {
    successGoster(input);
  }
}

//sifre eşleştirme kontrol
function pwMatch(sifre1, sifre2) {
  if (sifre1.value !== sifre2.value) {
    hataGoster(sifre2, "Girilen şifreler aynı değil");
  }
}

//form eventlistener
form.addEventListener("submit", function (e) {
  e.preventDefault();
  kontrol([username, email, password, password2]);
  kontrol2(username, 5, 15);
  kontrol2(password, 7, 20);
  emailKontrol(email);
  pwMatch(password, password2);
});

// else if (!validateEmail(email.value)) {
//     hataGoster(email, "Lütfen geçerli bir email girin");
//   }
