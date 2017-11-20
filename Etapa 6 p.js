//Variáveis de posição
 //USA
var xusa=850;
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

 //CHN
var xchn=1550;
var ychn=325;

 //FRA
var xfra=1600;
var yfra=375;

//Variáveis de jogo
var pts=0;
var mortos=0;
var nivel=1;
var proj=false;
var player;
var xplayer=200;
var yplayer=250;

//Variáveis de velocidade
var vusa=11;
var vger=10;
var vusr=7;
var vgbr=8;
var vjap=9;
var vita=6;
var vpol=2;
var vbra=3;
var vchn=4;
var vfra=5;

//Cenário
var tamBloco = 40;

var pontosDoNivel  = 10; 
var mudouNivel = true; 
var aconteceTiro = false; 

//Imagens
var worldmap;
var fireball;
var usa;
var ger;
var usr;
var gbr;
var jap;
var ita;
var pol;
var bra;
var chn;
var bul;

//Tamanho do jogador
var tam=72;
var mtam=tam/2;

//Projétil
var tproj=20;
var mtproj=tproj/2;
var xproj=xplayer+tam-tproj;
var yproj=yplayer+mtam-mtproj;
var vproj=100;

function preload() {
  worldmap = loadImage("worldmap.jpg");
  fireball = loadImage("fireball.png");
  usa = loadImage("USA.png");
  ger = loadImage("GER.png");
  usr = loadImage("USR.png");
  gbr = loadImage("GBR.png");
  jap = loadImage("JAP.png");
  ita = loadImage("ITA.png");
  pol = loadImage("POL.png");
  bra = loadImage("BRA.png");
  chn = loadImage("CHN.png");
  fra = loadImage("FRA.png");
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

function jogador(){
	//PLAYER
	if(nivel==1 && mudouNivel == true){
		player=bra;
		xbra=xplayer;
		ybra=yplayer;
		vplayer=vbra;
		mudouNivel = false; 
	}
	if(nivel==2 && mudouNivel ){
		mudouNivel = false; 
		player=chn;
		xplayer = 100;
		yplayer = 200;
		vplayer=vchn;
	}
	
	image(player,xplayer,yplayer)
	if(xplayer>0){
		if (keyIsDown(LEFT_ARROW))
			xplayer-=vplayer;
	}
	if(xplayer+tam<800){
		if (keyIsDown(RIGHT_ARROW))
			xplayer+=vplayer;
	}
	if(yplayer>120){
		if (keyIsDown(UP_ARROW))
			yplayer-=vplayer;
	}
	if(yplayer+tam<560){
		if (keyIsDown(DOWN_ARROW))
			yplayer+=vplayer;
	}	
}

function paises(){
	//USA
	/*image(usa,xusa,yusa)
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
	}*/
	image(usa,xusa,yusa)
	xusa=xusa-vusa	
	
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
	
	if(player!=bra){
	//BRA	
		image(bra,xbra,ybra)
		xbra=xbra-vbra
	}
	
	if(player!=chn){
	//CHN	
		image(chn,xchn,ychn)
		xchn=xchn-vchn
	}
	
	//FRA	
	image(fra,xfra,yfra)
	xfra=xfra-vfra

  
}

function jogo(){
	//COLISÕES
	if(dist(xplayer+mtam,yplayer+mtam,xger+mtam,yger+mtam)<tam){
		mortos=mortos+10;
		
	}
	if(dist(xplayer+mtam,yplayer+mtam,xjap+mtam,yjap+mtam)<tam){
		mortos=mortos+5;
		
	}
	if(dist(xplayer+mtam,yplayer+mtam,xita+mtam,yita+mtam)<tam){
		mortos=mortos+1;
		
	}
	if(dist(xplayer+mtam,yplayer+mtam,xgbr+mtam,ygbr+mtam)<tam){
		if(mortos>0){
			mortos=mortos-1;	
		}
	}
	if(dist(xusa+mtam,yusa+mtam,xusr+mtam,yusr+mtam)<tam){
		xusa=Math.random()*800;
		yusa=Math.random()*(560-tam-120)+120;
	}
	
	//SAÍDA DE TELA
	if((xusa+mtam<0)||(xusa>800)){
		xusa=800;
		yusa=Math.random()*(560-tam-120)+120;
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
	
	//IMPACTO DO TIRO
	if ( aconteceTiro ) {
		if(dist(xger+mtam,yger+mtam,xproj+mtproj,yproj+mtproj)<(mtam+mtproj)){
			pts=pts+1;
			xger=800;
			yger=Math.random()*(560-tam-120)+120;
		}
		if(dist(xjap+mtam,yjap+mtam,xproj+mtproj,yproj+mtproj)<(mtam+mtproj)){
			pts=pts+1;
			xjap=800;
			yjap=Math.random()*(560-tam-120)+120;
		}
		if(dist(xita+mtam,yita+mtam,xproj+mtproj,yproj+mtproj)<(mtam+mtproj)){
			pts=pts+1;
			xita=800;
			yita=Math.random()*(560-tam-120)+120;
		}
	}
	
	//MUDANÇA DE NÍVEL
	/*if(pts<20){
		xplayer=xbra;
		yplayer=ybra;
	}*/
	if(pts>=pontosDoNivel){
		nivel=nivel+1;
		pontosDoNivel += 10 ;
		xplayer=xchn;
		yplayer=ychn;
		mudouNivel = true; 
	}
}

function tiro(){

		image(fireball, xproj, yproj)
		xproj=xproj+vproj;
		if((xproj+mtproj<0)||(xproj>800)){	

			aconteceTiro=false;
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
  
  
	if( keyIsDown(32) ){
	
		//xproj = xusa+mtam;
		//yproj = yusa+mtam;
		aconteceTiro = true; 
		xproj = xplayer;
		yproj = yplayer; 
	
	}
		
  if (aconteceTiro) {
	tiro();
  }
  texto();
  paises();
  jogador();
  jogo();
  
}
