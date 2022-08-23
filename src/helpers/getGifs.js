const getGifs = async(category)=>
{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=2go0azAmw5v5yQA2bDM7ImOdC7NDyjTs&q=${category}&limit=50`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    return gifs;
}

export
{
    getGifs
}