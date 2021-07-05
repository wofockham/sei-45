const checkForZero = function () {
  $('.zero').removeClass('zero');
  const checkingBalance = + $('#checking-balance').text().slice(1);
  if (checkingBalance <= 0) {
    $('#checking-balance').addClass('zero');
  }
  const savingsBalance = + $('#savings-balance').text().slice(1);
  if (savingsBalance <= 0) {
    $('#savings-balance').addClass('zero');
  }
};

$(document).ready(function () {
  checkForZero();

  $('#checking-deposit').on('click', function () {
    const depositAmount = + $('#checking-amount').val();
    const currentBalance = + $('#checking-balance').text().slice(1); // trim off the $
    const newBalance = currentBalance + depositAmount;
    $('#checking-balance').text('$' + newBalance);
    checkForZero();
  });

  $('#checking-withdraw').on('click', function () {
    const withdrawAmount = + $('#checking-amount').val();
    const currentBalance = + $('#checking-balance').text().slice(1); // trim off the $
    const otherBalance = + $('#savings-balance').text().slice(1); // trim off the $
    const totalBalance = currentBalance + otherBalance;
    const newBalance = currentBalance - withdrawAmount;
    if (newBalance >= 0) {
      $('#checking-balance').text('$' + newBalance);
    } else if (withdrawAmount <= totalBalance) {
      $('#checking-balance').text('$0');
      // newBalance is the negative amount that we didn't have in this account
      $('#savings-balance').text('$' + (otherBalance + newBalance));
    }
    checkForZero();
  });

  $('#savings-deposit').on('click', function () {
    const depositAmount = + $('#savings-amount').val();
    const currentBalance = + $('#savings-balance').text().slice(1); // trim off the $
    const newBalance = currentBalance + depositAmount;
    $('#savings-balance').text('$' + newBalance);
    checkForZero();
  });

  $('#savings-withdraw').on('click', function () {
    const withdrawAmount = + $('#savings-amount').val();
    const currentBalance = + $('#savings-balance').text().slice(1); // trim off the $
    const otherBalance = + $('#checking-balance').text().slice(1); // trim off the $
    const totalBalance = currentBalance + otherBalance;
    const newBalance = currentBalance - withdrawAmount;
    if (newBalance >= 0) {
      $('#savings-balance').text('$' + newBalance);
    } else if (withdrawAmount <= totalBalance) {
      $('#savings-balance').text('$0');
      // newBalance is the negative amount that we didn't have in this account
      $('#checking-balance').text('$' + (otherBalance + newBalance));
    }
    checkForZero();
  });
});
