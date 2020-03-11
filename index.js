// Add your code here

const submitData = (name,email) => {
    let user_data = {
        name: name,
        email: email
    }

    let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(user_data)
    };

    return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        document.body.innerHTML = data["id"]
    })
    .catch(error => document.body.innerHTML = error)
}

document.querySelector("form").addEventListener("submit",() => {
    let  username = document.querySelector("#name").value
    let  useremail = document.querySelector("#email").value
    submitData(username,useremail)
})