function TEST() {
  var sheet = SpreadsheetApp.openById("1KHXqh8eXYKF4dWPY51Z7p7N1X60MaHkTNHKmT2TIgRo").getSheetByName("Test1818");
  sheet.getRange("A1").setValue("Hello World!");
  sheet.getRange("B1").setValue("Setup is working!");
}