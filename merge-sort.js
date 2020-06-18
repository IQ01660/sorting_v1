/**
 * This function calls the recursive
 * _mergeSort function
 * @param {*} array
 */
const mergeSort = (array) => {
	_mergeSort(array, 0, array.length - 1);
};

//calling mergeSort here
//======================
const myArray = [2, 4, 7, 5, 10, 7, 4, 1, 6];
console.log("Merge Sort:");
console.log("===========");

console.log(myArray);

mergeSort(myArray);

console.log(myArray);

console.log("===========");
//======================


/**
 * The actual recursive
 * merge sort algorithm
 * @param {Th} array
 * @param {*} p first index
 * @param {*} r final index
 */
function _mergeSort(array, p, r) {
	//if the subsequence contains at least
	//one element
	if (p < r) {
		//the partition index
		const q = Math.floor((p + r) / 2);
		//separating the sequence into two subsequences
		_mergeSort(array, p, q);
		_mergeSort(array, q + 1, r);

		//merging two sorted sequences
		merge(array, p, q, r);
	}
}

/**
 * The helper function that merges
 * two sub-arrays
 * @param {*} array
 * @param {*} p init index
 * @param {*} q partition index
 * @param {*} r final index
 */
function merge(array, p, q, r) {
	//temporary sorted array
	const temp_arr = [];

	let first_iterator = p;
	let second_iterator = q + 1;

	//while both piles are non-empty
	while (first_iterator <= q && second_iterator <= r) {
		// add the smallest of two smallest elements to temp_arr
		if (array[first_iterator] <= array[second_iterator]) {
			temp_arr.push(array[first_iterator]);
			first_iterator++;
		} else {
			temp_arr.push(array[second_iterator]);
			second_iterator++;
		}
	}

	//figure out which pile isn't empty
	//and add its elements to temp_arr
	while (first_iterator <= q) {
		temp_arr.push(array[first_iterator]);
		first_iterator++;
	}

	while (second_iterator <= r) {
		temp_arr.push(array[second_iterator]);
		second_iterator++;
    }
    
    //puting elements in temp_arr into A (in correct spot)
    temp_arr.forEach((elt, idx) => {
        array[p + idx] = elt;
    });
}
