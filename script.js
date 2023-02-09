const bar = document.getElementById('bar');
        const close = document.getElementById('close');
        const nav = document.getElementById('navbar');

        if (bar) {
            bar.addEventListener('click', () => {
                nav.classList.add('active');
            })
        }
        if (close) {
            close.addEventListener('click', () => {
                nav.classList.remove('active');
            })
        }


        var mainimage = document.getElementById("mainimage")
        var smallimage = document.getElementsByClassName("small-img")

        smallimage[0].onclick = function(){
            mainimage.src = smallimage[0].src;
        }
        smallimage[1].onclick = function(){
            mainimage.src = smallimage[1].src;
        }
        smallimage[2].onclick = function(){
            mainimage.src = smallimage[2].src;
        }
        smallimage[3].onclick = function(){
            mainimage.src = smallimage[3].src;
        }        