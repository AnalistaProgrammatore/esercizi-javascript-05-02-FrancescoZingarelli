let stringaScacchiera = ``;
let size = 8;
for (riga = 1; riga <= size; riga++) {
    for (colonna = 1; colonna <= size; colonna++) {
        if ((riga % 2 === 0) === (colonna % 2 === 0)) stringaScacchiera += ` `;
        else stringaScacchiera += `#`;
    }
    if (riga < size) stringaScacchiera += `\n`;
}
console.log(stringaScacchiera);

/*

prima l'avevo fatto così però poi ho cercato un modo per accorciare quella riga lunghissima...

let stringaScacchiera = ``;
let size = 8;
for (riga = 1; riga <= size; riga++) {
    for (colonna = 1; colonna <= size; colonna++) {
        if ((riga % 2 !== 0 && colonna % 2 !== 0) || (riga % 2 === 0 && colonna % 2 === 0)) stringaScacchiera += ` `;
        else stringaScacchiera += `#`;
    }
    if (riga < size) stringaScacchiera += `\n`;
}
console.log(stringaScacchiera);

*/
