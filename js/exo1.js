var designation = "";
var quantite = 0.0;
var prixHT = 0.0;
var taux = 0.0;
var message = "";



var prixTTC = 0.0;
do {
    designation = prompt("veuillez entrer le nom de l'article");
    quantite = parseInt(prompt("veuiller entrer le nombre "));
    prixHT = parseFloat(prompt("veuillez entrer le prix hors-taxe"));
    taux = parseFloat(prompt("veuillez entrer la TVA"));
    if (!isNaN(designation) || quantite < 0.0 || isNaN(quantite) || prixHT < 0.0 || isNaN(prixHT)) {
        alert("Tes données sont incorrects \n la designation doit être une chaine de caractère \n la quantité et le prix ne doivent pas être nuls");
        continue;
    } else {
        prixTTC = (prixHT * quantite * (1 + (taux * 0.01)));
    }

} while (!isNaN(designation) || quantite < 0.0 || isNaN(quantite) || prixHT < 0.0 || isNaN(prixHT));

message = "votre facture\n";
message += "=============\n";
message += "Nom du Produit : " + designation + "\n";
message += "quantité : " + quantite + "\n";
message += "Prix unitaire Hors  : " + prixHT + " USD\n";
message += "TVA: " + taux + " %\n";
message += "Prix TTC  : " + prixTTC + " USD\n";

alert(message);
console.log(message);