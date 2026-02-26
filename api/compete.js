export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');
    const { paymentId, txid } = req.body;
    const PI_API_KEY = "57p6zyluq6yk5spkjzodusftz11yvxiisng960mq4khtzcawwzz6nuwo7at9bexb: 

    try {
        const response = await fetch(`https://api.minepi.com{paymentId}/complete`, {
            method: 'POST',
            headers: { 
                'Authorization': `Key ${PI_API_KEY}`,
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({ txid })
        });
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
