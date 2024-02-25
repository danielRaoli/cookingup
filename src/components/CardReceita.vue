<script lang="ts">
import type { PropType } from 'vue';
import type IReceita  from '../Interfaces/IReceita'

    export default{
        props:{
            receita: {type: Object as PropType<IReceita>, required: true}
        }
}
</script>


<template>
    <article class="receita">
                <header>
                        <img class="receita-imagem" :src="`/src/assets/images/${receita.imagem}`" :alt="`${receita.nome}`">
                </header>
            <p class="paragrafo-lg">{{ receita.nome }}</p>
    </article>
</template>


<style scoped>
.receita{
    width: 19.5rem;
    padding: 1rem;
    border-radius: 1rem;
    background: var(--branco, #FFF);
    box-shadow: 4px 4px 10px 0px rgba(68, 68, 68, 0.05);
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
}

.receita-imagem{
    width: 19.5rem;
    border-radius: 1rem 1rem 0rem 0rem;
}

</style>