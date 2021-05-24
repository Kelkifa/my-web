function coreStoreCreateDocument(query, MyDocumentModel, WebResearchModel) {
    /**sort[cps][]  0: p, 1: img        //thứ tự của image và text
     * children_part_content[cps][]  // Nội dung
     * parent_part_title            //title parent_part 
     * children_part_title[]        //title 1,2,3,... nhỏ
    */
    // var children_part_title = Array.from(query.children_part_title);

    var cpCount = query.children_part_title.length;

    var obj = {
        type: query.type,
        parent_part: { title: query.parent_part_title },
        children_parts: new Array()
    }

    for (var i = 0; i < cpCount; i++) {
        obj.children_parts.push(
            {
                content: query.children_part_content[i],
                title: query.children_part_title[i],
                index: i + 1,
                sort: query.sort[i]
            }
        )
    }
    return obj;
}

module.exports = coreStoreCreateDocument;