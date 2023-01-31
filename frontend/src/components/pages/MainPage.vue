<template>
<C_Search/>
<C_recipes/>

</template>

<script>
    import C_recipes from '@/components/recipe/C_recipes'
import C_Search from '../C_Search.vue'
    export default{
    name: 'MainPage',
    components:{
    C_recipes,
    C_Search
}
    }
</script>

<style>



</style>