<template>
    <div class="search">
        <div class="search__input" @click="inputFocus($event)">
            <div v-for="(tag, index) in tags" :key="index" class="tags__search">
                <span class="tag tag__primary" >{{ tag }}</span>
                <span class="tag tag__delete tag__secondary" @click="removeTag(index)">X</span>
            </div>
            <input v-model="tagValue"
             type="text"
              class="tag__conrol"
               placeholder="добавить ингредиент"
                @input="autoWidth($event), createTag($event)"
                  @keyup.enter="createTag($event)"
                  list="tag__list">
            <datalist id="tag__list">
                <option v-for="(wt,i) in whiteList" :key="i"> {{ wt.title }} </option>
            </datalist>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default{
        data(){
            return {
                tagValue: '',
                tagList: [],

                whiteList:[

                ],
                separatorTag: ',',
                blackList: '',


            }
        },
        computed:{
            tags: {
                get(){
                    return this.tagList
                },
                set(val){ 
                    this.tags = val
                }
            },
            whiteTags:{
                get(){
                    return this.whiteList
                },
                set(val){
                    this.whiteTags = val
                }
            }
        },
        methods:{
            inputFocus(e){
                if(!e.target.querySelector('input.input.tag__contol')) return;
                !e.target.querySelector('input.input.tag__contol').focus()
            },
            createTag(){
                this.whiteList.forEach(title => {
                    const filterTag = this.tagValue.replace(this.separatorTag).trim()
                    if(this.tagValue === title.title){
                        if(!this.tagList.includes(filterTag) && !this.blackList.includes(filterTag)){
                           this.tagList.push(this.tagValue)
                        }
                    }
                })
                    this.tagValue = '' 
            },
            removeTag(i){
                this.tags.splice(i, 1)
            },
            async fetchTags(){
                try{
                const response = await axios.get("https://jsonplaceholder.typicode.com/albums")
                this.whiteList = response.data
                }
                catch(e){
                    alert('error')
                }
            }


        },
        mounted(){
            this.fetchTags()
        }
    }
</script>


<style>
.search{
    text-align: center;
}
.search__input{
    display: flex;
    border: #000000 2px solid;
    flex-wrap: wrap;
    align-items: center;
    padding: 5px 0 0 0;

}
.tags__search{
    background-color: rgb(154, 154, 154);
    border: 2px solid #000000;
    display: flex;
    height: 20px;
    margin: 0 0px 0 2px;
}
.tag{
    
}
.tag__primary{

}
.tag__delete{
    background-color: rgb(247, 0, 0);

}
.tag__secondary{
    
}

input{
    border: none;
    outline: none;
    margin: 0 0 0 5px;
        height: 30px;
}
</style>
