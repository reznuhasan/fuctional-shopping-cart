// function getSymbol(clickId,numberId,priceId,price,isAdd){
//     document.getElementById(clickId).addEventListener('click',function(){
//          const number=document.getElementById(numberId);
//          const presentValue=parseFloat(number.value);
//          if(isAdd==true){
//           number.value=presentValue+1;
//          }
//          else if(isAdd==false && presentValue>0){
//           number.value=presentValue-1;
//          } 
//          const priceValue=document.getElementById(priceId);
//          const presentPrice=parseFloat(priceValue.innerText);
//          if(isAdd==true){
//           getCalculate(price)
//           priceValue.innerText=presentPrice+price;   
//          }
//          else if(isAdd==false && presentPrice>0){
//            priceValue.innerText=presentPrice-price;
//            getCalculate(-price)
//          }
     
//      });
//    } 
//    function getCalculate(presentPrice){
//       const subTotal = document.getElementById('subTotal');
//       const subTotalNo=parseFloat(subTotal.innerText);
//       console.log(presentPrice); 
//       const totalTaxPrice = document.getElementById('tax');
//       const totalPrice=document.getElementById('total');
//       if(subTotalNo>=0){
//        subTotal.innerText=subTotalNo+presentPrice;
//        totalTaxPrice.innerText=(parseFloat(subTotal.innerText)*(10/100)).toFixed(1);
//        totalPrice.innerText=(parseFloat(subTotal.innerText)+(parseFloat(totalTaxPrice.innerText))).toFixed(2)
//       }
//    }
//    getSymbol('plus1','number1','price1',1219,true);
//    getSymbol('minus1','number1','price1',1219,false);
//    getSymbol('plus2','number2','price2',59,true);
//    getSymbol('minus2','number2','price2',59,false);
