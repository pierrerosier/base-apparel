document.querySelector('#check').addEventListener('click', () => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]{2,}\.[a-zA-Z]{2,4}$/;
    let mail_content = document.querySelector('#email').value;
    if( regex.test(mail_content) ) {
        alert("Check mail done\nWe'll contact you soon");
    }
    else {
        document.querySelector('#msg').classList.toggle('info__msg--error');
        document.querySelector('#img').classList.toggle('info__img--error');
    }
},false);