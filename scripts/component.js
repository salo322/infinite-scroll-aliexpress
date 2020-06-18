$(document).ready(function(){

       
let getUrl = function getUrl(sParam) {
    let sPageURL = window.location.search.substring(1)
        .toLowerCase(),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
    }
};
    let catId = getUrl('catid');
    let catName = getUrl('catname');
    let searchText = getUrl('searchtext')
    let currentPage = $('.next-current').text();
    let nextPage = parseInt(getUrl('page'));
    let newUrl = 'https://www.aliexpress.com/glosearch/api/product?CatId=' + catId + '&SearchText=' + searchText + '&catName=' + catName + 'SortType=default&page=' + nextPage + '&isrefine=y&';


    $.ajax({
        url: newUrl,
        type: 'GET',
        dataType:"JSON",
        success: function(data) {

           console.log(data)
            nextPage++;
       
       let items = data.items;
       console.log(items);
       chrome.runtime.sendMessage({greeting: "hello",success:items});
      

           

        },
        error: function(error) {
            console.log("Error ", error);
        }
    });
    
})
