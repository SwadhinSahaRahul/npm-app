const _ = require('lodash');

export function shadowMaker(options) {
    let images = document.querySelectorAll('.shadow-maker');

    if (options.shadow_type === 'hard')
        options.shadow_type = '0px';
    else
        options.shadow_type = '15px';

    _.each(images, (image) => {
        image.style.boxShadow = `10px 10px ${options.shadow_type} 1px rgb(0, 0, 0, 0.12)`;
        if (options.padding) {
            image.style.padding = '1em'
        }
    })

}

export default shadowMaker();