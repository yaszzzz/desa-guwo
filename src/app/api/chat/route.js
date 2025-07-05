// app/api/chat/route.js

import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import dataDesa from "@/data/desa.json"; // Ambil data desa

export async function POST(req) {
    // Ambil API Key dari .env.local (aman)
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    try {
        const { question } = await req.json();

        // INI BAGIAN PENTING: Membuat 'peran' untuk AI
        const prompt = `
            Anda adalah "Asisten Virtual Desa Makmur Jaya".
            Tugas Anda adalah menjawab pertanyaan warga atau pengunjung berdasarkan data JSON berikut:
            ${JSON.stringify(dataDesa)}

            Aturan:
            1.  Selalu jawab dengan ramah, sopan, dan dalam Bahasa Indonesia.
            2.  Jawaban harus singkat dan langsung ke intinya.
            3.  Jika pertanyaan tidak ada hubungannya dengan data desa (misal: "siapa presiden prancis?"), jawab dengan sopan: "Maaf, saya hanya bisa memberikan informasi seputar Desa Makmur Jaya."
            4.  Gunakan informasi dari JSON untuk menjawab.

            Pertanyaan dari pengguna: "${question}"
        `;

        const result = await model.generateContent(prompt);
        const response = result.response;
        const text = response.text();

        return NextResponse.json({ answer: text });

    } catch (error) {
        console.error("API Chat Error:", error);
        return NextResponse.json(
            { error: "Maaf, layanan asisten sedang tidak tersedia." },
            { status: 500 }
        );
    }
}