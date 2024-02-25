import type ICategoria from "@/Interfaces/ICategoria"
import type IReceita from "@/Interfaces/IReceita"

export async function Obter<T>(url: string) {
    const resposta = await fetch(url)
    return resposta.json() as T  
} 

export async function ObterCategorias(){

  const categorias = await Obter<ICategoria[]>('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/categorias.json')
  return categorias
}


export async function ObterReceitas() {
  const receitas = Obter<IReceita[]>('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/receitas.json')
  return receitas
}