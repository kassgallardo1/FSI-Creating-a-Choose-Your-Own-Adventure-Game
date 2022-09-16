let response = window.prompt("Do you go left or right?").toLowerCase();
console.log(response);

if(response === "left"){
    //we run logic for left response.
    console.log("user submitted left")

    let response2 = window.prompt("Do you go down or up?")
        if(response2 === "up"){console.log ("user submitted up")}
} else if (response === "right"){
    //we run logic for right response.
    console.log("user submitted right")
} else {
    //show error or ask question again.
}