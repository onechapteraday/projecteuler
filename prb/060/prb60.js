/* The primes 3, 7, 109, and 673, are quite remarkable. By taking any two primes
 * and concatenating them in any order the result will always be prime. For example,
 * taking 7 and 109, both 7109 and 1097 are prime. The sum of these four primes,
 * 792, represents the lowest sum for a set of four primes with this property.
 * Find the lowest sum for a set of five primes for which any two primes concatenate
 * to produce another prime. */


function prb60(){
  var primes = eratosthenes(8400),
      soluce = 0;

  var setPrimes = function(n){
    var index = primes.indexOf(n),
        temp = [];
    for(var j = index; j < primes.length; j++){
      if(isprime(parseInt(''+primes[index]+primes[j])) && isprime(parseInt(''+primes[j]+primes[index])))
        temp.push(primes[j]);
    }
    return temp;
  }

  for(var i = 0; i < primes.length; i++){
    var tab1 = setPrimes(primes[i]); 
    if(tab1.length>0){
      for(var j = 0; j < tab1.length; j++){
        var tab2 = setPrimes(tab1[j]),
	    tab3 = [];
        for(var k = 0; k < tab1.length; k++){
          if(binarysearch(tab2,tab1[k])>-1){
            tab3.push(tab1[k]);
          }
	}
	if(tab3.length>0){
	  for(var k = 0; k < tab3.length; k++){
	    var tab4 = setPrimes(tab3[k]),
	        tab5 = [];
            for(var l = 0; l < tab3.length; l++){
              if(binarysearch(tab4,tab3[l])>-1){
                tab5.push(tab3[l]);
              }
	    }
	    if(tab5.length>0){
	      for(var l = 0; l < tab5.length; l++){
	        var tab6 = setPrimes(tab5[l]),
	            temp = 0;
                for(var m = 0; m < tab5.length; m++){
                  if(binarysearch(tab6,tab5[m])>-1){
                    temp = tab5[m];
                  }
	          if(temp>0){
	            soluce = primes[i] + tab1[j] + tab3[k] + tab5[l] + temp;
	            break;
	          }
	        }
                if(soluce>0) break;
	      }
	    }
	    if(soluce>0) break;
	  }
	}
        if(soluce>0) break;
      }
    }
    if(soluce>0) break;
  }
  return soluce;
}
