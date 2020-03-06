var count = 0;

document.querySelector('.count').textContent = (`${count}`);

const add = document.querySelector('.plus');
const sub = document.querySelector('.minus');
const display = document.querySelector('.count')

add.addEventListener('click', function(evt){
    newNum = parseInt(document.getElementById('number').value)
    count = count + newNum;
    document.querySelector('.count').textContent = (`${count}`);
    if (count < 0){
        display.style.color = 'red';
    }
    if (count >= 0){
        display.style.color = 'black';
    }

});

sub.addEventListener('click', function(evt){
    newNum = parseInt(document.getElementById('number').value)
    count = count - newNum;
    document.querySelector('.count').textContent = (`${count}`);
    if (count < 0){
        display.style.color = 'red';
    }
    if (count >= 0){
        display.style.color = 'black';
    }

    
})