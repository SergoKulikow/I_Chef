<template>
<div class="div">
    <div class="login__wrapper">
        
        <div class="input__block">
            <div class="input__input__block">
            <p>
                почта
            </p>

            <input type="text">
                        </div>
            <div class="input__input__block">
            <p>
                пароль
            </p>
            <input type="password" >
            </div>
        </div>
        <div class="button__block" >
            <button>register</button>
            <button>login</button>
        </div>
    </div>
    </div>
</template>

<script>

</script>

<style scoped   >
.div{
    display: flex;
    background-color: #edeef0;
    align-items: center;
    position: fixed;
    top: 30%;
    left: 35%;

}
.login__wrapper{ 
    border: solid 3px #000;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 10px 30px;
    height: 230px;
}
.input__block{ 

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        margin-top: 10px;
}
.button__block{ 
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}
.input__input__block{
    margin-top: 10px;
}
.button__block button{
    width: 100%;
    height: 30px;
    background-color: #ffffff;
    color: #000;
    border: solid 2px #000;
}
.button__block :last-child{
    width: 100%;
    height: 30px;
    margin: 0 0 0 10px;

}
input{
    height: 30px;
    font-size: 24px;
    background-color: none;
    border: 3px solid #000;
}
 p{
     font-size: 24px;
 }
</style>