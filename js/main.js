const heading = document.querySelector('.jump');

// const spans = spansWrap(heading.textContent)

// console.log(spans);

heading.innerHTML= spansWrap(heading.textContent)

function spansWrap(word){
    return[...word].map(letter => `<span>${letter}</span>`).join(' ');
}
alert('Please Hover Text or Content')