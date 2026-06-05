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

  // Get only columns A-F from the source tab
  var numRows = source.getLastRow();
  var numCols = 6;
  if (numRows === 0) return;
  var data = source.getRange(1, 1, numRows, numCols).getValues();

  // Clear only columns A-F in the destination tab
  destination.getRange(1, 1, numRows, numCols).clearContent();

  // Copy data into destination tab A-F only
  destination.getRange(1, 1, numRows, numCols).setValues(data);
}