// Example: Auto-filling IRCTC passenger fields
chrome.storage.local.get(["passengers"], function (result) {
  const passengers = result.passengers || [];
  passengers.forEach((passenger, index) => {
    document.querySelector(`#passengerName${index + 1}`).value = passenger.name;
    document.querySelector(`#passengerAge${index + 1}`).value = passenger.age;
    document.querySelector(`#passengerGender${index + 1}`).value =
      passenger.gender === "Male" ? "M" : "F";
    document.querySelector(`#passengerClass${index + 1}`).value =
      passenger.travelClass;
  });
});
