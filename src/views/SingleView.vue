<template>
    <div v-if="book()">
        <div>
            <h1>i hate my life</h1>
            <a href="/products"></a><button>back</button>
        </div>
        <div v-if="book()">
            {{ $store.state.book.id}}
        </div>
    </div>
    <div v-else>
        <spinner-comp>
            
        </spinner-comp>
    </div>
</template>
<script>
import spinnerComp from '@/components/spinnerComp.vue';
export default {
    components:{
    spinnerComp,
  },
    methods: {
        getBook(){
            this.$store.dispatch('getBook',this.$route.params.id)
        },
        book(){
            return this.$store.state.book
        },
        addToCart(books_id){
        this.$store.dispatch('addToCart',books_id)
    },
    },
    mounted(){
        this.getBook()
    }
}
</script>
<style scoped>
     h3{
        padding: 30px;
        text-align: left;
    }
    section{
        width:300px;
        height:400px;
        margin: auto;
        border:solid 2px black;
        border-radius:10%;
        margin-bottom: 25px;
    }
    h4{
        color:rgb(208, 198, 198);
        text-shadow:3px 3px black;
        padding-top: 18px;
    }
    button{
        border-radius: 10px;
    }
</style>