$(document).ready(function () {
  // Define the generatePlotData function
  function generatePlotData() {
    try {
      // get the visualization and site info
      var visualization = $("#visualizationSelect").val();
      var siteAndIndex = $("#site").val();
      //console.log(visualization, site);
      var generic, gender, detail, site, index;
      switch (visualization) {
        case "generic":
          generic = true;
          break;
        default:
          generic = false;
          detail = visualization.split(".")[0];
          gender = visualization.split(".")[1];
          break
      }
      if(siteAndIndex){ //it is possible that the choice landed on allometric indexing but is not available for race/age detail
        site = siteAndIndex.split(".")[0];
        index = siteAndIndex.split(".")[1];
      };
      //console.log(generic, detail, gender, site, index);
    } catch (error) {
      console.error("An error occurred:", error);
    }
    // handle the generic male vs female charting
    if(generic){
      // just need the site & index
      generateGenericChart(site, index);
    } else {
      //generate the detail plots
      generateDetailChart(gender, detail, site, index);
    }
  }

  // Function to update site select options based on visualization selection
  $("#visualizationSelect").change(function () {
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

  $("#site").change(function () {
    generatePlotData();
  });

  // Trigger change event initially to set initial state
  $("#visualizationSelect").change();
});
