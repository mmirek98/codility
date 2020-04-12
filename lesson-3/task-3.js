function solution(A) {
    let minDiff = Infinity;
    const wholeSum = A.reduce((acc, curr) => curr + acc);
    let leftSum = 0;
    
	//length-1 bcos there should be atleast one element at each side
    for (let i = 0; i < A.length-1; i++) {
	// increment leftSum in each iteration
        leftSum += A[i];
	// diff = |left - (whole - left)|
        let diff = Math.abs(leftSum - (wholeSum-leftSum));
        
	// if diff = 0 then there is no need for further iterations
        if (diff === 0) return 0;
        minDiff = Math.min(diff, minDiff);
    }
    
    return minDiff;    
}

