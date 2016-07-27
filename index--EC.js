
function addPoints(P,Q){
	var lam, xR, yR, xP, yP, xQ, yQ;

	xP = P[0];
	yP = P[1];

	xQ = Q[0];
	yQ = Q[1];

	// The normal, non BI version of the following
	// lam = (yQ - yP) / (xQ - xP);
	lam = yQ.sub(yP).divide(xQ.sub(xP));

	// The normal, non BI version of the following
	// xR = Math.pow(lam, 2) - xQ - xP;
	xR = lam.pow(s).sub(xQ).sub(xP);

	// The normal, non BI version of the following
	// yR = (lam * (xP - xR)) - yP;
	yR = lam.times(xP.sub(xR)).sub(yP);

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