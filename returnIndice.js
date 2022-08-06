const array = [22 , 16 , 47 , 12, 51, 102, 24];
let soma = 46;

function calcular (a, res) {
    
    let indice = [];
    for (let i = 0; i < a.length - 1; i++) {
        let j = 0;
        while (j+1 < a.length - 1) {
           if (a[j] + a[i+1] === res){
                indice.push(a.indexOf(a[j]), a.indexOf(a[i+1]));
            }
            j++
        }
    }
    return indice
}

console.log(calcular(array,soma))


