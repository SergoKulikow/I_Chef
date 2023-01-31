<template>
  <div>
    <C_Header class="header_c"/>
        <div class="app_content">
            <C_Nav/>
            <div class="content__wrapper">
                <div class="content__content">
                    <router-view class="view one"></router-view>
                </div>
            </div>
        </div>

  </div>
  
</template>

<script>
import C_Header from "./components/C_Header.vue";

import C_Nav from "./components/C_Nav.vue";



export default {
  name: 'App',
  components: {
    C_Header,
    C_Nav
}
}
</script>

<style>

  *{
    margin: 0 0;
    padding: 0 0;
  }
  .header_c{ 
    position: fixed;
    position: 0;
    z-index: 5;
  }
  .app_content{
    margin: auto;
    display: flex;
    background-color: #edeef0;
    padding: 90px 0 0 0;
    justify-content: center;
  }
  body{
    height: 100%;
  }
  .content__wrapper{ 
    min-height: 90vh;
    background-color: #edeef0;
    display: flex;
    
}
.content__content{
    width: 720px;
    min-height: 100%;
    background-color: #ffffff;
}


</style>
