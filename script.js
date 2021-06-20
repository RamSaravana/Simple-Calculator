let screen = document.getElementById("display");

addValue = num => screen.value += num; //adding the CLICKED button values..

calculate = () => {                     //calculate the TOTAL.. but checks and sends ERROR message if any!!
    try{
        screen.value = eval(screen.value);
    }
    catch(err){
        window.alert("Mathematically Invalid");
    }
}

del = () => screen.value = screen.value.slice(0,-1); // deletes the last element in the Screen..

clearAll = ()  => {                     // Clears the Screen completely!!
    screen.value="";
}

// --------WORKING ON USING LOCALSTORAGE TO STORE & RETRIVE VALUES-------- 
// *********WILL BE UPDATED VERY SHORTLY**********
// checking = () => {
//     if(typeof(localStorage.getItem(last))==undefined){
//         screen.placeholder = "0";
//     }
//     else{
//         screen.placeholder = JSON.parse(localStorage.getItem(last));
//     }
// }





