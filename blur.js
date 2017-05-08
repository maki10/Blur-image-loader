function blurLoadImage() {

    $('[data-large]').each(function(index, el) {
        var elementTag = $(el).prop("tagName").toLowerCase();
        var elementLargeImage = $(el).data('large');

        var image = new Image();
        image.src = elementLargeImage;

        $(image).load(function() {
            if (elementTag == "div") {
                $(el).attr('style', 'background-image: url("'+ elementLargeImage +'");');
            }
            else if (elementTag == "img") {
                $(el).attr("src", elementLargeImage);
            }
        });

        if (image.complete) $(image).load();
    });
};
