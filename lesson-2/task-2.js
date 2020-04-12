function solution(A) {
    // map to store single occurences
    let result = {};
    
    for (let i = 0; i < A.length; i++) {
        // if occurency of A[i] already exists then delete that property - pair found
        if (result[A[i]]) {
            delete result[A[i]];
        }
        // if there is no occurence in map, then unpaired found
        else {
            result[A[i]] = A[i];
        }
    }
    
    // only one property should exists in the object
    let res;
    for (prop in result) {
        res = parseInt(prop, 10);
    }
    
    return res;
}

