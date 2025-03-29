// /api/translate.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { text, target_lang, source_lang } = req.body;

        const apiKey = '74192183-d133-4208-8089-02b3a9fb99e4:fx';
        const url = 'https://api-free.deepl.com/v2/translate';

        const data = new URLSearchParams({
            auth_key: apiKey,
            text,
            target_lang,
        });

        if (source_lang && source_lang !== 'auto') {
            data.append('source_lang', source_lang);
        }

        try {
            const response = await fetch(url, {
                method: 'POST',
                body: data,
            });

            if (!response.ok) {
                return res
                    .status(response.status)
                    .json({ error: 'Failed to fetch translation' });
            }

            const result = await response.json();
            return res.status(200).json({
                translatedText: result.translations[0].text,
                detectedLang: result.translations[0].detected_source_language,
            });
        } catch (error) {
            console.error('Error:', error);
            return res
                .status(500)
                .json({ error: 'Server error while translating' });
        }
    } else {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
}
