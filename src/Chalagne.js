import React, { useState } from "react";

function Chalagne() {
  const [isOpen, SetisOpen] = useState(true);
  function handleClick() {
    SetisOpen(!isOpen);
  }
  //   const num = 10;
  //   const res = num.toString().split("");
  //   if (Number(res[0] > Number(res[1]))) {
  //     console.log("True");
  //   } else {
  //     console.log("false");
  //   }
  function tuckIn(arr1, arr2) {
    return [arr2,...arr2].sort((a,b)=>a-b)	
  }
  console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]))
  function Array(arr) {
    const hastrue = arr.filter((item) => item === true).length;
    const hasfalse = !arr.includes(true) && arr.includes(false);
    if (hasfalse) {
      return 0;
    } else if (arr.length === 0) {
      return 0;
    } else {
      return hastrue;
    }
  }
  function Array2(arr) {}
  console.log(Array(["UcUNFYGaFYFYGtNUH"]));
  console.log(Array2(["UcUNFYGaFYFYGtNUH"]));
  const test = ["UcUNFYGaFYFYGtNUH"]
    .toString()
    .split("")
    .filter((item) => /[a-z]/.test(item))
    .join("");
  console.log(test);
  // console.log(seriesResistance([1, 5, 6, 3]))
  return <></>;
}
export default Chalagne;
