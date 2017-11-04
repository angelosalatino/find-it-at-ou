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
function convertLink(presentLink, mod){

    var res = presentLink.split("//");
    var rfs = res[1].split("/");
    
    rfs[0] = rfs[0].concat("."+mod);

    futureLink = "http://"+rfs.join("/");

    return futureLink;
}


var myLocation = window.location.href;
var mod = "libezproxy.open.ac.uk";
    
if(presentLink.includes(mod)) alert("The link was already giving you access through the OU Library.");

var newLink = convertLink(myLocation);

window.open(newLink,"_self")
