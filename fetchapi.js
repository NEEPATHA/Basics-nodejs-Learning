
const URL = "https://dummy-json.mock.beeceptor.com/posts";


/* const getFacts = async() =>{
  console.log("Getting Data...")
   let response = await fetch(URL)
       console.log(response);
    let data = await response.json();
    console.log(data[0].title)
}
  */


function getFacts(){
  fetch(URL)
  .then((response) =>{
    console.log("Response received")
      return response.json()
  })
  .then((data) =>{
    console.log("Data Parsed:")
    console.log(data)
    console.log("First Post Title:",data[0].body);
    console.log(data[1].body);
    console.log(data[2].body);
  }).catch((error) =>{
     console.log("Error fetching data:", error)
  })
  
}
getFacts();