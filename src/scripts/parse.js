/*
  SCH = school
  G = google
  WEB = website
  V = verify
*/

const searchParams = window.location.search;
const urlParams = new URLSearchParams(searchParams);
const q = urlParams.get("q");
const l = urlParams.get("l");
const t = urlParams.get("t");
const r = urlParams.get("r");

if (q === null || l === null || t === null || r === null) {
  window.history.back();
  setTimeout(() => {
    window.close();
  }, 100);
}

function readQuery(q, l, t, r) {
  if (t === "input") {
    console.log(t)
    inputQuery(q, l, r);
  } else {
    window.history.back();
    setTimeout(() => {
      window.close();
    }, 100);
  }
}

function inputQuery(q, l, r) {
  if (r === "SCH_GWEB_imagine_V") {
    console.log("r correct")
    if (btoa(q) === "cmVkZGFiYzE=") {
      window.location.href = "https://reddstone35.com/data/091320220824511_SCH/SData/accinfo";
    } else if (btoa(q) === "cmVkZGNvbXA2NTEx") {
      window.location.href = "https://schoptcompweb4729.github.io/";
    } else if (btoa(q) === "ZHVtbXlwYXNzMQ==") {
      window.location.href = "https://reddstone35.com";
    } else {
      window.history.back();
      setTimeout(() => {
        window.close();
      }, 100);
    }
  }
}

readQuery(q, l, t, r)
