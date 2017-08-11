'use strict';

let str ='1->2->3->3->4->5->3';
let val =3;

main(str,val)
function main(str,val){
    let result = [];
    let str_arr = str.split('->')
    let new_arr = str_arr.map(function (item) {
        return parseInt(item,10)
    })
    for(let each_num of new_arr){
        if (each_num !=val){
            result.push(each_num);
        }
    }
    let finally_result = result.join("->");
    console.log(finally_result)

}