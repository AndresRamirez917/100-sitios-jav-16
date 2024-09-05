async function getData(){
    const result = await fetch('https://fakestoreapi.com/products/');
    const products = await result.json();
    const testimonials = ["testimonial-left", "testimonial-rigth", ""]
    products.forEach(element => {
        for(i = 0; i < testimonials.length; i++){
            if(element.id == i){
                const card = document.createRange().createContextualFragment(`
                    
                    <div class="${testimonials[i-1]}">
                        <p>${element.description}</p>
                        <h3>${element.title}</h3>
                    </div>
                    
                    `)
                    const testimonial_row = document.querySelector('.testimonial-row')
                    testimonial_row.append(card)
            }
        }

        function randomIntFromInterval(min, max) { // min and max included 
            return Math.floor(Math.random() * (max - min + 1) + min);
          }
          
          const rndInt = randomIntFromInterval(1, testimonials.length);
          console.log(rndInt);
    });
}

const btn_validar = document.getElementById('btn-validar')
const validar = (e) => {
    e.preventDefault()
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const mensaje = document.getElementById('mensaje');
    const arr = [];
    arr.push(nombre, email, mensaje);
    const arrTitles = ["Nombre", "Email", "Mensaje"];
    for(i = 0; i < arr.length; i++){
        if(arr[i].value == ""){    
            swal({
                title: `El campo ${arrTitles[i]} no puede estar vacío`,
                icon: "error",
            })
        return false;
        }
        
    }
    if(!emailValido(email.value)){
        swal({
            title: `El campo ${arrTitles[1]} no tiene el formato correcto`,
            icon: "error",
        })
        return false;
    }
    swal({
        title: `Los campos fueron enviados satisfactoriamente`,
        icon: "success",
    })
    nombre.value = "";
    email.value = "";
    mensaje.value = "";
    return true;
}

const emailValido = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}


btn_validar.addEventListener("click", validar)
getData()