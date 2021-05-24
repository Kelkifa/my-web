// effect cards
$('#add-card-container').toggle();

var flag = true;
var cardTransitionTime = 500;
var cardFace = 'f';
$('.btn-flip').click(function () {
    var cardName = $(this).attr('name');
    //clear the scroll
    // console.log($(this).hasClass('btn-fn'));
    if ($(this).hasClass('js-btn-fn')) {    //front card
        $(`.cardFront[name="${cardName}"] p`).css('overflow', 'hidden');
        $(`.cardFront[name="${cardName}"] h6`).css('overflow', 'hidden');
        $(`.cardBack[name="${cardName}"] p`).css('overflow', 'auto');
        cardFace = 'b';
    }
    else {               //back card
        $(`.cardFront[name="${cardName}"] p`).css('overflow', 'auto');
        $(`.cardFront[name="${cardName}"] h6`).css('overflow', 'auto');
        $(`.cardBack[name="${cardName}"] p`).css('overflow', 'hidden');
        cardFace = 'f';
    }
    $(`.cardFront[name="${cardName}"`).parent().toggleClass('switch');
    setTimeout(function () {
        //flip effect
        $(`.cardFront[name="${cardName}"`).parent().toggleClass('switch');
    }, cardTransitionTime / 2);
    //change card face
    $(`.cardBack[name="${cardName}"]`).toggleClass('notActive');
    $(`.cardBack[name="${cardName}"]`).toggleClass('isActive');
    $(`.cardFront[name="${cardName}"]`).toggleClass('isActive');
    $(`.cardFront[name="${cardName}"]`).toggleClass('notActive');
});

//add card


$('#add-card').click(function () {
    $('#add-card-container').toggle();
    if ($('#add-card-container').is(":visible")) {
        $('#add-card-container').mouseleave(function () {
            $('#add-card-container').hide();
        });
    }
});

$('#js-button-create-word a').click(function (e) {
    e.preventDefault();
    $('form[name="form-create-word"]').submit();
})

//update card
var clickFlag = 0;
var cardWidth = $('.card-container').css('width'); //px
cardWidth = cardWidth.replace('px', '');
$('.js-update-card-button').click(function () {
    var cardContainer = $(this).parents('.card-container');
    var updateCard = cardContainer.children('.update-card');
    if (clickFlag) {
        cardContainer.css('width', `${cardWidth}px`);
        updateCard.css('transform', 'rotateY(90deg)');
        updateCard.css('width', `${cardWidth}`);
        clickFlag = 0;
    }
    else {
        cardContainer.css('width', `${cardWidth * 2.5}px`);
        updateCard.css('width', `${cardWidth * 1.5}px`);
        updateCard.css('transform', 'rotateY(0deg) translateX(160px)');
        clickFlag = 1;

        var a = updateCard.children('#update-card-container');
        a.mouseleave(function () {
            cardContainer.css('width', `${cardWidth}px`);
            updateCard.css('transform', 'rotateY(90deg)');
            updateCard.css('width', `${cardWidth}`);
            clickFlag = 0;
        });
    }
});

$('#update-card-button a').click(function (e) {
    e.preventDefault();
    $(this).parents('form[name=updateword]').submit();
});

// delete card

$('.js-delete-card-button').click(function (e) {
    $(this).prev().submit();
});