///////////////////////////////////////////////////////
// This script reroutes your connection to the 
// Journal via the OU Library Proxy
///////////////////////////////////////////////////////


/*
    function : convertLink -> converts the DOI link into a new link including the OU Library Proxy
    value    : presentLink -> link of the DOI
    value    : mod         -> link of the proxy
    return   : futureLink  -> new edited link
    
*/
/*function convertLink(presentLink, mod){

    var res = presentLink.split("//");
    var rfs = res[1].split("/");
    
    rfs[0] = rfs[0].concat("."+mod);

    futureLink = "http://"+rfs.join("/");

    return futureLink;
}*/

function convertLink(presentLink, mod){
    return "https://libezproxy.open.ac.uk/login?url=".concat(presentLink);
}

var myLocation = window.location.href;
var mod = "libezproxy.open.ac.uk";
    
if(myLocation.includes(mod)){ 
    alert("The link is already giving you access through the OU Library.");
}
else{
    var newLink = convertLink(myLocation, mod);
    window.open(newLink,"_self")
}
