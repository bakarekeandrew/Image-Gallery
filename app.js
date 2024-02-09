const image = document.querySelector('.image');
const bigImage = document.querySelector('.big-image');
const commonClass = document.querySelector('.common-class');
const imageClass = document.querySelector('.image-class');  
// const img = document.querySelector('img');

let loopedImage;
        
document.querySelectorAll('img').forEach(image => {
    image.addEventListener('click', function() {
        loopedImage = image.src;
        addElement();
    });
    
});


    
 const addElement = () => {
        document.querySelectorAll('.big-image').forEach(el => el.remove());

        let div1 = document.createElement('div');
        div1.classList.add('big-image');


        let div2 = document.createElement('div');
        div2.classList.add('insert-big-image');
        div1.appendChild(div2);
        div2.innerHTML = `
        <img class="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAARlJREFUSEvt1M8qxUEYxvHP2SrZEMpCUlyD/Cls5TZkq9yJzsZKuQG5AmSFbP3JmiVX4PfWqF/6nZlx6mRzZjm98zzv8513pmfEqzdifWODIuF/R3SMM7wPaHUFGzgdFCWX4BAneMFmh8kyrjGHfVx0meQM4mAIhNBr6vQnyRJuMYtHbOHrrwZR32UyUSseAjWXPI+rlOQJU8n4vkm4g8/cKNUYxPmFhGsxiWWxtA1rDYJ1MA/2sR6aVNul7msRhfhNQvScEMXeXbO/WzIpJWh3/oY1TLbGs5gkZ9Al/pEQxegGspkSrpzBQTPnfQSWmPPfr3k1JZnGHi6HeQdHOM98FWGyPuxXUfwpawpKl1yjka0ZGxQRjhzRNxi0NBmpupZSAAAAAElFTkSuQmCC"/>
        <img src="${loopedImage}" class="common-class">
        
        `;
        
        let icon = div2.querySelector('.icon');
        icon.addEventListener('click', function() {
            div1.remove(); 
        });


 
   

        document.body.appendChild(div1);
           
    }; 
    
    // let makeBlu = addElement();
    // if(makeBlu) {
    //     imageClass.style.backgroundColor = 'blu';
    // }


