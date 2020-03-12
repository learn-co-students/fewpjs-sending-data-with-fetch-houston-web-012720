 function submitData(username, useremail) {
     let configObj = {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json',
             'Accept': 'application/json'
         },
         body: JSON.stringify({
             name: username,
             email: useremail
         })
     }
    //  console.log(configObj)
      return fetch('http://localhost:3000/users', configObj) 
     .then(resp => resp.json())
     .then(resp => document.body.innerHTML = resp['id'])
    //  .then(resp => console.log(resp))
     .catch(message => document.body.innerHTML = message)
 }
