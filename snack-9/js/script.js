/* Crea 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine.*/

const zucchine = [
    {
    varieta:'tonde',
    peso : 1.9,
    lunghezza: 20
    },

    {
        varieta:'argentine',
        peso:1.8,
        lunghezza: 21
    },

    {
        varieta:'pugliesi',
        peso:1.7,
        lunghezza: 22
    },

    {
        varieta:'lombarde',
        peso:1.6,
        lunghezza:23
    },

    {
        varieta:'napoletane',
        peso:1.5,
        lunghezza: 24
    },

    {
        varieta:'fiorentine',
        peso:1.4,
        lunghezza: 25
    },

    {
        varieta:'bianca',
        peso:1.3,
        lunghezza: 26
    },

    {
        varieta:'rigata',
        peso:1.2,
        lunghezza: 27
    },

    {
        varieta:'tonda',
        peso:1.1,
        lunghezza: 28
    },

    {
        varieta:'trombetta',
        peso: 1,
        lunghezza: 29
    },
];
console.log(zucchine);

for (let i = 0; i < zucchine.length ; i++){
    const zucchina = zucchine [i];
    console.log (zucchina);
}
