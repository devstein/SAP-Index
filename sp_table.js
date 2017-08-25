//parse xml document
function parseXML() {
     var jqxhr_characteristics = $.get('data/sp_characteristics.xml', function (data) {
          $data = $( data );
          var $stats = $data.find('CHARACTERISTICS');
          //get the day it is from
          var $last_updated = $data.find('SP_DATA');
          var table = "";
          table += "<h4 class='data-table-title'>S&amp;P 500/MarketAxess Investment Grade Corporate Bond Index</h4>";
          table += "<table class='xmltable' cellspacing='0' border='1'>";
          //TODO: make classes  
          //TODO: Add prefixes/suffixes ($, %, etc)
          // debugger
          var constituents = '<tr>' + '<td style="text-align: left;">' + 'Number of Constituents' +
           '</td>' + '<td style="text-align: right;">' + $stats.find('constituents')[0].innerHTML + '</td>' + '</tr>';
          table += constituents;  

          var total_par_value = '<tr>' + '<td style="text-align: left;">' + 'Total Par Value (USD Millions)' +
           '</td>' + '<td style="text-align: right;">' + $stats.find('total_par_value')[0].innerHTML + '</td>' + '</tr>';
          table += total_par_value;   

          var market_value_out = '<tr>' + '<td style="text-align: left;">' + 'Market Value Outstanding (USD Millions)' +
           '</td>' + '<td style="text-align: right;">' + $stats.find('market_value_out')[0].innerHTML + '</td>' + '</tr>';
          table += market_value_out;   

          var par_weighted_coupon = '<tr>' + '<td style="text-align: left;">' + 'Par Weighted Coupon' +
           '</td>' + '<td style="text-align: right;">' + $stats.find('par_weighted_coupon')[0].innerHTML + '%' +'</td>' + '</tr>';
          table += par_weighted_coupon;   

          var weighted_avg_maturity = '<tr>' + '<td style="text-align: left;">' + 'Weighted Avg. Maturity' +
           '</td>' + '<td style="text-align: right;">' + $stats.find('weighted_avg_maturity')[0].innerHTML + '</td>' + '</tr>';
          table += weighted_avg_maturity;   

          var par_weighted_price = '<tr>' + '<td style="text-align: left;">' + 'Par Weighted Price' +
           '</td>' + '<td style="text-align: right;">' + $stats.find('par_weighted_price')[0].innerHTML + '</td>' + '</tr>';
          table += par_weighted_price;   

          var yield_to_maturity = '<tr>' + '<td style="text-align: left;">' + 'Yield to Maturity' +
           '</td>' + '<td style="text-align: right;">' + $stats.find('yield_to_maturity')[0].innerHTML + '%' + '</td>' + '</tr>';
          table += yield_to_maturity;   

          var yield_to_worst = '<tr>' + '<td style="text-align: left;">' + 'Yield to Worst' +
            '</td>' + '<td style="text-align: right;">' + $stats.find('yield_to_worst')[0].innerHTML + '%' + '</td>' + '</tr>';
          table += yield_to_worst;   

          var tax_eq_yield = '<tr>' + '<td style="text-align: left;">' + 'Tax Equivalent Yield' +
           '</td>' + '<td style="text-align: right;">' + $stats.find('tax_eq_yield')[0].innerHTML + '</td>' + '</tr>';
          table += tax_eq_yield;   

          var oa_spread = '<tr>' + '<td style="text-align: left;">' + 'Option Adjusted Spread' +
           '</td>' + '<td style="text-align: right;">' + $stats.find('oa_spread')[0].innerHTML + '</td>' + '</tr>';
          table += oa_spread;

          var modified_duration = '<tr>' + '<td style="text-align: left;">' + 'Modified Duration' +
           '</td>' + '<td style="text-align: right;">' + $stats.find('modified_duration')[0].innerHTML + '</td>' + '</tr>';
          table += modified_duration;   
          
          var effective_duration = '<tr>' + '<td style="text-align: left;">' + 'Efffective Duration' +
           '</td>' + '<td style="text-align: right;">' + $stats.find('effective_duration')[0].innerHTML + '</td>' + '</tr>';
          table += effective_duration;
          
          var convexity = '<tr>' + '<td style="text-align: left;">' + 'Convexity' +
           '</td>' + '<td style="text-align: right;">' + $stats.find('convexity')[0].innerHTML + '</td>' + '</tr>';
          table += convexity;   
          
          table += '</table>';
          $("#stats").append(table);
     });
}

parseXML();