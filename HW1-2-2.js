/**
 * Created by lyan01 on 6/19/16.
 */
var fs = require('fs');
var outfile = "HW1-2-2.txt";
var primes = [2];
var i = 1;

main:
while(primes.length < 100) {
    i += 2;
    for (var m = 0; m < primes.length; m++) {
        if(i % primes[m] === 0) {
            continue main;
        }
    }
    primes.push(i);
}
var output = primes.toString() + '\n';

fs.writeFileSync(outfile, output);
console.log("Script: " + __filename + "\nWrote: " + output + "To: " + outfile);