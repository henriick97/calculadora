function obterMedia(){



    var a = parseInt(document.getElementById('m').value);
    var b = parseInt(document.getElementById('n').value);
    var c = parseInt(document.getElementById('b').value);
    
    var media = (a + b + c) / 3;
    
    
    document.getElementById('resultado').innerHTML = 'resultado = '
     + media;
     
    
    
    }