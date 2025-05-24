"use client";
import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";

export default function GameList({ refreshFlag }) {
    const [games, setGames] = useState([]);

    const fetchGames = async () => {
        const { data, error } = await supabase.from('games').select('*').order('start_date');
        if (!error) setGames(data || []);
    };

    useEffect(() => { fetchGames(); }, [refreshFlag]);

    return (
        <div className="space-y-4">
            {games.map(g => (
                <div key={g.id} className="border-2 border-dashed p-4">
                    <h3 className="font-bold text-lg">{g.title}</h3>
                    <p><span className="font-semibold">Start:</span> {g.start_date}</p>
                    <p><span className="font-semibold">End:</span> {g.end_date}</p>
                    <p><span className="font-semibold">Time played:</span> {g.time_played}</p>
                    <p><span className="font-semibold">Rate:</span> {g.rate}</p>
                </div>
            ))}
            {games.length === 0 && <p>No game saved yet.</p>}
        </div>
    );
}
