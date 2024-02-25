export function FiltrarReceita( lista1 : unknown[], lista2: unknown[] ){
     return lista1.every(r => lista2.includes(r));
}