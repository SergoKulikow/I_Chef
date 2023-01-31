<template>
    <div class="user__wrapper">
        <div class="user__profile">
            <div class="user__image">
                <img src="../../assets/Hz0HipNkp7Gn6mzHCIJai17Ld23k6qhLFhr9kvpTGHf_iMbbZSLFhrAx6pzTZiZu4tjt9FxHgKS_FTltrLD8CZjN.jpg" alt="">
            </div>
            <div class="user__info">
                <div class="user__name">
                    Марк Иванов
                </div>
                <div class="user__old">
                    20.10.2001
                </div>
                <div class="user__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eveniet, doloremque quis beatae, pariatur nisi veniam suscipit eum odit, libero ex iusto officiis dolore. Exercitationem, sunt! Maxime doloribus nobis iusto nisi alias aut asperiores cum minima ipsum hic soluta facere aliquam atque quas, eligendi in perspiciatis reiciendis odio ratione! Fugit!
                </div>
            </div>
        </div>
        <div class="user__content">
            <C_recipes/>
        </div>
    </div>
</template>

<script>
import C_recipes from '../recipe/C_recipes.vue';

    export default{
        components:{
    C_recipes
}
    }
</script>

<style>
    .user__wrapper{ 
        display: flex;
        flex-direction: column;
    }
    .user__profile{ 
        height: 200px;
        display: flex;
        padding: 50px 50px;
        display: flex;
        
    }
    .user__image{
        max-width: 200px;
        max-height: 200px;
        background-color: #edeef0;
        flex-direction: column;
        align-items: center;
    }
    .user__image img{ 
        height: 100%;
        border-radius: 5px;
        border: 2px solid #000000;
    }
    .user__info{ 
        margin: 0px 0 0 30px;
    }
    .user__name{ 
        font-size: 24px;
        font-weight: bold;
    }
    .user__old{ 
        font-size: 14px;
    }
    .user__text{ 
        margin-top: 20px;
    }

    .user__content{ 
            background-color: #edeef0;
            min-height: 300px;
            margin: 40px 40px 40px 40px;
    }
    
</style>