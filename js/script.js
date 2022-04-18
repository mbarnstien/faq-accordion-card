document.querySelectorAll('.accordion-h').forEach((item) => {
    item.addEventListener('click', event => {
        console.log('click!');
        let accCollapse = item.nextElementSibling;

        if (!item.classList.contains('open')) {

            accCollapse.style.display = 'block';
            let accHeight = accCollapse.clientHeight;

            setTimeout(() => {
                accCollapse.style.height = accHeight + 'px';
                accCollapse.style.display = '';
            }, 1);

            accCollapse.classList = 'accordion-collapse collapsing';

            setTimeout(() => {
                accCollapse.classList = 'accordion-collapse collapse open';
                accCollapse.style.height = '';
            }, 300);
        } else {

            accCollapse.classList = 'accordion-collapse collapsing';

            setTimeout(() => {
                accCollapse.style.height = '0px';
            }, 1);

            setTimeout(() => {
                accCollapse.classList = 'accordion-collapse collapse';
                accCollapse.style.height = '';
            }, 300);            
        }

        item.classList.toggle('open');
    });
});