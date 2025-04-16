export function selectionSort({arr,ref,speed})
{
    let animation = [];
    let tempArray = [...arr];
    let n = tempArray.length;
    let i = 0;
    let j = 0;
    for( i=0;i<n;i++)
    {
       let  minIndex = i;
        for( j=i+1;j<n;j++)
        {
             animation.push({
                type:'compare',
                indices:[i,j]
             })
             if(tempArray[j]<tempArray[i])
             {
                minIndex = j;
             }
        }
        if(minIndex!=i)
        {
            animation.push({
                type:'swap',
                indices:[i,j]
            })
            let temp = tempArray[j];
            tempArray[i] = tempArray[j];
            tempArray[j] = temp;
        }
        else{
                    animation.push({
                        type: "revert",
                        indices: [i, j ]
                    });
             
        }
        animation.push({
            type:"sorted",
            indices :i
        })

    }
    animation.push({
        type:"sorted",
        indices :n-1
    })
   return animation;
}