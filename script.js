longestPalindrome=function(s){
  if (s.length !== 0){
  finalArr=[]
  let testArr = s.substring(0,5).split('').reverse().join('')
  for (i=0;i<s.length;i++){
     for(l=0;l<s.length;l++){
      let reverse = s.substring(i,l+1).split('').reverse().join('')
      if (s.substring(i,l+1)===reverse){
       finalArr.push(s.substring(i,l+1))
     }
     }
  }
   finalArr.sort(function(a,b){
    return b.length-a.length
   })
   return finalArr[0].length
} else {
  return 0
}
}

console.log(parseFloat(4))

console.log(longestPalindrome("babad"))