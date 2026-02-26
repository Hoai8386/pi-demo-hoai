export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');
    
    const { paymentId } = req.body;
    // THAY THẾ dòng dưới bằng API Key lấy từ develop.pi (App Wallet)
    const PI_API_KEY = "MÃ_API_KEY_CỦA_BẠN": 57p6zyluq6yk5spkjzodusftz11yvxiisng960mq4khtzcawwzz6nuwo7at9bexb

    try {
        const response = await fetch(`https://api.minepi.com{paymentId}/approve`, {
            method: 'POST',
            headers: { 
                'Authorization': `Key ${PI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
