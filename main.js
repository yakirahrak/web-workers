const num = 1000000000;
function sum() {
	console.log('sum task'); 
	let sum = 0;
	for(let i = 0; i < num; i++) {
		sum += i;
	}
}

function func() {
	sum();
	console.log('another task');
}

function funcWithTimeout() {
	setTimeout(sum, 0);
	console.log('another task');
}

function funcWithTimeout2() {
	let sum = 0;
	for(let i = 0; i < num; i++) {
		setTimeout(() =>  { 
			sum+= i; 
		}, 0);
	}
	console.log('another task');
}

function funcWithTimeout3() {
	let sum = 0;
	const bucketsCount = 1000;
	const bucketSize = num/bucketsCount;
	function inner(bucketIndex) {
		const currentBucketIndex = bucketIndex * bucketSize;
		const nextBucketIndex = (bucketIndex + 1) * bucketSize;
		for(let i = currentBucketIndex; i < nextBucketIndex; i++) {
			sum += i;
		}
	}
	for(let i = 0; i < bucketsCount; i++) {
		setTimeout(() =>  inner(i), 0);
	}
	console.log('another task');
}

function funcWithWorker() {
	var worker = new Worker('worker.js');

	worker.postMessage({ cmd: 'sum', num });

	worker.addEventListener('message', function(e) {
	  console.log(e.data);
	});

	console.log('another task');

	// worker.terminate();
}