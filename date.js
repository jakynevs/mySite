function showDate(){
    var month = new Date().getMonth;
    var day = new Date().getDay;

    document.getElementbyID('date').innerText = day();
    document.getElementbyID('month').innerText = month();
    document.getElementbyID('date').textContent = day();
    document.getElementbyID('month').textContent = month();
}
showDate()

