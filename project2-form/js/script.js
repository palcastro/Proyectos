//document.querySelector('.click').addEventListener('click' (),)
  //  document.querySelector('.banner').style.display= 'none';
    //document.querySelector('.form-container').style.cssText='opacity:1; visibility:visible';
    //document.querySelector('.container').style.background= '#cc683c';

//document.querySelector ('.button').addEventListener('click')
//document.querySelector('.banner').style.display ='flex' ;
//document.querySelector('.form-container').style.cssText= 'opacity'
//document.querySelector('.container').style.cssText = 'background:'


// click button will hide subscriber page
//  and  form will fade in

document.querySelector('.click').addEventListener('click', () => {
    //  want to hide banner sub page
    document.querySelector('.banner').style.display = 'none';
    // form will fade in
    // cssText allows us to change several css properties
    document.querySelector('.form-container').style.cssText = 'opacity: 1; visibility: visible;';
    document.querySelector('.container').style.background = '#cc683c';
});

// click X to close will hide form and display subscriber page
document.querySelector('.x-btn').addEventListener('click', () => {
    document.querySelector('.banner').style.display = 'flex';
    // form will fade in
    // cssText allows us to change several css properties
    document.querySelector('.form-container').style.cssText = 'opacity: 0; visibility: hidden;';
    document.querySelector('.container').style.cssText =
        'background: linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .7)), url(images/bg1.jpeg) center no-repeat;background-size: cover';
});