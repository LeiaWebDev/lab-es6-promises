// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  // getInstruction("mashedPotatoes", 0, (step1) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 1, (step2) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 2, (step3) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 3, (step4) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 4, (step5) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  //   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  // }, (error) => console.log(error));



// Iteration 1 - using callbacks
// Using nested callbacks print the cooking steps to make 
// Mashed Potatoes in the correct order. 
// Write your JavaScript in the provided `javascript/index.js` file. 


getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`
  //
  getInstruction('mashedPotatoes', 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`
    //
    getInstruction('mashedPotatoes', 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`
      //
      getInstruction('mashedPotatoes', 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`
        //
        getInstruction('mashedPotatoes', 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed Potatoes are ready!</li>`
          })
            
          })
        })
      })  
    })  




// Iteration 2 - using promises

obtainInstruction('steak', 0)
.then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
}).then(() => {
  return obtainInstruction('steak', 1)
}).then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
}).then(() => {
  return obtainInstruction('steak', 2)
})
.then((step2) => {
  document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
})
.then(() => {
  return obtainInstruction('steak', 3)
})
.then((step3) => {
  document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
})
.then(() => {
  return obtainInstruction('steak', 4)
})
.then((step4) => {
  document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
})
.then(() => {
  return obtainInstruction('steak', 5)
})
.then((step5) => {
  document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
})
.then(() => {
  return obtainInstruction('steak', 6)
})
.then((step6) => {
  document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
})
.then(() => {
  return obtainInstruction('steak', 7)
})
.then((step7) => {
  document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`
  //  ... Your code here
}).catch((error)=> console.log(error.message))



// Iteration 3 using async/await

async function makeBroccoli() {
  // const broccoli = []
  try{
  
  // for (let i=0; i<broccoli.length; i++){
    // const response = await fetch ("./javascript/data.js")
    // const dataResponse = await response.text(broccoli)
    // const liBroccoli = document.querySelector("#broccoli")
    
    // liBroccoli.textContent += `${broccoli[0]}${broccoli[1]}`
    const step0 = await obtainInstruction('broccoli', 0)
    document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`

    const step1 = await obtainInstruction('broccoli', 1)
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`

    const step2 = await obtainInstruction('broccoli', 2)
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`
  
    const step3 = await obtainInstruction('broccoli', 3)
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`
    
    const step4 = await obtainInstruction('broccoli', 4)
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`
    
    const step5 = await obtainInstruction('broccoli', 5)
    document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`

    const step6 = await obtainInstruction('broccoli', 6)
    document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`
    // }

    
} catch (error){
  console.error(error)
}
}
makeBroccoli()



// Bonus 1 - Promise
// When the specific food is ready to be served (all steps are listed), 
//remove the `hidden` attribute from the `<img />` element 
//that represents the food, so that the image gets displayed.

// Bonus 2 - Promise all
// ...