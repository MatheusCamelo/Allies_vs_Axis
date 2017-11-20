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

 //BUL
var xbul=1600;
var ybul=375;

//Variáveis de jogo
var pts=0;
var mortos=0;
var nivel=1;
var player;
var xplayer=100;
var yplayer=300;
var xiplayer=100;
var yiplayer=300;
var ptsnivel=50; 
var levelup=true; 
var atirou=false; 

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
var vbul=3;

//Cenário
var tamBloco = 40;

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

//Troca de telas
var tela=1;
var trocouTela=false;

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
  bul = loadImage("BUL.png");
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
	if(nivel==1 && levelup){
		player=bra;
		xbra=xplayer;
		ybra=yplayer;
		vplayer=vbra;
		levelup=false; 
	}
	if(nivel==2 && levelup){
		player=chn;
		xplayer=xiplayer;
		yplayer=yiplayer;
		vplayer=vchn;
		levelup=false; 
	}
	if(nivel==3 && levelup){
		player=fra;
		xplayer=xiplayer;
		yplayer=yiplayer;
		vplayer=vfra;
		levelup=false; 
	}
	if(nivel==4 && levelup){
		player=gbr;
		xplayer=xiplayer;
		yplayer=yiplayer;
		vplayer=vgbr;
		levelup=false; 
	}
	if(nivel==5 && levelup){
		player=usa;
		xplayer=xiplayer;
		yplayer=yiplayer;
		vplayer=vusa;
		levelup=false; 
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
	if(player!=usa){
		image(usa,xusa,yusa)
		xusa=xusa-vusa
	}
	
	//GER
	if(player!=ger){
		image(ger,xger,yger)
		xger=xger-vger
	}
	
	//USR
	if(player!=usr){
		image(usr,xusr,yusr)
		xusr=xusr-vusr
	}
	
	//GBR
	if(player!=gbr){
		image(gbr,xgbr,ygbr)
		xgbr=xgbr-vgbr
	}
	
	//JAP
	if(player!=jap){
		image(jap,xjap,yjap)
		xjap=xjap-vjap
	}
	
	//ITA
	if(player!=ita){
		image(ita,xita,yita)
		xita=xita-vita
	}
	
	//POL
	if(player!=pol){
		image(pol,xpol,ypol)
		xpol=xpol-vpol
	}
	
	//BRA
	if(player!=bra){
		image(bra,xbra,ybra)
		xbra=xbra-vbra
	}
	
	//CHN
	if(player!=chn){
		image(chn,xchn,ychn)
		xchn=xchn-vchn
	}
	
	//FRA
	if(player!=fra){
		image(fra,xfra,yfra)
		xfra=xfra-vfra
	}
		
	//BUL
	if(player!=bul){
		image(bul,xbul,ybul)
		xbul=xbul-vbul
	}
  
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
	if(dist(xplayer+mtam,yplayer+mtam,xusa+mtam,yusa+mtam)<tam){
		if(mortos>0){
			mortos=mortos-1;	
		}
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
	if((xchn+mtam<0)||(xchn>800)){
		xchn=800;
		ychn=Math.random()*(560-tam-120)+120;
	}
	if(xfra+mtam<0){
		xfra=4000;
		yfra=Math.random()*(560-tam-120)+120;
	}
	
	if(xbul+mtam<0){
		xbul=900;
		ybul=Math.random()*(560-tam-120)+120;
	}
	
	//IMPACTO DO TIRO
	if(atirou){
		if(dist(xger+mtam,yger+mtam,xproj+mtproj,yproj+mtproj)<(mtam+mtproj)){
			pts=pts+10;
			xger=800;
			yger=Math.random()*(560-tam-120)+120;
		}
		if(dist(xjap+mtam,yjap+mtam,xproj+mtproj,yproj+mtproj)<(mtam+mtproj)){
			pts=pts+6;
			xjap=800;
			yjap=Math.random()*(560-tam-120)+120;
		}
		if(dist(xita+mtam,yita+mtam,xproj+mtproj,yproj+mtproj)<(mtam+mtproj)){
			pts=pts+4;
			xita=800;
			yita=Math.random()*(560-tam-120)+120;
		}
		if(dist(xusa+mtam,yusa+mtam,xproj+mtproj,yproj+mtproj)<(mtam+mtproj)){
			mortos=mortos+11;
			xusa=800;
			yusa=Math.random()*(560-tam-120)+120;
		}
		if(dist(xusr+mtam,yusr+mtam,xproj+mtproj,yproj+mtproj)<(mtam+mtproj)){
			mortos=mortos+7;
			xusr=800;
			yusr=Math.random()*(560-tam-120)+120;
		}
		if(dist(xgbr+mtam,ygbr+mtam,xproj+mtproj,yproj+mtproj)<(mtam+mtproj)){
			mortos=mortos+10;
			xgbr=800;
			ygbr=Math.random()*(560-tam-120)+120;
		}
		if(dist(xpol+mtam,ypol+mtam,xproj+mtproj,yproj+mtproj)<(mtam+mtproj)){
			mortos=mortos+2;
			xpol=800;
			ypol=Math.random()*(560-tam-120)+120;
		}
		if(dist(xbra+mtam,ybra+mtam,xproj+mtproj,yproj+mtproj)<(mtam+mtproj)){
			mortos=mortos+3;
			xbra=800;
			ybra=Math.random()*(560-tam-120)+120;
		}
		
		if(dist(xchn+mtam,ychn+mtam,xproj+mtproj,yproj+mtproj)<(mtam+mtproj)){
			mortos=mortos+4;
			xchn=800;
			ychn=Math.random()*(560-tam-120)+120;
		}
		
		if(dist(xfra+mtam,yfra+mtam,xproj+mtproj,yproj+mtproj)<(mtam+mtproj)){
			mortos=mortos+5;
			xfra=4000;
			yfra=Math.random()*(560-tam-120)+120;
		}
		
		if(dist(xbul+mtam,ybul+mtam,xproj+mtproj,yproj+mtproj)<(mtam+mtproj)){
			mortos=mortos+5;
			xbul=4000;
			ybul=Math.random()*(560-tam-120)+120;
		}
		
	}
	
	//MUDANÇA DE NÍVEL
	if(pts>=ptsnivel){
		nivel=nivel+1;
		ptsnivel += 50 ;
		levelup = true; 
	}
	if(levelup){
		mortos=0;
	}
	
	//DERROTA
	if(((nivel==1)&&(mortos>2500))||((nivel==2)&&(mortos>2000))||((nivel==3)&&(mortos>1500))||((nivel==4)&&(mortos>1000))||((nivel==5)&&(mortos>500))){
		tela=3;
	}
	
	//VITÓRIA
	if(nivel==6){
		tela=4;
	}
}

function tiro(){

		image(fireball, xproj, yproj)
		xproj=xproj+vproj;
		if((xproj+mtproj<0)||(xproj>800)){	
			atirou=false;
		}
	
}


function texto1(){
	textSize(50);
	fill(255); 
	text("GUERRA MUNDIAL DOIS", 100, 185);
	textSize(30);
	text("The Game", 325, 250);
	textSize(30);
	text("Tecle ENTER para iniciar o jogo", 175, 400);
}

function texto2(){
	textSize(30);
	fill(255); 
	text("Nível: "+nivel, 100, 50);
	text("Mortos: "+mortos, 300, 50);
	text("Pontuação: "+pts, 500, 50);
}

function texto3(){
	textSize(50);
	fill(255); 
	text("FIM DE JOGO", 240, 185);
	textSize(30);
	text("Você ultrapassou o máximo de baixas", 150, 250);
	textSize(30);
	text("Tecle F5 para retornar à tela inicial", 135, 400);
}

function texto4(){
	textSize(50);
	fill(255); 
	text("FIM DE JOGO!", 230, 185);
	textSize(30);
	text("Você venceu a guerra!", 250, 250);
	textSize(30);
	text("Tecle F5 para retornar à tela inicial", 135, 400);
}

function draw() {

  if(tela==1){
	background(0, 0, 0);
	texto1();
	//MUDANÇA DE TELA
		if(keyIsDown(13)){
			trocouTela = true; 
		}		
		if (trocouTela) {
			tela=2;
			
		}
  }

  if(tela==2){
  
	//FUNDO DA TELA
	background(205, 121, 37);
	//image(worldmap,0,80)
  
	//MATRIZ
	for ( i = 0; i < cenario.length; i++ ) { 
		for ( j = 0; j < cenario[0].length; j++ ) {  
		if ( cenario[i][j] == '#' ) {
			fill(185,155,123);
			rect(j*tamBloco,i*tamBloco,tamBloco,tamBloco); 
		}
		}
	}

	//ATIVAÇÃO DO TIRO
		if(keyIsDown(32)){
			atirou = true; 
			xproj = xplayer+tam-tproj;
			yproj = yplayer+mtam-mtproj; 
		}		
		if (atirou) {
			tiro();
		}

	texto2();
	paises();
	jogador();
	jogo();
	
  }
  
  if(tela==3){
	background(0, 0, 0);
	texto3();
	//MUDANÇA DE TELA
		if(keyIsDown(13)){
			trocouTela = true; 
		}		
		if (trocouTela) {
			tela=1;
		}
  }
  
  if(tela==4){
	background(0, 0, 0);
	texto4();
	//MUDANÇA DE TELA
		if(keyIsDown(13)){
			trocouTela = true; 
		}		
		if (trocouTela) {
			tela=1;
		}
  }
  
}
