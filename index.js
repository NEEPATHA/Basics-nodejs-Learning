const URL = 'https://dummyapi.online/api/users';

function getapiDetails(){
  fetch(URL)
  .then((response) =>{
    console.log("Response Received");
    return response.json();
  })
  .then((data) =>{
      console.log("Data Fetched:",data[0].username) 
      return data;
  }).then((users) =>  {
    users.forEach((user) =>{
       console.log(`Name: ${user.name}, Email: ${user.email},`)
    })

  })
  .catch((err) =>{
       console.log("Some issue fix it:" ,err)
  })
  
}

getapiDetails()