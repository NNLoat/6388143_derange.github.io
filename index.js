
const isElementLoaded = async selector => {
    while ( document.querySelector(selector) === null) {
      await new Promise( resolve =>  requestAnimationFrame(resolve) )
    }
    return document.querySelector(selector);
};

function countDer(n)
    {
        // Create an array to store
        // counts for subproblems
        let der = new Array(n + 1);
      
        // Base cases
        der[1] = 0;
        der[2] = 1;
      
        // Fill der[0..n] in bottom up
        // manner using above recursive
        // formula
        for (let i = 3; i <= n; ++i)
            der[i] = (i - 1) * (der[i - 1] +
                                der[i - 2]);
      
        // Return result for n
        return der[n];
    }

function func(form){
    num = form.elements['Input1'].value;
    result = countDer(num)
    document.getElementById("form-1-Ans").value = result
    console.log(result)

}

function validCheck(form){
    var formItem = form.elements['Input1']
    var num = form.elements['Input1'].value;
    var reg = new RegExp("^[1-9][0-9]*$")
    if(!num){
        formItem.classList.add("is-invalid");
        return false;
    }
    else if (reg.test(num) == false){
        formItem.classList.add("is-invalid");
        return false
    }
    formItem.classList.remove("is-invalid");
    return true
}


async function main(){
    isElementLoaded('.form-1').then((selector) =>{
        const form  = document.getElementById('form-1')
        form.addEventListener("submit",(e) =>{
            e.preventDefault();
            if(!validCheck(form)){
                e.stopPropagation();
                form.elements['Input1'].classList.add("invalid")
            }
            else{
                func(form)
            }
        })
    })


    
}

main()