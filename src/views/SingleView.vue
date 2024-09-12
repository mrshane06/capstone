<template>
    <div v-if="book()">
        <div>
            <h2>SingleView</h2>
            <a href="/products"></a><button>back</button>
        </div>
        <div v-if="book()">
            {{ $store.state.book.id}}
        </div>
        <section v-for="single in book()" :key="single.books_id" >
            <card-comp>
                <template #default>
                    <h2>{{ single.bookName }}</h2>
                </template>
                <template #author>
                    <h4>{{ single.author }}</h4>
                </template>
                <template #category>
                    <h4>{{ single.category }}</h4>
                </template>
                <template #amount>
                    <h4>R {{ single.amount }}</h4>
                </template>
            </card-comp>
            <br><br>
            <button @click="addToCart(single.books_id)">Add to cart</button>
        </section>
    </div>
    <div v-else>
        <spinner-comp>
            
        </spinner-comp>
    </div>
</template>
<script>
import spinnerComp from '@/components/spinnerComp.vue';
import cardComp from '@/components/cardComp.vue';
export default {
    components:{
    spinnerComp,
    cardComp
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
    #myBooks{
        display:grid;
        grid-template-columns:repeat(3,1fr);
    }
    h4{
        color:rgb(208, 198, 198);
        text-shadow:3px 3px black;
        padding-top: 18px;
    }
    h2{
        color:rgb(213, 208, 208);
        text-shadow:3px 3px black;
        padding-top: 18px;
    }
    button{
        position: sticky;
        margin-top:250px;
        margin-left: 20px;
        margin-right: 20px;
        border-radius: 10px;
    }
</style>