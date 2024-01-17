import { mbank } from "../../declarations/mbank";


function roundToTwo(num) {
  return Math.round((num) * 100) / 100;
}
async function update(){
  const currentAmount = await mbank.checkBalance();  
  document.getElementById("value").innerText = roundToTwo(currentAmount);
}


window.addEventListener('load', async ()=>{update();});


//This step will topup and withdraw money to our account. 
//Along with that, it will also show the balance right infront 
//using check balance function
document.querySelector('form').addEventListener('submit', async (event)=>{
event.preventDefault();

const button = event.target.querySelector('#submit-btn');

const inputAmount = parseFloat(document.getElementById('input-amount').value);
const outputAmount  = parseFloat(document.getElementById('withdrawal-amount').value);

console.log(inputAmount);

button.setAttribute('disabled', true);



if (inputAmount && outputAmount){
  await mbank.topUp(inputAmount);
  await mbank.withDraw(outputAmount);
}
else if(inputAmount){
  console.log("Came")
  await mbank.topUp(inputAmount);
}else if(outputAmount){
  await mbank.withDraw(outputAmount);
}else{
  console.log("Nothing happened");
}

button.removeAttribute('disabled');
update();
});


