
/*
* This is just a quick implementation of the diffie hellman algorithm in Javascript
*
* Step 1: Get a common base and a common modulus call them b and m respectively
* Step 2: Generate a random integer, as a secret, call it s
* Step 3: Compute and share b^(s) mod m, this is a public mix
* Step 4: Recieve other people's public mixes, call them P where P = {p1,p2,...}
* Step 5: For p in P compute p^s mod m, this is now your secret key S
*
*/

//Store the private variables somewhere
var _private = {};

//Does this browser have crypto enabled?
_private.crypto = window.crypto && window.crypto.getRandomValues;

/*
* rng - the random number generator used by this program, non-editable
*   @param nums {Number} - number of 32 bit random number
*   @return {Array} - an array of random 32 bit numbers
*/
_private.rng = function(nums){
  var arr;
  if(_private.crypto){
    arr = new Uint32Array(nums);
    window.crypto.getRandomValues(nums);
  }else{
    arr = [];
    while(nums--){
      //Push a random 32 bit number into it
      arr.push(~~(Math.random() * Math.pow(2,32)));
    }
  }
  return arr;
}



function Diffie(options){
  options.key = options.key || this.genSecret();

  //We can only generate if there's a common base and modulus already defined
  if(this.common){
    this.common = {
      base: options.common.base,
      modulus: options.common.modulus
    };
    this.genShared();
  }

  return this;
}


Diffie.config = {
  bits:{
    modulus: 2048,
    base: 224
  }
};




/*
* Diffie.genSecret - generates an appropriate sized secret key
* @return {BI}
*/
Diffie.prototype.genSecret = function(){

}
