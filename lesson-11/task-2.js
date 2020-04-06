function solution(N, P, Q) {
    // return object has property for every number from 0 to N
    primeNumbs = findPrime(N);

    // return array is sum of semiprimes from 0 to i, i <= N
    semiprime = countSemiprime(N);
    

    // using prefix sums to get results
    let result = [];
    for (let i = 0; i < P.length; i++) {
        result[i] = semiprime[Q[i]] - semiprime[P[i]-1];
    }

    return result;
}

const findPrime = N => {
    let sieve = {};
    for (let i = 0; i < N; i++) sieve[i] = true;
    sieve[0] = sieve[1] = false;
    let i = 2;
    while (i * i <= N) {
        if (sieve[i]) {
            let k = i * i;
            while (k <= N) {
                sieve[k] = false;
                k += i;
            }
        }
        i++;
    }

    return sieve;
}

const countSemiprime = N => {
    let semiprime = [];
    for (let i = 0; i<=N; i++) semiprime[i] = 0;

    for (let i = 2; i <= N; i++) {
        if (primeNumbs[i]) {
            for (let j = i; j*i <= N; j++)
                if (primeNumbs[j])
                    semiprime[i*j]++;
        }
    }
    
    for (let i = 1; i <= N; i++)
        semiprime[i] += semiprime[i-1];

    return semiprime
}
