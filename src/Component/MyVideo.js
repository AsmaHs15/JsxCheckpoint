
import React from 'react';
import "./StyleVideo.css"


const Skynature =() => {
return (

<div>

<div class="container">
    <div class="row">
      <div class="col-md-8 mx-auto">
        <h3> Let's enjoy the beauty of the sky...</h3>
     
      </div>
    </div>
  </div>

<header>
  <div class="overlay"></div>
  <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" height="800" width="800">
    <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4"/>
  </video>

  <div class="container h-100">
    <div class="d-flex h-100 text-center align-items-center">
      <div class="w-100 text-white">
        <h1 class="display-3"> </h1>
        <p class="lead mb-0"></p>
      </div>
    </div>
  </div>
</header>



</div>
);

}

export default Skynature ;