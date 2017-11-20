//Variáveis de posição
 //USA
var xusa=200;
var yusa=250;

 //GER
var xger=800;
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
var mortos=0;
var nivel=1;

//Variáveis de velocidade
var vusa=10;
var vger=10;
var vusr=5;
var vgbr=6;
var vjap=7;
var vita=4;
var vpol=2;
var vbra=3;

//Cenário
var tamBloco = 40;

//Imagens
var worldmap;
var usa;
var ger;
var usr;
var gbr;
var jap;
var ita;
var pol;
var bra;

//Tamanho do jogador
var tam=72;
var mtam=tam/2;

function preload() {
  worldmap = loadImage("worldmap.jpg");
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
  createCanvas(800, 600);
  frameRate(30);
}

cenario = [ 
  ['v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v'],
  ['v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v'],
  ['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#'], 
  ['v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v'],
  ['v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v'],
  ['v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v'],
  ['v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v'],
  ['v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v'],
  ['v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v'],
  ['v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v'],
  ['v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v'],
  ['v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v'],
  ['v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v'],
  ['v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v','v'],
  ['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#']

]; 

function jogadores(){
	//USA
	image(usa,xusa,yusa)
	if(xusa>0){
		if (keyIsDown(LEFT_ARROW))
			xusa-=vusa;
	}
	if(xusa+tam<800){
		if (keyIsDown(RIGHT_ARROW))
			xusa+=vusa;
	}
	if(yusa>120){
		if (keyIsDown(UP_ARROW))
			yusa-=vusa;
	}
	if(yusa+tam<560){
		if (keyIsDown(DOWN_ARROW))
			yusa+=vusa;
	}
	
	//GER	
	image(ger,xger,yger)
	xger=xger-vger
	
	//USR	
	image(usr,xusr,yusr)
	xusr=xusr-vusr
	
	//GBR	
	image(gbr,xgbr,ygbr)
	xgbr=xgbr-vgbr
	
	//JAP	
	image(jap,xjap,yjap)
	xjap=xjap-vjap
	
	//ITA	
	image(ita,xita,yita)
	xita=xita-vita
	
	//POL	
	image(pol,xpol,ypol)
	xpol=xpol-vpol
	
	//BRA	
	image(bra,xbra,ybra)
	xbra=xbra-vbra
  
}

function jogo(){
	if(dist(xusa+mtam,yusa+mtam,xger+mtam,yger+mtam)<tam){
		mortos=mortos+10;
		
	}
	if(dist(xusa+mtam,yusa+mtam,xjap+mtam,yjap+mtam)<tam){
		mortos=mortos+5;
		
	}
	if(dist(xusa+mtam,yusa+mtam,xita+mtam,yita+mtam)<tam){
		mortos=mortos+1;
		
	}
	if((xger+mtam<0)||(xger>800)){
		xger=800;
		yger=Math.random()*(560-tam-120)+120;
	}
	if((xusr+mtam<0)||(xusr>800)){
		xusr=800;
		yusr=Math.random()*(560-tam-120)+120;
	}
	if((xgbr+mtam<0)||(xgbr>800)){
		xgbr=800;
		ygbr=Math.random()*(560-tam-120)+120;
	}
	if((xjap+mtam<0)||(xjap>800)){
		xjap=800;
		yjap=Math.random()*(560-tam-120)+120;
	}
	if((xita+mtam<0)||(xita>800)){
		xita=800;
		yita=Math.random()*(560-tam-120)+120;
	}
	if((xpol+mtam<0)||(xpol>800)){
		xpol=800;
		ypol=Math.random()*(560-tam-120)+120;
	}
	if((xbra+mtam<0)||(xbra>800)){
		xbra=800;
		ybra=Math.random()*(560-tam-120)+120;
	}
}

function texto(){
	textSize(30);
	fill(255); 
	text("Nível: "+nivel, 100, 50);
	text("Mortos: "+mortos, 300, 50);
	text("Pontuação: "+pts, 500, 50);
}

function draw() {
  
  background(205, 121, 37);
  //image(worldmap,0,80)
  
  for ( i = 0; i < cenario.length; i++ ) { 
    for ( j = 0; j < cenario[0].length; j++ ) {  
      if ( cenario[i][j] == '#' ) {
        fill(185,155,123);
        rect(j*tamBloco,i*tamBloco,tamBloco,tamBloco); 
      }
    }
  }
    
  texto();
  jogadores();
  jogo();
}
