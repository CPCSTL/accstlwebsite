import nc from 'next-connect';
import { connectToDb } from 'db/db';
import { chechSession } from 'db/services/middleware/user';
import { checkRole } from 'db/utils/tools';
import File from 'db/models/file.model'; // Your MongoDB model for statements

const handler = nc();

// Apply middleware for checking session
handler.use(chechSession);

// POST: Handle different operations based on the action parameter
handler.post(async (req, res) => {
    console.log('req.body', req.body, req.session);
    // Connect to database
    await connectToDb();

    const { action, id, title, date, imageUrl } = req.body;

    switch (action) {
        case 'add':
            if (!checkRole(req, ['createAny', 'statement'])) {
                return res.status(403).json({ message: 'Insufficient permissions' });
            }
            try {
                const newStatement = new File({ title, date, imageUrl });
                await newStatement.save();
                res.status(201).json({ message: 'Statement added successfully', newStatement });
            } catch (error) {
                res.status(500).json({ message: error.message });
            }
            break;

        case 'delete':
            if (!checkRole(req, ['deleteAny', 'statement'])) {
                return res.status(403).json({ message: 'Insufficient permissions' });
            }
            try {
                await File.findByIdAndDelete(id);
                res.status(200).json({ message: 'Statement deleted successfully' });
            } catch (error) {
                res.status(500).json({ message: error.message });
            }
            break;

        case 'update':
            if (!checkRole(req, ['updateAny', 'statement'])) {
                return res.status(403).json({ message: 'Insufficient permissions' });
            }
            try {
                const updatedStatement = await File.findByIdAndUpdate(id, { title, date, imageUrl }, { new: true });
                res.status(200).json({ message: 'Statement updated successfully', updatedStatement });
            } catch (error) {
                res.status(500).json({ message: error.message });
            }
            break;

        case 'getAll':
            try {
                const statements = await File.find({});
                res.status(200).json({ statements });
            } catch (error) {
                res.status(500).json({ message: error.message });
            }
            break;

        default:
            res.status(400).json({ message: 'Invalid action' });
            break;
    }
});

export default handler;
