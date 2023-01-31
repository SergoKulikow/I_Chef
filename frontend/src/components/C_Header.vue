<template>

    <div class="header__wrapper">
        <div class="header__content">
            <div class="header__logo">
                IChef
            </div>
            <div class="header__text" >
                готовь с душой
            </div>
            <div class="header__id">
                <IconUser/>
            </div>
        </div>
    </div>
    
</template>

<script>
import IconUser from "./UI/IconUser.vue";

    export default {
        name: 'C_Header',
        components: {
        IconUser
        },
}
</script>

<style lang="css">

@import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');

.header__wrapper{ 
    width:100%;
    height: 70px;
    background-color: #ffffff;
    border-radius: 0 0 100px 100px;
}
.header__content{ 
    width: 720px;
    height: 100%;
    display: flex;
    align-items: center;
    margin: auto;
    justify-content: space-between;
}
.header__logo{ 
    font-size: 36px;
}
.header__text{ 
font-family: 'Caveat', cursive;
    font-size: 36px;
    color: #06f;
}
.header__id{ 
    font-size: 1;
}
</style>