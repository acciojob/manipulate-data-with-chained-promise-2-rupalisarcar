//your JS code here. If required.
let input = document.getElementById('processBtn');
input.addEventListener('click', function() {
    // Get the input value
    const input = document.getElementById('numberInput').value;
	console.log(input)

    // Convert the input string to an array of numbers
    const numbersArray = input.split(',').map(Number);

    // Call your function to process the array
    processArray(numbersArray);
});

function processArray(arr) {
    // Here you can implement your logic (like filtering and transforming the array)
    const outputDiv = document.getElementById("output");
	const evenArr = arr.filter((val)=>val%2===0);
	const evenNumber = evenArr.join();
	setTimeout(()=>{
		outputDiv.textContent = evenNumber;
	},1000)
	setTimeout(()=>{
		const mulArr = evenArr.map((val)=>val*2)
		outputDiv.textContent = mulArr;
	},3000)
}