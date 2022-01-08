<template>
  <div class="auth-block">
      <link  rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.css" />
      <form action="#" @submit.prevent="login">
  <div class="container">

     <div class="form-description">
       <i id="angle" class="fas fa-chevron-left"></i> 
        <i id="angle" class="fas fa-chevron-right"></i> 
         <h6>devchallenges</h6> 
     </div>
     <div class="login"><h1>Login</h1></div>  

    <div class="form-props">
       <div class="input-data">
        <span class="email">
         <i class="fas fa-envelope"></i>
        </span> 
         <input type="email" placeholder="Email" name="email" id="username" class="login-input" v-model="email">
       </div>
       
        <span id="lock" class="placeicon">
          <i class="fas fa-lock"></i>
        </span>
        <input type="password" placeholder="Password" id="password" class="login-input" v-model="password">
        
        <router-link to="/profile">
          <input style="" type="button" @click="login" class="button" value="Login">
        </router-link>
    </div>

      <p>or continue with these social profile</p>

      <span>
        <div id="social-media">
  
         <div id="icon-outer" class="google">
           <div class="tooltip">Google</div>
            <i class="fab fa-google"></i>
         </div>

         <div id="icon-outer" class="facebookicon">
          <div class="tooltip">Facebook</div>
           <i  class="fab fa-facebook-f icon-f"></i>
         </div>

         <div id="icon-outer" class="twitter">
            <div class="tooltip">Twitter</div>
           <i class="fab fa-twitter"></i>
         </div>

         <div id="icon-outer" class="github">
            <div class="tooltip">Github</div>
           <i class="fab fa-github"></i>
         </div>
      </div>
    </span>
       <p class="">Already  member? <router-link to="/profile" style="text-decoration:none;"><span style=" color:rgb(17, 120, 204);">Register</span></router-link></p>
   </div>
  </form>
</div>
</template>

<script>

  export default {
    name:'App',
    data(){
      return{
        email:'',
        password:''
      }
    },  
    methods:{
      login(){
        console.warn(this.email,this.password)
      }
    }
    
  }
</script>

<style>
.form-props .email{
  position: absolute;
  margin-top:1.5rem;
  margin-left:2rem;
  font-size:24px;
  color: gray;
}

</style>