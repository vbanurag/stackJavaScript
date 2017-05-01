function Stack () {
  this.arr = [];
  this.top=0;
}
Stack.prototype.push = function (value){
  this.arr[this.top] = value;
  this.top = this.top+1;
  
}
Stack.prototype.print = function (){
  this.arr.map( function(item){
    console.log(item)
  } )
}
Stack.prototype.pull = function () {
  var retVal = this.arr[this.top-1];
  this.arr=this.arr.slice(0,this.top-1);
  this.top = this.top-1;
  return retVal;
}
Stack.prototype.peek = function () {
  return this.arr[this.top-1];
}

Stack.prototype.isContain = function (val,cb) {
  var flag = false;
  this.arr.filter( function (item) {
    if(val === item ){
        flag = true;
       return cb(true);
    }
  })
  if( flag == false ){
    return cb(false);
  }
 
}

//hoe to run the task

/*var st = new Stack ();

st.push(45);
st.push(46);
st.push(47);
st.push(48);
st.push(49);
st.push(50);
st.print();
st.isContain(85,function(val){
    console.log(val)
})*/

// st.print();
