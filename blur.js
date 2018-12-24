function blurLoadImage() {

    $('[data-large]').each(function(index, el) {
        var elementTag = $(el).prop("tagName").toLowerCase();
        var elementLargeImage = $(el).data('large');

        var image = new Image();
        image.src = elementLargeImage;

        waitForImageToLoad(image).then(() => {
            if (elementTag == "div") {
                $(el).attr('style', 'background-image: url("'+ elementLargeImage +'");');
            }
            else if (elementTag == "img") {
                $(el).attr("src", elementLargeImage);
            }
        });
    });
};

function waitForImageToLoad(imageElement){
    return new Promise(resolve => {
            imageElement.onload = resolve
    })
}
