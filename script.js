
  const api = 'https://quotes-api-self.vercel.app/quote';
  const text = document.getElementById("text")
  const container= document.getElementById("2-container")
  
 async function getQoute(url){
    const response= await fetch(url)
    const data = await response.json()
    text.innerHTML = `<p> "${data.quote}" </p>`;
  }
  getQoute(api)


