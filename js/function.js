	// JavaScript code
function search_animal() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('app');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item"; 

                            
        }
    }
};


function commentBox(){
    var name=document.getElementById('name').value;
    var comment=document.getElementById('comment').value;
 
    if(name =="" || comment ==""){
        alert("Porfavor introduce la informacion requerida!");
    }else{
        var parent=document.createElement('div');
        var el_name=document.createElement('h5');
        var el_message=document.createElement('p');
        var el_line=document.createElement('hr');
        var txt_name=document.createTextNode(name);
        var txt_message=document.createTextNode(comment);
        el_name.appendChild(txt_name);
        el_message.appendChild(txt_message);
        el_line.style.border='1px solid #000';
        parent.appendChild(el_name);
        parent.appendChild(el_line);
        parent.appendChild(el_message);
        parent.setAttribute('class', 'pane');
        document.getElementById('result').appendChild(parent);
 
        document.getElementById('name').value="";
        document.getElementById('comment').value="";
    }
};



