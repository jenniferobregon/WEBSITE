$(document).ready(function(){
    $(".icon").hover(function(){
        $(this).animate({height:'5px', width:'5px'});
    }, 
    function(){
        $(this).animate({height:'64px', width: '64px'});
    });
});

$(document).ready(function(){
    $(".media-left").hover(function(){
        $(this).css("font-family", "Times New Roman").css("color", "white");
    }, function(){
        $(this).css("font-family", "Georgia").css("color", "black");
    });
});
    
$(document).ready(function(){
    $(".no-gutters").hover(function(){
        $(this).css("color", "blue");
    }, function(){
        $(this).css("color", "black");
    });
});

$(document).ready(function(){
    $(".footer").hover(function(){
        $(this).css("color", "teal");
    }, function(){
        $(this).css("color", "black");
    });
});





let newRequest = new XMLHttpRequest();
newRequest.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
        let myObj = JSON.parse(this.responseText);
        for(var i=0; i < myObj.length; i++){
            addRepo(myObj[i].name);
        }

    }


};

newRequest.open("GET","https://api.github.com/users/jenniferobregon/repos", true);
newRequest.send();

function addRepo(name){
    var node = document.createElement("li");
    var textNode = document.createTextNode(name);
    node.appendChild(textNode);
    document.getElementById("repoList").appendChild(node);
}