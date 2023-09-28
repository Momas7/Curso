    const form = document.getElementById('form-numero')
    
    function validaNumero(A, B){
        return B > A;
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let A = parseInt(document.getElementById('campoA').value);
        let B = parseInt(document.getElementById('campoB').value);

        const messagesucess = '<b>Formulário enviado com sucesso!</b>';
        const containermessagesucess = document.querySelector('.success-message');

        formValid = validaNumero(A, B);

    if(formValid){
        document.querySelector('.error-message').style.display = 'none';
        containermessagesucess.innerHTML = messagesucess;
        containermessagesucess.style.display = 'block';
        A.value = '';
        B.value = '';
    }
    else{
        document.querySelector('.error-message').style.display = 'block';
        containermessagesucess.style.display = 'none';
    }
    })




