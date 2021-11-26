console.log('Hello world')

const loadwebp = ()=>{
    //550 X 368
    const image = new Image()
    image.src = "1.webp"
    image.onload = function() {
        console.log(this)
        const canvas = document.getElementById("webgppreview")
        canvas.width = 550
        canvas.height = 368
        const ctx = canvas.getContext('2d')
        
        ctx.drawImage(image, 0, 0)
        //https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas
        console.log(ctx.getImageData(100, 100, 1, 1))
    }
}

loadwebp()