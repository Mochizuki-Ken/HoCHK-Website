function getLanguage(){
    return localStorage.getItem("language") || 'eng'
}

function setLanguage(Language){
    if (Language !== "eng" && Language !== "chi"){
        Language = "eng"
    }
    localStorage.setItem("language",Language)
}

export {getLanguage,setLanguage}