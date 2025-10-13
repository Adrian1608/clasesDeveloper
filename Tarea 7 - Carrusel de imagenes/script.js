const carouselPicture = document.querySelector('.carousel-picture');
const imagesGallery = document.querySelectorAll('.gallery-picture');
let pictureIndex = 0;

imagesGallery.forEach((image,index) => image.addEventListener('click', function() {
    pictureIndex = index;
    setImageSourceTocarousel(index);
}));

//Go to previous picture in the carousel
function carouselPreviousPicture() {
    pictureIndex--;
    if(pictureIndex < 0) pictureIndex = imagesGallery.length-1;
    setImageSourceTocarousel(pictureIndex);
}

//Go to next picture in the carousel
function carouselNextPicture() {
    pictureIndex++;
    if(pictureIndex > imagesGallery.length-1) pictureIndex = 0;
    setImageSourceTocarousel(pictureIndex);
}

//Update carouselElement to current one, then update the carousel source
function setImageSourceTocarousel(index) {
    const newSource = imagesGallery[index].src;

    carouselPicture.classList.remove('active');
    setTimeout(() => {
        carouselPicture.src = newSource;
        carouselPicture.classList.add('active');
    },300);
}

//DEFAULT: carousel is set to the first image (0 is default value)
setImageSourceTocarousel(pictureIndex);