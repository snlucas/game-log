"use client";

import { useState } from "react";
import { supabase } from "../../supabaseClient";

export default function GameForm({ onSaved }) {
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        title: '',
        start_date: '',
        end_date: '',
        time_played: '',
        rate: 0,
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const { error } = await supabase.from('games').insert([form]);
        setLoading(false);

        if (error) {
            alert('Error: ' + error.message);
            return;
        }

        setForm({
            title: '',
            start_date: '',
            end_date: '',
            time_played: '',
            rate: 0,
        });

        if (onSaved) onSaved();
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-3 border-2 border-dashed p-4 mb-6">
            <input
                className="w-full p-2 bg-black border border-dashed"
                placeholder="Title"
                name="title"
                value={form.title}
                onChange={handleChange}
                required
            />

            <div className="flex gap-2">
                <input
                    className="flex-1 p-2 bg-black border border-dashed"
                    type="date"
                    name="start_date"
                    value={form.start_date}
                    onChange={handleChange}
                    required
                />
                <input
                    className="flex-1 p-2 bg-black border border-dashed"
                    type="date"
                    name="end_date"
                    value={form.end_date}
                    onChange={handleChange}
                    required
                />
            </div>

            <input
                className="w-full p-2 bg-black border border-dashed"
                placeholder="Time played (eg: 5h31min)"
                name="time_played"
                value={form.time_played}
                onChange={handleChange}
            />

            <input
                className="w-full p-2 bg-black border border-dashed"
                type="number"
                min={0}
                max={10}
                name="rate"
                value={form.rate}
                onChange={handleChange}
            />

            <button disabled={loading} className="bg-black text-white border border-dashed px-4 py-2">
                {loading ? 'Saving...' : 'Save'}
            </button>
        </form>
    );
}