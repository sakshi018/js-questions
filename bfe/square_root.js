//Time : O(log x) ,space : O(1);
function mySqrt(x) {
    // your code here   
    if(isNaN(x) || x<=0){
      return NaN;
    }
    let left = 1 , right = x;
    while(left<=right){
      let mid = Math.floor(left+(right-left)/2);
      if((mid*mid)<x){
        left = mid+1;
      }else if((mid*mid)>x){
        right = mid-1;
      }else return mid;
    }
    return left-1;
  }