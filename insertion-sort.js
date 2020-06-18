/**
 * Uses Insertion Sort to sort
 * a sequence of numbers
 * @param {*} array array of numbers
 */
const insertionSort = (array) => {
    //sort every element in the array
    for (let i = 1; i < array.length; i++) 
    {
        //take the element to sort
        const eltToSort = array[i];

        //find the right position for
        //eltSort in (0, ..., i - 1)
        let j = i - 1;
        while (array[j] > eltToSort && j >= 0)
        {
            //slide the element to the right
            array[j + 1] = array[j];
            //moving on to next element
            j--;
        }
        //inserting the eltToSort at the right spot
        array[j + 1] = eltToSort;
    }
};


//array to sort IN PLACE
const arrayToSort = [5, 2, 4, 4, 1, 3];

console.log("Insertion Sort:")
console.log("=====================");

//before sorting...
console.log(arrayToSort);

//sorting...
insertionSort(arrayToSort);

//printing...
console.log(arrayToSort);

console.log("=====================");
