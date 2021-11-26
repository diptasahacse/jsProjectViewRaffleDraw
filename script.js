function gerRandomName(){
    //check if 1st second and third is already selected
    
    
        var nameList = document.getElementById('inputNameList').value;
        var nameArray = nameList.split('\n');
        var drawPosition = Math.floor(Math.random()*nameArray.length);
        var li = document.createElement('li');
        li.innerText = nameArray[drawPosition];
        var ul = document.getElementById('luckyPerson');

        var ulLength = document.getElementById('luckyPerson').childNodes.length
        if(ulLength < 4){
            ul.appendChild(li);
            nameArray.splice(drawPosition,1);
            document.getElementById('inputNameList').value = arrayToString(nameArray)

        }
        else{
            alert('Winner is Already Selected')

        }
        

   
        
    

    

}
function arrayToString(para){
    var names = para.toString();
    var newName = names.replace(/,/g, '\n');
    return newName;
    
}

document.getElementById('drawButton').onclick = gerRandomName;