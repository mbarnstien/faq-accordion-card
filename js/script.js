document.querySelectorAll('.accordion-h').forEach((item) => {
    item.addEventListener('click', event => {
        console.log('click!');
        item.classList.toggle('open');

        //Add 'collapsing' class to .accordion-collapse (sibling)

        //remove collapsing class and add 'open' class
        
        item.nextElementSibling.classList.toggle('open');
    });
});