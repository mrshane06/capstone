<template>
    <div>
        <h3>Take a look at what we have in stores:</h3>
        <input type="text" placeholder="Search..." id="mySearch" v-model="searchQuery">
    </div>
    <!-- <div>
        <input type="text" v-model="searchQuery" placeholder="Search products...">
        <button @click="searchProducts">Search</button>
    </div> -->
    <div class="category-filter">
        <select v-model="selectedCategory">
            <option value="">All Categories</option>
            <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
        </select>
    </div>
    <div v-if="books()" id="myBooks" >
        <section v-for="book in books()" :key="book.books_id" >
            <card-comp :cover="book.bookURL">
                <template #heading>
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
            <router-link :to="{name:'singleView',params:{id:book.books_id}}"><button>View More</button></router-link>
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
  data() {
    return {
      searchProduct: '',
      searchQuery: '',
      categories: ['thriller', 'romance', 'fantasy','horror','historical fiction','gothic fiction','kids books'],
      selectedCategory: '',
    }
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
    },

    async filterByCategory() {
      if (this.selectedCategory === '') {
        this.products = this.originalProducts // reset to original products
      } else {
        const filteredProducts = this.originalProducts.filter(product => {
          return product.category === this.selectedCategory
        })
        this.products = filteredProducts
      }
    },
  },
  computed:{
    filterBooms() {
            return this.$store.state.books.filter(book => {
            return book.bookName.toLowerCase().includes(this.searchQuery) &&
                (this.searchProduct === '' || book.category === this.searchProduct)
            })
        },

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
    .category-filter{
        padding: 20px;
    }
    section{
        width:300px;
        height:400px;
        margin: auto;
        border:solid 2px black;
        border-radius:10%;
        margin-bottom: 40px;
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
    router-link{
        z-index: 1000;
        position: sticky;
        margin-top:250px;
        margin-left: 20px;
        margin-right: 20px;
        border-radius: 10px;
    }
    @media only screen and (max-width:400px){
    #myBooks{
        display:grid;
        grid-template-columns:repeat(1,1fr);
    }
    }
</style>