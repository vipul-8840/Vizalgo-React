export function bubbleSort(arr) {
    let animation = [];
    let tempArray = [...arr];
    let n = tempArray.length;
    

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            
            animation.push({
                type: "compare",
                indices: [j, j + 1]
            });

            if (tempArray[j] > tempArray[j + 1]) {
                
                animation.push({
                    type: "swap",
                    indices: [j, j + 1]
                });

                let temp = tempArray[j];
                tempArray[j] = tempArray[j + 1];
                tempArray[j + 1] = temp;
            }

            
            animation.push({
                type: "revert",
                indices: [j, j + 1]
            });
        }

        
        animation.push({
            type: "sorted",
            indices: n - 1 - i
        });
    }

  
    animation.push({
        type: "sorted",
        indices: 0
    });

    return animation;
}
