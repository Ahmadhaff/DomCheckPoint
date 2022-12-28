 var quantity = document.querySelectorAll(".Quantity"),
     Sub = document.querySelectorAll(".Sub"),
     Add = document.querySelectorAll(".Add"),
     Price = document.querySelectorAll(".Price"),
     Total = document.querySelector(".Total"),
     Delete = document.querySelectorAll(".Delete"),
     Heart = document . querySelectorAll(".Heart");
     


for ( let i = 0 ; i < Sub.length ; i++){
Sub[i].addEventListener("click", () => {
    if (+quantity[i].value > 0){
        +quantity[i].value-- ,
        Total.value = +Total.value - (+(Price[i].value));
    };
});
};

for ( let i = 0 ; i < Add.length ; i++){
Add[i].addEventListener("click", () => {
        +quantity[i].value++,
        Total.value = +Total.value + (+(Price[i].value));
    });

};


for ( let i = 0 ; i < Delete.length ; i++){
    Delete[i].addEventListener("click" , () => {
        Delete[i].parentElement.remove();
        Total.value = Total.value - ((+quantity[i].value) * (+Price[i].value))
    })        
};


for ( let i = 0 ; i < Heart.length ; i++){
    Heart[i].addEventListener("click", () => { 
    if (Heart[i].style.color != "red" ){
        Heart[i].style.color = "red"
    }else {
        Heart[i].style.color = "black"
    }
});
};





