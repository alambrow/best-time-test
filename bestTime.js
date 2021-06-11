const params = new URLSearchParams({ 
    'api_key_private': 'pri_e7ab8374874143aaae6415180cd5c322',
    'venue_name': 'McDonalds',
    'venue_address': 'Ocean Ave, San Fransisco'
   });
   
   fetch(`https://besttime.app/api/v1/forecasts?${params}`, {
     method: 'POST'
   }).then(function(data) { 
    
     console.log(data); 
   });