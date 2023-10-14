//function changeColor(){
 //   pixelBox.style.backgroundColor = 'black'
//}

//this function clears the screen
function eraseScreen(){
    const screenContainerDelete = document.querySelector('.screenContainer');
    const body = document.querySelector('body')
    body.removeChild(screenContainerDelete)
}

//this function remakes the screen
function createScreen(){
    const body = document.querySelector('body')
    const screenContainerMake = document.createElement('div')
    screenContainerMake.classList.add('screenContainer')
    body.appendChild(screenContainerMake)
}

//this function clears and remakes the screen
function eraseFunction(){
    eraseScreen();
    createScreen();
};

//this function is for the button that triggers the resolution resize. it takes the height and puts that many pixelBox divs into a verticleBar div. Then takes the width and creates that many verticleBar divs.
function resolutionButtonFunction() {
    //first it clears the screen
    eraseFunction();

    //defines the dom objects and grabs user input for screen size
    const userWidth = document.querySelector('#userWidth').value;
    const userHeight = document.querySelector('#userHeight').value;
    const screenContainer = document.querySelector('.screenContainer');
    const x = userWidth
    const y = userHeight
        
    //this for loop creates all the verticleBars and the for loop inside of it creates the pixelBoxs inside of the verticleBars
    for (let i = 0; i < x; i++){

        //first it makes a verticleBar
        const verticleBars = document.createElement('div');
        verticleBars.classList.add('verticleBars')
        screenContainer.appendChild(verticleBars);
            //then it fills the verticleBar
            for (let i = 0; i < y; i++){
                const pixelBox = document.createElement('div');
            pixelBox.classList.add('pixelBox');
            verticleBars.appendChild(pixelBox);
            const colorCheck = document.querySelector('#randomColors').checked
            const gradientCheck = document.querySelector('#gradient').checked
            if(true == Boolean(colorCheck)){
                //var myColor = "'" + "rgba" + "(" + Math.random()*255 + "," + Math.random()*255 + "," + Math.random()*255 + "," + Math.random() + ")" + "'"
            //console.log(myColor)
                pixelBox.addEventListener('mouseenter', () => {
                    pixelBox.style.backgroundColor = 'red'                  
                });
            }
            else {
                pixelBox.addEventListener('mouseenter', () => {
                    pixelBox.style.backgroundColor = 'black'
                    
                });
            }
            if(true == Boolean(gradientCheck)){
                pixelBox.addEventListener('mouseenter', () => {
                    pixelBox.style.opacity = '.75'
                    
                });
            }            

            };
        };

        
}

resolutionButtonFunction();

//defining the resolution button and adds an event listener
const resolutionButton = document.querySelector('#resolutionButton');
resolutionButton.addEventListener('click', resolutionButtonFunction);

