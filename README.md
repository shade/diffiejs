# diffiejs
Diffie Hellman implementation in JavaScript

## How the Diffie-Hellman key exchange protocol works
Suppose you're a person that wants to send a message to your friend, or a secure bank server that wants to send a message to your client. However, you're stuck with a government monitored, unsecure internet connection. How would you make sure that your message goes across without the Rothschild family reading your bank statement? Well, the answer is pretty easy: encryption. So suppose we use the standard AES, Rijndael cipher,  this is all good and all, but since this is symmetric encryption you and your partner need to share a common key. Well, that poses another problem, how do you get a key across to your friend without being sniffed? You could use RSA, but no one wants to waste their time with RSA libraries, extra prime number generation, and blah blah blah. Instead we use the Diffie-Hellman key exchange protocol.  
<br>
Now Diffie-Hellman is not a protocol that enables you to transfer a key across securely, rather, it allows you and the person you're trying to communicate with to generate a unique key that only you and they will know. This is as good if not better, than generating a key and transferring it via asymmetric encryption.  
<br>
So, is Diffie-Hellman very math heavy? Nope! Diffie-Hellman is probably easier to understand than RSA. The only thing you need to know is how to calculate modulus' and exponents.
<br>



For more details check out the Wikipedia article on it: https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange

##How to use diffie.js
