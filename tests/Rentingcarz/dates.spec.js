function createDate(){
    var newDate = new Date()

    newDate.getFullYear()
    newDate.getMonth()
    newDate.getDate()

    //var today = ((newDate.getMonth()+1) + "-" + newDate.getDate() + "-" + newDate.getFullYear())

    var startDate = ((newDate.getMonth()+2) + "-" + (newDate.getDate()+10) + "-" + newDate.getFullYear())
    var finalDate = ((newDate.getMonth()+3) + "-" + (newDate.getDate()+10) + "-" + newDate.getFullYear())
}