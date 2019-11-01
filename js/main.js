

function sera(){
    let input = document.getElementById('input').value;
    let rand = Math.floor(Math.random() * 6);
    
    
    if(input){
    
        if(rand===0){
            Swal.fire({
                position: 'center',
                type: 'question',
                title: 'Sua frase pode não ser uma pergunta?',
                showConfirmButton: false,
                timer: 2500
              })
        }
        if(rand===1){
            Swal.fire({
                position: 'center',
                type: 'success',
                title: 'Sua frase pode não ser uma resposta?',
                showConfirmButton: false,
                timer: 2500
              })
        }
        if(rand===2){
            Swal.fire({
                position: 'center',
                type: 'warning',
                title: 'Sua frase pode não ser uma atenção?',
                showConfirmButton: false,
                timer: 2500
              })
        }
        if(rand===3){
            Swal.fire({
                position: 'center',
                type: 'success',
                title: 'Sua frase pode não ser uma afirmação?',
                showConfirmButton: false,
                timer: 2500
              })
        }
        if(rand===4){
            Swal.fire({
                position: 'center',
                type: 'info',
                title: 'Sua frase pode não ser uma informação?',
                showConfirmButton: false,
                timer: 2500
              })
        }
        if(rand===5){
            Swal.fire({
                position: 'center',
                type: 'error',
                title: 'Sua frase pode não ser uma negação?',
                showConfirmButton: false,
                timer: 2500
              })
        }
        document.getElementById("input").value = "";
    }else{

        const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 1000
          })

        Toast.fire({
            type: 'error',
            title: 'Digita ai burrao'
          })
        document.getElementById("input").focus(); 
    }
    


}