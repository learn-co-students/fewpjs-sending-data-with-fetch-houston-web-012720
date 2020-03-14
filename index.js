// Add your code here


function submitData(name, email) {
    let config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "accept": "application/json"

        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    };

    return fetch("http://localhost:3000/users", config)
        .then(function(response) {
            return response.json();
        })
        .then(function(object) {
            let body = document.querySelector("body")
            let p = document.createElement("p")
            p.innerHTML = object.id
            body.append(p)
        })
        .catch(function(error) {
            let p = document.createElement('p')
            p.innerHTML = error.message
            document.body.append(p)
        });

}