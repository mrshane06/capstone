<template>
    <div>
        <div class="contact-head">
            <h4>Leave us a message if you’d like to request a book , or drop a comment</h4>
        </div>
        <div class="links">
            <p><img src="https://mrshane06.github.io/capstone-images/Icons/gmail_icon.png" id="gmail">niekerkkeegan007@gmail.com</p>
            <p><img src="https://mrshane06.github.io/capstone-images/Icons/phone_icon.png" id="phone">081 421 4195</p>
        </div>
        <section id="bam">
          <div class="col-lg-8 mt-5 mt-lg-0 mt-md-0 mt-sm-0">
            <form
            action="https://formspree.io/f/xanwkokp"
            method="POST"
            >
              <div class="row">
                <div class="col-md-6 form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required>
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" class="form-control" name="email" id="surname" placeholder="Your Email" required>
                </div>
              </div>
              <div class="form-group mt-3">
                <textarea class="form-control" name="comments" rows="5" placeholder="Comments" required></textarea>
              </div>
              <div class="text-center mt-4 send"><button id="sub" type="submit">Submit</button></div>
            </form>
          </div>
        </section>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped> 
*{
  background-color: #cfcfcf;;
}
.contact-head{
    padding: 49px;
    width: 550px;
}
#bam{
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    display: flex;
    justify-content: center;
    padding: 48px;
}
#sub{
    width: 70px;
    border-radius: 60px;
    color: rgb(91, 85, 85);
}
#gmail{
    width: 20px;
    height: 20px;
    margin-right: 10px;
}
#phone{
    width: 20px;
    height: 20px;
    margin-right: 10px;
}
input{
  background-color: white;
  border:rgb(77, 73, 73) 2px solid;
}
textarea{
  background-color: white;
  border: rgb(77, 73, 73) 2px solid;
}
button{
  background-color: white;
  border: rgb(77, 73, 73) 2px solid;
}
@media only screen and (max-width:400px){
  .contact-head{
    padding: 49px;
    width: 400px;
  }
}
</style>