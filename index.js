const loginInp = document.querySelector('#login');
const passwordInp = document.querySelector('#password');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  let login = loginInp.value;
  let password = passwordInp.value;
  postData(login, password);
});

async function postData (log, pass) {
  const response = await fetch("https://reqres.in/api/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json ; charset=UTF-8"
    },
    body: JSON.stringify({
      email: log,
      password: pass
    })
  });
  let data = await response.json();
  if (data.token) {
    localStorage.setItem('token', data.token)
    location.href = "main.html";
  } else {
    alert(data.error)
  }
}


