var Benchmark = require('benchmark').Benchmark;
var spawn = require('child_process').spawn;
var suite = new Benchmark.Suite();

suite.add(
	createBench('c++', './target/primes', [])
);

suite.add(
	createBench('java', 'java', ['-cp', 'target', 'primes'])
);

suite.add(
	createBench('node.js', 'node', ['src/primes.js'])
);

/*suite.add(
	createBench('python', 'python', ['src/primes.py'])
);*/

suite.on('cycle', function(event) {
	console.log('' + event.target);
});

suite.on('complete', function() {
	var nodejs = this.filter(function(item) {
		return item.name === 'node.js';
	})[0];

	this.forEach(function(bench) {
		if(bench.name !== 'node.js') {
			var perc = percentage(bench.stats.mean, nodejs.stats.mean);
			if(perc > 0) {
				console.log(
					'node.js is slower than '
					+ bench.name
					+ ' by '
					+ Benchmark.formatNumber(perc.toFixed(2)) + '%'
				);
			} else {
				perc = -perc;
				console.log(
					'node.js is faster than '
					+ bench.name
					+ ' by '
					+ Benchmark.formatNumber(perc.toFixed(2)) + '%'
				);
			}
		}
	});

	function percentage(standard, value) {
		if(standard == 0) {
			throw new Error('cant compare to 0');
		}
		var diff = value - standard;
		return diff / standard * 100;
	}
});

suite.run();

function createBench(name, cmd, args) {
	return {
		name: name,
		defer: true,
		fn: function(deferred) {
			var process = spawn(cmd, args);

			process.on('close', function() {
				deferred.resolve();
			});
		}
	};
}
