function solution(N, A) {
    const counters = [];
    // counters[0] will be empty
    for (let i = 1; i <= N; i++) {
        counters[i] = 0;
    }
    
    // save max value
    let max = 0;
    // save prevMax to detect if prev operation was incrementing all counters
    let prevMax = 0;
    for (let i = 0; i < A.length; i++) {
        // set every counter to max
        if (A[i] === N+1) {
            // if previous operation was also incrementing all counters then omit looping whole counters
            if (max == prevMax) continue;
            
            for (let j = 0; j < counters.length; j++)
                counters[j] = max;
                
            // update prev max to avoid unnecessary loops
            prevMax = max;
        } 
        // increase one counter and update max
        else {
            counters[A[i]]++;
            max = Math.max(max, counters[A[i]]);
        }
    }
    
    // delete first unused element
    counters.shift();
    return counters;
}

