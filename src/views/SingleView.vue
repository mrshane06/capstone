<template>
    <div v-if="book()">
        <div>
            <h2>SingleView</h2>
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
// import cardComp from '@/components/cardComp.vue';
export default {
    components:{
    spinnerComp,
    // cardComp
  },
    methods: {
        getBook(){
            this.$store.dispatch('getBook',this.$route.params.id)
        },
        book(){
            return this.$store.state.book
        }
    },
    mounted(){
        this.getBook()
    }
}
</script>
<style scoped>
    
</style>