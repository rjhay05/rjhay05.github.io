//Show translator
const translator = document.getElementById("google_translate_element");
translator.style.display = "none"
function showTranslator(){
    if(translator.style.display === "none"){
        translator.style.display = "block"
    }else{
        translator.style.display = "none"
    }
}

function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}


const fbIcons = document.getElementById("fbIcon");
const igIcons = document.getElementById("igIcon");
fbIcons.style.display = "none";
igIcons.style.display = "none";
function showSmIcons(){
    if(fbIcons.style.display === "none" && igIcons.style.display === "none"){
        fbIcons.style.display = "block";
        igIcons.style.display = "block";
    }else{
        fbIcons.style.display = "none";
        igIcons.style.display = "none";
    }
}

