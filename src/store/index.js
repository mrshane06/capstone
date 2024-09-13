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
    users:null,
    user:null,
    books:null,
    book:null,
  },
  getters: {
  },
  mutations: {
    setUsers(state, payload){
      state.users = payload;
    },
    setUser(state, payload){
      state.user = payload;
    },
    setBooks(state, payload){
      state.books = payload;
    },
    setBook(state, payload){
      state.book = payload;
    }
  },
  actions: {
    async getUsers({commit}){
      try{
        let data = await axios.get('https://capstone-1nf8.onrender.com/user')
        let users = await data.json()
        commit('setUsers', users);
      }catch (error){
        toast("There has been an error! please try again ", {
          "theme": "auto",
          "type": "error",
          "position": "top-center",
          "autoClose": 2000,
          "dangerouslyHTMLString": true
        })
      }
    },
    async getUser({commit},user_id){
      try{
        let data = await axios.get(`https://capstone-1nf8.onrender.com/user/${user_id}`)
        let user = await data.json()
        commit('setUser', user);
      }catch (error){
        toast("There has been an error! please try again ", {
          "theme": "auto",
          "type": "error",
          "position": "top-center",
          "autoClose": 2000,
          "dangerouslyHTMLString": true
        })
      }
    },
    async deleteUser({commit},user_id){
      try{
        let data = await axios.delete(`https://capstone-1nf8.onrender.com/user/${user_id}`)
        let user = await data.json()
        commit('setUser', user);
        toast("You have deleted a user successfully", {
          "theme": "auto",
          "type": "success",
          "position": "top-center",
          "autoClose": 2000,
          "dangerouslyHTMLString": true
        })
      }catch (error){
        toast("Couldn't delete user! please try again ", {
          "theme": "auto",
          "type": "error",
          "position": "top-center",
          "autoClose": 2000,
          "dangerouslyHTMLString": true
        })
      }
    },
    async updateUser({commit},user_id){
      try{
        let data = await axios.patch(`https://capstone-1nf8.onrender.com/user/${user_id}`)
        let user = await data.json()
        commit('setUser', user);
        toast("You have updated a user successfully", {
          "theme": "auto",
          "type": "success",
          "position": "top-center",
          "autoClose": 2000,
          "dangerouslyHTMLString": true
        })
      }catch (error){
        toast("Couldn't update user! please try again ", {
          "theme": "auto",
          "type": "error",
          "position": "top-center",
          "autoClose": 2000,
          "dangerouslyHTMLString": true
        })
      }
    },
    async insertUser({commit},info){
      try{
        let data = await axios.post('https://capstone-1nf8.onrender.com/user/insert',info)
        console.log(data);
        toast("You have inserted a user successfully", {
          "theme": "auto",
          "type": "success",
          "position": "top-center",
          "autoClose": 2000,
          "dangerouslyHTMLString": true
        })
      }catch (error){
        toast("Couldn't insert user! please try again ", {
          "theme": "auto",
          "type": "error",
          "position": "top-center",
          "autoClose": 2000,
          "dangerouslyHTMLString": true
        })
      }
    },
    async loginUser({commit},info){
      let {data} = await axios.post(`https://capstone-1nf8.onrender.com/user/login`,info)
      console.log(data);
      $cookies.set('token', data.token)
      $cookies.set('userRole', data.userRole)
      $cookies.set('user_id', data.user_id)
      if(data.userRole == 'admin'){
        router.push('/rooms')
      }
      else{
        router.push('/products')
      }
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
    },
    async getBooks({commit}){
      try{
        let {data} = await  axios.get('https://capstone-1nf8.onrender.com/books')
        console.log(data);
        commit('setBooks',data)
      }catch (error){
        toast("There has been an error! please try again ", {
          "theme": "auto",
          "type": "error",
          "position": "top-center",
          "autoClose": 2000,
          "dangerouslyHTMLString": true
        })
      }
    },
    async getBook({commit},books_id){
      try{
        let {data} = await  axios.get(`https://capstone-1nf8.onrender.com/books/${books_id}`);
        console.log(data);
        commit('setBook',data)
      }catch (error){
        toast("There has been an error! please try again ", {
          "theme": "auto",
          "type": "error",
          "position": "top-center",
          "autoClose": 2000,
          "dangerouslyHTMLString": true
        })
      }
    },
    async deleteBook({commit},books_id){
      try{
        let data = await axios.delete(`https://capstone-1nf8.onrender.com/books/${books_id}`)
        let user = await data.json()
        commit('setUser', user);
        toast("You have deleted a book successfully", {
          "theme": "auto",
          "type": "success",
          "position": "top-center",
          "autoClose": 2000,
          "dangerouslyHTMLString": true
        })
      }catch (error){
        toast("Couldn't delete book! please try again ", {
          "theme": "auto",
          "type": "error",
          "position": "top-center",
          "autoClose": 2000,
          "dangerouslyHTMLString": true
        })
      }
    },
    async updateUser({commit},books_id){
      try{
        let data = await axios.patch(`https://capstone-1nf8.onrender.com/books/${books_id}`)
        let user = await data.json()
        commit('setUser', user);
        toast("You have updated a book successfully", {
          "theme": "auto",
          "type": "success",
          "position": "top-center",
          "autoClose": 2000,
          "dangerouslyHTMLString": true
        })
      }catch (error){
        toast("Couldn't update book! please try again ", {
          "theme": "auto",
          "type": "error",
          "position": "top-center",
          "autoClose": 2000,
          "dangerouslyHTMLString": true
        })
      }
    },
    async insertBooks({commit},info){
      try{
        let data = await axios.post('https://capstone-1nf8.onrender.com/books/insert',info)
        console.log(data);
        toast("You have inserted a books successfully", {
          "theme": "auto",
          "type": "success",
          "position": "top-center",
          "autoClose": 2000,
          "dangerouslyHTMLString": true
        })
      }catch (error){
        toast("Couldn't insert books! please try again ", {
          "theme": "auto",
          "type": "error",
          "position": "top-center",
          "autoClose": 2000,
          "dangerouslyHTMLString": true
        })
      }
    },
    async addToCart({commit},books_id){
      console.log(books_id);
      let {data} = await axios.post('https://capstone-1nf8.onrender.com/books/addToCart',{id:books_id})
  }
  },
  modules: {
  }
})