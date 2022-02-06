import BotMenu from "./BotMenu";

const Footer = () => {
    return ( 
    <>
    
    <footer >
        <div className="bg-black text-white lg:px-36 py-6 text-sm">
        <div className="grid md:grid-cols-4 grid-cols-2 gap-5 py-2 lg:px-0 px-4">
        <div  >
            <h1 className="font-bold pb-2 text-lg">LOGO</h1>
            <p>It's an online business. Here we mainly sell different accessories for home decoration and for Birthday Party and also gift item. All the items are at a reasonable price and beautiful and attractive.</p>
        </div>
        <div>
            <h1 className="font-bold pb-2 text-lg">Contact</h1>
            <div className="space-y-1">
                <p>My Account</p>
                <p>Wish List</p>
                <p>Returns</p>
                <p>Orders</p>
            </div>
        </div>
        <div>
            <h1 className="font-bold pb-2 text-lg">Extras</h1>
            <div className="space-y-1">
                <p>My Account</p>
                <p>Wish List</p>
                <p>Returns</p>
                <p>Orders</p>
            </div>
        </div>
        <div>
            <h1 className="font-bold pb-2 text-lg">My Account</h1>
            <div className="space-y-1">
                <p>My Account</p>
                <p>Wish List</p>
                <p>Returns</p>
                <p>Orders</p>
            </div>
        </div>
        </div>
        <hr></hr>
        <h1 className="pt-4 text-xs lg:px-0 px-4">© Copyright 2021 Lorem Inc. All rights reserved.</h1>
        </div>
    </footer> 
    </>
    )
}
 
export default Footer;