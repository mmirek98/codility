function solution(A) {
    let result = [];
    
	// count occurrences of elements
    let map = {};
    for (let i = 0; i < A.length; i++) {
        if(map[A[i]]) map[A[i]]++;
        else map[A[i]] = 1;
    }
    
	// iterate through all elements
    for (let i = 0; i < A.length; i++) {
        let divisor = 0;
        
	// count all divisiors of the element
        for (let j = 1; j*j <= A[i]; j++) {
            if (A[i] % j == 0) {
                if (map[j]) divisor += map[j];
		// if N%j == 0 then N/j != j is also divisor
			// for example 42/2=21 but 21 > sqrt(42) 
			// that way we can count corresponding divisiors
                if (A[i]/j != j)
                    if (map[A[i]/j]) divisor += map[A[i]/j];
            }

        }

	// to obtain non-divisior we subtract number of divisior for element from length of array A 
	result[i] = A.length - divisor;
    }

    return result;
}
