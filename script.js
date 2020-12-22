var jqscript = document.createElement("script");
jqscript.src="https://code.jquery.com/jquery-3.5.1.min.js";
jqscript.onreadystatechange = handler;
jqscript.onload = handler;
document.getElementsByTagName("head")[0].appendChild(jqscript);

function handler(){
    var modal_wrapper = ''
    alert("script tag works!!!!!")
}