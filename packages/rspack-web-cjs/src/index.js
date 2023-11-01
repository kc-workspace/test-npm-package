const { isExist } = require("@kcws/dtcheck");

const element = document.getElementById("root");

if (isExist(element)) {
  element.innerHTML = "<span>found me</span>";
} else {
  element.innerHTML = "<span>failed</span>";
}
