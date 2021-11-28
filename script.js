function gerRandomName(){
    //check if 1st second and third is already selected
    
    
        var nameList = document.getElementById('inputNameList').value;

        if(nameList.length){
            var nameArray = nameList.split('\n');
            var drawPosition = Math.floor(Math.random()*nameArray.length);
            var li = document.createElement('li');
            li.innerText = nameArray[drawPosition];
            var ul = document.getElementById('luckyPerson');

            var ulLength = document.getElementById('luckyPerson').childNodes.length
            if(ulLength < 3){
                ul.appendChild(li);
                nameArray.splice(drawPosition,1);
                document.getElementById('inputNameList').value = arrayToString(nameArray)

            }
            else{
                alert('Winner is Already Selected')

            }


        }
        else{
            alert('Please Input')

        }
        
        

   
        
    

    

}
function arrayToString(para){
    var names = para.toString();
    var newName = names.replace(/,/g, '\n');
    return newName;
    
}

document.getElementById('drawButton').onclick = gerRandomName;