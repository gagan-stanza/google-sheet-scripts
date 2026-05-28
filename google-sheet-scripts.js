// ===== GOOGLE SHEET IDs =====
var SHEET_A = "1KHXqh8eXYKF4dWPY51Z7p7N1X60MaHkTNHKmT2TIgRo"; // Sheet: "All_Information"

// ===== TAB NAMES =====
var SHEET_A_TAB_A = "LiveBooking_Import"; // Sheet: "All_Information" >> Tab: "LiveBooking_Import"
var SHEET_A_TAB_B = "LiveBooking_Import_Mirror"; // Sheet: "All_Information" >> Tab: "LiveBooking_Import_Mirror"

// ===== FUNCTIONS =====
function MIRROR() {
  var ss = SpreadsheetApp.openById(SHEET_A);
  var source = ss.getSheetByName(SHEET_A_TAB_A);
  var destination = ss.getSheetByName(SHEET_A_TAB_B);

  // Get all data from source tab
  var data = source.getDataRange().getValues();

  // Clear destination tab first
  destination.clearContents();

  // Copy data to destination tab
  destination.getRange(1, 1, data.length, data[0].length).setValues(data);
}