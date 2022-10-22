<template>
      <div>
        
      </div>
</template>

<script>
import { eBus } from '@/main';

export default{
    data(){
        return{
        input:'',
        item:''

        }
    },
    methods:{
      todoText(e){
        this.input=e.target.value

       },

        itemAdd(){
            eBus.$emit('inputPro', this.input)

        },

      
    }

}
</script>


<style>


.addItem {
  width: 340px;
  height: 47px;
  border: none;
  border-radius: 15px;
  margin-top: 20px;
  outline-color: #333;
}

</style>