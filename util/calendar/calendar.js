/* This calendar starts January 1st, 1900 : [0][1][1] 
 * [0] => 1900 ; [1] => January ; [1] => 1st day of the month
 * For example: May 8th, 1902 is [2][5][8]
 * October 6th, 2015 is [115][10][6] */

var Calendar = function(){
  this.year = new Date().getFullYear();
  this.week = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];
  this.leapyears = [];
  this.fullCalendar = [];
  this.returnDay = function(){
    var temp = this.week[0];
    this.week.shift();
    this.week.push(temp);
    return temp;
  }
  for(var i = 1900; i <= this.year; i++){
    if( (i%100==0 && i%400==0) || (i%100!=0 && i%4==0) )
      this.leapyears.push(i);
  }
  for(var i = 1900 ; i < this.year; i++){
    this.fullCalendar[this.fullCalendar.length] = new Array();
    for(var j = 1 ; j <= 12 ; j++){
      if(j==1 || j==3 || j==5 || j==7 || j==8 || j==10 || j==12){
        this.fullCalendar[this.fullCalendar.length-1][j] = new Array(31);
        for(var k = 1; k <= 31; k++){
          this.fullCalendar[this.fullCalendar.length-1][j][k] = this.returnDay();
        }
      }else if(j==2){
        if(this.leapyears.indexOf(i)>-1){
          this.fullCalendar[this.fullCalendar.length-1][j] = new Array(29);
          for(var k = 1; k <= 29; k++){
            this.fullCalendar[this.fullCalendar.length-1][j][k] = this.returnDay();
          }
        }else{
          this.fullCalendar[this.fullCalendar.length-1][j] = new Array(28);
          for(var k = 1; k <= 28; k++){
            this.fullCalendar[this.fullCalendar.length-1][j][k] = this.returnDay();
          }
        }
      }else{
        this.fullCalendar[this.fullCalendar.length-1][j] = new Array(30);
        for(var k = 1; k <= 30; k++){
          this.fullCalendar[this.fullCalendar.length-1][j][k] = this.returnDay();
        }
      }
    }
  }  
}
