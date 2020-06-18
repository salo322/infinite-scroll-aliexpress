$(document).ready(function(){

       
let url = function url() {
    let pageHref = window.location.search.substring(1).toLowerCase(),
        urlVariables = pageHref.split('&'),
        name,
        i;

    for (i = 0; i < urlVariables.length; i++) {
        name = urlVariables[i].split('=');
    }
};
    let catId = url('catid');
    let catName = url('catname');
    let searchText = url('searchtext')
    let currentPage = $('.next-current').text();
    let nextPage = parseInt(url('page'));
    let requestUrl = 'https://www.aliexpress.com/glosearch/api/product?CatId=' + catId + '&SearchText=' + searchText + '&catName=' + catName + 'SortType=default&page=' + nextPage + '&isrefine=y&';


    $.ajax({
        url: requestUrl,
        type: 'GET',
        dataType:"JSON",
        success: function(data) {

           console.log(data)
            nextPage++;
       
       let items = data.items;
       console.log(items);
       $('ul.list-items').html( "" )
      
  
           

        },
        error: function(error) {
            console.log("Error ", error);
        }
    });
})
