$(function () {
    $.ajax({
        url: "https://www.aliexpress.com/glosearch/api/product?CatId=",
        type: "post",
        dataType: "html",
        success: function (data) {
    let value  = $(data).find('.list-items');
          console.log(value);
        },
       
    });
});
