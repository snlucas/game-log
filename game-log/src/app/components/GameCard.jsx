export default function GameCard() {
    return (
        <div className="border border-white p-4">
            <h2 className="text-xl font-bold mb-4">Title</h2>

            <div className="flex flex-col space-y-2">
                <div className="flex items-center">
                    <span className="font-semibold w-24">Start:</span>
                    <span className="mr-2">January 01, 2025</span>
                    <span role="img" aria-label="calendar">📅</span>
                </div>

                <div className="flex items-center">
                    <span className="font-semibold w-24">End:</span>
                    <span className="mr-2">December 01, 2025</span>
                    <span role="img" aria-label="calendar">📅</span>
                </div>

                <div className="flex items-center">
                    <span className="font-semibold w-24">Time played:</span>
                    <span>5h31min</span>
                </div>

                <div className="flex items-center">
                    <span className="font-semibold w-24">Rate:</span>
                    <span role="img" aria-label="star">⭐</span>
                </div>
            </div>
        </div>
    );
}