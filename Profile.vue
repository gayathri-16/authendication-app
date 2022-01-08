<template>
 <div>
     <link  rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.css" />
    <div>
        <div  id="content">
        <div id="title-left">
        <i id="angle" class="fas fa-chevron-left"></i> 
        <i id="angle" class="fas fa-chevron-right"></i> 
        <h6>devchallenges</h6>
        </div> 

         <div id="title-right">
             <div class="updatepic"><img style="margin-left:1rem;" :src="information.imageUrl"></div>
             <p>{{profilename}}</p>
             <i id="angle" @click="showDropdown = true" v-if="showDropdown === false"  class="fas fa-sort-down"></i>
             <i id="angle" @click="showDropdown =false"  v-if="showDropdown===true" class="fas fa-sort-up"></i>
             <br>
        </div>         
    </div>   

        <div class="base-info">
        <h1>Personal info</h1>
        <p>Basic info,like your name and photo</p>
        </div>  

       <div id="dropDown" v-if="showDropdown === true" >
        <button  class="groupchat btn"><i  id="icon" class="fas fa-user-friends"></i>Group chat</button> <br>
       <router-link to="/login" style="text-decoration:none;"> <button  class="logout btn"> <i @click="logout" style="font-weight:600; padding-right:1rem;font-size:25px;" class="fas fa-sign-out-alt"></i>Logout</button></router-link> <br>
       </div>

    <div class="profile">
     <table>
    
        <tr class="row1">
         <h2> Profile</h2> 
          <router-link :to="'/editprofile/'+information.id" style="text-decoration:none;"> <button id="edit">Edit</button></router-link>
          <p>Some info may be visible to other people</p>
        </tr>
    
        <tr>
        <th>PHOTO</th>
        <td> <div class="updatepic"> <img  :src="information.imageUrl"> </div></td>
        </tr>
    
        <tr>
        <th>NAME</th>
        <td>{{information.name}}</td>
        </tr>

        <tr>
        <th>BIO</th>
        <td>{{information.bio}}</td>
        </tr>

        <tr>
        <th>PHONE</th>
        <td>{{information.phone}}</td>
        </tr>

        <tr>
        <th>EMAIL</th>
        <td>{{information.email}}</td>
        </tr>

        <tr>
        <th>PASSWORD</th>
        <td>{{information.password}}</td>
        </tr>
        
        </table> 
    </div>    
  </div>
</div>
</template>

<script>

import axios from 'axios'
    export default {
  
        data(){
            return{
                files:[],
                profilename:'',
                information:[],
                showDropdown:false,
                showIcon:false,
                showEdit:false,
                showContent:false,
               }
        },
   async  mounted(){

               
               let result=await axios.get("http://localhost:3000/information")
              console.warn(result)
              this.information=result.data,
              this.profilename=result.data.name
              
        },

        methods:{
                logout(){
                localStorage.clear();
                this.$router.push({name:'Login'})
                },
      
           }
    }
</script>

<style>
body{
    padding:0;
    margin:0;
    font-family: 'Source Sans Pro', sans-serif;
}
.base-info {
    
    margin-top:4rem;
    position:sticky;
    display:flex;
    justify-items: center;
    align-items: center;
    flex-direction: column;
 
}

#content{
    display:flex;
    align-items:flex-start;
    justify-content:space-between;
    flex-direction: row;
   
    width:100%;
    row-gap: 30rem;
}

#title-left{
  display: inline-flex;
  justify-content: left;
  align-items:center;
  float:left;
  position:absolute;
  margin-top:-1rem;
  left:0;
  margin-left:0.5rem;
   
}
#title-left #angle{
  font-size:1.5vmin;
  color:rgb(33, 5, 160);

}
#title-left h6{
  font-size:1.5vmin;
  margin-left:0.5rem;
  font-weight: 600;
  color:rgb(33, 5, 160);
 
}
#title-right{
   
    display: flex;
    justify-content:center;
    align-items:center;
    margin-left:43rem;
    margin-top:1rem;
    float:right;
    column-gap: 15px;
    cursor:pointer;
    position: fixed;
   

}
#title-right img{
    width:50px;
    height:50px;
    border-radius:5px;
   
}
#dropDown{
    width:180px;
    height:100px;
    background:transparent;
    color:black;
    position:relative;
    float:right;
    right:-40rem;
    top:-6.5rem;
    border:1.5px solid rgb(190, 190, 190);
    display:block;
      box-shadow:0px 6px 18px -9px rgba(0, 0, 0, 0.75);
   
}
#dropDown .btn{
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
    cursor:pointer;
    font-family: 'Source Sans Pro', sans-serif;

}
#dropDown .btn:hover{
     transform:scale(1.02);
     box-shadow:2px 2px 12px rgba(0,0,0,0.2), -1px -1px 8px rgba(0,0,0,0.2);

}
#dropDown .myprofile{
     
     
         text-align: center;
    
}
#dropDown .groupchat{
      padding-left:-0.1rem;
      border-bottom:1px solid rgb(167, 157, 157);
      
}
#dropDown .logout{
   margin-top:-1rem;
   color:red;

}
#icon{
    padding-right:1rem;
    font-size:25px;
    color:rgb(43, 42, 42);
}
table{
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    border-collapse:collapse;
    width:900px;
    height:500px;
    border:1px solid #ddd;
    margin-top:6rem;
    box-shadow:2px 2px 12px rgba(0,0,0,0.2), -1px -1px 8px rgba(0,0,0,0.2);
}
.row1{
    height:40px;
    border-bottom:1px solid #ddd;
    
}

.row1 h2{
    padding-left:2rem;
}
.row1 p{
    padding-left:2rem;
    margin-top:-2.5rem;
}
#pic{
    width:70px;
    height:50px;
    border-radius:5px;
    margin-bottom:-1rem;
    
}
#edit{
     transform:translate(950%,-50%);
     display:flex;
     align-items:center;
     justify-content:center;
     width:80px;
     height:35px;
     background:#fff;
     text-decoration:none;
     border:none;
     border-radius:8px; 
     font-size:16px;   
     cursor:pointer;
     box-shadow:0 20px 20px rgba(0,0,0,0.1);
     font-family: 'Source Sans Pro', sans-serif;

    
}
.updatepic i{
    position:absolute;
    z-index:1;
}
.updatepic{
    width:70px;
    height:50px;
    border-radius:5px;
    margin-bottom:-1rem;
}
.updatepic img{
    width:100%;
    height:50px;
     border-radius:5px;
    transition:transform 100ms ease-in;
    
}
.updatepic img:hover{
    transform:scale(1.07);
}
tr{
    transition:all .2s ease-in;
    cursor:pointer;
    width:800px;
}
tr:hover{
    background-color:#f5f5f5;
    transform:scale(1.02);
     box-shadow:2px 2px 12px rgba(0,0,0,0.2), -1px -1px 8px rgba(0,0,0,0.2);

}
th{
    font-weight:600;
}
td{
    color:rgb(24, 24, 24);
    
}
th,td{
    padding:12px;
    text-align:left;
    border-bottom:1px solid #ddd;
    padding-left:2rem;
}

@media only screen and (max-width:768px){
     table{
        width:90%;
    }
 #content{
     width:80%;
 }
 #edit{
     transform:translate(450%,-50%);
 }
 #title-right{
     display: flex;
    justify-content:center;
    align-items:center;
    margin-left:15rem;
    margin-top:1rem;
    float:right;
    column-gap: 15px;
    font-size:15px;
    cursor:pointer;
    position: fixed;
 }
 #title-right img{
     width:40px;
     height:35px;
    
 }
 #title-right p{
     margin-left:-1rem;
 }
 #dropdown{
     width:100px;
    height:50px;
    background:transparent;
    color:black;
    position:relative;
    float:right;
    margin-left:13rem;
    top:.5rem;
    border:1.5px solid rgb(190, 190, 190);
    display:block;
      box-shadow:0px 6px 18px -9px rgba(0, 0, 0, 0.75);
 
 }
}
</style>