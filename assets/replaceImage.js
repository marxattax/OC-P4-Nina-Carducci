function replaceImage (folder) {
    const collectImages = document.querySelectorAll(folder + " img")
    for(const image of collectImages) {
        const src = image.src
        image.attributes.removeNamedItem("src")
        image.src = src + "-medium.webp"
    }
}

replaceImage(".gallery")
replaceImage(".carousel-inner")
replaceImage(".picture-left")
replaceImage("#contact")