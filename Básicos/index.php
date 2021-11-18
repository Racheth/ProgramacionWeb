<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<form method="post" action="/recibir.php">
<label for="name">Ingrese su nombre</label><br>
<input type="text" name="name"/><br>
<label for="edad">Ingrese su edad</label><br>
<input type="text" name="edad"/><br>
<label for="cali">Ingrese su calificacion final</label><br>
<input type="text" name="cali"/>
 <?php
  for ($i =1;$i <=10; $i++){ ?>
   <div>
    <label for="calificacion<?=$i?>">Agregar su calificacion:</label>
      <br/>
      <input type="number" name="calificacion<?=$i?>" id="calificacion<?=$i?>"/>
     </div>
     <?php } ?> 
<label for="canti">Ingrese un numero fubucchi</label><br>
<input type="text" name="canti"/><br>
<input type="submit" value="Enviar"/>
</form>

</body>
</html>