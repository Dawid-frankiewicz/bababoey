const pierwszy = false;
const drugi = false;

function letItPromise(){
    return new Promise((prawda,fałsz)=>
    {
        if(pierwszy){
            prawda({

               pozycja:"gratulacje pierwsze miesjce"
            })
        }
        else if(drugi)
        {
            fałsz(
                {
                    pozycja:"ajaja drugie miejsce"
                }
            )
        }
        else 
        {
            prawda (
                {
                    pozycja:"moze nie pierwszy i nie drugi ale.."
                }
            )
        }
    })
}

letItPromise().then((message)=>
{
    console.log("Suckes: " + message.pozycja)
}
).catch((error)=>
{
    console.log(error.pozycja + ' ' + error.message)
})
////////////////////////////////////////////////////////////////
const pierwszaProba = new Promise((prawda, fałsz)=>
    {
        prawda('tekst pierwszy')
    }
)
const drugaProba = new Promise((prawda, fałsz)=>
    {
        prawda('tekst drugi')
    }
)
const trzeciaProba = new Promise((prawda, fałsz)=>
    {
        prawda('tekst trzeci')
    }
)

Promise.all( //.race zwraca 1 prawidlowy ??
    [
        pierwszaProba,
        drugaProba,
        trzeciaProba
    ]
).then((messages)=>
{
    console.log(messages)
})
//////////////////////////////////////////////////// async i await 

function newPromis(rzeka){
    return new Promise((prawda, fałsz) => {
        if(rzeka === "Bałtyk")
        {
            prawda('to jest Bałtyk')
        }
        else
        {
            fałsz('to nie jest Bałtyk')
        }
    }
    )
}

function newerPromise(odpowiedź)
{
    return new Promise((prawda, fałsz) =>
    {
        console.log("odpowiedź to");
        prawda("tu jest podana " + odpowiedź)
    });
}

newPromis('Bałtyk').then(response =>
    {
        console.log("oto calosc");
       return  newerPromise(response); ///musi byc return by kolejny then złpał
    }
).then(calculatedResponse =>
    {
        console.log(calculatedResponse);
    }
).catch((err)=> 
{
    console.log(err)
})
/// to wszystko zastapimy await i async -> szybciej ładniej i sprawnie 

async function doWork(){
    try{
    const response = await newPromis('Bałtyk');
    console.log("oto calosc");
    const calculatedResponse = await newerPromise(response);}
    catch(err){
        console.log(err)}
   
}
doWork()
