<template>
    <div class="recipes__content">
        <C_recipe/>
        <C_recipe/>
        <C_recipe/>
        <C_recipe/>
        <C_recipe/>
        <C_recipe/>
        <C_recipe/>
        <C_recipe/>
        <C_recipe/>
        <C_recipe/>
    </div>
</template>

<script>
import C_recipe from "./C_recipe.vue";

    
    export default{
    components: {
    C_recipe
}
}
</script>

<style>
    .recipes__content{ 
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
</style>    