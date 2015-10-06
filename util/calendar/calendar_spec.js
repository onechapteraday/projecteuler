describe('Calendar', function(){
  var calendar = new Calendar();

  it('is truthy', function(){
    expect(calendar).toBeTruthy();
  });

  it('has a defined year', function(){
    expect(calendar.year).toBeDefined();
    expect(typeof(calendar.year)).toBe('number');
  });

  it('has a calendar with full dates', function(){
    expect(Array.isArray(calendar.fullCalendar)).toBe(true);
  });

  it('has a complete week at disposal', function(){
    expect(calendar.week).toContain('sunday');
    expect(calendar.week).toContain('monday');
    expect(calendar.week).toContain('tuesday');
    expect(calendar.week).toContain('wednesday');
    expect(calendar.week).toContain('thursday');
    expect(calendar.week).toContain('friday');
    expect(calendar.week).toContain('saturday');
  });

  it('knows which year is a leapyear', function(){
    expect(calendar.leapyears).not.toContain(1900);
    expect(calendar.leapyears).toContain(1904);
    expect(calendar.leapyears).not.toContain(1959);
    expect(calendar.leapyears).toContain(1988);
    expect(calendar.leapyears).toContain(2000);
    expect(calendar.leapyears).not.toContain(2013);
  });

  it('have the correct day for these dates', function(){
    expect(calendar.fullCalendar[1][8][4]).toBe("sunday"); // Louis Armstrong birth
    expect(calendar.fullCalendar[2][5][8]).toBe("thursday"); // Mont. Pelee eruption
    expect(calendar.fullCalendar[12][4][14]).toBe("sunday"); // Sinking of the Titanic
    expect(calendar.fullCalendar[23][10][16]).toBe("tuesday"); // The Walt Disney Company is founded
    expect(calendar.fullCalendar[46][11][1]).toBe("friday"); // First game in the NBA: New York Knicks vs Toronto Huskies
    expect(calendar.fullCalendar[55][12][1]).toBe("thursday"); // Rosa Parks refuses to give up her seat
    expect(calendar.fullCalendar[69][7][21]).toBe("monday"); // First steps on the Moon
    expect(calendar.fullCalendar[101][8][25]).toBe("saturday"); // Aaliyah death
  });
});
