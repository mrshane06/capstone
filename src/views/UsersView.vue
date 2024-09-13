<template>
    <div class="users">
        <h2>User Account</h2>
    </div>
    <div id="users">
        <h2 class="book">The Book Nook</h2>
        <input type="text" placeholder="Change Username:" required>
        <br><br>
        <input type="password" placeholder="Change Password:" required>
        <br><br>
        <button>Submit</button>
        <a href="/delete" id="Create"><p>Want to delete your account. Click here:</p></a>
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
    padding: 45px;
    margin-bottom:18px ;
}
a{
    color: rgb(255, 255, 255);
}
@media only screen and (max-width:880px){
.users{
    padding: 20px;
    padding-bottom:20px;
}
#users{
    margin-bottom:10px ;
}
.book{
    padding-bottom: 44px;
}
}
@media only screen and (max-width:400px){
    .users{
    padding: 33px;
}
.book{
    padding-bottom: 37px;
}
input{
    width: 200px;
}
}
@media only screen and (max-width:360px){
    input{
        width: 180px;
    }
    .users{
    padding: 30px;
}
    #users{
    width: 300px;
    margin-bottom:68px ;
    }
}    
@media only screen and (max-width:300px){
    input{
        width: 160px;
    }
    #users{
    width: 280px;
    margin-bottom:20px ;
    }
} 
</style>