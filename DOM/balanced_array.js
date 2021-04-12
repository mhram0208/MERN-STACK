function mergeArray(a, b) {
  if (a.length == 0 && b.length == 0) {
    return `empty array`;
  } else {
    // for (let i = a.length - 1; i >= 0; i--) {
    //   for (let j = 0; j < b.length; j++) {
    //     if (a[i] == b[j]) {
    //       a.splice(i, 1);
    //     }
    //   }
    // }
    // return a.concat(b);

    let mergedArr = a.concat(b);
    const duplicates = mergedArr.filter((ele, index) => {
      return mergedArr.indexOf(ele) !== index;
    });
    duplicates.forEach((ele) => {
      if (mergedArr.includes(ele)) {
        mergedArr.splice(mergedArr.indexOf(ele), 1);
      }
    });
    return mergedArr;

    // let result = [];
    // mergedArr.forEach((ele) => {
    //   if (result.includes(ele)) {
    //     mergedArr.splice(mergedArr.indexOf(ele), 1, ele);
    //   } else {
    //     result.push(ele);
    //   }
    // });
    // return result;
  }
}

console.log(mergeArray([1, 2, 3], [2, 30, 1]));
