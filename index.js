
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
*   @param base {Number} - if this is set, we'll return an array of base n strings
*   @return {Array} - an array of random 32 bit numbers
*/
_private.rng = function(nums,base){
  var arr,i;
  if(_private.crypto){
    arr = new Uint32Array(nums);
    window.crypto.getRandomValues(nums);
  }else{
    arr = [];
    i = nums;
    while(i--){
      //Push a random 32 bit number into it
      arr.push(~~(Math.random() * Math.pow(2,32)) >>> 0);
    }
  }

  if(base){
    while(nums--){
      arr[nums] = arr[nums].toString(base);
    }
  }

  return arr;
}



function Diffie(options){
  this.key = options.key || this.genSecret();

  //We can only generate if there's a common base and modulus already defined
  if(this.common){
    var _base = options.common.base;
    var _modulus = options.common.modulus;
    this.common = {
      base: (_base instanceof BI? _base : new BI(_base)),
      modulus: (_modulus instanceof BI? _modulus : new BI(_modulus))
    };
    this.genShared();
  }

  return this;
}


Diffie.config = {
  bits:{
    modulus: 2048,
    base: 224,
    secret: 256
  }
};




/*
* Diffie.genSecret - generates an appropriate sized secret key
* @return {BI}
*/
Diffie.prototype.genSecret = function(){
  var blocks,blockArr;
  // Calculate how many 32 bit blocks we need
  blocks = Math.ceil(Diffie.config.bits.secret / 32);
  // Generate the numbers
  blockArr = _private.rng(blocks,16)
  // Join everything to make one huge number and make a big int of it
  this.secret = new BI(blocks.join(''),16);

  return this.secret;
}


/*
* Diffie.setCommon - sets the common base and modulus and creates the shared key
* @param base {BI}
* @param modulus {BI}
*/
Diffie.prototype.setCommon = function(base, modulus){
  Diffie.config.bits.modulus = modulus;
  Diffie.config.bits.base = base;

  this.genShared();
}


/*
* Diffie.genShared - generates and returns the shared key
*/
Diffie.prototype.genShared = function(){
  var shared;
  
  shared = this.shared = this.common.base.powmod(this.secret, this.common.modulus);
  return shared;
}


/*
* Diffie.updateShared - updates the diffie hellman
*   @return {BI} - this is actually the secret key
*/
Diffie.prototype.updateShared = function(sharedKey){
  var secret;
  secret = sharedKey.powmod(this.secret,this.common.modulus);
  return secret;
}