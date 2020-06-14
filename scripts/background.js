    let catId = getUrlParameter('catid');
    let catName = getUrlParameter('catname');
    let currentPage = $('.next-current').text();
    let nextPage = parseInt(getUrlParameter('page'));
    let newUrl = 'https://www.aliexpress.com/glosearch/api/product?CatId=' + catId + '&SearchText=' + searchText + '&catName=' + catName + 'SortType=default&page=' + nextPage + '&isrefine=y&';


