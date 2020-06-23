$(window).on('load', function() {

    var URL = (location.href)
    .toString()
    .toLocaleLowerCase();
     
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
       
        let currentPage = Number($('.next-current').text());
        console.log(currentPage)
        let total =  $('.jump-aera, .total-page').text().match(/\d+/)
        let totalnum = Number(total[0]);
        console.log(totalnum)
        let nextPage = Number(currentPage+1);
        console.log(nextPage)
        let requestUrl = 'https://www.aliexpress.com/glosearch/api/product?CatId=' + catId + '&SearchText=' + searchText + '&catName=' + catName + 'SortType=default&page=' + nextPage + '&isrefine=y&';
    
    
    
                $.ajax({
                    url: requestUrl,
                    type: 'GET',
                    dataType:"JSON",
                    success: $.getJSON( requestUrl, function( data ) {
                        
                    let items = data.items;
                    console.log(items)
                   

                    }),
                  
                   
                  
                  
                    error: function(error) {
                        console.log("Error ", error);
                    }
                 
                });   
         
               

        })


/*  setTimeout(function(){
            const array1 = [ 4, 9, 16];
            const map1 = array1.map(()=> { */

           



















