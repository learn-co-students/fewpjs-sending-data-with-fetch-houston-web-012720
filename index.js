// Add your code here
function submitData(name,email){
    let configObj = {
        method: "POST",
        headers:{ 
            "Content-type": "application/json", 
            "Accept":"application/json"

        },

        body: JSON.stringify({
             name,
             email 
        })

    };
    return fetch("http://localhost:3000/users", configObj)
    .then(response => response.json())
    .then(data => document.body.innerHTML = data["id"] )
    .catch(error => document.body.innerHTML = error)
}