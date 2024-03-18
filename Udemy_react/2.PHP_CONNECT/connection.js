

const url = "http://localhost/react/Dane.php";
async function FetchData()
{
    try {
    const dane = await fetch(url)
    if(!dane.ok)
    {
        throw new Error("nie da sie uzyskac danych")
    }
    else 
    {
        const daneJ = await dane.json();
        console.log(daneJ);
    }
  
    } catch (error)
    {
        console.log(error)
    }
}
FetchData();