
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
    fetch((baseUrl), {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then(resp => resp.json())
    
}

static createNote()
{
    fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: `${event.target.name.value}`,
      image: `${event.target.image.value}`,
      likes: 0
    })
  })
    .then(resp => resp.json())
}
    
}

}
 
export default HttpService