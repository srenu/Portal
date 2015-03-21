/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function makeRequestGet(url,contentType){ 
    if(!contentType){
        contentType ='application/json';
    }
    $.ajax({
                        type: 'GET',
                        url: url,
                        async: false,
                        jsonpCallback: 'jsonCallback',
                        contentType: contentType,
                        success: function(json) {
                            console.log(json);
                        },
                        error: function(e) {
                            console.log(e.message);
                        }
                    });
                }
function makeRequestPost(url){
//    if(!contentType){
//        contentType = "application/json";
//    }
       $.ajax({
                        type: 'POST',
                        url: url,
                        async: false,
                        jsonpCallback: 'jsonCallback',
                        contentType: "application/json",
                        success: function(json) {
                            console.log(json);
                        },
                        error: function(e) {
                            console.log(e.message);
                        }
                    });
}