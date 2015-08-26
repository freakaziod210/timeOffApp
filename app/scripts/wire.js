//----------------------------------------------------------------
// Data Subscriptions:
// Here you can setup data subscriptions for your app.
// On this page, we won't worry about double quotes because escaping sample data is a pain.
//----------------------------------------------------------------
/* jshint -W109 */
'use strict';

$badge.data.grid = $badge.DataGrid('Table Values', {
  columnNames: ['col1', 'col2', 'col3'],
  defaultValue: [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ]
});
