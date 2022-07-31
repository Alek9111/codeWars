function openOrSenior(data){
    let res = [];
    for( let i = 0; i<data.length; i++){

              if ( ( data[i][0] >54)  &&  (data[i][1] > -1 && data[i][1] < 27)){

                res.push('Senior');
              } else res.push('Open');
            }

return res;

  }



console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]])); 
//,                       ['Open', 'Senior', 'Open', 'Senior'])
console.log(openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]])); 
//,                       ['Open', 'Open', 'Open', 'Open'])
console.log(openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]));
  //,                     ['Senior', 'Open', 'Open', 'Open'])    
  
  //console.log(openOrSenior([[26,16],[84,3],[10,0],[74,16],[75,20],[77,7],[51,8],[59,2]]));
  //                      [ 'Open','Senior','Open','Senior','Senior','Senior','Open','Senior' ]
//                          'Open', 'Open', 'Open', 'Senior', 'Senior', 'Open', 'Open', 'Open' 
