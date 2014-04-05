/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

    // define the function within the global scope
    $.fn.MessageBox = function(msg) {
        alert(msg);
    };

    // or, if you want to encapsulate variables within the plugin
    (function($) {
        $.fn.MessageBoxScoped = function(msg) {
            alert(msg);
        };
    })(jQuery); //<-- make sure you pass jQuery into the $ parameter
