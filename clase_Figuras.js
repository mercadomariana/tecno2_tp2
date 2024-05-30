class Figuras {
    constructor(numrandom) {
        imageMode(CENTER);
        this.figura = [];
        for (let i = 0; i < 19; i++) {
            this.figura.push(loadImage('img/F' + i + '.png'));
        }
        this.num = numrandom;
        this.numIni = numrandom;
        this.dirI = [radians(-76),radians(-76),radians(-142),radians(-165),radians(-165),radians(-165),radians(-35),radians(-35),radians(-165),radians(-165),radians(-165),radians(-165),radians(-165),radians(-165),radians(-165),radians(-165),radians(-165),radians(-165),radians(-165)];
        // (-76 f 0, 1)(-142 f 2) (-35 f 6, 7) (-165 f 3, 4, 5, 8, 9, 10)
        this.dirD = [radians(104),radians(104),radians(38),radians(15),radians(15),radians(15),radians(145),radians(145),radians(15),radians(15),radians(15),radians(15),radians(15),radians(15),radians(15),radians(15),radians(15),radians(15),radians(15)];
        // (104 f 0, 1) (38 f 2) (145 f 6, 7) (15 f 3, 4, 5, 8, 9, 10)
        this.posx = [250, 300, 170, 250, 280, 280, 100, 140, 400, 400, 440, 100,200,150,500,300,400,200,250];
        this.posy = [240, 370, 180, 350, 330, 430, 530, 540, 300, 320, 360, 500,200,500,400,300,180,500,350];
        this.vel = int (random(1,10));
        this.tamancho;
        this.tamalto;
    }

    muestra(numIni, num, c, ancho, alto) {
        this.num = num;
        this.numIni = numIni;
        this.c = c;
        this.tamalto = alto;
        this.tamancho = ancho;

        push();
        tint(color(c));
        image(this.figura[this.num], this.posx[this.numIni], this.posy[this.numIni], this.tamancho, this.tamalto);
        pop();

        this.posx[this.numIni] = ( this.posx[this.numIni]>width ? this.posx[this.numIni]-width : this.posx[this.numIni]);
        this.posx[this.numIni] = ( this.posx[this.numIni]<0 ? this.posx[this.numIni]+width : this.posx[this.numIni]);
        this.posy[this.numIni] = ( this.posy[this.numIni]>height ? this.posy[this.numIni]-height : this.posy[this.numIni] );
        this.posy[this.numIni] = ( this.posy[this.numIni]<0 ? this.posy[this.numIni]+height : this.posy[this.numIni] );
    }

    mover(){

        if (mouseX>400 && mouseX<600){ // 

            for (let i=0; i<19; i++){
                
                let dx = this.vel * cos( this.dirD[i] );
                let dy = this.vel * sin( this.dirD[i] );
                this.posx[i] += dx;
                this.posy[i] += dy; 
                
            }
    
        } else if (mouseX<200 && mouseX>0){
            for (let i=0; i<19; i++){
                
                let dx = this.vel * cos( this.dirI[i] );
                let dy = this.vel * sin( this.dirI[i] );
                this.posx[i] += dx;
                this.posy[i] += dy; 
                
            }
        }
    
    }
}