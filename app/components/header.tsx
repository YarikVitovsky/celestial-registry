import link from 'next/link';
import './header.css'


export default function Header() {
    return (
        <header className="w-full bg-[#2c272bff]" >
            <div className="header-text container mx-8">
                <h1 className="font-cursive">Celestials</h1>
            </div>
        </header>
    );
}