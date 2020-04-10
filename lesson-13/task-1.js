function solution(A) {
    const fibSum = (len) => {
        let fib = {0: 0, 1: 1};
        let res =1;
        let a = 0;
        let b = 1;
        
        // N = 100k so there wont be more than 25 elements
        while (fib[res] <= len) {
            res = a + b;
            fib[res] = res;
            a = b;
            b = fib[res];
        }
        return fib;
    }
    
    let result = 0;
    const series = fibSum(A.length);
    delete series[0]
    let toBeat = A.length + 1;
    
    // can jump over whole river
    if (series[toBeat])
        return 1;
    
    // paths = set of nodes (leaves)
    let paths = {};    
    for (let i = A.length-1; i >= 0; i--) {
        if (A[i]) paths[i] = [];
    }
    paths[-1] = [];
    paths[A.length] = [];
    
    // each leaf will store indexes of leaves that frog can move
    for (let leaf in paths) {
        for (let jump in series) {
            if (paths[parseInt(leaf)+parseInt(jump)])
                paths[leaf].push(parseInt(leaf)+parseInt(jump));
        }
    }
    
    return result;
}

