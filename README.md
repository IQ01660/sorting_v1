# Introduction - Chapter 1
## Contents
1. Insertion Sort
2. Selection Sort
3. Divide and Conquer - case study of Merge Sort
4. Analyzing Divide and Conquer algorithms with recurrences

We begin our study of algorithms with the problem of sorting a sequence of numbers into nondecreasing order. 
## Formal Definition of the Sorting Problem:
Input: a sequence of n numbers (a1, a2, ..., an)
Output: A permutation (reordering) (a1', a2', ..., an') of the input sequence s.t. 
a1' <= a2' <= ... <= an'.

## Insertion Sort
An efficient algorithm for sorting a small number of elements. 
The input numbers are sorted in place: the numbers are rearranged within the array A, with at most a constant number of them stored outside the array at any time. 
### Pseudocode:
```
Insertion-Sort (A): // A is an array of length n
	for j = 1 to A.length - 1:
		eltToSort = A[j] // the element is picked to be inserted
		k = j - 1;
		while A[k] > eltToSort  && k >= 0:
			A[k + 1] = A[k]
			k- -
		A[k + 1] = eltToSort
```
Worst case runtime: Big_theta(n^2)

## Selection Sort
Choosing the smallest element in he sequence and putting it at the start of the sequence - can be done in-place
### Pseudocode:
```
Selection-Sort(A): // where A its the array to be sorted in place
	//j = the future pos of the minimum element
	for j = 0 to A.length - 2:
		//finding the minimum elt’s pos 
		min_idx = j
		for k = j + 1 to A.length - 1:
			if A[k] < A[min_idx]:
				min_idx = k
		//swapping
		temp = A[min_idx]
		A[min_idx] = A[j]
		A[j] = temp
```
Worst-case runtime: Big_theta(n^2)

## Divide and Conquer approach:
The divide and conquer paradigm involves three at each level of recursion:

1. Divide problem into a number of subproblems
2. Conquer the subproblems recursively. If the subproblems are small enough solve them in a straightforward manner.
3. Combine the solution to the subproblems into a solution for the original problem


## Case Study - Merge Sort:
1. Divide a sequence of n elements into two subsequences of n / 2 elements
2. Conquer: sort the two subsequences recursively using merge sort 
3. Combine: merge the two sorted subsequences to produce the sorted answer.
We note that the recursion "bottoms out" when the sequence to be sorted has length 1, in which case there is no work to be done, since every sequence of length 1 is already in sorted order. 

The key operation of the merge sort algorithm is the merging of two sorted sequences in the "combine" step. To perform the merging, we use an auxiliary procedure MERGE(A,p, q, r), where A is an array and p, q, and r are indices numbering elements of the array such that p <= q < r. The procedure assumes that the subarrays A[p .. q] and A[q + 1 .. r] are in sorted order. It merges them to form a single sorted subarray that replaces the current subarray A[p .. r]. Merge operation has a runtime of 
Merge sort is not in place due to a call stack of merge functions - thus overall more than constant space is used to keep track of sequence elements.
### Pseudocode:
```
Merge-Sort(A, p, r): // A is the array, p/r - starting/ending idx
	if p < r:
		q = Math.floor( (p + r) / 2 )
		Merge-Sort(A, p, q)
		Merge-Sort(A, q + 1, r)
		Merge(A, p, q, r)
```


```
//one implementation of Merge - not in place
Merge (A, p, q, r):
	B = new array of size r - p + 1 // new array
	output_idx = 0; // the index of current to be merged output array
	first_iterator = p // iterator for first sub-array
	second_iterator = q + 1 // iterator from second sub-array
	// execute until one of the decks becomes empty
	while first_iterator <= q and second_iterator <= r:
		if A[first_iterator] >= A[second_iterator]:
			B[output_idx] = A[second_iterator]
			second_iterator++
			output_idx++
		else 
			B[output-idx] = A[first-iterator]
			first-iterator++
			output_idx++
	// now one of the two decks is empty
	while (first_iterator <= q):
		B[output_idx] = A[first_iterator]
		first_iterator++	
		output_idx++
	while (second_iterator <= q):
		B[output_idx] = A[second_iterator]
		second_iterator++	
		output_idx++
	// copying array B into A
	for j = 0 to B.length:
		A[p + j] = B[j]
```

### Recurrence of merge sort:
T(n) = {
	if n = 1: Big_theta(1): 
	if n > 1: aT(n / b) + C(n) + D(n) 
}

Recall for analyzing divide and conquer algorithms we have:, 
where a - # of divisions, b - factor of decrease of the size of the problem,
D - cost of  dividing the problem, C - cost of combining the problem.
This result later yields a runtime of T(n) = . (Master’s theorem).