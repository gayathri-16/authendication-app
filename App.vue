<template>
  <div>
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital@1&display=swap" rel="stylesheet">
<router-view></router-view>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style>



body{
  margin:0;
  display:flex;
  align-items: center;
  justify-content: center;
  font-family: 'Source Sans Pro', sans-serif;
  }

.form-description{
  display: flex;
 justify-content: flex-start;
  align-items:center;
  margin-left:-11rem;
  margin-bottom:-2.5rem;
  margin-top:-5rem;
}
.form-description #angle{
  margin-top:0.4rem;
  color:#ff471a;

}
.form-description h6{
  margin-top:3rem;
  font-size:2.5vmin;
  margin-left:0.5rem;
  font-weight: 400;
  color:rgb(33, 5, 160);
 
}
.login{
  display:flex;
  align-items:flex-start;
 margin-left:-14rem;
}
 
.form-props{
  display:flex;
  flex-direction:column;
  max-width: 300px;
  align-items: center;
  justify-content: center;
  
}
.form-props input {
  width:300px;
  height:40px;
  border-radius:10px;
  border:1.5px solid gray;
  margin:1rem;
  padding-left:3rem;
}
.form-props .button{
  width:325px;
  height:40px;
  border-radius:10px;
  border:1.5px solid gray;
  margin:1rem;
  border:none;
  background: rgb(21, 127, 248);
  color:white;
  font-size:16px;
  font-weight:500;
}
.container{
  max-width: 600px;
  height:700px;
  display:flex;
  padding:3rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border:none;
  box-shadow:0 10px 10px rgba(0,0,0,0.1);
   margin-top:3rem;
  border-radius: 10px;
  background:linear-gradient(40deg,#e7f2ff,#ccf2ff,#e7f2ff,#ccf2ff);
 
} 

#social-media{
  width:300px;
  height:40px;
  display: flex;
  align-items: center;
  left:1rem;
  justify-content: space-between;
  column-gap: 1rem;
  margin-bottom:4rem;
  border:none;
  cursor:pointer;
  z-index:2;
}
#social-media #icon-outer{
  position: relative;
  width:50px;
  height:50px;
  border:none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content:center;
  left:-1rem;
  top:3rem;
  
  box-shadow:0 10px 10px rgba(0, 0, 0, 0.1);
}
#social-media #icon-outer i{
  position:absolute;
  font-size: 24px;
  color:black;
 
}
#social-media #icon-outer:hover i{
  color:#fff;
}
 
.tooltip{
  position:relative;
  z-index:2;
  margin-top:-6rem;
  top:0;
  background:#fff;
  border-radius:25px;
  display: flex;
  align-items: center;
  flex-direction: column;
  column-gap: 1rem;
  justify-content:space-between;
  padding:10px 15px;
  box-shadow:0 10px 10px rgba(0,0,0,0.1);
  opacity:0;
  font-size:14px;
  transition:all 0.4s cubic-bezier(0.68,-0.55,0.265,1.55);

}
.tooltip:before{
  position:absolute;
  content:"";
  height:15px;
  width:15px;
  background:#fff;
  bottom:-4px;
  left:50%;
  transform: translate(-50%)rotate(45deg);
  transition:all 0.4s cubic-bezier(0.68,-0.55,0.265,1.55);

}


#social-media #icon-outer:hover .tooltip
{
  opacity:1;
  pointer-events: auto;
  top:-10px;
  
}
.google:hover{
    background: #e1306c;
    color:#fff;
}
#social-media:hover .google .tooltip,
#social-media:hover .google .tooltip:before{
  background: #e1306c;
  color:#fff;
 

}
.facebookicon:hover{
    background: #3B5999;
    color:#fff;
}
#social-media:hover .facebookicon .tooltip,
#social-media:hover .facebookicon .tooltip:before{
  background: #3B5999;
  color:#fff;
 

}
.twitter:hover{
    background: #46C1F6;
    color:#fff;
}
#social-media:hover .twitter .tooltip,
#social-media:hover .twitter .tooltip:before{
  background: #46C1F6;
  color:#fff;
 

}
.github:hover{
    background: #333;
    color:#fff;
}
#social-media:hover .github .tooltip,
#social-media:hover .github .tooltip:before{
  background: #333;
  color:#fff;
 

}
@media only screen and (max-width:600px) {
 body{
   width:90%;

 }
}

</style>