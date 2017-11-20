//Variáveis de posição
 //USA
var xusa=200;
var yusa=250;

 //GER
var xger=850;
var yger=250;

 //USR
var xusr=900;
var yusr=200;

 //GBR
var xgbr=950;
var ygbr=300;

 //JAP
var xjap=1000;
var yjap=250;

 //ITA
var xita=1050;
var yita=200;

 //POL
var xpol=1100;
var ypol=400;

 //BRA
var xbra=1500;
var ybra=275;

//Variáveis de jogo
var pts=0;
var vidas=3;
var nivel=1;

//Imagens
var usa;
var ger;
var usr;
var gbr;
var jap;
var ita;
var pol;
var bra;

function preload() {
  usa = loadImage("USA.png");
  ger = loadImage("GER.png");
  usr = loadImage("USR.png");
  gbr = loadImage("GBR.png");
  jap = loadImage("JAP.png");
  ita = loadImage("ITA.png");
  pol = loadImage("POL.png");
  bra = loadImage("BRA.png");
}

function setup() {
  createCanvas(800, 500);
  frameRate(30);
}

function jogadores(){
	//USA
	image(usa,xusa,yusa)
	if (keyIsDown(LEFT_ARROW))
		xusa-=5;
	if (keyIsDown(RIGHT_ARROW))
		xusa+=5;
	if (keyIsDown(UP_ARROW))
		yusa-=5;
	if (keyIsDown(DOWN_ARROW))
		yusa+=5;
	
	//GER	
	image(ger,xger,yger)
	xger=xger-10
	
	//USR	
	image(usr,xusr,yusr)
	xusr=xusr-5
	
	//GBR	
	image(gbr,xgbr,ygbr)
	xgbr=xgbr-5
	
	//JAP	
	image(jap,xjap,yjap)
	xjap=xjap-7
	
	//ITA	
	image(ita,xita,yita)
	xita=xita-3
	
	//POL	
	image(pol,xpol,ypol)
	xpol=xpol-2
	
	//BRA	
	image(bra,xbra,ybra)
	xbra=xbra-2
  
}

function jogo(){
	if((xusa==xger)&&(yusa==yger)){
		vidas=vidas-1;
	}
	if((xger<0)||(xger>800)){
		xger=800;
	}
	if((xusr<0)||(xusr>800)){
		xusr=800;
	}
	if((xgbr<0)||(xgbr>800)){
		xgbr=800;
	}
	if((xjap<0)||(xjap>800)){
		xjap=800;
	}
	if((xita<0)||(xita>800)){
		xita=800;
	}
	if((xpol<0)||(xpol>800)){
		xpol=800;
	}
	if((xbra<0)||(xbra>800)){
		xbra=800;
	}
}

function texto(){
	textSize(30);
	fill(255); 
	text("Nível: "+nivel, 100, 50);
	text("Vidas: "+vidas, 300, 50);
	text("Pontuação: "+pts, 500, 50);
}

function draw() {
  
  background(205, 121, 37);
  
  texto();
  jogadores();
  jogo();
}
