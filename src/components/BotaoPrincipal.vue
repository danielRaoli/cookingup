
<script lang="ts">
    export default{
        props:{
            text: {type: String, required: true}
        }
    }
</script>

<template>
    <button class="paragrafo-lg botao-principal">
        {{ text }}
    </button>
</template>


<style scoped>
    .botao-principal{
        background-color: var(--coral);
        color: var(--branco);
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        border-radius: 2rem;
        cursor: pointer;
    }
</style>