export function bubbleSort(arr)
{
    console.log("bubble sort")
    let animation = [];
    let tempArray = [...arr];
    let n = tempArray.length ;
    for(let i=0;i<n-1;i++)
    {
        for(let j=0;j<n-1;j++)
        {
            if(tempArray[j]>tempArray[j+1])
            {
                let temp = tempArray[j];
                tempArray[j] = tempArray[j+1];
                tempArray[j+1]=temp;
            }
           
        }
    }

    console.log(tempArray)

}