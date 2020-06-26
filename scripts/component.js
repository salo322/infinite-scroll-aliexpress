$(window).on('load', function(e) {
    let getlink = function getlink(sParam) {
    let pageURL = window.location.search.substring(1)
         .toLowerCase(),
         variables= pageURL.split('&'),
         name,
         i;
      for (i = 0; i < variables.length; i++) {
         name = variables[i].split('=');
        if (name[0] === sParam) {
             return name[1] === undefined ? true : decodeURIComponent(name[1]);
         }
     }
 };
             let overed = 0;
             var searchText = getlink('searchtext');
             let catId = getlink('catid');
             let catName = getlink('catname');
             let nextPage = parseInt(getlink('page'));
             (nextPage) ? nextPage++ : nextPage = 2;

     let point = 0;
    $(window).scroll(function(event) {
     let height = $(document).height();
     let scroll = $(window).scrollTop();
        if (point == 1) {
           setTimeout(function() {
               point = 0;
                 }, 2000);  }
       if (point == 0 && overed == 0) {
       if (scroll > 0.6 * height) {
                 point = 1;
let requestUrl = 'https://www.aliexpress.com/glosearch/api/product?CatId=' + catId + '&SearchText=' + searchText + '&catName=' + catName + 'SortType=default&page=' + nextPage + '&isrefine=y&';
let components = function(productId, aliMemberId, productDetailUrl, imageUrl, title, storeUrl, storeName, price, bigSalePrice, logisticsDesc, algoExpId, tradeDesc) {
    let itemComponents = "";
        itemComponents = '<li class="list-item" hasctr="y"><div class="list product-card" style="" product-index="0" data-product-id="' + productId + '" category-id="" ali-member-id="' + aliMemberId + '" algo-exp-id="' + algoExpId +
             '"><div class="product-img"><a target="_blank" data-p4p="true" href="' + productDetailUrl +'"><img src="' + imageUrl + '" data-p4p="true" class="item-img" alt="' + title + '" width="220" height="220"></a><div class="report-btn-wrap"><span class="report-item" title="Report fraud item"></span></div><div class="atwl-btn-wrap"><a class="add-wishlist-btn" data-p4p="true"><i data-p4p="true" class="next-icon next-icon-favourite next-medium"></i></a></div></div><div class="product-info"><div class="left-zone"><div class="item-title-wrap"><a data-p4p="true" class="item-title" href="' + productDetailUrl + '" title="' + title + '" target="_blank">' + title +
             '</a></div><div class="item-sellpoint-wrap"><div class="feature-sell-point"></div></div><div class="item-store-wrap"><a class="store-name" href="' + storeUrl + '" title="' + storeName + '" target="_blank" data-spm-anchor-id="a2g0o.productlist.0.0">' + storeName + '</a></div></div><div class="right-zone"><div class="item-price-wrap"><div class="item-price-row"><span class="price-current">' + price + '</span></div><div class="item-price-row item-warm-up"><span class="product-tag graphic"><img src="//ae01.alicdn.com/kf/HTB1zyqEbyLrK1Rjy1zd761nnpXaP.png_220x220.png_.webp" data-p4p="true" class="item-img" width="49.14285714285714" height="16px"></span><span class="price-big-sale">' + bigSalePrice + '</span></div></div><div class="item-shipping-wrap"><span class="shipping-value">' + logisticsDesc + '</span></div><div class="item-sale-wrap"><div class="sale-info without-star"><span class="sale-value"> <a data-p4p="true" rel="nofollow" class="sale-value-link" href="' + productDetailUrl + '#thf" target="_blank">' + tradeDesc + '</a> </span></div></div></div></div></div></li>';
     return itemComponents;
   }
                                   $.ajax({
                                     url: requestUrl,
                                     type: 'GET',
                                     dataType: 'JSON',
                                     success: function(data) {
                                     nextPage++;
                                 let allitems = data;
                                 if (allitems) { 
                                 let listItems = allitems.items;

                                 for (let i = 0; i < listItems.length; i++) {
                                      let item = listItems[i];
                                  $('ul.list-items').append(components(item.productId, item.store.storeId, item.productDetailUrl, item.imageUrl, item.title, item.store.storeUrl, item.store.storeName, item.price, item.bigSalePrice, item.logisticsDesc, item.traceInfo.algo_expid, item.tradeDesc));
                                             }

                                      let lastPage = parseInt($('.total-page').text().match(/\d+/));
                                         if (nextPage == lastPage - 1) {
                                                 overed = 1;
                                         }
                                         } },
                                     error: function(error) {
                                         console.log("Error ", error);
                                         chrome.runtime.sendMessage({greeting: "hello", url:requestUrl});
                                     }
                                 });
                             }
                         }
                     });
                 });