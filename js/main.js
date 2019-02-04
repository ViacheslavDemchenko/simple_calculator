window.addEventListener('DOMContentLoaded', () => {

    ;(function () {

        let items = document.querySelectorAll('.item'),
            symbol = document.querySelectorAll('.symbol'),
            mc = document.getElementById('mc'),
            mr = document.getElementById('mr'),
            c = document.getElementById('c'),
            mPlus = document.getElementById('m+'),
            mMinus = document.getElementById('m-'),
            square = document.getElementById('square'),
            field = document.getElementById('field'),
            equal = document.getElementById('equally'),
            value = '',
            memory = 0,
            result = 0;

        c.addEventListener('click', () => {
    	    value = '';
            field.textContent = 0;
        });

        mc.addEventListener('click', () => {
            memory = 0;
        });

        mr.addEventListener('click', () => {
            field.textContent = parseInt(memory);
        });

        mPlus.addEventListener('click', () => {
            memory += parseInt(field.textContent);
        });

        mMinus.addEventListener('click', () => {
            memory -= parseInt(field.textContent);
        });

        square.addEventListener('click', () => {
            value = Math.sqrt(value) 
            field.textContent = value;
        });

        equal.addEventListener('click', () => {
    	    try {
        	    value = eval(value);
                field.textContent = value;
            }
            catch(error) {
                alert('Ошибка! Проверьте правильность выражения!');
            } 
        });

        function calc() {
    	    for (let i = 0; i < symbol.length; i++ ) {
    	        symbol[i].addEventListener('click', () => {
    	            value += symbol[i].textContent;
    	            field.textContent = value;
    	        });
            }
        } 
        calc();        
    })();
});
