function imprimir1al100() {
    for (i=0; i<10; i++){
        m = i *3;
    console.log(m);
    }
}

function uno() {
    a = 1;
    b = 0;
    for (i=1; i<9; i++){
        if (i%2==1){
            console.log(a);
        } else {
            console.log(b);
        }
    }
}

function dos() {
    a = 1;
    b = -1;
    for (i=1; i<9; i++){
        if (i%2==1){
            console.log(a);
        } else {
            console.log(b);
        }
    }
}

//1 2 -1 -2 1 2 -1 -2
function tres() {    

for (k=1;k<3;k++){
    for (i=1; i<3; i++){      
            console.log(i);
        }
    for (j=1; j<3; j++){      
            console.log("-",j);
        }
    }
}

//3 4 5 3 4 5 3 4
function cuatro() {    
    c=0;
    while (c<3){
        for (i=3; i<6; i++){        
                console.log(i);        
        } 
        c++;       
    }
   
}

function Serie4() {
    N = 8;
    for (x = 3, i = 1; i <= N; i++, x++) {
        console.log(x);
        if (x == 5) x = 2;
    }
}
function Serie3() {
    N = 8;
    for (x = 1, s = 1, i = 1; i <= N; i++, x++) {
        console.log(s * x);
        if (x == 2) {
            x = 0;
            s *= -1;
        }
    }
}
function Serie2() {
    N = 8;
    for (x = -1, i = 1; i <= N; i++, x *= -1) {
        console.log(x);
    }
}
function Serie1() {
    N = 8;
    for (x = 1, i = 1; i <= N; i++, x--) {
        console.log(x);
        if (x == 0) {
            x = 2;
        }
    }
}



