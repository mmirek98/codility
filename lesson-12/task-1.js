function solution(N, M) {
    let greatestCommonDivisior = gcd(N, M);
    
    let leastCommonMultiple = (N*M)/greatestCommonDivisior;
    
    // divide by M to get result
    return leastCommonMultiple/M;
}

const gcd = (n, m) => {
    if (n % m === 0)
        return m;
    else 
        return gcd(m,n % m)
    
}
