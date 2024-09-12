<template>
    <div v-if="book()">
        <div>
            <h1>{{ $store.state.book.bookName }}</h1>
        </div>
        <div v-if="book()">
            {{ $store.state.book.id}}
        </div>
        <div>
            <section class="section" id="product">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-sm-12">
                        <div class="left-images">
                            <img :src="$store.state.book.bookURL" alt="">
                        </div>
                        </div>
                        <div class="col-md-6 col-sm-12">
                        <div class="right-content">
                            <span class="price">Price: R{{ $store.state.book.amount }} </span>
                            <p>Quantity: {{ $store.state.book.quantity }}</p>
                            <p>Category: {{ $store.state.book.category }}</p>
                            <p id="dis"> Description: {{ $store.state.book.description }}</p>
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
                            <a href="#" @click="addToCart"><button>Add to Cart</button></a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            <a href="/products"><button  id="back"> Back</button></a>
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
        decrementQuantity() {
            this.quantity -= 1
            this.total = this.book.amount - this.quantity
        },
        incrementQuantity() {
            this.quantity += 1
            this.total = this.book.amount + this.quantity
        },
    },
    mounted(){
        this.getBook()
    }
}
</script>
<style scoped>
    h1{
        padding: 20px;
    }
    button{
        border-radius: 10px;
        width: 100px;
    }
    img{
        width: 300px;
        height: 400px;
        position: sticky;
        border-radius: 10%;
        margin-bottom: 42px;
    }
    #dis{
        width: 45vw;
    }
    #back{
        margin-bottom: 16px;
    }
</style>