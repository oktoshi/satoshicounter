Meteor.publish('exchangeRate', function(baseCurrencyCode, counterCurrencyCode) {
  check(baseCurrencyCode, String);
  check(counterCurrencyCode, String);

  var baseCurrency = Currencies.findOne({code: baseCurrencyCode});
  var counterCurrency = Currencies.findOne({code: counterCurrencyCode});

  return ExchangeRates.find({baseCurrency: baseCurrency._id, counterCurrency: counterCurrency._id});
});