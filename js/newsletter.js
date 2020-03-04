


$("#emailcatcher").click(()=>{
    event.preventDefault(); 
    //console.log($("#cl_email").val())
    let dados = {
            Email : $("#email-input").val(),
            Nome : $("#name-input").val()
    }

    fetch("/api/dataentities/NL/documents", {
        method: 'PATCH',
               headers: {
                "Content-Type": "application/json"
                  },
        body: JSON.stringify(dados)
    })
    .then((res) => {return res})
    .then(result =>{
        console.log(result);
        alert("Inscrição concluída");
    })
    .catch(err => console.log(err))
})
    