Add this code to the parent function in the script.js file



    window.onload = function() {
  
    let btn = document.createElement("button");

    btn.classList.add('product-color');

    btn.style.position = 'relative';

    btn.style.top = '2.5em'


    btn.innerHTML = "Placeholder";
    const product_div = document.querySelector(".product-color");

    product_div.appendChild(btn)

    btn.addEventListener('click', async function(){

      
      let iFrame = document.createElement("iframe");
      iFrame.src = `http://localhost:3355/demo.js?imageurl=${configuration.image}&attributes=${configuration.attributes}`;
      iFrame.style.width = "100%";
      iFrame.style.height = "100%";
      iFrame.style.border = "none";
      iFrame.style.position = "absolute";
      iFrame.style.top = "0";
      iFrame.style.left = "0";
      document.body.appendChild(iFrame);

     
     

    });
        }

