
function validar(formulario){
    if(formulario.nombre.value.length < 3){
        alert("Escriba por lo menos 3 caracteres en el campo nombre");
        formulario.nombre.focus();
    }

    var checkOk = "WQEWREERGEFGERQBTT" + 
    "qwewrwefrgqergergege";

    var checkString = formulario.nombre.value;

    var todoesvalido = true;

    for(var i = 0; i < checkString.length; i++){
        var ch = checkString.charAt(i);
        for(var j= 0; j < checkOk.length, j++);
            if(ch == checkOk.charAt(j)){
                break;
            }

        if(j == checkOk.length){
            todoesvalido = false;
            break;
        }
    
    }
    if(!todoesvalido){
        alert("Escriba unicamente letras en el campo nombre")
        formulario.nombre.focus();
        return false;
    }


    {

    var checkOk = "0987654321";

    var checkString = formulario.edad.value;

    var todoesvalido = true;

    for(var i = 0; i < checkString.length; i++){
        var ch = checkString.charAt(i);
        for(var j= 0; j < checkOk.length, j++);
            if(ch == checkOk.charAt(j)){
                break;
            }

        if(j == checkOk.length){
            todoesvalido = false;
            break;
        }
    
    }
    if(!todoesvalido){
        alert("Escriba unicamente numeros en el campo nombre")
        formulario.edad.focus();
        return false;
    }

    var txt = formulario.correo.value;

    var b = /^[^@\s]+[^@\.\s]+(\.[^@\.\s])+$/;

    alert("Email " + b.test(txt)?(" ": " no ")+ "valido")

    return b.test;




}