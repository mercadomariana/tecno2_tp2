let figura;
let urna;
let tamAnchoIni = [155, 156, 211, 212, 297, 158, 115, 44, 63, 75, 49, 325,348,39,85,153,87,27,101];
let tamAltoIni = [313, 371, 203, 67, 88, 0, 95, 41, 24, 26, 23, 315,233,32,520,123,95,189,103];
let tamAnchoFin = [200, 256, 300, 300, 360, 180, 130, 60, 80, 140, 80, 400,400,70,120,200,120,50,150];
let tamAltoFin = [400, 471, 300, 150, 150, 0, 150, 60, 40, 30, 50, 515,300,70,520,150,120,200,150];
let tamAncho;
let tamAlto;
let numrandom;
let seleccionadas = [];
let paleta;
let colores;

function setup() {
    createCanvas(600, 700);
    urna = new Urna(11);
    numrandom = urna.sacarNumero();
    figura = new Figuras(numrandom);
    seleccionarFiguras();

    paleta = [
        color(210,52,44), //rojo
		 color(57,103,62), //verde
		 color(0,0,0), //negro
		 color(240,161,3), //naranja
		 color(112,42,69),//carmesi
		 color(208,160,176,255),
		 color(0,23,87,255),
		 color(186,71,32,255),
		 color(98,51,77),
		 color(65,120,63,255),
		 color(74,123,189,255),
		 color(235,88,45)
    ];

    colores = [11];
    colores[0] = paleta[2];
    colores[1] = paleta[0];
    colores[2] = paleta[3];
    colores[3] = paleta[3];
    colores[4] = paleta[2];
    colores[5] = paleta[4];
    colores[6] = paleta[2];
    colores[7] = paleta[2];
    colores[8] = paleta[2];
    colores[9] = paleta[1];
    colores[10] = paleta[5];
    colores[11] = paleta[8];
    colores[12] = paleta[9];
    colores[13] = paleta[10];
    colores[14] = paleta[11];
    colores[15] = paleta[7];
    colores[16] = paleta[6];
    colores[17] = paleta[8];
    colores[18] = paleta[10];

}

function seleccionarFiguras() {
    let numFiguras = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
    seleccionadas = [];
    for (let i = 0; i < 19; i++) {
        let randomIndex = int(random(numFiguras.length));
        seleccionadas.push(numFiguras[randomIndex]);
    }
}

function draw() {
    background(220);
    // Mostrar solo las figuras seleccionadas
   for (let i = 0; i < seleccionadas.length; i++) {
        let idx = seleccionadas[i];
        figura.muestra(idx, idx, colores[idx], tamAnchoIni[idx], tamAltoIni[idx]);
    }

    // Actualizar tamaño de la figura seleccionada
    if (tamAnchoIni[numrandom] < tamAnchoFin[numrandom] || tamAltoIni[numrandom] < tamAltoFin[numrandom]) {
        tamAnchoIni[numrandom] = map(mouseY, 0, 500, tamAnchoIni[numrandom], tamAnchoFin[numrandom]);
        tamAltoIni[numrandom] = map(mouseY, 0, 500, tamAltoIni[numrandom], tamAltoFin[numrandom]);
    } else {
        // Cuando la figura alcanza su tamaño máximo, sacar un nuevo número de la urna
        numrandom = urna.sacarNumero();
    }
    figura.mover();
}

function mousePressed(){
    cambiarColores();
  }

function cambiarColores(){
	let se_uso;
	let col;
	for (i=0; i<11; i++){
		se_uso = true;
		while (se_uso){
			col = paleta[int(random(0,paleta.length-0.01))];
			se_uso = false;
			if (i>0){
				for(x=0; x<i; x++){
					if (col == colores[x]){
						se_uso = true;
					}
					if (se_uso){break;}
				}
			}
		}
		colores[i] = col;
	}
}