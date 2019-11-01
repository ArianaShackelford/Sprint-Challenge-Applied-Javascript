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
let images = ['./assets/carousel/mountains.jpeg', './assets/carousel/computer.jpeg', './assets/carousel/trees.jpeg',' ./assets/carousel/turntable.jpeg']

let displayImg = 0;

const carouselCont = document.querySelector('.carousel-container');


carouselCont.append(createCarousel())
const carouselImg = document.querySelector('.carousel-container .carousel img')
console.log('img',carouselImg)



function createCarousel(){

  const carousel = document.createElement('div');
  const leftBtn = document.createElement('div');
  const img1 = document.createElement('img');
  const rightBtn = document.createElement('div');

  // append

  carousel.append(leftBtn,img1, rightBtn)

  //classes
  carousel.classList.add('carousel');
  leftBtn.classList.add('left-button');
  rightBtn.classList.add('right-button');
  

  //content
  leftBtn.textContent = '<';
  img1.setAttribute('src', images[displayImg]);
  rightBtn.textContent = '>';


  //events

  leftBtn.addEventListener('click', () =>{
    if (displayImg > 0){
      img1.classList.toggle('left-ani')
      displayImg--
      setTimeout(() => {
        img1.classList.toggle('left-ani')
        img1.src = images[displayImg]
        console.log('left clicked', displayImg)
      }, 2000)
    } else {
      img1.classList.toggle('left-ani')
      displayImg = images.length - 1
      setTimeout(() => {
        img1.classList.toggle('left-ani')
        img1.src = images[displayImg]
        console.log('left else clicked', displayImg)
      }, 2000)
    }
  })

  rightBtn.addEventListener('click', () =>{
    if (displayImg < images.length -1){
      img1.classList.toggle('right-ani')
      displayImg++
      setTimeout(() => {
        img1.classList.toggle('right-ani')
        img1.src = images[displayImg]
        console.log('right clicked', displayImg)
      }, 500)
    } else {
      img1.classList.toggle('right-ani')
      displayImg = 0
      setTimeout(() => {
        img1.classList.toggle('right-ani')
        img1.src = images[displayImg]
        console.log('right clicked else', displayImg)
      }, 500)
    }
  })
  console.log(carousel)
  return carousel;
}

console.log('images array',images);
