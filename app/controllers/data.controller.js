const fs = require('fs');

function getJsonData(req, res) {
  const filePath = './app/data/Jaringan_Irigasi_84.json'; // Replace with the path to your JSON file
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal server error' });
        }
        try {
        const jsonData = JSON.parse(data);
        return res.json(jsonData);
        } catch (e) {
        console.error(e);
        return res.status(500).json({ message: 'Internal server error' });
        }
    });
}

module.exports = { getJsonData };
