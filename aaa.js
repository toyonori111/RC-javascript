
var blue   = {b0:'b0', b1:'b1', b2:'b2', b3:'b3', b4:'b4', b5:'b5', b6:'b6', b7:'b7', b8:'b8'};
var red    = {r0:'r0', r1:'r1', r2:'r2', r3:'r3', r4:'r4', r5:'r5', r6:'r6', r7:'r7', r8:'r8'};
var green  = {g0:'g0', g1:'g1', g2:'g2', g3:'g3', g4:'g4', g5:'g5', g6:'g6', g7:'g7', g8:'g8'};
var orange = {o0:'o0', o1:'o1', o2:'o2', o3:'o3', o4:'o4', o5:'o5', o6:'o6', o7:'o7', o8:'o8'};
var yellow = {y0:'y0', y1:'y1', y2:'y2', y3:'y3', y4:'y4', y5:'y5', y6:'y6', y7:'y7', y8:'y8'};
var white  = {w0:'w0', w1:'w1', w2:'w2', w3:'w3', w4:'w4', w5:'w5', w6:'w6', w7:'w7', w8:'w8'};


//var a = {a0:blue.b0, a1:blue.b1, a2:blue.b2, a3:blue.b3, a4:blue.b4, a5:blue.b5, a6:blue.b6, a7:blue.b7, a8:blue.b8};
//var b = {b0:0,b1:1,b2:2,b3:3,b4:4,b5:5,b6:6,b7:7,b8:8};
//var c = {c0:0,c1:1,c2:2,c3:3,c4:4,c5:5,c6:6,c7:7,c8:8};
//var d = {d0:0,d1:1,d2:2,d3:3,d4:4,d5:5,d6:6,d7:7,d8:8};
//var e = {e0:0,e1:1,e2:2,e3:3,e4:4,e5:5,e6:6,e7:7,e8:8};
//var f = {f0:0,f1:1,f2:2,f3:3,f4:4,f5:5,f6:6,f7:7,f8:8};



var A = [  blue.b0, blue.b1, blue.b2,
		   blue.b3, blue.b4, blue.b5,
		   blue.b6, blue.b7, blue.b8];
var B = [  red.r0, red.r1, red.r2,
		   red.r3, red.r4, red.r5,
		   red.r6, red.r7, red.r8];
var C = [  green.g0, green.g1, green.g2,
		   green.g3, green.g4, green.g5,
		   green.g6, green.g7, green.g8];
var D = [  orange.o0, orange.o1, orange.o2,
		   orange.o3, orange.o4, orange.o5,
		   orange.o6, orange.o7, orange.o8];
var E = [  yellow.y0, yellow.y1, yellow.y2,
		   yellow.y3, yellow.y4, yellow.y5,
		   yellow.y6, yellow.y7, yellow.y8];
var F = [  white.w0, white.w1, white.w2,
		   white.w3, white.w4, white.w5,
		   white.w6, white.w7, white.w8];

/*console.log(A.A1);
console.log(B.B1);

var X = A.A1;
A.A1 = B.B1;
B.B1 = X;

console.log(A.A1);
console.log(B.B1);*/

//for(var i = 0; i < 4; i++){
//	console.log(A[i]); 
//}



function RotationTop(top){
	var oldtop = [];
	for(var i=0; i<9; i++){
	oldtop[i] = top[i];
	}
	
	top[0] = oldtop[6];
	top[2] = oldtop[0];
	top[6] = oldtop[8];
	top[8] = oldtop[2];
	
	top[1] = oldtop[3];
	top[3] = oldtop[7];
	top[5] = oldtop[1];
	top[7] = oldtop[5];
	
	top[4] = oldtop[4];
	
	//return top; 
}

function ReverseRotationTop(top){
	var oldtop = [];
	for(var i=0; i<9; i++){
		oldtop[i] = top[i];
	}
	
	console.log(oldtop);
	top[0] = oldtop[2];
	top[2] = oldtop[8];
	top[6] = oldtop[0];
	top[8] = oldtop[6];
	
	top[1] = oldtop[5];
	top[3] = oldtop[1];
	top[5] = oldtop[7];
	top[7] = oldtop[3];
	
	top[4] = oldtop[4];
	
	//return top; 
}


function RotationSide( side0, side1, side2, 
					side3, side4, side5,
					side6, side7, side8,
					side9, side10,side11){

//	var side_1 = [side1, side2, side3];
//	var side_2 = [side4, side5, side6];
//	var side_3 = [side7, side8, side9];
//	var side_4 = [side10,side11,side12];
	
	var oldside = [];
	oldside[0] = side0;
	oldside[1] = side1;
	oldside[2] = side2;
	oldside[3] = side3;
	oldside[4] = side4;
	oldside[5] = side5;
	oldside[6] = side6;
	oldside[7] = side7;
	oldside[8] = side8;
	oldside[9] = side9;
	oldside[10] = side10;
	oldside[11] = side11;
	
	side0 = oldside[3];
	side1 = oldside[4];
	side2 = oldside[5];
	side3 = oldside[6];
	side4 = oldside[7];
	side5 = oldside[8];
	side6 = oldside[9];
	side7 = oldside[10];
	side8 = oldside[11];
	side9 = oldside[0];
	side10 = oldside[1];
	side11 = oldside[2];
	
//	var oldside_1 = side_1;
//	var oldside_2 = side_2;
//	var oldside_3 = side_3;
//	var oldside_4 = side_4;
	
//	side_1 = oldside_2;
//	side_2 = oldside_3;
//	side_3 = oldside_4;
//	side_4 = oldside_1;
	console.log(side0);
	//return side_1,side_2,side_3,side_4;
}


function Rotation_A(){
	
	var oldA = [];
	for(var i=0; i<9; i++){
		oldA[i] = A[i];
	}
	A[0] = oldA[6];
	A[2] = oldA[0];
	A[6] = oldA[8];
	A[8] = oldA[2];
	
	A[1] = oldA[3];
	A[3] = oldA[9];
	A[5] = oldA[1];
	A[7] = oldA[5];
	
	A[4] = oldA[4];
	
	var oldB = [];
	for(var i=0; i<3; i++){
		oldB[i] = B[i]
	}
	
}
function ReverseRotation_A(){}
function Rotation_A_F(){}
function ReverseRotation_A_F(){}
function Rotation_F(){}
function ReverseRotation_F(){}

function Rotation_B(){}
function ReverseRotation_B(){}
function Rotation_B_D(){}
function ReverseRotation_B_D(){}
function Rotation_D(){}
function ReverseRotation_D(){}

function Rotation_C(){}
function ReverseRotation_C(){}
function Rotation_C_E(){}
function ReverseRotation_C_E(){}
function Rotation_E(){}
function ReverseRotation_E(){}


console.log(B);
RotationTop(B);
console.log(B);
ReverseRotationTop(B);
console.log(B);

RotationSide(B[0],B[1],B[2],C[0],C[1],C[2],D[0],D[1],D[2],E[0],E[1],E[2]);
console.log(B);
console.log(C);
console.log(D);
console.log(E);


//Rotation(A,B[0]);


//console.log(a);