/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
const images = ['/assets/carousel/mountains.jpeg', '/assets/carousel/computer.jpeg', '/assets/carousel/trees.jpeg',' /assets/carousel/turntable.jpeg']

const carouselCont = document.querySelector('.carousel-container');
// images.forEach(image => {
  const newCarousel = createCarousel(images)
  carouselCont.append(newCarousel);
  
// })

function createCarousel(images){

  const carousel = document.createElement('div');
  const leftBtn = document.createElement('div');
  const img1 = document.createElement('img');
  const img2 = document.createElement('img');
  const img3 = document.createElement('img');
  const img4 = document.createElement('img');
  const rightBtn = document.createElement('div');

  // append

  carousel.append(leftBtn,img1,img2,img3, img4, rightBtn)

  //classes
  carousel.classList.add('carousel');
  leftBtn.classList.add('left-button');
  rightBtn.classList.add('right-button');

  //content
  // leftBtn.textContent = '◀';
  img1.setAttribute('src', images[0]);
  img2.setAttribute('src', images[1]);
  img3.setAttribute('src', images[2]);
  img4.setAttribute('src', images[3]);
  // rightBtn.textContent = '▶';

  return carousel;
}

console.log('images array',images);