$(document).ready(function(){
let url = window.location.href;      
let getLink = function getLink(parameter) {
    let pageHref = window.location.search.substring(1).toLowerCase(),
        urlVariables = pageHref.split('&'),
        name,
        i;

    for (i = 0; i < urlVariables.length; i++) {
        name = urlVariables[i].split('=');
        if (name[0] === parameter) {
            return name[1] === undefined ? true : decodeURIComponent(name[1]);
        }
    }
};

    let catId = getLink('catid');
    let catName = getLink('catname');
    let searchText = getLink('searchtext');
   
    let currentPage = $('.next-current').text();
    let nextPage = parseInt(getLink('page'));
    let requestUrl = 'https://www.aliexpress.com/glosearch/api/product?CatId=' + catId + '&SearchText=' + searchText + '&catName=' + catName + 'SortType=default&page=' + nextPage + '&isrefine=y&';


    $.ajax({
        url: requestUrl,
        type: 'GET',
        dataType:"JSON",
        success: function(data) {

           console.log(data)
           
            nextPage++;
       
       
       },
        error: function(error) {
            console.log("Error ", error);
        }
    });
})
