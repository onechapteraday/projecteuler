function prb19(){
  var sum = 0,
      calendar = new Calendar().fullCalendar;
  // the century starts in 1901 !
  for(var i = 1; i < 101; i++){
    for(var j = 1 ; j <= 12; j++){
      if(calendar[i][j][1] == "sunday")
        sum++;
    }
  }
  return sum;
}
