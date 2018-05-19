function save()
{
    // create vars
    var number = document.getElementById("number").value;
    var name = document.getElementById("name").value;
    var birthday = document.getElementById("date").value;
    var cookies = [];
    if(document.cookie!="")
    {
        cookies = JSON.parse(document.cookie);
    }
    
    if(cookies.length==0)
    {
        cookies = [];
    }
    cookies.push({"number":number, "name" : name, "birthday" : birthday});
    
    document.cookie= JSON.stringify(cookies);
    
    document.getElementById("p1").innerHTML = "";
    
    var table = JSON.parse(document.cookie);
    
    for(i=0;i<table.length;i++)
    {
        document.getElementById("p1").innerHTML += table[i].name + " " + table[i].number + " " + table[i].birthday + "<br>";
    }    
}