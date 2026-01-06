const checkNumber = (x) => {
    let str = ""
    if(x % 2 === 0){
        str = "Even"
        console.log(`${x} is even`);
    }
    else{
        str = "odd"
        console.log(`${x} is odd`)
    }

    return str;
}

// checkNumber(3);

const number = document.getElementById("ipt")




const getValue = () => {
    let para = document.getElementById("para")
    let inputNum = number.value;
    console.log(inputNum);
    para.textContent= checkNumber(inputNum);
}