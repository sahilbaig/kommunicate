
//Code
function getUrlParameterValue(url, parameter) {
    //Todo: complete this code
    if(parameter=="utm_medium")
    {
        return url.match(/utm_medium=(.*)&/).pop();
    }
    else if (parameter=="utm_campaign"){
        return url.match(/utm_campaign=(.*)/).pop();
    }
    else{
        return "Wrong parameters"
    }
}


//Testing 
var url="https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby"
var campaign=getUrlParameterValue(url,"utm_campaign")
var medium=getUrlParameterValue(url,"utm_medium")

console.log(`Campaign = ${campaign}`)
console.log(`Medium = ${medium}`)