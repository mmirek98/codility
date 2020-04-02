function solution(A) {
    const len = A.length;

    // check if can have peek
    if (len < 3) return 0;
    
    // find peaks array
    let peaks = [];
    peaks[len-1] = -1;
    for (let i = len-2; i > 0; i--) {
        if (A[i] > A[i+1] && A[i] > A[i-1]) {
            peaks[i] = i;
        } else {
            peaks[i] = peaks[i+1];
        }
    }
    peaks[0] = peaks[1];

	// check if have peek
    if (peaks[0] === -1) return 0;

    let dividers = [];
        
    const maxNumb = Math.sqrt(len) + 1;
    for (let i = 3; i <= maxNumb; i++) {
        if (len % i === 0)
            dividers.push(i);
    }
    let max = 1;
    
        for (let i = 0; i < A.length; i++) {
    if (peaks[i] == -1) peaks[i] = peaks[i-1];
}
   
    for (div of dividers) {
        let canReturn = true;

        for (let i = div; i <= len; i += div) {
            if (peaks[i-div] > i-1 || peaks[i-div] < i-div) {
                canReturn = false
                break;
            } 
        }
        if (canReturn) return len/div;
    } 
    
    return max;
}
