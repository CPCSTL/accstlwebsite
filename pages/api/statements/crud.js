import nc from 'next-connect';
import { connectToDb } from 'db/db';
import { chechSession } from 'db/services/middleware/user';
import { checkRole } from 'db/utils/tools';
import File from 'db/models/file.model'; // Your MongoDB model for statements

const handler = nc();

// Apply middleware for checking session
handler.use(chechSession);

// POST: Handle different operations based on the action parameter
handler.post(async (req, res, next) => {
    console.log('req.body', req.body, req.session);
    // Connect to database
    await connectToDb();

    const { action, id, title, date, imageUrl , stateNumber } = req.body;

    switch (action) {
        case 'add':
            // if (!checkRole(req, ['createAny', 'statement'])) {
            //     return res.status(403).json({ message: 'Insufficient permissions' });
            // }
            let settings;
            let oldSettings;
            
            try {
                const getSettings = await File.findOne({_d:"659098efde9b2695f93ab71b"});
              console.log(getSettings, "getSettings")
                
                settings = getSettings.settings;
               
            } catch (error) {
                res.status(500).json({ message: error.message , error, marker:"error gettings settings"});
            }

            try {
                const newStatement = new File({ 
                   sTitle: title,
                   sDate: date,
                   sImageUrl: imageUrl,
                     sNumber: settings.statementsCurrentNumber + 1,
                  fileType:"statement" });
                
               
                
                await newStatement.save();
               await File.findOneAndUpdate({_id:"659098efde9b2695f93ab71b"},{settings:{...settings,statementsCurrentNumber:settings.statementsCurrentNumber + 1}})

                res.status(201).json({ message: 'Statement added successfully', newStatement });
            } catch (error) {
                res.status(500).json({ message: error.message , error, marker:"error at add statement"});
            }
            break;

        case 'delete':
            if (!checkRole(req, ['deleteAny', 'statement'])) {
                return res.status(403).json({ message: 'Insufficient permissions' });
            }
            try {
                await File.findByIdAndDelete({_id:id});
                res.status(200).json({ message: 'Statement deleted successfully' });
            } catch (error) {
                res.status(500).json({ message: error.message });
            }
            break;

        case 'update':
            // if (!checkRole(req, ['updateAny', 'statement'])) {
            //     return res.status(403).json({ message: 'Insufficient permissions' });
            // }
            console.log(req.body, "update statement")
            const _id = req.body.id;
            const newStatement = { title, date, imageUrl };
            try {
                const updatedStatement = await File.findByIdAndUpdate(_id, { sTitle:title, sDate:date, sImageUrl: imageUrl }, { new: true });
                res.status(200).json({ message: 'Statement updated successfully', updatedStatement });
            } catch (error) {
                res.status(500).json({ message: error.message });
            }
            break;

        case 'getAll':
            try {
                const queryConditions = { fileType: "statement" };

                // Conditionally add sNumber to the query if it's provided
                if (stateNumber !== undefined) {
                    queryConditions.sNumber = parseInt(stateNumber);
                }
        
                const statements = await File.find(queryConditions)
                .sort({ createdAt: -1 }); // Sort by most recent;
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
