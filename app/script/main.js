class Crop {
  constructor(options) {
    this.image = new Image()
    this.canvas = document.createElement('canvas')
    this.options = options
    this.src = null
  }
  LoadImage() {
    this.image.crossOrigin = "anonymous"
    this.image.src = this.options.src
    return new Promise((resolve, reject) => {
      this.image.onload = () => {
        resolve()
      }
    })
  }
  async CanvasCrop() {
    await this.LoadImage()
    this.canvas.width = this.options.width
    this.canvas.height = this.options.height
    let ctx = this.canvas.getContext("2d")
    ctx.drawImage(this.image, this.options.x, this.options.y, this.options.width, this.options.height, 0, 0, this.options.width, this.options.height)
    return this.canvas.toDataURL("image/png")
  }
}
window.BeeCrop = (options) => {
  return new Crop(options).CanvasCrop()
}
