if(typeof $j=="undefined"&&typeof jQuery!="undefined")var $j=jQuery.noConflict();$j("#nav .more a").live("click",function(){$j(this).siblings("ul").toggle("slide")}),$j("table.table tr.link").live("click",function(a){if($j(a.target).is("tr")||$j(a.target).is("td")||$j(a.target).is("div.bar"))window.location.href=$j(this).attr("data-link")}),$j("table.table input.checkbox.toggle").live("click",function(){var a=$j(this).is(":checked");$j("td.action.select input.checkbox[name='bulk_ids[]']").each(function(){$j(this).attr("checked",a),a?$j(this).parent().addClass("checked"):$j(this).parent().removeClass("checked")})})