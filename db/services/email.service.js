import nodemailer from 'nodemailer';
import Mailgen from 'mailgen';


let transporter = nodemailer.createTransport({
    service:"Gmail",
    secure:true,
    auth:{
        user:process.env.EMAIL_ID,
        pass:process.env.EMAIL_PASS
    }
});


export const contactEmail = async(data)=>{
    try{
        let mailGenerator = new Mailgen({
            theme:"default",
            product:{
                name:"Smellycats",
                link:"http//smelly_cats.com"
            }
        });

        const email = {
            body:{
                name:'Admin',
                intro:[
                    'Hey!! someone contacted you from our app',
                    `From: ${data.email}`,
                    `Name: ${data.name}`,
                    `Message: ${data.message}`,
                    "we will contact you shortly"
                ],
                outro:'Bye !!'
            }
        }

        let emailBody = mailGenerator.generate(email);
        let message = {
            from:process.env.EMAIL_ID,
            to:`${data.email}`,
            subject:'Your request Received',
            html:emailBody
        }
        let message2 = {
            from:process.env.EMAIL_ID,
            to:process.env.EMAIL_ID,
            subject:'Contact Received',
            html:emailBody
        }

        await transporter.sendMail(message);
        await transporter.sendMail(message2);
        return true;
    } catch(error){
        console.log(error);
        throw error;
    }
}

