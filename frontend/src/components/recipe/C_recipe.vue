<template>
    <div class="recipe__block">
        <div class="recipe__block__front">
            <div class="recipe__block__image">
                <img src="../../assets/logo.png" alt="">
            </div>
            <div>
                <h3 class="recipe__block__title">
                    название
                </h3>
            </div>
        </div>
        
        <div class="recipe__block__back">
            <div class="recipe__block__titleback">
                <p>описание:</p>
            </div>
            <div class="recipe__block__text">
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo nam maxime rem non nobis repellendus nisi expedita consectetur dicta optio sit repudiandae doloribus amet saepe excepturi sunt voluptatem quae, numquam eum obcaecati vel! Rerum ipsum pariatur dolorem iure officiis praesentium!
                </p>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style>
.recipe__block{ 
    height: 250px;
    width: 200px;
    margin: 20px 20px;
}
.recipe__block__front{ 

    transition: transform .6s linear;
    transform: perspective(600px) rotateY(0deg);
    position: absolute;
    backface-visibility: hidden;
    background-color: brown;
    min-height: 250px;
}
.recipe__block__image{ 
    
}
.recipe__block__title{  
}
.recipe__block__back{ 
    transition: transform .6s linear;
    transform: perspective(600px) rotateY(180deg);
    min-height: 100%;
    backface-visibility: hidden;
    background-color: brown;

}
.recipe__block__titleback{ 
    
}
.recipe__block__text{ 
    
}
.recipe__block:hover > .recipe__block__front{ 
        transform: perspective(600px) rotateY(-180deg);
}
.recipe__block:hover > .recipe__block__back{ 
    transform: perspective(600px) rotateY(0deg);
}
.hhh{
    position: absolute;
    min-height: 100%;
    min-width: 100%;
    background-color: antiquewhite;
}
</style>

