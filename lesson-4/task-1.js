function solution(X, A) {
    let path = {};
    
    // find when first leaf drops at each position 
    for (let i = 0; i < A.length; i++) {
        if (!path.hasOwnProperty(A[i])) {
            path[A[i]] = i;
        }
    }

    // check if all leaves are available and save time
    let time = 0;
    let step = 1;
    while (step <= X) {
        if (path.hasOwnProperty(step)) {
            time = Math.max(path[step], time);
            step++;
        } else {
            return -1;
        }
    }

    return time;
}

