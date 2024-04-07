$(document).ready(function () {

  // Define the generatePlotData function
  function generatePlotData() {
    // get the visualization and site info
    var visualization = $('#visualizationSelect').val();
    var site = $('#site').val();
    console.log(visualization, site);
    

  }


  // Function to update site select options based on visualization selection
  $("#visualizationSelect").change(function() {
    var selectedVisualization = $(this).val();
    var siteSelect = $("#site");

    // Reset disabled options
    siteSelect.find("option").prop("disabled", false);

    // Disable options related to "Indexed to Allometric Height" if not "generic"
    if (selectedVisualization !== "generic") {
      siteSelect.find("option[value$='.ht213']").prop("disabled", true);
    }
    generatePlotData();

  });

  $('#site').change(function() {
    generatePlotData();
  });

  // Trigger change event initially to set initial state
  $("#visualizationSelect").change();


});
