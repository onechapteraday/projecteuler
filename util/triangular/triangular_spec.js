describe('Triangular numbers array', function(){
  var triangles = triangular(1000);

  it('is truthy', function(){
    expect(triangles).toBeTruthy();
  });

  it('is really an array', function(){
    expect(Array.isArray(triangles)).toBe(true);
  });

  it('has 45 triangular numbers under 1000', function(){
    var under = 0;
    for(var i = 0; i < triangles.length; i++){
      if(triangles[i]<1000){
        under++;
      } else break;
    }
    expect(under).toEqual(45);
  });

  it('contains 0, 153, 378, 1081 as triangular numbers', function(){
    expect(triangles).toContain(0);
    expect(triangles).toContain(153);
    expect(triangles).toContain(378);
    expect(triangles).toContain(1081);
  });

  it('does not contain 9, 24, 172', function(){
    expect(triangles).not.toContain(9);
    expect(triangles).not.toContain(24);
    expect(triangles).not.toContain(172);
  });
});
