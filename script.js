var users = [];
 

function clr(){
    document.getElementById("fn").value="";
    document.getElementById("email").value="";
    document.getElementById("psd").value="";

}


function edit(event){
    var id=event.target.parentElement.parentElement.getAttribute('userid')
    console.log(id)
    var index=users.findIndex(item=>item.userId==id);
    console.log(index)
    document.getElementById("fn").value=users[index].fname;
    document.getElementById("email").value=users[index].femail;

    document.getElementById("psd").value=users[index].fpassword;
    console.log(users[index])
   console.log(event) 
    document.getElementById('userId').value=users[index].userId;
    }
function del(event){
    let id=event.target.parentElement.parentElement.getAttribute('userid');
    console.log(id)
     let index=users.findIndex(item=>item.userId==id);
     users.splice(index,1)
     document.getElementById(id).remove()
}
function submit() {
    var userId = document.getElementById("userId").value;
    console.log(userId)
    if (userId == "") {
        console.log(submit)
        var user = {
            'userId': Date.now(),
            'fname': document.getElementById("fn").value,
            'femail': document.getElementById("email").value,
            'fpassword': document.getElementById("psd").value,
        }
        users.push(user)
        console.log(users)

     let trElement=document.createElement("tr");
     trElement.setAttribute("id",user.userId)
                trElement.setAttribute("userId",user.userId)
     let idElement=document.createElement("td")
     idElement.innerText=user.userId;
     let nameElement=document.createElement("td")
     nameElement.innerText=user.fname;
     let emailElement=document.createElement("td")
     emailElement.innerText=user.femail;
     let passwordElement=document.createElement("td")
     passwordElement.innerText=user.fpassword;
    let actionElement=document.createElement("td")
    let editButton=document.createElement("button")
    editButton.setAttribute("onclick",'edit(event)');
    editButton.setAttribute("class","btn btn-danger")
    editButton.innerText="Edit";
    actionElement.appendChild(editButton)
    let deleteButton=document.createElement("button")
    deleteButton.setAttribute("onclick",'del(event)');
    deleteButton.setAttribute("class","btn btn-danger")
    deleteButton.innerText="delete"
    actionElement.appendChild(deleteButton)
     
     trElement.appendChild(idElement)
     trElement.appendChild(nameElement)
     trElement.appendChild(emailElement)
     trElement.appendChild(passwordElement)
     trElement.appendChild(actionElement)
     
     document.getElementById("tobody").appendChild(trElement)
     document.getElementById("fn").value=""
                document.getElementById("email").value=""
                document.getElementById("psd").value=""
                
    }
    else{
        let index=users.findIndex(item=>item.userId==userId)
        users[index].fname=document.getElementById("fn").value;
        users[index].femail=document.getElementById("email").value;
        users[index].fpassword=document.getElementById("psd").value;
        
        document.getElementById(userId).children[1].innerText=document.getElementById('fn').value;
        document.getElementById(userId).children[2].innerText=document.getElementById('email').value;
        document.getElementById(userId).children[3].innerText=document.getElementById('psd').value;
       
    }
}