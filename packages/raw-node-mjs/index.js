import checker from "@kcws/dtcheck";

if (!checker.isExist) {
  throw new Error("missing isExist() from @kcws/dtcheck");
}
