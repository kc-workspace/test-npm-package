const checker = require("@kcws/dtcheck");

if (!checker.isExist) {
  throw new Error("missing isExist() from @kcws/dtcheck");
} else {
  console.log("completed");
}
