# Neon_SpreadSheets

Neon_SpreadSheets is a Google Sheets clone created using HTML, CSS, and JavaScript. It offers a familiar spreadsheet interface and functionality while incorporating some unique features.

## Features

### Formula Bar and Cell Relations
The application includes a formula bar that allows users to establish relationships between different cells using formulas. It's designed to handle formulas and update cell values accordingly.

### Cycle Detection
To prevent infinite loops, the system is equipped with cycle detection in formulas. This helps in avoiding situations where formulas inadvertently create never-ending references between cells.

### Multiple Sheets
Users can add multiple sheets within the application, enabling organization and segregation of data across various tabs, similar to Google Sheets.

### JSON File Support
The app allows users to download sheets in JSON format. Importantly, the encoding of sheets into JSON is intricately linked to the CSS of the sheets. This means that for both the process of downloading sheets as JSON and opening JSON files in sheets, you need to utilize the specific CSS associated with this app. Shortly, If you download your sheet in JSON from here then open here only.

### Copy-Paste Functionality
Copying and pasting data within the application is supported. However, the cut option is designed specifically to erase the selected range of cells.

## Usage

To get started:

1. Clone this repository.
2. Open `index.html` in your preferred web browser.

Ensure that you adhere to using the specific CSS and encoding methods provided within this application when working with JSON files or interacting with the cut option.

## Contributions
Contributions and feature requests are welcome! Feel free to submit issues or pull requests to improve this project.

