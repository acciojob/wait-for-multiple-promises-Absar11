//your JS code here. If required.
let output = document.getElementById('output');

let promise1Start = Date.now();
let promise1 = new Promise((resolve) => {
	setTimeout(()=>{
		let time = ((Date.now() - promise1Start) / 1000).toFixed(2);
		resolve({ name: 'Promise 1', time });
	}, 2000)
})

let promise2Start = Date.now();
let promise2 = new Promise((resolve) => {
	setTimeout(()=>{
		let time = ((Date.now() - promise2Start) / 1000).toFixed(2);
		resolve({ name: 'Promise 2', time });
	}, 1000)
})

let promise3Start = Date.now();
let promise3 = new Promise((resolve) => {
	setTimeout(()=>{
		let time = ((Date.now() - promise3Start) / 1000).toFixed(2);
		resolve({ name: 'Promise 3', time });
	}, 3000)
})


let timeStart = Date.now();

Promise.all([promise1, promise2, promise3])
	.then(results => {
		output.innerHTML = ''; 
		results.forEach(p => {
			let row = document.createElement('tr');
			row.innerHTML = `<td>${p.name}</td><td>${p.time}</td>`;
			output.appendChild(row);
		});
		let timeTaken = ((Date.now() - timeStart) / 1000);
		let row = document.createElement('tr');
		row.innerHTML = `<td><strong>Total</strong></td>
						<td>${timeTaken}</td>`;
		output.appendChild(row);
});



