function solution(N) {
    const binary = toBinary(N);
    let result = 0;
    let max = 0;
	
    // look for gaps
    for (let i = 1; i < binary.length; i++) {
        if (binary[i-1] === 1 && binary[i] === 0) {
            result = 1;
        } else if (binary[i-1] == 0 && binary[i] === 0) {
            result++;
        } 
	// gap found - check if it is greater than max
	else if (binary[i-1] == 0 && binary[i] === 1) {
            max = Math.max(max, result);
        }
    }
   
    return max;
}

// int to array of binary representation (space consuming solution)
const toBinary = (n) => {
    let binary = [];
    while (n > 0) {
        if (n%2 == 0) {
            binary.push(0);
        } else {
            binary.push(1);
    	}

        n = Math.floor(n/2);
    }

    return binary.reverse();
};
    
