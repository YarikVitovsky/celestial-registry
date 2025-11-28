export default function Footer() {
    return (
        <footer className="flex justify-end fixed bottom-0 w-full p-5">
            <p className="text-gray-500">&copy; {new Date().getFullYear()}</p>
        </footer>
    );
}