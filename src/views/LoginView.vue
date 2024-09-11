<template>
    <div class="login">
        <h2>login:</h2>
    </div>
    <div id="login">
        <h2 class="book">The Book Nook</h2>
        <input type="text" placeholder="Username:" required>
        <br><br>
        <input type="password" placeholder="Password:" required>
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
    color: rgb(255, 255, 255);
    /* text-decoration: none; */
}
@media only screen and (max-width:800px){
.login{
    padding: 20px;
    padding-bottom:20px;
}
#login{
    margin-bottom:10px ;
}
}
@media only screen and (max-width:400px){
.login{
    padding: 30px;
    padding-bottom:34px;
}
.book{
    padding-bottom: 24px;
    background-color: #2D6A4F;
    border-radius: 60px;
}
}
@media only screen and (max-width:360px){
    input{
        width: 180px;
    }
    #login{
    width: 300px;
    margin-bottom:7px ;
    }
}    
@media only screen and (max-width:300px){
    input{
        width: 160px;
    }
    #login{
    width: 280px;
    margin-bottom:7px ;
    }
}    
</style>