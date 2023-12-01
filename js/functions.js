function waterCalculation(a) {
    let days = 0
    let tmp = a;

    if (a < 10)
        return days;

    while ((a - (tmp * 0.1)) > 10) { 
        days++;
        a -= a * 0.1;
    }

    return days;
}

function sayError()
{
    alert("Some error occured");
}

function showError(x)
{
    alert(`Error ${x} occured`);
}

function createHeaders(N){
    for(let i = 0;i<N;i++)
        document.write("<h2>Header</h2><br>");
}

function checkPassword(x){
    let legal = ["JavaScript","Web","Step"];
    return legal.includes(x);
}

function sign(x){
    if(x==0)
        return 0;
    return x>0?1:-1;
}

function weekDay(x)
{
    switch (x)
    {
        case 0:
            return "Sunday";
            break;
        case 1:
            return "Monday";
            break;
        case 2:
            return "Tuesday";
            break;
        case 3:
            return "Wednesday";
            break;
        case 4:
            return "Thursday";
            break;
        case 5:
            return "Friday";
            break;
        case 6:
            return "Saturday";
            break;
    }
}
