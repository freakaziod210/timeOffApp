//----------------------------------------------------------------
// Data Subscriptions:
// Here you can setup data subscriptions for your app.
// On this page, we won't worry about double quotes because escaping sample data is a pain.
//----------------------------------------------------------------
/* jshint -W109 */
'use strict';

$badge.data.vacations = $badge.DataGrid("Vacations", {
  dataSourceId: '05eaf86d-4cfd-11e5-b9ba-5b964b232e92',
  columnNames: ['Id', 'DestinationId', 'DestinationName', 'DestinationAirportCode', 'Date', 'Price', 'Type', 'Category', 'ImageURL', 'ThingsToDoURL', 'FlightURL', 'TripStartDate', 'TripEndDate', 'TripDuration', 'AverageTicketPrice', 'MaxTicketPrice', 'PercentBelowAverage', 'Rating (1-5)', 'Score'],
  defaultValue: [
    ['2,201', '37', 'Sedona, Arizona', 'FLG', '9/12/2015', '286', 'Domestic', 'United States', 'https://media-cdn.tripadvisor.com/media/photo-o/06/5d/2d/57/cathedral-creek.jpg', 'https://www.tripadvisor.com/Attractions-g31352-Activities-Sedona_Arizona.html', 'https://www.google.com/flights/#search;f=SLC;t=FLG;d=2015-09-12;r=2015-09-16', '9/12/2015', '9/16/2015', '4', '374', '374', '-24', '5', '6.18']
  ]
});