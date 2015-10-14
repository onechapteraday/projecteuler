describe('The new Calculator', function(){
  var calc = new Calculator();

  describe('does some additions', function(){
    var a = calc.addition('147586321412563694559633','5874532698962144366844'),
        b = calc.addition('999999999999999999999','1'),
        c = calc.addition('0','4378'),
        d = calc.addition('9999','9999'),
        e = calc.addition('1233434323432454521234','99872343237868642879');
  
    it('finds the correct result for a', function(){
      expect(a).toEqual('153460854111525838926477');
    });
  
    it('finds the correct result for b', function(){
      expect(b).toEqual('1000000000000000000000');
    });
  
    it('finds the correct result for c', function(){
      expect(c).toEqual('4378');
    });
  
    it('finds the correct result for d', function(){
      expect(d).toEqual('19998');
    });
  
    it('finds the correct result for e', function(){
      expect(e).toEqual('1333306666670323164113');
    });
  });

  describe('does some multiplications', function(){
    var f = calc.multiplication('147586321412563694559633','5874532698962144366844'),
        g = calc.multiplication('999999999999999999999','1'),
        h = calc.multiplication('0','4378'),
        i = calc.multiplication('9999','9999'),
        j = calc.multiplication('1233434323432454521234','99872343237868642879');
  
    it('finds the correct result for f', function(){
      expect(f).toEqual('867000671057642319468574944988733500186008252');
    });
  
    it('finds the correct result for g', function(){
      expect(g).toEqual('999999999999999999999');
    });
  
    it('finds the correct result for h', function(){
      expect(h).toEqual('0');
    });
  
    it('finds the correct result for i', function(){
      expect(i).toEqual('99980001');
    });
  
    it('finds the correct result for j', function(){
      expect(j).toEqual('123185976111214383871838337251819268392686');
    });
  });
});
