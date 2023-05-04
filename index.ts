import express from 'express';
import { Calculator } from './calculator8a';

const app = express();
const calculator = new Calculator();

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define a route to handle button presses
app.get('/press/:button', (req, res) => {
    const button = req.params.button;
    calculator.pressButton(button);
    res.send(calculator.getPanelContents());
});

// Start the server
app.listen(3040, () => {
    console.log('Server started on http://localhost:3040');
});
