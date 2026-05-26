// ===== GOOGLE SHEET IDs =====
var SHEET_A = "1KHXqh8eXYKF4dWPY51Z7p7N1X60MaHkTNHKmT2TIgRo"; // Sheet: "All_Information"

// ===== TAB NAMES =====
var SHEET_A_TAB_A = "Test1818"; // Sheet: "All_Information" >> Tab: "Test1818"

// ===== FUNCTIONS =====
function FORMAT() {
  var sheet = SpreadsheetApp.openById(SHEET_A).getSheetByName(SHEET_A_TAB_A);
  sheet.getRange("C1").setValue("This is cell: C1");
  sheet.getRange("D1").setValue("This is cell: D1");
}