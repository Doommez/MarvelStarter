



class MarvelService{
  _apiBase="https://gateway.marvel.com:443/v1/public/";
  _apiKey="apikey=41f31bb5661e439b207d7fa69245080f"
getResource= async (url) =>{
  let res=await fetch(url)
    if(!res.ok){
      throw new Error(`could not ferch ${url}, status: ${res.status}`)
    }
  return await res.json();
  }
  getAllCharacters=async()=>{
      const res= await this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`)
      return res.data.results.map(
        this._transformCharacter
      )
    }
  getCharacter= async (id)=>{
    const res= await this.getResource(`${this._apiBase}characters/${id}?&${this._apiKey}`)
    return this._transformCharacter(res.data.results[0])
  }
  _transformCharacter=(char)=>{
    return {
      name: char.name,
      description: char.description ? `${char.description.slice(0, 210)}...` : 'There is no description for this character',
      thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url
    }
  }
}

export default MarvelService