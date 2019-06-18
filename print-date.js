// add a printDate function in here
function printDate(){
    var today = new Date();
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateAndTime = date+' '+time;
    console.log("The current date and time is: "+dateAndTime);
}

printDate();
