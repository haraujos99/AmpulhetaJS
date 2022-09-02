function ampulheta(n){
    if (n <20) return console.log("Input invalido");

    
    for(let i = 1; i <= n; i++) {
        let row = ''

        for(let j = 1; j <= n; j++) {
            if(i == 1 || i == n){
                row += '#';
            } else if(j==1 || j == n){
                row += '#';
            } else  if(i <= n/2) {
                if(j < i || j > n-i+1){
                    row += ' ';
                } else {
                    row += '#';
                }
            } else{
                if(j == i || j == n-i+1){
                    row += '#';
                } else {
                    row += ' ';
                }
            }
        }
        console.log(row);
    }   

    let divisionBar = '';
    for(let i=0; i<n; i++){
        divisionBar += '=';
    }
    console.log(divisionBar);

    for(let i = 1; i <= n; i++) {
        let row = ''

        for(let j = 1; j <= n; j++) {
            if(i == 1 || i == n){
                row += '#';
            } else if(j==1 || j == n){
                row += '#';
            } else  if(i <= n/2) {
                if(j == i || j == n-i+1){
                    row += '#';
                } else {
                    row += ' ';
                }
            } else{                
                if(j > i || j < n-i+1){
                    row += ' ';
                } else {
                    row += '#';
                }
            }
        }
        console.log(row);
    }   

    
}

ampulheta(20);
