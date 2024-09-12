<template>
    <div v-if="book()">
        <div>
            <h1>uy</h1>
            <a href="/products"></a><button>back</button>
        </div>
        <div v-if="book()">
            {{ $store.state.book.id}}
        </div>
        <section class="section" id="product">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                    <div class="left-images">
                        <img :src="book.bookURL" alt="">
                    </div>
                    </div>
                    <div class="col-lg-4">
                    <div class="right-content">
                        <h4>{{ book.bookName }}</h4>
                        <span class="price">${{ book.amount }}</span>
                        <p>Quantity: {{ book.quantity }}</p>
                        <p>Category: {{ book.category }}</p>
                        <div class="quantity-content">
                        <div class="left-content">
                            <h6>No. of Orders</h6>
                        </div>
                        <div class="right-content">
                            <div class="quantity buttons_added">
                            <input type="button" value="-" class="minus" @click="decrementQuantity">
                            <input type="number" step="1" min="1" max="" name="quantity" v-model="quantity" title="Qty" class="input-text qty text" size="4" pattern="" inputmode="">
                            <input type="button" value="+" class="plus" @click="incrementQuantity">
                            </div>
                        </div>
                        </div>
                        <div class="total">
                        <h4>Total: ${{ total }}</h4>
                        <div class="main-border-button"><a href="#" @click="addToCart">Add To Cart</a></div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
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