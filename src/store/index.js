/* eslint-disable*/
import { createStore } from 'vuex'
import axios from "axios"
import {toast} from "vue3-toastify"
import {useCookies} from "vue-cookies";
import router from '@/router'


axios.defaults.headers=$cookies.get('token')
axios.defaults.withCredentials = true

export default createStore({
  state: {
    user:null,
    books:null
  },
  getters: {
  },
  mutations: {
    setUsers(state, payload){
      state.user = payload;
    },
    setBooks(state, payload){
      state.books = payload;
    }
  },
  actions: {
    async getUser({commit}){
      let data = await fetch('https://capstone-1nf8.onrender.com/user')
      let users = await data.json()
      commit('setUsers', users);
    },
    async insertUser({commit},info){
      let data = await axios.post('https://capstone-1nf8.onrender.com/user/insert',info)
      console.log(data);
    },
    async loginUser({commit},info){
      let {data} = await axios.post(`https://capstone-1nf8.onrender.com/user/login`,info)
      console.log(data);
      $cookies.set('token', data.token)
      if (data.message) {
        toast("You have logged in successfully", {
          "theme": "auto",
          "type": "success",
          "position": "top-center",
          "autoClose": 2000,
          "dangerouslyHTMLString": true
        }
      )
    }
      else{
        toast("username or password  is incorrect! please try again ", {
          "theme": "auto",
          "type": "error",
          "position": "top-center",
          "autoClose": 2000,
          "dangerouslyHTMLString": true
        })
      }
      await router.push('/about')
      location.reload()
    },
    async getBooks({commit}){
      let {data} = await  axios.get('https://capstone-1nf8.onrender.com/books')
      console.log(data);
      commit('setBooks',data)
    },
    async addToCart({commit},books_id){
      console.log(books_id);
      let {data} = await axios.post('https://capstone-1nf8.onrender.com/books/addToCart',{id:books_id})
  }
  },
  modules: {
  }
})
