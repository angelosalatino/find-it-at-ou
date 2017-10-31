function convertLink(presentLink){

    var mod = ".libezproxy.open.ac.uk";

    var res = presentLink.split("//");
    var rfs = res[1].split("/");

    rfs[0] = rfs[0].concat(mod);

    futureLink = "http://"+rfs.join("/");

    return futureLink;
}


var myLocation = window.location.href;

var newLink = convertLink(myLocation);

window.open(newLink,"_self")
