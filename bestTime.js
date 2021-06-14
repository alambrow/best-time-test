// const params = new URLSearchParams({ 
//   'api_key_public': 'pub_e11661721b084d36b8f469a2c012e754',
//   'venue_id': 'ven_51387131543761435650505241346a394a6432395362654a496843',
//   'day_int': 3,
//   'hour': 23
// });

// fetch(`https://besttime.app/api/v1/forecasts/hour?${params}`, {
//   method: 'GET'
// }).then(function(data) { 
//   console.log(data); 
// });

// fetch(
//   `https://besttime.app/api/v1/keys/pri_e7ab8374874143aaae6415180cd5c322`, {
//     method: 'GET'
//   }).then(function(data) { 
//     console.log(data); 
//   });

// const params = new URLSearchParams({ 
//   'api_key_private': 'pri_e7ab8374874143aaae6415180cd5c322'
// });

// fetch(`https://besttime.app/api/v1/collection/col_19ef08a2f1fe4224a0677e8bf16fa82b?${params}`, {
// method: 'GET'
// }).then(function(data) { 
// console.log(data); 
// });

let applicationState = {
  data: []
}

const params = new URLSearchParams({ 
  'api_key_public': 'pub_729871213bc2453cbe7c684c66d4288f',
   'venue_id': 'ven_635471444b3341696772515267495a6e7873797868324f4a496843'
});

fetch(`https://besttime.app/api/v1/forecasts/now?${params}`, {method: 'GET'})
  .then(res => res.json())
  .then(data => {
    applicationState.data = data
    console.log(applicationState.data.venue_info.venue_name)
    console.log(applicationState.data.analysis.hour_analysis.hour)
    console.log(applicationState.data.analysis.hour_analysis.intensity_nr)
    console.log(applicationState.data.analysis.hour_analysis.intensity_txt)
  })