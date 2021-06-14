const params = new URLSearchParams({ 
    'api_key_private': 'pri_e7ab8374874143aaae6415180cd5c322',
});

fetch(`https://besttime.app/api/v1/collection/col_19ef08a2f1fe4224a0677e8bf16fa82b?${params}`, {
  method: 'GET'
}).then(function(data) { 
  console.log(data); 
});