export default function Board({ children }) {
    return (
        <div className="min-h-screen bg-black text-white p-8">
            <div className="border border-white p-4 max-w-4xl mx-auto">
                {children}
            </div>
        </div>
    );
}