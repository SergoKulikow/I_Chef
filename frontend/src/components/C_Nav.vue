<template>
    <div class="nav__content">
        <ul class="nav__ul">
            <li>
                <router-link to="/user" >Мой профиль</router-link>
            </li>
            <li>
                <router-link to="/main">Поиск</router-link>
            </li>
            <li>
                <router-link to='/login'>Галерея</router-link>
            </li>
            <li>
                <a href="">Что то третье</a>
            </li>
        </ul>
    </div>
</template>

<script>
    
</script>

<style>
    .nav__content{
        display: flex;
        position: fixed;
        margin: 0px 0 0 -900px;
        height: 200px;
    }
    .nav__ul{ 
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        list-style-type: none;
    }
    .nav__ul a{
        text-decoration: none;
        color: #000000;
        font-size: 18px;
    }
</style>