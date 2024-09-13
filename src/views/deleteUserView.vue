<template>
    <div class="users">
        <h2>Delete User Account</h2>
    </div>
    <div id="users">
        <h2 class="book">The Book Nook</h2>
        <input type="text" placeholder="Username:" required>
        <br><br>
        <input type="password" placeholder="Password:" required>
        <br><br>
        <button>Delete</button>
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
.users{
    margin-top: 30px;
    padding: 30px;
    padding-bottom:60px;
}
.book{
    margin-top: 20px;
    padding-bottom: 40px;
    background-color: #2D6A4F;
    border-radius: 60px;
}
input{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #D9D9D9;
    width: 250px;
    border-radius: 60px;
    margin: 10px;
    text-align: center;
    color: black;
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
#users{
    background-color: #2D6A4F;
    color: white;
    width: 380px;
    margin: auto;
    border-radius: 60px;
    padding: 30px;
    margin-bottom:65px ;
}
a{
    color: rgb(255, 255, 255);
}
@media only screen and (max-width:400px){
    .users{
    margin-top: 4px;
    padding: 30px;
    }
    input{
    width: 200px;
}
}
@media only screen and (max-width:360px){
    .users{
    margin-top: 4px;
    padding: 40px;
    }
    #users{
    width: 300px;
    margin: auto;
    border-radius: 60px;
    padding: 30px;
    margin-bottom:65px ;
}
}
@media only screen and (max-width:320px){
    .users{
    margin-top: 4px;
    padding: 30px;
    padding-bottom:24px;
    }
}
    
</style>