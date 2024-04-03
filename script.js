$(document).ready(function () {
  $("#dataForm").submit(function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the values entered by the user
    const height = parseFloat($("#height").val());
    const bsa = parseFloat($("#bsa").val());
    const selectedData = $("#data").val();

    // Validate the input
    if (isNaN(height) || isNaN(bsa)) {
      alert("Please enter valid numeric values for height and BSA.");
      return;
    }

    // Use the entered values and selected data for further processing (e.g., chart generation)
    console.log("Height:", height, "cm");
    console.log("BSA:", bsa, "m²");
    console.log("Selected Data:", selectedData);

    // You can perform further actions here, such as generating charts based on the user input
  });
});
