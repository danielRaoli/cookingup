
<script lang="ts">

import type { PackageJsonInfoCache } from 'typescript';
import SelecionarIngredientes from './SelecionarIngredientes.vue'
import Tag from './Tag.vue';
import  MostrarReceitasVue from './MostrarReceitas.vue';


type Pagina = 'SelecionarIngredientes' | 'MostrarReceita';

export default {

    

    data() {
        return {
            ingredientes: [] as string[],
            conteudo: 'SelecionarIngredientes' as Pagina
        }

    },
    components: { SelecionarIngredientes, Tag, MostrarReceitasVue },
    methods: {
        adicionarIngrediente(ingrediente: string) {
            this.ingredientes.push(ingrediente);
        },
        removerIngrediente(ingrediente : string){
            this.ingredientes = this.ingredientes.filter(li => li !== ingrediente)
        },
        navegar(conteudo : Pagina){
            this.conteudo = conteudo
        }
    }
}
</script>

<template>
    <main class="conteudo-principal">
        <section>
            <span class="subtitulo-lg sua-lista-texto">Sua Lista:</span>
            <ul v-if="ingredientes.length" class="ingredientes-sua-lista">
                <li class="ingrediente" v-for="ingrediente in ingredientes" :key="ingrediente">
                    <Tag :ingrediente="ingrediente" :ativa="true" :key="ingrediente" />
                </li>
            </ul>

            <p v-else class="lista-vazia">
                <img src="../assets/images/lista-vazia.svg" alt="">
                sua lista está vazia selecione algum ingrediente
            </p>


        </section>
        <KeepAlive>
        <SelecionarIngredientes v-if="conteudo === 'SelecionarIngredientes'"
        @adicionaringrediente="adicionarIngrediente($event)"
         @removerIngrediente="removerIngrediente($event)"
         @buscarReceitas="navegar('MostrarReceita')"/>
        
            <MostrarReceitasVue :ingredientes="ingredientes" v-else-if="conteudo === 'MostrarReceita'" @editarReceita="navegar('SelecionarIngredientes')"/>
        </KeepAlive>
    </main>
</template>

<style scoped>
.conteudo-principal {
    padding: 6.5rem 7.5rem;
    border-radius: 3.75rem 3.75rem 0rem 0rem;
    background: var(--creme, #FFFAF3);
    color: var(--cinza, #444);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
}

.sua-lista-texto {
    color: var(--coral, #F0633C);
    display: block;
    text-align: center;
    margin-bottom: 1.5rem;
}

.ingredientes-sua-lista {
    display: flex;
    justify-content: center;
    gap: 1rem 1.5rem;
    flex-wrap: wrap;
}


.lista-vazia {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.25rem;

    color: var(--coral, #F0633C);
    text-align: center;
}

@media only screen and (max-width: 1300px) {
    .conteudo-principal {
        padding: 5rem 3.75rem;
        gap: 3.5rem;
    }
}

@media only screen and (max-width: 767px) {
    .conteudo-principal {
        padding: 4rem 1.5rem;
        gap: 4rem;
    }
}
</style>