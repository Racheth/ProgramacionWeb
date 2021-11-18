<?php
echo "<h2>bienvenido $_REQUEST[name]</h2>";

$edad =($_REQUEST["edad"]);
if ($edad >= 18) {
    echo "tienes edad para conducir";
} else {
    echo"no tienes edad para conducir";
}
echo "<br>";echo "<br>";
echo "tu calificacion es : ";
 $calificacion=($_REQUEST["cali"]);
    if($calificacion >=0 & $calificacion <3){
        echo"Muy deficiente";
    }else if($calificacion>=3 & $calificacion <5){
        echo"Insuficiente";
    }else if($calificacion>=5 & $calificacion <6){
        echo"Suficiente";
    }else if($calificacion>=6 & $calificacion <7){
        echo"Bien";
    }else if($calificacion>=7 & $calificacion <9){
        echo"Notable";
    }else{
        echo"Sobre saliente";
    }

    echo "<br>";echo "<br>";
$promedio = 0;
for($i=1;$i<=10;$i++){
    $promedio += intval($_REQUEST["calificacion$i"]);
}
$promedio = $promedio /10;
echo "Su promedio es: $promedio";
echo "<br>";echo "<br>";
echo"sucesión fibonacci :";
echo "<br>";
$canti =($_REQUEST["canti"]);
$a=0;$b=1;$c;$s=1;
	for($i=1; $i <= $canti; $i++){
		$c=$a+$b;
        echo"sucesion [$i] : $c";
        echo "<br>";
        $s=$s+$c;
        $a=$b;
        $b=$c;
	}
?>