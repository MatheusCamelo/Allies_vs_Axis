//DETERMINAÇÃO DE INDICES
//USA: 0
//GER: 1
//USR: 2
//GBR: 3
//JAP: 4
//ITA: 5
//POL: 6
//BRA: 7
//CHN: 8
//FRA: 9
//BUL: 10

//Posições
var x=[];
var y=[];

 //USA
x[0]=850;
y[0]=250;

 //GER
x[1]=850;
y[1]=250;

 //USR
x[2]=900;
y[2]=200;

 //GBR
x[3]=950;
y[3]=300;

 //JAP
x[4]=1000;
y[4]=250;

 //ITA
x[5]=1050;
y[5]=200;

 //POL
x[6]=1100;
y[6]=400;

 //BRA
x[7]=1500;
y[7]=275;

 //CHN
x[8]=1550;
y[8]=325;

 //FRA
x[9]=1600;
y[9]=375;

 //BUL
x[10]=1600;
y[10]=375;

//Variáveis de jogo
var pts=0;
var mortos=0;
var nivel=1;
var player;
var xplayer=100;
var yplayer=300;
var xiplayer=100;
var yiplayer=300;
var ptsnivel=15; 
var levelup=true; 
var atirou=false; 

//Velocidades
var v=[];
v[0]=11;
v[1]=10;
v[2]=7;
v[3]=8;
v[4]=9;
v[5]=6;
v[6]=2;
v[7]=3;
v[8]=4;
v[9]=5;
v[10]=3;

//Variáveis de mortos dos inimigos na colisão
var mortosc=[];
mortosc[0]=0;
mortosc[1]=10;
mortosc[2]=0;
mortosc[3]=0;
mortosc[4]=5;
mortosc[5]=2;
mortosc[6]=0;
mortosc[7]=0;
mortosc[8]=0;
mortosc[9]=0;
mortosc[10]=1;

//Variáveis de mortos dos aliados na colisão
var mortosa=[];
mortosa[0]=-1;
mortosa[1]=0;
mortosa[2]=0;
mortosa[3]=-1;
mortosa[4]=0;
mortosa[5]=0;
mortosa[6]=0;
mortosa[7]=0;
mortosa[8]=0;
mortosa[9]=0;
mortosa[10]=0;

//Variáveis de mortos no tiro
var mortost=[];
mortost[0]=11;
mortost[1]=0;
mortost[2]=7;
mortost[3]=10;
mortost[4]=0;
mortost[5]=0;
mortost[6]=2;
mortost[7]=3;
mortost[8]=4;
mortost[9]=5;
mortost[10]=0;

//Variáveis de pontos no tiro
var pontost=[];
pontost[0]=0;
pontost[1]=10;
pontost[2]=0;
pontost[3]=0;
pontost[4]=6;
pontost[5]=4;
pontost[6]=0;
pontost[7]=0;
pontost[8]=0;
pontost[9]=0;
pontost[10]=2;

//Cenário
var tamBloco = 40;

//Imagens
var worldmap;
var fireball;
var flag=[];

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
  
  for (i=0; i<11; i++) {
    flag[i] = loadImage(i+".png");
  }

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
		player=flag[7];
		x[7]=xplayer;
		y[7]=yplayer;
		vplayer=v[7];
		levelup=false; 
	}
	if(nivel==2 && levelup){
		player=flag[8];
		x[8]=xplayer;
		y[8]=yplayer;
		vplayer=v[8];
		levelup=false; 
	}
	if(nivel==3 && levelup){
		player=flag[9];
		x[9]=xplayer;
		y[9]=yplayer;
		vplayer=v[9];
		levelup=false; 
	}
	if(nivel==4 && levelup){
		player=flag[3];
		x[3]=xplayer;
		y[3]=yplayer;
		vplayer=v[3];
		levelup=false; 
	}
	if(nivel==5 && levelup){
		player=flag[0];
		x[0]=xplayer;
		y[0]=yplayer;
		vplayer=v[0];
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
	
	for(i=0;i<11;i++){
		if(player!=flag[i]){
			image(flag[i],x[i],y[i])
			x[i]=x[i]-v[i]
		}
	}
  
}

function jogo(){
	//COLISÕES
	
	for(i=0;i<11;i++){
		if(dist(xplayer+mtam,yplayer+mtam,x[i]+mtam,y[i]+mtam)<tam){
			mortos=mortos+mortosc[i];
		}
	}
	
	for(i=0;i<11;i++){
		if(dist(xplayer+mtam,yplayer+mtam,x[i]+mtam,y[i]+mtam)<tam){
			if(mortos>0){
				mortos=mortos+mortosa[i];
			}
		}
	}
	
	if(dist(x[0]+mtam,y[0]+mtam,x[2]+mtam,y[2]+mtam)<tam){
		x[0]=Math.random()*800;
		y[0]=Math.random()*(560-tam-120)+120;
	}
	
	//SAÍDA DE TELA
	
	for(i=0;i<11;i++){
		if((x[i]+mtam<0)||(x[i]>800)){
			if((i!=9)||(i!=10)){
				x[i]=800;
				y[i]=Math.random()*(560-tam-120)+120;
			}
			if(i==9){
				x[i]=4000;
				y[i]=Math.random()*(560-tam-120)+120;
			}
			if(i==10){
				x[i]=900;
				y[i]=Math.random()*(560-tam-120)+120;				
			}
		}
	}
	
	//IMPACTO DO TIRO
	if(atirou){
		for(i=0;i<11;i++){
			if(dist(x[i]+mtam,y[i]+mtam,xproj+mtproj,yproj+mtproj)<(mtam+mtproj)){
				pts=pts+pontost[i];
				mortos=mortos+mortost[i];
				if((i!=9)||(i!=10)){
					x[i]=800;
					y[i]=Math.random()*(560-tam-120)+120;
				}
				if((i==9)||(i==10)){
					x[i]=4000;
					y[i]=Math.random()*(560-tam-120)+120;
				}
			}
		}
	}
	
	//MUDANÇA DE NÍVEL
	if(pts>=ptsnivel){
		nivel=nivel+1;
		ptsnivel += 15 ;
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
	//textFont("Verdana");
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
