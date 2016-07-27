
function addPoints(P,Q){
	var xP = P[0];
	var yP = P[1];

	var xQ = Q[0];
	var yQ = Q[1];

	var lam,xR,yR;

	lam = (yQ - yP) / (xQ - xP);
	
	xR = Math.pow(lam, 2) - xQ - xP;	
	yR = (lam * (xP - xR)) - yP;

	return [xR,yR];
}

function dotPoints(d,P){
	var N = P;
	var [Q] = 0;
	//Convert to binary
	var M = d.toString(2).split('');
	for(i = 0;ii = M.length;i < ii;i++){
		if(d[i] === '1'){
			Q = addPoints(Q)
		}
	}

	return Q;
}