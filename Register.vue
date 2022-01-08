<template>
 <div class="auth-block">
     <link  rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.css" />
     <form action="#" @submit.prevent="login">
  <div class="container">
  
     <div class="dev-challenge">
         <i id="angle" class="fas fa-chevron-left"></i>
         <i id="angle" class="fas fa-chevron-right"></i> 
         <h6>devchallenges</h6>  
     </div>

     <div class="content">
        <h2>Join thousands of learner from <br> around the world</h2>
        <p>Mater web devlepment by making real-life <br>projects.There are multiple paths for you to <br>choose</p>
     </div>

     <div class="form-props">
       <span class="placeicon"><i class="fas fa-envelope"></i></span> <input type="email" placeholder="Email" name="email" id="username" class="login-input" v-model="email">
       <span id="lock" class="placeicon"><i class="fas fa-lock"></i></span><input type="password" placeholder="Password" id="password" class="login-input" v-model="password">
       <input @click="signUp" type="button" class="button" value="Start coding now"> 
     </div>
      
       <p>or continue with these social profile</p>
      
       <span><div id="social-media">
        <router-link to="/login" style="text-decoration:none;"> <div id="icon-outer" class="google">
           <div class="tooltip">Google</div>
            <i class="fab fa-google"></i>
         </div></router-link>

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
       <p>Already  member? <strong @click="signUp" style=" color:rgb(17, 120, 204);cursor:pointer;">Login</strong></p>
    </div>
  </form>
</div>
</template>

<script>
import axios from 'axios'
  export default {
    name:'Register',
    data(){
      return{
       email:'',
       password:''

      }
    },
    methods:{
     async signUp(){
       let result=await axios.post("http://localhost:3000/users",{
         email:this.email,
         password:this.password
        

       });
      
        console.warn(result);
        this.$router.push({name:'Login'})
        this.email=" ",
        this.password=" "
     }
      
    },
    mounted(){
      
      let user= localStorage.getItem('user-info');
      if(user){
           this.$router.push({name:'Login'}) 
      }
      

    }
}
</script>

<style>
body{
  margin:0;

}
#moon{
 float:right;
  margin-right:-30rem;
  width:40px;height:40px;
  border-radius:50%;
  background:#fff;
  position:relative;display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:0px 6px 18px -9px rgba(0, 0, 0, 0.75);
  transition:transform 100ms ease-in;
  cursor:pointer;
    
}
#moon:hover {
  background: #333;
  color: white;
  transform:scale(1.07);
}
#moon i:hover{
  color:#fff;
}
#moon i{
position: absolute;
font-size:18px;
color:#333;
}
.content{
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-left:-5rem;
  word-spacing: 3px;
}
.content h2{
  font-size:28px;
}
.content p{
  font-size:16px;
}
.dev-challenge{
  display: flex;
  justify-content: flex-start;
  margin-left:-11rem;
  margin-bottom:-1rem;
}
.dev-challenge #angle{
   margin-top:0.8rem;
  color:orange;

}

.dev-challenge h6{
  margin-top:0.6rem;
  font-size:2.5vmin;
  margin-left:0.5rem;
  font-weight: 400;
  color:rgb(33, 5, 160);
 
}
 
.form-props{
  display:flex;
  flex-direction:column;
  max-width: 300px;
  align-items: flex-start;
  justify-content: center;
  margin-left:-5rem;
  background: transparent;
  
}
.form-props .placeicon{
  position: absolute;
  margin-top:-9.2rem;
  margin-left:2rem;
  font-size:24px;
  color: gray;
}
.form-props #lock{
  margin-top:0.2rem;
}
.form-props input:focus{
  outline:0;
}
.form-props .button{
  width:350px;
  height:40px;
  border-radius:10px;
  border:1.5px solid gray;
  margin:1rem;
  padding-left:1rem;
  border:none;
  background: rgb(21, 127, 248);
  color:white;
  font-size:16px;
  font-weight:500;
  
}

.form-props .button:hover{
  cursor:pointer;
}
#social-media{
  width:300px;
  height:40px;
  display: flex;
  align-items: center;
  margin-left:3rem;
}
#social-media .icon-outer{
  position: relative;
  width:35px;
  height:35px;
  border:1px solid gray;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left:1.2rem;
}
#social-media .icon-outer i{
  position:absolute;
  font-size: 18px;
  color:gray;

}

</style>