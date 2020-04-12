function solution(A) {
    let sum = 0;
    let actualSum = 0;

    for (let i = 1; i <= A.length; i++) {
        // sum is teoretical result (if A would not have missing element)
        sum += i;
        // actualSum
        actualSum += A[i-1];
    }
    // need to add one more number since A is missing one
    sum += A.length+1;
    
    return sum - actualSum;
}

