var count =0;
var j =0;

function add(){
    var boxd=document.getElementById("box-div");
    var box=document.createElement("div");
   
    box.className="box";
   
    var heading= String(prompt("ENTER THE HEADING OF YOUR TASK"));
    var items=Number(prompt("ENTER NUMBER OF TASK IN NUMBER "))
    var arr=new Array();
   
    for(var i=0;i<items;i++){
        arr[i]=prompt("Enter "+(i+1)+" Element");
    }
    
    box.id = `box${count}`;
    box.innerHTML+=`<h2>${heading}<button id="edit" onclick="add2(box${count})">Edit This Box</button> <hr></h2>`;

   

    for(var i=0;i<items;i++){
            box.innerHTML+=`<h4>
                <input type="checkbox" onclick="check(box${count}id${j}, box${count}label${j})" id="box${count}id${j}">
                <label for="box${count}id${j}" id="box${count}label${j}"> ${arr[i]} </label>    
                </h4>`

                j++;

    }
        boxd.appendChild(box);

        count++;
}
function check(idd,labell){
    var checkb=idd;
    var label=labell;
    if(checkb.checked==true){
            label.style.textDecorationLine="line-through";
            label.style.color="#C2C2C2";
            
    }
    else{
        label.style.textDecorationLine="none";
        label.style.color="black";
    }
}


function add2(boxid){


   console.log(boxid);
        


    var head1=Number(prompt("ENTER THE NUMBER OF TASKS TO BE ADDED"));
   
    var arr1=new Array();

    for(var i=0;i<head1;i++){
        arr1[i]=prompt("Enter "+(i+1)+" Element");

    }

    // editbox1.id=`editbox1${count}`;

    for(var i=0;i<head1;i++){
        boxid.innerHTML+=
        
        `<h4>
        <input type="checkbox" onclick="check(box${count}id${j}, box${count}label${j})" id="box${count}id${j}">
        <label for="box${count}id${j}" id="box${count}label${j}"> ${arr1[i]} </label>    
        </h4>`

        j++;
}





    
}