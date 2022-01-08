<template>
 <div>
          <link  rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.css" />

    <div id="editprofile"> 
       <div class="dev">
         <div class="devchallenge">
         <i id="angle" class="fas fa-chevron-left"></i> 
         <i id="angle" class="fas fa-chevron-right"></i> 
         <h6>devchallenges</h6>
        </div> 
      <router-link to="/profile" style="text-decoration:none;"> <h5 class="back"> <i id="angle" style="color:rgb(5, 98, 160);margin-right:0.5rem;" class="fas fa-chevron-left"></i> Back</h5></router-link>
  
      <div class="personal">
         <div class=""><img :src="information.imageUrl"></div>
          <h6>{{information.name}}
             <i id="angle" style="font-size:18px;margin-left:0.3rem;" @click="showSign = true" v-if="showSign === false"  class="fas fa-sort-down"></i> 
            <i id="angle"  @click="showSign = false" style="font-size:18px;margin-left:0.3rem;top:0.5rem;" v-if="showSign === true"  class="fas fa-sort-up"></i> 
          </h6> 
     </div>  
   </div> 
           
     <div class="edit-profile">
      <h2>Change Info</h2> 
       <p>Changes will be refelected to every service</p>
        <div  class="change-photo">
          <input type="file" id="dropzone-file" style="display:none;" @change="onFilePicked" class="dropzone-file" ref="dropzoneFile"   multiple accept="image/*">
              <div id="pic">
                <i class="fas fa-camera"  @click="getImage"></i><img :src="information.imageUrl" @click="$refs.dropzoneFile.click()" ></div>
                <span  @click="getImage">CHANGE PHOTO</span>
              </div>

       
           <h5>Name</h5>
           <input type="text" ref="namePicker" v-model="information.name"  placeholder="Enter your name" />
      
      
           <h5>Bio</h5>
           <input  type="text" ref="bioPicker"  v-model="information.bio" id="bio" size="50" placeholder="Enter your bio..">
      
      
           <h5>Phone</h5>
           <input type="tel" ref="phonePicker" v-model="information.phone" placeholder="Enter your phone...">
      
      
           <h5>Email</h5>
           <input type="email"  v-model="information.email" placeholder="Enter your email...">
      
      
           <h5>Password</h5>
           <input type="password"  v-model="information.password" placeholder="Enter your password">
           <button type="button" @click="updateInfo" id="save">Save</button>     
     </div>   

      <div id="logout" v-if="showSign === true" >
        <router-link to="/profile" style="text-decoration:none;"> <button  class="m-profile infobtn"><i id="smallicon" class="fas fa-user-circle"></i>My profile</button></router-link><br>
        <button  class="group-chat infobtn"><i  id="smallicon" class="fas fa-user-friends"></i>Group chat</button> <br>
        <router-link to="/login" style="text-decoration:none;"><button  class="signout infobtn" @click="showDropdown = false"> <i style="font-weight:600; padding-right:1rem;font-size:25px;" class="fas fa-sign-out-alt"></i>Logout</button></router-link>  <br>
      </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'

    export default {
    
     data(){
         return{
             
             showSign:false,
             showProfile:false,
             information:{
                 name:'',
                 bio:'',
                 phone:'',
                 email:'',
                 password:'',
                 image:null,
                 imageUrl:''
             }
             

         }
     },
    async  mounted(){
        const result = await axios.get('http://localhost:3000/information')
        console.warn(result.data)
        this.information=result.data
     
    },
      methods:{
     async updateInfo(){
           console.warn(this.information)
           const result = await axios.put("http://localhost:3000/information",{
               name:this.information.name,
               bio:this.information.bio,
               phone:this.information.phone,
               email:this.information.email,
               password:this.information.password,
               imageUrl:this.information.imageUrl

           });
           if(result.status==200){
               this.$router.push({name:'Profile'})
           }
           console.warn("result",result)
          
                      
       },
       getImage(){
         this.$refs.dropzoneFile.click()
           
       },
       onFilePicked(event){
           const files = event.target.files
           const fileReader = new FileReader()
           fileReader.addEventListener('load',()=>{
               this.information.imageUrl=fileReader.result
           })
           fileReader.readAsDataURL(files[0])
           this.information.image=files[0]
       }
      }
     
     
 
}
    
</script>

<style>
body{
    padding:0;
    margin:0;
    font-family: 'Source Sans Pro', sans-serif;
    

}
#editprofile{
    height:900px;
    font-family: 'Source Sans Pro', sans-serif;
    display:flex;
    align-items:flex-start;
    justify-content: center;
    
}
.dev{
   display:flex;
    align-items:flex-start;
    justify-content:space-between;
    flex-direction: row;
   
    width:100%;
    row-gap: 30rem;
 }

.devchallenge{
  display: inline-flex;
  justify-content: left;
  align-items:center;
  float:left;
  position:absolute;
  margin-top:-1rem;
  left:0;
  margin-left:0.5rem;
}
.devchallenge #angle{
  font-size:1.5vmin;
  color:rgb(33, 5, 160);
  
}
.devchallenge h6{
  font-size:1.5vmin;
  margin-left:0.5rem;
  font-weight: 600;
  color:rgb(33, 5, 160);
 
}
.back{
    
  color:rgb(5, 98, 160);
  font-size:3vmin;
  font-weight:300;
  display: inline-flex;
  justify-content: left;
  align-items:center;
  float:left;
  position:absolute;
  margin-top:6rem;
  left:21%;
  transition:transform 100ms ease-in;
   
}
.back:hover{
     transform:scale(1.02);
      background: transparent;
}
.personal{
 display:flex;
 justify-content:center;
 align-items:center;
 margin-top:1.5rem;
 position:fixed;
 width:250px;
 float:right;
 column-gap: 8px;
 right:-1rem;
 cursor:pointer;
  
}
.personal h6{
    font-size:1.8vmin;
    justify-content:center;
       margin-left:1rem;
}
.personal img{
    width:60px;
    height:50px;
    border-radius:5px;
 
    
}
.edit-profile{
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    width:800px;
    height:900px;
    border:1px solid #ddd;
    margin-top:15rem;
    padding-top:3rem;
    padding-bottom:1rem;
    padding-left:5rem;
    font-family: 'Source Sans Pro', sans-serif;

    box-shadow:2px 2px 12px rgba(0,0,0,0.2), -1px -1px 8px rgba(0,0,0,0.2);
}
h5{
  
    font-size:16px;
}
.edit-profile input{
 width:400px;
 height:40px;
 outline: none;
 border-radius:5px;
 outline-width: 0px;
 border:1px solid gray;
 padding-left:1rem;
 font-size:17px;
 font-family: 'Source Sans Pro', sans-serif;

}
::-webkit-input-placeholder{
    padding-left:1rem;
    
}

.edit-profile #bio{
    height:80px;
 
}
.edit-profile h2{
   margin-top:-2rem;
}
.edit-profile p{
  
    margin-top:-0.5rem;
}
.change-photo{
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding:1rem;
}
 .change-photo #pic{
    width:70px;
    height:50px;
    border-radius:5px;
    margin-bottom:-1rem;
    
}
.change-photo #pic img{
    width:100%;
    height:50px;
    border-radius:5px;
     transition:transform 100ms ease-in;
     position: relative;
}
.change-photo i{
    color:rgb(68, 66, 66);
    margin-top:0.7rem;
    position:absolute;
    z-index:1;
    margin-left:1.4rem;
    font-size:25px;
    cursor:pointer;
}
.change-photo #pic img:hover{
    transform: scale(1.07);
}
.change-photo span{
    margin-top:1rem;
    margin-left:1rem;
}

#logout{
    width:180px;
    height:160px;
    background:transparent;
    color:black;
    position:relative;
    float:right;
    right:-41.5rem;
    top:7rem;
    border:1.5px solid rgb(190, 190, 190);
    display:block;
    box-shadow:0px 6px 18px -9px rgba(0, 0, 0, 0.75);

  
  
}
#logout .infobtn{
    border:none;
    width:180px;
    height:50px;
    font-size:2.3vmin;
    background:transparent;
    text-align: center;
     display: flex;
    align-items: center;
    justify-content: flex-start;
    padding:1rem;
    padding-left:1rem;
    cursor: pointer;
    transition:all .2s ease-in;
    font-family: 'Source Sans Pro', sans-serif;

  
}
#logout .infobtn:hover{
    transform:scale(1.02);
    box-shadow:2px 2px 12px rgba(0,0,0,0.2), -1px -1px 8px rgba(0,0,0,0.2);

}
#logout .m-profile{
     
     
         text-align: center;
    
}
#logout .group-chat{
      padding-left:-0.1rem;
      border-bottom:1px solid rgb(167, 157, 157);
      margin-top:-1rem;
}
#logout .signout{
   margin-top:-1rem;
   color:red;
   height:50px;
   margin-bottom:2rem;

}
#smallicon{
    padding-right:1rem;
    font-size:25px;
    color:rgb(43, 42, 42);
}

#save
{
    padding:1rem;
    border:none;
    background: rgb(0, 119, 255);
    border-radius:5px;
    width:100px;
    height:30px;
    cursor:pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size:18px;
    margin-top:4rem;
    color:white;
    font-family: 'Source Sans Pro', sans-serif;

}

@media only screen and (max-width:600px) {
 .edit-profile  {
   width:80%;
   
 }
  .edit-profile input {
   width:80%;
  
 }
 .back{
   left:5%;
 }
 .personal{
     width:30%;
 }
.personal img{
    width:40px;
    height:35px;
    
}
.personal h6{
    margin-left:-0.1rem;
}
}
</style>