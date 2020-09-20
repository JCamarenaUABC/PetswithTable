

function DisplayGridServices(serv){
    //var serv =  ArrayObj.pets;
    var text = "";
    var textBody = "";
    
    text=`<table class="table table-hover table-dark">
            <thead>
                <th>Description</td><td>Price</td>
            </thead>`;

    for(var x=0;x<serv.length;x++){       
        textBody+=`<tr><td>${serv[x].description}</td><td>${serv[x].price}</td></tr>` ;
    }

    text+=`<tbody>
            ${textBody}
           </tbody>
    </table>`;

    document.getElementById("table-services").innerHTML=text;
}


function init(){


    ServicesArray.push(s1);
    ServicesArray.push(s2);
    ServicesArray.push(s3);
    ServicesArray.push(s4);

    DisplayGridServices(ServicesArray);

    //hook events
    //$('#btnregister').on('click', register);

}

window.onload=init;
