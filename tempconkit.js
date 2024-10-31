
//TEMPERATURE CONVERSION KIT 
const textBox = document.getElementByID("textBox");
const toFahrenheit = document.getElementByID("toFahrenheit");
const toCelsius = document.getElementByID("toCelsius");
const result = document.getElementById("result");
let temp;



function convert(){

if(toFahrenheit.checked){
    temp = Number (textBox.value);
    temp = temp *9/5+32;
    result.textContent = temp.toFixed(1) + "°F"
    }

else if (toCelsius.checked){
    temp = Number (textBox.value);
    temp = (temp-32)*(9/5);
    result.textContent = temp.toFixed(1) + "°C"

}
else{
    result.textContent = "Select a unit";
}


}

