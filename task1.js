function palindrome(s) {
    var res = true;
    s = s.toString().toLowerCase().replace(/\s/g,'');
    s = s.replace(/[^a-zA-Zа-яА-Я]/g, '');
        
    for(var i=0, j=parseInt(s.length/2), k=s.length-1; i<j; i++, k--) {
        if(s.charAt(i) != s.charAt(k)) {
            res = false;
            break;
        }        
    }
    
    return res;
}

var valuepal = 0;
valuepal = process.argv[2];

if (palindrome(valuepal) === true) {
	console.log("YES");
} else {
	console.log("NO");
}

