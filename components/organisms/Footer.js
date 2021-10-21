import { useState } from "react";
import { useRouter } from "next/router";
import Link from 'next/link';
import { 
    Home, Homefill, 
    Promo, Promofill,
    Cart, Cartfill,
    Favourite, Favouritefill,
    User, Userfill 
} from "@atoms/icons";

export default function Footer() {
    // active -> home, promo, cart, favourite, user
    const [active, setActive] = useState('home');
    
    const router = useRouter();
    const handleClick = (active, to) => {
        setActive(active);
        router.push(to);
    }

    return (
        <footer className="container fixed bottom-0 border">
            <div className="h-14 flex text-center">
                <div className="w-1/5 m-auto" onClick={() => handleClick('home','/')}>
                    {active === 'home' ? <Homefill /> : <Home />}
                </div>
                <div className="w-1/5 m-auto" onClick={() => handleClick('promo','/promotion')}>
                    {active === 'promo' ? <Promofill /> : <Promo />}
                </div>
                <div className="w-1/5 m-auto" onClick={() => handleClick('cart','/user/cart')}>
                    {active === 'cart' ? <Cartfill /> : <Cart />}
                </div>
                <div className="w-1/5 m-auto" onClick={() => handleClick('favourite','/user/favourite')}>
                    {active === 'favourite' ? <Favouritefill /> : <Favourite />}
                </div>
                <div className="w-1/5 m-auto" onClick={() => handleClick('user','/user')}>
                    {active === 'user' ? <Userfill /> : <User />}
                </div>
            </div>
      </footer>
    )
}
