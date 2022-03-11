const divFormEmail = document.querySelector('.form__email')
const divFormPassword = document.querySelector('.form__password')

const inputEmail = document.getElementById('email')
const inputPassword = document.querySelector('.form__password__input')

const emailErrorMessage = document.querySelector('.email__error')
const passwordErrorMessage = document.querySelector('.password__error')

const password = document.getElementById('password')
const showPasswordBtn = document.getElementById('show-password')



function fazerLogin(){
  event.preventDefault();

  let emailUser = document.getElementById('email').value
  let passwordUser = document.getElementById('password').value

  fetch("https://test-final.b8one.academy/login",{
    method: "POST",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify({
      email: emailUser,
      password: passwordUser
    })
  })
  .then(response => response.json())
    .then(data => {

      if(data === true){
        location.href = './home.html';
      }else if(emailUser != 'academy@b8one.com'){
        inputEmail.className = 'form--error';
        divFormEmail.style.marginBottom = '40px';
        emailErrorMessage.style.display = 'block';
      }else if(passwordUser != 'Academy2022'){
        inputPassword.className = 'form--error';
        divFormPassword.style.marginBottom = '40px';
        passwordErrorMessage.style.display = 'block';
      }
    }
  )    
}



showPasswordBtn.onclick = () => {
  if(password.type === 'password' ){
    password.type = 'text'
    showPasswordBtn.src = "./assets/images/eye-off.png"
  }else{
    password.type = 'password'
    showPasswordBtn.src = "./assets/images/eye-open.png"
  }
}







