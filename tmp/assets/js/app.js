"use strict";

var clientId = "3731cc5090c04071bb587b0bdaf9e90d";
var clientSecret = "67177fb1cd10447a8453617d6decae33";
var myToken = localStorage.getItem("token");
console.log("MyToken:", myToken);

if (!myToken) {
  getToken();
}

function getToken() {
  fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": "Basic " + btoa(clientId + ":" + clientSecret)
    },
    body: "grant_type=client_credentials"
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log(data.access_token);
    var token = data.access_token;
    localStorage.setItem("token", token);
  });
}
//# sourceMappingURL=app.js.map
