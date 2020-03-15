// Add your code here
console.log('LOADING CONTENT...')

document.addEventListener('DOMContentLoaded', () => {
  console.log('CONTENT LOADED')
  const body = document.querySelector('body');

  addForm(body);
})

let addForm = (body) => {
  const form = document.createElement('form');
  form.action = "http://localhost:3000/users";
  form.method = "POST";
  body.prepend(form);

  const userName = document.createElement('label')
  userName.innerText = "User Name: "
  const nameInput = document.createElement('input')
  nameInput.type = "text"
  nameInput.name = "name"
  nameInput.id = "name"
  userName.append(nameInput)

  const email = document.createElement('label')
  email.innerText = "Email: "
  const emailInput = document.createElement('input')
  emailInput.type = "text"
  emailInput.name = "email"
  emailInput.id = "email"
  email.append(emailInput)

  const submitBtn = document.createElement('input')
  submitBtn.type = "submit"
  submitBtn.name = "submit"
  submitBtn.id = "submit"
  submitBtn.value = "Submit"

  form.addEventListener('submit', submitData)


  const br = document.createElement('br');
  const br2 = br.cloneNode()
  form.append(userName, br, email, br2, submitBtn)
  // form.insertBefore(br, email)
  // form.insertBefore(br.cloneNode(), submitBtn)
}

let submitData = (userName, email) => {
  // event.preventDefault()
  // const form = document.querySelector('form')
  const body = document.querySelector('body');

  // const uName = document.getElementById('name').value
  // const email = document.getElementById('email').value
  // console.log(event)

  return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      name: userName,
      email: email
    })
  })
  .then(r => r.json())
  .then(json => {
    console.log(json.id)
    body.append(json.id)
    // form.reset()
  })
  .catch(error => body.append(error.message))
}


