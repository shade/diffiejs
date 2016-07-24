
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



function Diffie(options){
  if(options.common){
    options.common.base = options.common.base || this.genBase();
    options.common.modulus = options.common.modulus || this.genModulus();
  }else{
    options.common = {
      base:
      modulus:
    };
  }


  this.common = {
    base: options.common.base,
    modulus: options.common.modulus
  };

  options.key = options.key || this.genSecret();
  this.genShared();
  return this;
}
