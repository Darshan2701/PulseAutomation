var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });

nightmare

  .goto('https://pulse.lnttechservices.com')
  .type('.login_area input[type="text"]','20073031')
  .type('.login_area input[type="password"]','newuseR%123')
  .click('#QTP_LoginButton')
  .wait('.PageBody')
  

  .end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });


   