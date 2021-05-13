function createPhoneNumber(numbers) {
  let phoneNumberFormat = "(xxx) xxx-xxxx";
  for (let i = 0; i < numbers.length; i++) {
    phoneNumberFormat = phoneNumberFormat.replace("x", numbers[i]);
  }

  //console.log(phoneNumberFormat);
  return phoneNumberFormat;
}