var model = {
    answer: "",
    answerToggle: false,
    toReset: false,
    petitionText: "Hey Universe, please answer my question"
}

//functions to manipulate data from html
function getInputTextLength(){
    return document.getElementById("petition").value.length;
 };

function getInputText(){
    return document.getElementById("petition").value;
};

function getQuestion(){
   return document.getElementById("question").value;
};

function getResetStatus(){
    return model.toReset;
}

//Masking the chacrters 
function maskChar(e){
    
    let len = getInputTextLength();
   
    if(e.key === "."){
        model.answerToggle = !model.answerToggle;
        document.getElementById("petition").value+=model.petitionText[len];
        
        return false;
    }else if(e.key.length === 1 && model.answerToggle){
        model.answer += e.key;
        document.getElementById("petition").value +=model.petitionText[len];
   
        
        return false;
    }else if(e.key === "Backspace" && model.answerToggle){
        model.answer = model.answer.slice(0, -1)
    }
 
};

//trigger onkeydown event
document.getElementById("petition").onkeydown = (event) => {
    return maskChar(event);
};

//For invalid response
function response(){
    
    const invalidPetition = [
        "Your peition is invalid, please try again",
        "You should try more!",
        "Why should I answer that?",
        "You don't have enough sleep",
        "Please try again tomorrow. Or Never...",
        "Don't bother me.",
        "I'm not your typical fortune teller",
        "I don't know, maybe ask your mom"
    ];

    const invalidQuestion = "You should ask a valid question";
    const noText = "Please fill up the petition field";
    model.toReset = true;


    if(!getQuestion()){
        return invalidQuestion;
    }else if (!getInputText()){
        return noText;
    }else if(model.answer){
         return  "The Universe says " + model.answer;
    }else{
        let randomNum = Math.floor(Math.random() * invalidPetition.length)
        return invalidPetition[randomNum];
    }  
};

document.getElementById("question").onkeydown = (event) =>{
    switch(event.key){
        case "?":
            answerBtn();
        break;
        
        case "Enter":
            if(!document.getElementById("question").value.includes("?")){
                document.getElementById("question").value += "?";
            }
            answerBtn();
        break;    
    }
};


function answerBtn(){
    document.getElementById("answer").innerHTML = response();

    if(!getInputText() || !getQuestion()){
        document.getElementById("petition").disabled = false;
        document.getElementById("question").disabled = false;
    }else{
        document.getElementById("petition").disabled = true;
        document.getElementById("question").disabled = true;
    }
};
    

function resetBtn(){
    document.getElementById("petition").value = "";
    document.getElementById("answer").innerHTML = "";
    document.getElementById("question").value = "";
    document.getElementById("petition").disabled = false;
    document.getElementById("question").disabled = false;
    model.answer = " ";
    model.answerToggle = false;
    model.toReset = false;
};

// Reset petitionon focus
// function resetOnFocus(){
   
// }


// Play
const targetFirstDiv = document.getElementById("firstTab");
const targetSecondDiv = document.getElementById("secondTab")
targetSecondDiv.style.display = "none";
function playBtn(){
    if(targetFirstDiv.style.display !== "none"){
        targetFirstDiv.style.display = "none";
        targetSecondDiv.style.display = "block";
    }else {
        targetFirstDiv.style.display = "block";
}
}


         

