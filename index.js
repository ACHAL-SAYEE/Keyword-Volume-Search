const API_KEY="AIzaSyArteojiNBiB_8bczIYGlWtxHpeOo_O9Gc"
let volumeBtnEl=document.getElementById("volume-btn")
let searchWordEl=document.getElementById("search-word")
let resultEl=document.getElementById("result")
volumeBtnEl.addEventListener("submit", async function(event) {
    event.preventDefault()
    console.log(searchWordEl.value)
    resultEl.textContent="loading"

    const apiUrl=`https://www.googleapis.com/youtube/v3/search?q=${encodeURIComponent(searchWordEl.value)}&key=${API_KEY}`

   const response=await fetch(apiUrl)
   console.log(response)
  
   const data=await response.json()
   console.log(data)
   resultEl.textContent=data.pageInfo.totalResults	
  });