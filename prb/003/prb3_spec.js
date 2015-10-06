describe('Problem #3 function', function(){
  beforeAll(function() {
    jasmine.addMatchers({
      toBeEven: function(util, customEqualityTesters) {
	this.message = function() {
	  return "Expected " + actual + " to be even";
	}
	return {
	  compare: function(actual){
	    return { pass: util.equals(actual%2==0, true, customEqualityTesters) }
	  }
	}
      }
    });
  });

  it('finds the correct result', function(){
    expect(prb3()).toEqual(6857);
  });

  it('expect the result not to be even', function(){
    expect(prb3()).not.toBeEven();
  });
});
