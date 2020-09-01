const clientId = "3731cc5090c04071bb587b0bdaf9e90d"
const clientSecret = "67177fb1cd10447a8453617d6decae33"
 
let myToken = localStorage.getItem("token")
console.log("MyToken:", myToken)
 
if (!myToken) {
    getToken()
}
 
function getToken() {
 
    fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Basic " + btoa(clientId + ":" + clientSecret)
        },
        body: "grant_type=client_credentials"
    })
        .then(response => response.json())
        .then(data => {
            console.log(data.access_token)
            let token = data.access_token;
            localStorage.setItem("token", token);
        })
}
