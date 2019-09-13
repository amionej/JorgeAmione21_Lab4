var list = document.getElementById("listtodos");
post.addEventListener("click", function(event){
    event.preventDefault();
    var x = " ";
    x += document.getElementById("newitem").value;
    if (x != " "){
        list.innerHTML += '<p>'
        list.innerHTML += '<input type="checkbox" name= "listitem"/>'
        list.innerHTML += x
        list.innerHTML += '</p>'
    }
});
cle.addEventListener("click", function(event){
    event.preventDefault();
    var checkboxes = document.getElementsByName("listitem");
    for(var i=0; i<checkboxes.length; i++) {
        checkboxes[i].checked = false;
    }
});
mark.addEventListener("click", function(event){
    event.preventDefault();
    var checkboxes = document.getElementsByName("listitem");
    for(var i=0; i<checkboxes.length; i++) {
        checkboxes[i].checked = true;
    }
});

del.addEventListener("click", function(event){
    event.preventDefault();

    list.innerHTML='';
}); 