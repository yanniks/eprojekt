var uagent = navigator.userAgent.toLowerCase();

if (uagent.search("iphone") > -1 ||
    uagent.search("ipod") > -1 ||
    uagent.search("ipad") > -1 ||
    uagent.search("appletv") > -1) {
   window.location = "pdf-ios.html";
}
