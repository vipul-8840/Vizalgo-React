export function selectionSort(arr) {
    const animation = [];
    const tempArray = [...arr];
    const n = tempArray.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            animation.push({
                type: 'compare',
                indices: [minIndex, j],
            });

            if (tempArray[j] < tempArray[minIndex]) {
                minIndex = j;
            }

            animation.push({
                type: 'revert',
                indices: [minIndex, j],
            });
        }

        if (minIndex !== i) {
            animation.push({
                type: 'swap',
                indices: [i, minIndex],
            });

            const temp = tempArray[i];
            tempArray[i] = tempArray[minIndex];
            tempArray[minIndex] = temp;
        }

        animation.push({
            type: 'sorted',
            indices: [i],
        });
    }

   
    animation.push({
        type: 'sorted',
        indices: [n - 1],
    });

    return animation;
}
