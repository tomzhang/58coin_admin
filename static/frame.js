function getWith(){
    if (window.innerWidth != window.undefined)// FF
    {
        return window.innerWidth;
    }
    if (document.compatMode == 'CSS1Compat')// IE
    {
        return document.documentElement.clientWidth;
    }
    if (document.body)// other
    {
        return document.body.clientWidth;
    }
    return window.undefined;
};
function getHeight() {
    if (window.innerHeight != window.undefined)// FF
    {
        return window.innerHeight;
    }
    if (document.compatMode == 'CSS1Compat')// IE
    {
        return document.documentElement.clientHeight;
    }
    if (document.body)// other
    {
        return document.body.clientHeight;
    }
    return window.undefined;
};
function frameHeight(id, top) {
    var eHeight = getHeight() - top + "px";
    document.getElementById(id).style.height=eHeight;
}