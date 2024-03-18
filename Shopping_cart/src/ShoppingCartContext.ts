import { ReactNode, createContext, useContext, useState } from "react";


export function useShoppingCart()
{
return useContext(ShoppingCartContext);
}

type ShoppingCartProviderProps =
{
    children: ReactNode //jet to typ przekazywany dla dzieci w react
}
type ShoppingCartContext = 
{
   getItemQuantity: (id:number) => number //funkcja zliczajaca produkty przyjmujaca id i zwracajaca ilosc
   increaseCartQuantity: (id:number) => void //nic nie zwraca tylko inkrementacja //nie dodajemy addToCart bo zwiekszenie inkrementacji jest rowne dodanie do cart
   decreaseCartQuantity: (id:number) => void // zmniejszanie a osobne usuwanie to co innego
   removeFromCart: (id:number) => void
   openCart: () => void
   closeCart: () => void
   cartQuantity: number
   cartItems: CartItem[]
}

type CartItem = 
{
    id:number
    quantity: number //to obliczania cen czyli ilosc razy cena
}

const ShoppingCartContext = createContext({} as 
    ShoppingCartContext)
export function ShoppingCartProvider({children}: ShoppingCartProviderProps  ) {
   const[cartItems, setCartItems] = useState<CartItem[]>([]) //przujmuje tablice a oddaje tablice cartItems
 
 function getItemQuantity(id:number)
 {
    return cartItems.find(item=> item.id === id )?.quantity || 0 //znajdz item z id rownym podanego id. Jezeli jest zwroc quantity 
 }

 function increaseCartQuantity(id:number)
 {
   setCartItems(currentItems => {
    if (currentItems.find(item => item.id === id  )==null ) //jezeli nie ma go w koszyku to dodaj
    return [...currentItems, {id, quantity:1}] //skopiuj zawartosc i dodaj id z iloscia
    else {
        return currentItems.map(item=> 
            {
                if(item.id === id )
                {
                    return {...item, quantity: item.quantity +1} //znajdz item z danym id zwroc go z zwiekosznym quantity
                }
                else {
                    return item
                }
            })
    }
    })
 }   
 
 function decreaseCartQuantity(id:number)
 {
    setCartItems(currentItems => {
        if(cartItems.find(item => item.id === id)?.quantity ===1 )
        {
            return currentItems.filter(item =>item.id !==id ) //zwroc te co nie sa rowne id czyli usun z listy
        }
        else 
        {
            return currentItems.map(items=> 
                {
                    if(items.id === id)
                    {
                        return {...items, quantity: items.quantity -1 }
                    }
                    else 
                    {
                        return items
                    }
                })
        }
    })
 }

 function removeFromCart (id:number)
 
 {
    setCartItems(currentItems =>
        {
           return currentItems.filter(item=> item.id !== id)
        })
 }

 const cartQuantitysz = cartItems.reduce(
    (quantity, item) => item.quantity + quantity, 0
    
 )
 // poczatkowa wartosc to 0 // quanitity to akumulator trzymajacy wartosc a item.quantity to wartosc aktualnego obiektu
 //reduce sluzy do przetwarzania tablicy w celu zredukowania jej do 1 wartosci cyzli akumulator
 // map dziala rowniez na wsyzstkich elementach ale nie redukuje do jednej wartosci

const [isOpen, setIsOpen] = useState(false)
const openCart = ()=> setIsOpen(true)
const closeCart = ()=> setIsOpen(false)


   return (
        <ShoppingCartContext.Provider value={{getItemQuantity,
             increaseCartQuantity,
              decreaseCartQuantity,
               removeFromCart,
               cartQuantitysz,
                openCart, closeCart
            }}>
            {children} //cala ta funckca sluzy jako otoczka createContext i przekazuje dziecko
        </ShoppingCartContext.Provider>//wskauzje na to ten .provider
    );
}
//jest to niestandardowy użycie createContext ,ponieważ noramlnie używa sie go tak
//const MyContext = React.createContext(defaultValue);
//<MyContext.Provider value={/* jakieś wartości */}>
// <App />
// </MyContext.Provider> gdzie tu podajemy jakie wartosci chcemy przekazac
// W wyższym przykladzie udostepniamy ShoppingCartContext 
// pozwala to na przekazywanie warrotsci bez uzycia props co klaruje kod