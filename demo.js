var cities = [
    "Delhi",
    "Ahemdabad",
    "Punjab",
    "Uttar Pradesh",
    "Himachal Pradesh",
    "Karnatka",
    "Kerela",
    "Maharashtra",
    "Gujrat",
    "Rajasthan",
    "Bihar",
    "Tamil Nadu",
    "Haryana"
];
var citiesL = cities.length; //length of datalist tags   

function autoComplete(value)
{
    document.getElementById('datalist').innerHTML = '';
    //setting datalist empty at the start of function
    //if we skip this step, same name will be repeated

    l = value.length;
    //input query length
    for (var i = 0; i < citiesL; i++) {
        if (((cities[i].toLowerCase()).indexOf(value.toLowerCase())) > -1)
         {
             console.log(cities+" "+value)
            //comparing if input string is existing in tags[i] string

            var node = document.createElement("option");
            var val = document.createTextNode(cities[i]);
            node.appendChild(val);

            document.getElementById("datalist").appendChild(node);
            //creating and appending new elements in data list
        }
    }
}
function hello()
    {
        document.getElementById("inp").value="";
                
    }
