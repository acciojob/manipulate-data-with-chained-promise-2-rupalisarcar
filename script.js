//your JS code here. If required.
const outputDiv = document.getElementById("output");
const promise1 = (arr) =>{
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			const evenArr = arr.filter((val)=>val%2===0);
			resolve(evenArr.join());
		},1000)		
	})
}

const promise2 = (arr) =>{
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			const multiplyArr = arr.map((val)=>val*2);
			resolve(multiplyArr.join());
		},2000)		
	})
}
const arr = [1,2,3,4];
promise1(arr).then((filterArr)=>{
	outputDiv.textContent = filterArr;
	let arr2=filterArr.split(',').map(Number)
	return promise2(arr2)
}).then((mulArr)=>{
	outputDiv.textContent = mulArr;
}).catch((e)=>{
	console.log('error',e)
})


