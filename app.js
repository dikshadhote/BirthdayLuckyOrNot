let birthDate=document.getElementById('birth-date');
let luckyNumber=document.getElementById('lucky-number');
let luckyButton=document.getElementById('lucky-button');
let output=document.getElementById('output');

luckyButton.addEventListener("click",onClickHandler);

function onClickHandler()
{
    let birthDay=birthDate.value;
    let number=luckyNumber.value;

   // console.log(birthDay,number)
    let numberArr=dateToNumber(birthDay);
    let sumOfNumbers=calculateSum(numberArr);
    checkDivisibility(sumOfNumbers,number);

}


function dateToNumber(birthDay)
 {
    let arr=(birthDay.split("-"));
   
    for(let i=0;i<arr.length;i++)
    {
        arr[i]=parseInt(arr[i],10);
    }
    
   return arr;
}

function calculateSum(arr)
{
    let sum=0;
    console.log(arr);
    for(let i=0;i<arr.length;i++)
    {

        while(arr[i]>0){
            let rem=arr[i]%10;
            sum=sum+rem;
            arr[i]=Math.floor(arr[i]/10);
    
        } 
    }
    
    return sum;   
}

function checkDivisibility(sum,luckyNum)
{
    if(sum%luckyNum==0)
    {
        document.getElementById('output').style.display='block';
        document.getElementById('output').innerHTML="Your birthday is lucky indeed! 🥳"

    }
    else{
        
        document.getElementById('output').style.display='block';
        document.getElementById('output').innerHTML="Your birthday is not so lucky!😞"
    }
}

