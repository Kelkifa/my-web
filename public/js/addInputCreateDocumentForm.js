var submitBtn = $('#button-create-document');

//hide delete and update icon
$('.icon-btn-container').hide();

/** Main function */
$(document).ready(function (e) {

    addChildrenIcon();
    toolbarInit($('.children-parts .form-group'));

    // submit form delete document 
    $('.delete-document-btn').click(function (e) {
        e.preventDefault();
        console.log($(this).find('form'));
    });
    $('.btn-type-container').mouseover(function () {
        $(this).find('.icon-btn-container').show();
    });
    $('.btn-type-container').mouseout(function () {
        $(this).find('.icon-btn-container').hide();
    });
    $('.js-delete-document-button').click(function () {
        $(this).parent().submit();
    })

});




/** tool bar process */
function toolbarInit(fg_element) {  //tham số là 1 element có class form-group
    /** Lấy index của children-parts */
    var index = fg_element.parent().attr('index');
    index = parseInt(index);
    /** Nhấn vào các nút trong tool bar */
    fg_element.find('.add-p').click(function () {  // nếu click vào class add-p thì thêm form group input textarea
        $(this).parents('.form-group').after(
            `
                <div class="form-group">
                    <label for="children-part-content">Children Part Content</label>
                    <textarea name="children_part_content[${index}][]" type="text" class="form-control"
                        placeholder="Enter children part content"></textarea>
                    <input hidden name="sort[${index}][]" value=0 type="text">
                    <div class="tool-a-e">
                        <div class="icons-container">
                            <div class="icon-container">
                                <i style="font-size:15px" class="fa plus add-p">&#xf196;</i>
                            </div>
                            <div class="icon-container" checkpoint="aic">
                                <i style="font-size:15px" class="fa add-img">&#xf03e;</i>
                            </div>
                            <div class="icon-container">
                                <i style="font-size:15px" class="fa sub">&#xf068;</i>
                            </div>
                        </div>
                    </div>
                </div>
            `
        );
        // GỌi hàm để thêm sub btn nếu số các form-group == 3
        addSubBtn($(this).parents('.children-parts'));
        // Gọi lại hàm để các event click cho các nút nhân mới thêm
        toolbarInit($(this).parents('.form-group').next());
    });
    fg_element.find('.add-img').click(function () { // Nhấn vào nút add-img
        $(this).parents('.form-group').after(
            `
                <div class="form-group">
                    <label>Image Links</label>
                    <input name="children_part_content[${index}][]" autocomplete="off" type="text" class="form-control"
                        placeholder="Enter image link">
                    <input hidden name="sort[${index}][]" value=1 type="text">
                    <div class="tool-a-e">
                        <div class="icons-container">
                            <div class="icon-container">
                                <i style="font-size:15px" class="fa plus add-p">&#xf196;</i>
                            </div>
                            <div class="icon-container" checkpoint="aic">
                                <i style="font-size:15px" class="fa add-img">&#xf03e;</i>
                            </div>
                            <div class="icon-container">
                                <i style="font-size:15px" class="fa sub">&#xf068;</i>
                            </div>
                        </div>
                    </div>
                </div>
            `
        );
        // GỌi hàm để thêm sub btn nếu số các form-group == 3
        addSubBtn($(this).parents('.children-parts'));
        // Gọi lại hàm để các event click cho các nút nhân mới thêm
        toolbarInit($(this).parents('.form-group').next());
    });
    fg_element.find('.sub').click(function () {     // nhấn vào nút sub
        var elementCache = $(this).parents('.children-parts');
        $(this).parents('.form-group').remove();
        removeSubBtn(elementCache);
    });

}

// Thêm hoặc bỏ btn sub của toolbar
function addSubBtn(cps_element) {      // Thêm, tham số truyền vào là 1 children parts element
    if (cps_element.find('.form-group').length == 3) {
        cps_element.find('.icons-container').each(function (index, ele) {
            if ($(ele).find('.icon-container[checkpoint=aic]').next().length == 0) {
                if ($(ele).parents('.form-group').attr('default') != 'true') {
                    $(ele).append(
                        `
                        <div class="icon-container">
                            <i style="font-size:15px" class="fa sub">&#xf068;</i>
                        </div>
                        `
                    );
                    $(ele).find('.sub').click(function () {
                        $(this).parents('.form-group').remove();
                    })
                }
            }
        });
    }
}
function removeSubBtn(cps_element) {   // Bỏ, tham số truyền vào là 1 children parts element
    if (cps_element.find('.form-group').length == 2) {
        cps_element.find('.icons-container').each(function (index, ele) {
            if ($(ele).find('.icon-container[checkpoint=aic]').next().length > 0) {
                $(ele).find('.icon-container[checkpoint=aic]').next().remove();
            }
        });
    }
}



/** Add icon thêm children part và thêm nôi dung cho children part */

function addChildrenIcon() {
    submitBtn.before(
        `
            <div class="icon-create-documenet js-icon">
                <i style="font-size:24px" class="fa js-btn-c-d">&#xf0fe;</i>
            </div>
        `
    );
    $('.js-btn-c-d').click(function () {
        $('.js-btn-c-d').off();
        $('.js-icon').remove();
        addChildrenPartFrom();
        addChildrenIcon();
    });
}

function addChildrenPartFrom() {
    var index = submitBtn.prev().attr('index');
    index = parseInt(index, 10) + 1;
    submitBtn.before(
        `
            <div class="children-parts" index=${index}>
                <div class="form-group" default=true>
                    <label for="ad-myDocument-myDocument">Children Part Title</label>
                    <input name="children_part_title[]" default="true" autocomplete="off" type="text"
                        class="form-control" placeholder="Enter Children Part Pitle">
                    <input hidden type="text" >
                    <div class="tool-a-e">
                        <div class="icons-container">
                            <div class="icon-container">
                                <i style="font-size:15px" class="fa plus add-p">&#xf196;</i>
                            </div>
                            <div class="icon-container" checkpoint="aic">
                                <i style="font-size:15px" class="fa add-img">&#xf03e;</i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="children-part-content">Children Part Content</label>
                    <textarea name="children_part_content[${index}][]" type="text" class="form-control"
                        placeholder="Enter children part content"></textarea>
                    <input hidden name="sort[${index}][]" value=0 type="text">
                    <div class="tool-a-e">
                        <div class="icons-container">
                            <div class="icon-container">
                                <i style="font-size:15px" class="fa plus add-p">&#xf196;</i>
                            </div>
                            <div class="icon-container" checkpoint="aic">
                                <i style="font-size:15px" class="fa add-img">&#xf03e;</i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    );
    // Thêm event click cho các btn ở toolbar
    toolbarInit(submitBtn.prev().find('.form-group'));
}