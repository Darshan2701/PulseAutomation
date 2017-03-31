
// var Nightmare = require('nightmare');
// var nightmare = Nightmare({ show: true, width: 1280,
//             height: 800 ,
//           electronPath: require('./node_modules/electron')});


// nightmare

//   .goto('https://pulse.lnttechservices.com')
//   .type('.login_area input[type="text"]','20073031')
//   .type('.login_area input[type="password"]','newuseR%123')
//   .wait(6000)
  
//   .click('#QTP_LoginButton')
//   .wait('.PageBody')
//   .wait(function(){
//     console.log("in wait function");
//   })
//   .click('#QTP_Logout')
//   .exists('[#objectnav #Nav_Container #DivID0]')
  
//   .then(function(result) {

//         if(result)
//         {
//             console.log('Logged in');
//             return nightmare; //now break out into a function to run the loop

//         } else
//         {
//             console.log('OK Button does not exists');
//             return nightmare;

//         }

//     })
    
//   .catch(function (error) {
//     console.error('Search failed:', error);
//   });

// // .click('input#QTP_LoginButton')
// // .wait(3000)
// //   .click('a#LOCK_Timesheet')
// //   .click('div#SubDivID10')
// //   .end()
// //     .then(function (result) {
// //       console.log(result)
// //     })
// //     .catch(function (error) {
// //       console.error('Error:', error);
// //     });
   
var Nightmare = require('nightmare');
var nightmare = Nightmare({
  // electronPath: require('./node_modules/electron'),
  show: true,
});

nightmare
  .goto('https://pulse.lnttechservices.com')
  .type('.login_area input[type="text"]','20073031')
  .type('.login_area input[type="password"]','newuseR%123')
  .click('#QTP_LoginButton')
  .wait(1500,'#home #navbar #logout #logtext a')
  .evaluate(function () {
    return document.querySelector('#home #navbar #logout #logtext a').href;
  })

  //Click the timesheet tab to get the dropdown
   .wait(1000,'#home #objectnav #Nav_Container #Nav_Content #DivID1 #LOCK_Timesheet #oMenuArrow1') //no need to wait i guess as the DOM has already been loaded. Just trying
  .click('#home #objectnav #Nav_Container #Nav_Content #DivID1 #LOCK_Timesheet #oMenuArrow1')
  .wait(1000)
  //.wait(5000,'#home #objectnav #Nav_Container #Nav_Content #DivID1 #LOCK_Timesheet #oMenuArrow1')
  .evaluate(function(){
    return document.querySelector('#home #objectnav #Nav_Container #Nav_Content #DivID1 #LOCK_Timesheet #oMenuArrow1').src
  })

  //click the "Current Week" tab to get a new page.
  .wait(1000,'#home #objectnav #Nav_Container #Nav_Content #oSubMenu2 #SubDivID10')
  .click('#home #objectnav #Nav_Container #Nav_Content #oSubMenu2 #SubDivID10')
  .wait(3500,'#home #objectnav #Nav_Container #Nav_Content #oSubMenu2 #SubDivID10')
  .evaluate(function() {
    return document.querySelector('#home #objectnav #Nav_Container #Nav_Content #oSubMenu2 #SubDivID10').className;
  })
  .type('.ListDiv .ValueRightTS input[type=value]','9.00')

  .end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });