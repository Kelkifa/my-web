const e = require("express");

function storeImages(countImgLenght, count_img, image, compareV) {
    var img = [];
    if (countImgLenght == 1 && image != '') {
        if (typeof image == 'object') {
            img.push(image.shift());
        } else {
            img.push(image);
        }
    }
    else if (countImgLenght > 1) {
        count_img = Array.from(count_img);
        while (countImgLenght > 0 && count_img[0] == compareV) {
            var imageV = image.shift();
            if (imageV != '') {
                img.push(imageV);
            }
            count_img.shift();
            countImgLenght--;
        }
    }
    else {
        img = [];
    }
    return { img, countImgLenght, count_img };
}

function coreStoreCreateDocument(query, { MyDocumentModel, WebResearchModel }) {

    var countArr = Array.from(query.count_cp);
    var maxChildrenPart = countArr.length;
    countArr = Array.from(query.count_img);
    var imageArrLenght = countArr.length;
    var obj = {
        type: query.type,
        parent_part: {
            title: query.parent_part_title
        },
        children_parts: new Array()
    }
    var countImgLenght = imageArrLenght;
    if (maxChildrenPart == 1) {
        obj.children_parts.push(
            {
                title: query.children_part_title,
                index: 1,
                content: query.children_part_content,
                images: new Array()
            }
        );
        var { img, countImgLenght, count_img } = storeImages(countImgLenght, query.count_img, query.image, 0);
        query.count_img = count_img;
        obj.children_parts[0].images = img;
        return obj;
    }
    else if (maxChildrenPart > 1) {
        for (var i = 0; i < maxChildrenPart; i++) {
            obj.children_parts.push(
                {
                    title: query.children_part_title[i],
                    index: i + 1,
                    content: query.children_part_content[i],
                    images: new Array()
                }
            )
            var { img, countImgLenght, count_img } = storeImages(countImgLenght, query.count_img, query.image, i);
            query.count_img = count_img;
            obj.children_parts[i].images = img;
        }
        return obj;
    }
}

module.exports = coreStoreCreateDocument;