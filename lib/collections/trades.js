Trades = new orion.collection('trades', {
  singularName: 'trade',
  tabular: {
    order: [[5, "desc"]],
    columns: [
      {
        data: 'memberAmount',
        title: 'Amount received',
        render: function (val, type, doc) {
          var paymentMethod = PaymentMethods.findOne(doc.memberPaymentMethod);
          var currency = Currencies.findOne(paymentMethod.currency);
          return accounting.formatMoney(val, { symbol: currency.code, format: "%v %s"});
        }
      },
      {
        data: 'memberPaymentMethod',
        title: 'Payment method',
        render: function (val, type, doc) {
          return PaymentMethods.findOne(val).name;
        }
      },
      {
        data: 'companyAmount',
        title: 'Amount sent',
        render: function (val, type, doc) {
          var paymentMethod = PaymentMethods.findOne(doc.companyPaymentMethod);
          var currency = Currencies.findOne(paymentMethod.currency);
          return accounting.formatMoney(val, { symbol: currency.code, format: "%v %s", precision: currency.precision });
        }
      },
      {
        data: 'companyPaymentMethod',
        title: 'Payment method',
        render: function (val, type, doc) {
          return PaymentMethods.findOne(val).name;
        }
      },
      // {
      //   data: 'marketValue',
      //   title: 'Market value',
      //   render: function(val, type, doc) {
      //     return accounting.formatMoney(val);
      //   }
      // },
      { data: 'memberNumber', title: 'Member' },
      {
        data: "createdAt",
        title: "Time",
        render: function(val, type, doc) {
          return moment(val).calendar();
        }
      }
    ]
  }
});