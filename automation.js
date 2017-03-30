
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
   
let Nightmare = require('nightmare');
let nightmare = Nightmare({
  electronPath: require('./node_modules/electron'),
  show: true,
});

nightmare
  .goto('https://pulse.lnttechservices.com')
  .type('.login_area input[type="text"]','20073031')
  .type('.login_area input[type="password"]','12%123')
  .click('#QTP_LoginButton')
  .wait(1500,'#home #navbar #logout #logtext a')
  .evaluate(function () {
    return document.querySelector('#home #navbar #logout #logtext a').href;
  })
  .click('#home #objectnav #Nav_Container #Nav_Content #oSubmenu2 #SubDivID10 #LOCK_Current_Week')
  .evaluate(function(){
    return document.querySelector('#home #objectnav #Nav_Container #Nav_Content #oSubmenu2 #SubDivID10 ').href
  })
  .end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });