<template>
    <div class="login">
        <h2>login:</h2>
    </div>
    <div id="login">
        <h2 class="book">The Book Nook</h2>
        <input type="text" placeholder="Username:">
        <br><br>
        <input type="password" placeholder="Password:">
        <br><br>
        <button>Submit</button>
        <a href="/signup" id="Create"><p>Don't have an account. Click here:</p></a>
    </div>
    <div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.login{
    padding: 30px;
    padding-bottom:60px;
}
.book{
    padding-bottom: 60px;
    background-color: #2D6A4F;
    border-radius: 60px;
}
input{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #D9D9D9;
    width: 250px;
    border-radius: 60px;
    margin: 10px;
}
::placeholder{
    color: black;
    text-align: center;
}
button{
    background-color: #D9D9D9;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    width: 100px;
    border-radius: 60px;
    margin-bottom: 30px;
}
#login{
    background-color: #2D6A4F;
    color: white;
    width: 380px;
    margin: auto;
    border-radius: 60px;
    padding: 50px;
    margin-bottom:30px ;
}
a{
    padding-bottom:685px ;
    color: rgb(255, 255, 255);
    /* text-decoration: none; */
}
    
</style>