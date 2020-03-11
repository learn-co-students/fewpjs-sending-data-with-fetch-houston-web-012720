function submitData(u, e){
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    // body: {
    //   "name": `${u}`,
    //   "email": `${e}`
    // }
    body: JSON.stringify ({
      name: u,
      email: e
    })}
  return fetch("http://localhost:3000/users", configObj)
  .then(res => res.json())
  .then(json => document.body.innerHTML = json["id"])
  .catch(message => document.body.innerHTML = message)
}