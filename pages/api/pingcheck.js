import axios from "axios";
const localURL = process.env.URL;
export default async function handler(req, res) {
    if(req.method === 'GET'){
        try {
            // Replace with your desired URL
            const response = await axios.get(localURL+ "/server-status");
        
            if (response.data.serverOn) {
              res.status(200).json({ success: true });
            } else {
              res.status(200).json({ success: false });
            }
          } catch (error) {
            res.status(500).json({ error: error.message });
          }
    }
  }