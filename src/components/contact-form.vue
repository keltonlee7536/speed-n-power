<template>
  <div class="contact-form-main padding-30">

    <form></form>

    <label for="name">Name: </label>
    <input type="text" id="name" name="placeholder"><br>

    <label for="name">Year: </label>
    <input type="text" id="year" name="placeholder"><br>

    <p>Make:</p>
     <input type="radio" id="Kawasaki" name="Make" value="Kawasaki">
     <label for="Kawasaki">Kawasaki</label><br>

     <input type="radio" id="Suzuki" name="Make" value="Suzuki">
     <label for="Suzuki">Suzuki</label><br>

     <input type="radio" id="Honda" name="Make" value="Honda">
     <label for="Honda">Honda</label><br>

    <label for="Other">Other:</label><br>
    <input type="text" id="Other" name="Make">
  
  <p>condition:</p>
     <input type="radio" id="Kawasaki" name="condition">
     <label for="Kawasaki">New</label><br>

     <input type="radio" id="Suzuki" name="condition">
     <label for="Suzuki">Fair</label><br>

     <input type="radio" id="Honda" name="condition">
     <label for="Honda">needs a tune up</label><br>

    <input type="radio" id="Other" name="condition">
     <label for="Other">not running</label><br>


  <label for="name">service requested/problem description:</label><br>
    <input  class="large-input-field" type="text" id="additionalInfo" name="placeholder"><br>

  <label for="name">aditional Info:</label><br>
    <input class="large-input-field" type="text" id="additionalInfo" name="placeholder"><br>

  <button onclick="submitForm()">submit</button>

</div>

</template>

<style>
.contact-form-main {
 float: left;
 width: 50%;
}


.small-spacing-top {
margin-top:5px;
}

.large-input-field {
  width: 300px;
  height:100px;
}

</style>