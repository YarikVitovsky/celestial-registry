export default function Footer() {
    return (
        <footer className="flex justify-center fixed bottom-0 w-full p-4">
            <p className="text-gray-500">&copy; {new Date().getFullYear()}</p>
        </footer>
    );
}