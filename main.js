

const search = () => {

    const searchbox = document.getElementById("searchitem").value.toUpperCase();
    const product=document.querySelectorAll(".product")
    const productname=document.getElementsByTagName("h2")

    for(var i=0;i<productname.length;i++){
        let match= product[i].getElementsByTagName('h2')[0];
        if(match)
        { 

            let textvalue= match.textContent
            if(textvalue.toUpperCase().indexOf(searchbox)>-1)
            {
                product[i].style.display=""
                console.log(product);

            }
            else
            {
                console.log("hi");
                product[i].style.display="none"
            }

        }

    }
    
}


