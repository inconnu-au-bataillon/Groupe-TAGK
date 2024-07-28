<?php
include "Pagedeux.deux.php";
 
   
$id = $_GET['id']??0;

    
if (isset($_GET[2])) {
    $id =  $_GET[2];
    $overview = $produits [$id];
}


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>galerie d'art</title>
    <link rel="stylesheet" href="Page2.1.css"/>
</head>
                <nav> 
                <h2> <i>vous avez choisi:</i></h2>
                </nav>

        <body>
            
        <div class="principal">  

            <div class ="image"> 
                <img src="img/tableauchat.jpg">
            </div class ="image">

            <div class = "prod">
                    <form method="get" action="détailproduit.php">
                    <input type="number" name=" " required min="1">
                    
                    <form action="détailproduit.php">
                    <div class="button" ><a href="Page3.php" button type="submit">Ajoutez au panier</button></div> <br/><br/>
                    <img src="panier.php">
            </div class= "prod">

        </div>
        <?php



echo $produits[$id]["name"] ."<br/>"."<br/>";


echo $produits[$id]["overview"]."<br/>"."<br/>";


//echo $produits[$id]["image"]."<br/>"."<br/>";


echo $produits[$id]["price"]."<br/>"."<br/>";



?>
</body>

<footer> <h6><i>© a lotus spirit product Cannes 2024</i></h6></footer>
</html>
