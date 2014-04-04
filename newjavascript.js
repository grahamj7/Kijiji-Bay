/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// define the function within the global scope
$.fn.MessageBox = function(msg) {
    $.ajax({
        url: 'http://localhost:80/get_all_users.php',
        type: 'GET',
        crossDomain: true,
        dataType: 'json',
        success: function(data) {
            $.each(data, function(i, v) {
                // For each record in the returned array
                $('#div_id').append(v.Username); 
                
            });
           // var obj = $.parseJSON(JSON.stringify(data));
            var json = data;
            console.log(data);
            alert(json["username"]);
        },
        error: function (xhr, status) {
            alert("error, yo");
        }
    });
};
$.fn.PostTest = function(){
    /*var domainStr = 'edjo.usask.ca';
    var usernameStr = 'cmpt350_jd';
    var passwordStr = '7jksf72834jk';
    var dbStr = 'cmpt350_jd';
    var tableName ='Users';
    var ok='128.233.173.67:3306';
    //http://localhost:80/insert_new_user.php
    $.post(ok,{domain:domainStr, user:usernameStr,
        password:passwordStr, database:dbStr, type:tableName,Username:"test", Password:"fuck",
    FirstName:"you", Lastname:"and", Age:'0', Address:'work', City:'you', Postal:'ass', Phone:'hole'});*/
    var obj = {};
    obj['Username']='Test'; //string
    obj['Age'] = 32;  // integer.
    $.ajax({
    type: 'POST',
    crossDomain: true,
    url: 'http://localhost:80/insert_new_user.php',
    data: {'Username': obj.Username},
    success: function(msg) {
      console.log(obj.Username);
      alert(msg); 
    }
  });
};
// or, if you want to encapsulate variables within the plugin
(function($) {
    $.fn.MessageBoxScoped = function(msg) {
        alert(msg);
    };
})(jQuery); //<-- make sure you pass jQuery into the $ parameter
