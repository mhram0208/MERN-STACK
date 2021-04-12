// function pangram(str) {
//   str = str.toLowerCase();
//   const alphabet = "abcdefghijklmnopqrstuvwxyz";
//   alphaArr = alphabet.split("");
//   let result = true;
//   for(let i=0;i<alphaArr.length;i++) {
//     console.log(alphaArr[i]);
    
//     if(str.indexOf(alphaArr[i])==-1){
//         result =false;
//         break;
//     }else{
//         continue;
//     }
//     //   console.log(str.indexOf(ele));
     
//     return str.indexOf(alphaArr[i]) !== -1;
//   };
//   return result;
  
// }

// console.log(pangram("The quick brown fox jumps over the lazy dog"));
console.log(pangram("Rama"));

function pangram(a){
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    a = a.toLowerCase();
    let result = false;
    alphabet.split("").forEach(function (ele) {
        console.log(ele)
        console.log(a.indexOf(ele))
        if(a.indexOf(ele) == -1){
            result =false;
        } else{
            result =true;
        }
        console.log(result)
        
        // console.log(a.indexOf(ele) !== -1)
        // return (a.indexOf(ele) !== -1);
    });
    return result;
}