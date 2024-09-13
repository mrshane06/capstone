<template>
    <div class="signup">
        <h2>SignUp:</h2>
    </div>
    <div id="login">
        <h2 class="book">The Book Nook</h2>
        <input type="text" placeholder="Name:" required>
        <br>
        <input type="text" placeholder="Surname:" required>
        <br>
        <input type="text" placeholder="Age:" required>
        <br>
        <input type="text" placeholder="Gender:" required>
        <br>
        <input type="text" placeholder="Email:" required>
        <br>
        <input type="text" placeholder="Username:" required>
        <br>
        <input type="password" placeholder="Password:" required>
        <br>
        <button>Submit</button>
        <a href="/login" id="Create"><p>Already have an account. Click here:</p></a>
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
.signup{
    padding-top: 23px;
    padding-left: 35px;
    text-align: left;
}
.book{
    padding-bottom: 10px;
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
    margin-bottom: 15px;
}
#login{
    background-color: #2D6A4F;
    color: white;
    width: 380px;
    margin: auto;
    border-radius: 60px;
    padding: 30px;
    margin-bottom:16px ;
}
a{
    color: rgb(255, 255, 255);
}
@media only screen and (max-width:800px){
#login{
    margin-bottom:16px ;
}
}
@media only screen and (max-width:400px){
.signup{
    padding: 25px;
    padding-left: 0px;
}
input{
    text-align: center;
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