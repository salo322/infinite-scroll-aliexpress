$(window).on('load', function() {
    let url = window.location.href;
    let ItemComps = function(productId, aliMemberId, productDetailUrl, imageUrl, title, storeUrl, storeName, price, bigSalePrice, logisticsDesc, algoExpId, tradeDesc) {
    let itemCode = "";
        itemCode = '<li class="list-item" hasctr="y"><div class="list product-card" style="" product-index="0" data-product-id="' + productId + '" category-id="" ali-member-id="' + aliMemberId + '" algo-exp-id="' + algoExpId +
                '"><div class="product-img"><a target="_blank" data-p4p="true" href="' +
                productDetailUrl +
                '"><img src="' + imageUrl + '" data-p4p="true" class="item-img" alt="' + title + '" width="220" height="220"></a><div class="report-btn-wrap"><span class="report-item" title="Report fraud item"></span></div><div class="atwl-btn-wrap"><a class="add-wishlist-btn" data-p4p="true"><i data-p4p="true" class="next-icon next-icon-favourite next-medium"></i></a></div></div><div class="product-info"><div class="left-zone"><div class="item-title-wrap"><a data-p4p="true" class="item-title" href="' + productDetailUrl + '" title="' + title + '" target="_blank">' + title +
                '</a></div><div class="item-sellpoint-wrap"><div class="feature-sell-point"></div></div><div class="item-store-wrap"><a class="store-name" href="' + storeUrl + '" title="' + storeName + '" target="_blank" data-spm-anchor-id="a2g0o.productlist.0.0">' + storeName + '</a></div></div><div class="right-zone"><div class="item-price-wrap"><div class="item-price-row"><span class="price-current">' + price + '</span></div><div class="item-price-row item-warm-up"><span class="product-tag graphic"><img src="//ae01.alicdn.com/kf/HTB1zyqEbyLrK1Rjy1zd761nnpXaP.png_220x220.png_.webp" data-p4p="true" class="item-img" width="49.14285714285714" height="16px"></span><span class="price-big-sale">' + bigSalePrice + '</span></div></div><div class="item-shipping-wrap"><span class="shipping-value">' + logisticsDesc + '</span></div><div class="item-sale-wrap"><div class="sale-info without-star"><span class="sale-value"> <a data-p4p="true" rel="nofollow" class="sale-value-link" href="' + productDetailUrl + '#thf" target="_blank">' + tradeDesc + '</a> </span></div></div></div></div></div></li>';
        itemCode = '<li class="list-item" hasctr="y"><div class="list product-card" style="" product-index="0" data-product-id="' + productId + '" category-id="" ali-member-id="' + aliMemberId + '" algo-exp-id="' + algoExpId + '"><div class="product-img"><a target="_blank" data-p4p="true" href="' + productDetailUrl + '" data-spm-anchor-id="a2g0o.productlist.0.0"><img src="' + imageUrl + '" data-p4p="true" class="item-img" alt="' + title + '" width="220" height="220" data-spm-anchor-id="a2g0o.productlist.0.i46.27feabbf8XseAm"></a><div class="report-btn-wrap"><span class="report-item" title="Report fraud item"></span></div><div class="atwl-btn-wrap"><a class="add-wishlist-btn" data-p4p="true"><i data-p4p="true" class="next-icon next-icon-favourite next-medium"></i></a></div></div><div class="product-info"><div class="left-zone"><div class="item-title-wrap"><a data-p4p="true" class="item-title" href="' + productDetailUrl + '" title="' + title + '" target="_blank">' + title + '</a></div><div class="item-sellpoint-wrap"><div class="feature-sell-point"></div></div><div class="item-store-wrap"><a class="store-name" href="' + storeUrl + '" title="' + storeName + '" target="_blank" data-spm-anchor-id="a2g0o.productlist.0.0">' + storeName + '</a></div></div><div class="right-zone"><div class="item-price-wrap"><div class="item-price-row"><span class="price-current">' + price + '</span></div><div class="item-price-row item-warm-up"><span class="product-tag graphic"><img src="//ae01.alicdn.com/kf/HTB1zyqEbyLrK1Rjy1zd761nnpXaP.png_220x220.png_.webp" data-p4p="true" class="item-img" width="49.14285714285714" height="16px"></span><span class="price-big-sale">' + bigSalePrice + '</span></div></div><div class="item-shipping-wrap"><span class="shipping-value">' + logisticsDesc + '</span></div><div class="item-sale-wrap"><div class="sale-info without-star"><span class="sale-value"> <a data-p4p="true" rel="nofollow" class="sale-value-link" href="' + productDetailUrl + '#thf" target="_blank">64 Sold</a> </span></div></div></div></div></div></li>';
           return itemCode;
    }
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
                let currentPage = Number( $('.next-current').text());
                console.log(currentPage)
                let nextPage = Number(currentPage+1);
                console.log(nextPage)
               

                let requestUrl = 'https://www.aliexpress.com/glosearch/api/product?CatId=' + catId + '&SearchText=' + searchText + '&catName=' + catName + 'SortType=default&page=' + nextPage + '&isrefine=y&';
               
               
            
                 

                
                            let total =  $('.jump-aera, .total-page').text().match(/\d+/)
                            let totalnum = Number(total[0]);
                                   
                            
                            let arr = new Array(totalnum).fill("").map((_, nextPage) => nextPage + 1);
                            arr.forEach(() =>
                            $.ajax({
                                url: requestUrl,
                                type: 'GET',
                                dataType:"JSON",
                                success: $.getJSON( requestUrl, function( data ) {
                                     
                                let items = data.items;
                                nextPage++;
                                console.log(items)
                                                        
                             
                                $(items).each(function(index, item) {
                                    $('ul.list-items').append(ItemComps(item.productId, item.store.storeId, item.productDetailUrl, item.imageUrl, item.title, item.store.storeUrl, item.store.storeName, item.price, item.bigSalePrice, item.logisticsDesc, item.traceInfo.algo_expid, item.tradeDesc));
                                   
                                });
                            
                                 }),
                                
            
                                error: function(error) {
                                    console.log("Error ", error);
                                    chrome.tabs.create({ url: requestUrl});
                                }
                             
                            }) );
                            

                        });
                            
                        
                               
                        
                
                       
        
    
    

