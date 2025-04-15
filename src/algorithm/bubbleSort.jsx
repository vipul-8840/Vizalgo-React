export function bubbleSort(arr, refs, speed, setIsSorting) {
    let animation = [];
    let tempArray = [...arr];
    let n = tempArray.length;
    

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            // Push compare animation (yellow)
            animation.push({
                type: "compare",
                indices: [j, j + 1]
            });

            if (tempArray[j] > tempArray[j + 1]) {
                // Push swap animation (red)
                animation.push({
                    type: "swap",
                    indices: [j, j + 1]
                });

                let temp = tempArray[j];
                tempArray[j] = tempArray[j + 1];
                tempArray[j + 1] = temp;
            }

            // Push revert color to default (optional)
            animation.push({
                type: "revert",
                indices: [j, j + 1]
            });
        }

        // Mark the last sorted element as green
        animation.push({
            type: "sorted",
            index: n - 1 - i
        });
    }

    // Final element is also sorted
    animation.push({
        type: "sorted",
        index: 0
    });

    return animation;
}
