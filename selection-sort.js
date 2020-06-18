/**
 * In place selection sort
 */
const selectionSort = (array) => {
    for (let i = 0; i < array.length - 1; i++)
    {
        //finding the minimum element at the front
        let min_idx = i;
        for (let j = i + 1; j < array.length; j++)
        {
            if (array[min_idx] > array[j])
            {
                min_idx = j;
            }
        }
        //swapping
        const temp = array[min_idx];
        array[min_idx] = array[i];
        array[i] = temp;
    }
};

const toSort = [5,3,3,7,3,4];

console.log("Selection Sort:");
console.log("===============");

console.log(toSort);

selectionSort(toSort);

console.log(toSort);

console.log("===============");