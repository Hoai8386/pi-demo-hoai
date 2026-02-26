export default async function handler(req, res) {
    const { paymentId } = req.body;
    // Dán API KEY thật lấy từ develop.pi vào đây
    const PI_API_KEY = "57p6zyluq6yk5spkjzodusftz11yvxiisng960mq4khtzcawwzz6nuwo7at9bexb; 

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
