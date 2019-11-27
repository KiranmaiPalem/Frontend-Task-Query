
const baseUrl="http://localhost:8000/notes"

class HttpService {
 
static getNotes(){
   return fetch(baseUrl)
  .then(response => {return response.json()})
}

static getNoteById(){
    return fetch(baseUrl)
   .then(response => {return response.json()})
}
 
static getApi(url){
}
 
static deleteNote()
{
  fetch(baseUrl + "/1", {
    method: 'DELETE'
  }).then(() => {
     console.log('removed');
  }).catch(err => {
    console.error(err)
  })
}

static createNote()
{
}
    
}

 
export default HttpService