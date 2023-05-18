const log = (param) => console.log(param);



// Head
let Timer = document.createElement("h1")
Timer.textContent="Call back Hell using Counter"
document.body.append(Timer)
// Click Event
let Timer2 = document.createElement("button")
Timer2.textContent="Start Count"
document.body.append(Timer2)
Timer2.addEventListener("click", ()=>{
document.body.append(Timer3)
});
// Callback Hell
let Timer3 = document.createElement("div")
setTimeout(() => {
    Timer3.textContent = "The Started Timer"
setTimeout(() => {
    Timer3.textContent = "10"
    setTimeout(() => {
        Timer3.textContent = "9"
        setTimeout(() => {
            Timer3.textContent = "8"
            setTimeout(() => {
                Timer3.textContent = "7"
                setTimeout(() => {
                    Timer3.textContent = "6"
                    setTimeout(()=>{
                        Timer3.textContent="5"
                        setTimeout(()=>{
                            Timer3.textContent="4"
                            setTimeout(()=>{
                                Timer3.textContent="3"
                                setTimeout(()=>{
                                    Timer3.textContent="2"
                                    setTimeout(()=>{
                                        Timer3.textContent="1"
                                        setTimeout(()=>{
                                            Timer3.textContent="Happy Indipendance" 
                                          },1000);   
                                        },1000); 
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);