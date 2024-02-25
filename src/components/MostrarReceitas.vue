<script lang="ts">
import type IReceita from '@/Interfaces/IReceita';
import { FiltrarReceita } from '@/operacoes/operacaoreceitas'
import type { PropType } from 'vue';
import BotaoPrincipal from './BotaoPrincipal.vue';
import { ObterReceitas } from '@/http';
import CardReceita from './CardReceita.vue';

export default {
    props: {
        ingredientes: { type: [] as PropType<string[]>, required: true }
    },
    components: { BotaoPrincipal, CardReceita },
    emits: ['editarReceita'],
    data() {
        return {
            receitas: [] as IReceita[],

        }
    },
    async created() {
        this.receitas = await ObterReceitas();

        this.receitas = this.receitas.filter((receita) => {
            const receitasPossiveis = FiltrarReceita(receita.ingredientes,this.ingredientes);
            return receitasPossiveis;
        })

        console.log(this.receitas)
    },
}
</script>

<template>
    <section>
        <ul class="receitas">
            <li v-for="receita in receitas">
                <CardReceita :receita="receita" :key="receita.nome" />
            </li>
        </ul>

    </section>
    <BotaoPrincipal :text="'Editar receita'" @click="$emit('editarReceita')" />
</template>

<style scoped>
.receitas {
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
}
</style>