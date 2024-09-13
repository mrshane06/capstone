<template>
    <div>
        <h1>admin</h1>
        <section>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Book Id</th>
                            <th>Book Name</th>
                            <th>Author</th>
                            <th>Amount</th>
                            <th>Quantity</th>
                            <th>Description</th>
                            <th>Genre</th>
                            <th>Cover</th>
                        </tr>
                    </thead>
                    <tbody v-if="books">
                            <tr v-for="book in books()" :key="book.books_id">
                            <template>
                                <td>{{ book.books_id }}</td>
                            </template>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
        </section>
    </div>
</template>
<script>
// import cardComp from '@/components/cardComp.vue';
export default {
    components:{
        // cardComp,
    },
    methods:{
        getBooks(){
            this.$store.dispatch('getBooks')
        },
        books(){
            return this.$store.state.books
        },
    },
    mounted() {
        this.getBooks()
    },
}
</script>
<style scoped>
    
</style>