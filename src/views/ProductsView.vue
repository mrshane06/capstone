<template>
    <div>
        <h3>Take a look at what we have in stores:</h3>
    </div>
    <div v-if="books()" id="myBooks" >
        <section v-for="book in books()" :key="book.books_id" >
            <card-comp :cover="book.bookURL">
                <template #default>
                    <h2>{{ book.bookName }}</h2>
                </template>
                <template #author>
                    <h4>{{ book.author }}</h4>
                </template>
                <template #category>
                    <h4>{{ book.category }}</h4>
                </template>
                <template #amount>
                    <h4>R {{ book.amount }}</h4>
                </template>
                
            </card-comp>
            <br><br>
            <button @click="addToCart(books.books_id)">Add to cart</button>
            <button @click="singleView(books.books_id)">View More</button>
        </section>
    </div>
    <div v-else>
        <spinner-comp>

        </spinner-comp>
    </div>
</template>
<script>
import cardComp from '@/components/cardComp.vue';
import SpinnerComp from '@/components/spinnerComp.vue';
export default {
  components:{
    cardComp,
    SpinnerComp
  },
  methods:{
    getBooks(){
        this.$store.dispatch('getBooks')
    },
    books(){
        return this.$store.state.books
    },
    addToCart(books_id){
        this.$store.dispatch('addToCart',books_id)
    }
  },
  mounted(){
    this.getBooks()
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
        color:rgb(213, 208, 208);
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