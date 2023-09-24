// Crieray uma ar de planetas que inclua "Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno"  e, em seguida, peça ao usuário para digitar o nome de um planeta. 
//Verifique se o planeta que o usuário informou está na array e informe ao usuário.
//"TERRA", "MARTE", "PLUTÃO", "VÊNUS", "JÚPITER", "SATURNO"

/*let planets = ["Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno"];
var verify = true;


while (verify === true) {

    var pickPlanet = prompt("Digite o nome de um Planeta: ");

    pickPlanet = pickPlanet.toLowerCase();

    // usa-se um "array" para escolher a letra que será especificamente transformada || O Substring basicamente exclui a quantidade de letras que vc escolheu e extrai o restante da informação
    pickPlanet = pickPlanet[0].toUpperCase() + pickPlanet.substring(1);

    if (planets.includes(pickPlanet)){

        alert(pickPlanet + " está dentro do ARRAY!");
    } else{
        
        alert(pickPlanet + " não está no ARRAY! Tente outro Planeta.");
    }
}*/

let planets = ["Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno"];
var verify = true;



function findOut () {

    var pickPlanet = document.getElementById('planets').value;
    var result = 0;

    pickPlanet = pickPlanet.toLowerCase();

    // usa-se um "array" para escolher a letra que será especificamente transformada || O Substring basicamente exclui a quantidade de letras que vc escolheu e extrai o restante da informação
    pickPlanet = pickPlanet[0].toUpperCase() + pickPlanet.substring(1);

    if (planets.includes(pickPlanet)){

        document.getElementById('answer').innerHTML = pickPlanet + " está dentro do ARRAY!";
    } else{

        document.getElementById('answer').innerHTML = pickPlanet + " não está no ARRAY! Tente outro Planeta.";
    }
}
