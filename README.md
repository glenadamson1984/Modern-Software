Modern Software website.

Built entirely with nextjs and hosted on vercel. Styled components used throughout.

Emails:-
Originally planned to use nodemailer with a simple gmail account. Gmail has now blocked this feature which was previously
known as 'Less secure app access' which you could toggle on and off. Now it is permanently off and is unchangeable.

I then create a hotmail account and tried nodemailer again. Worked locally but failed on server side. Turns out that 
Vercel block all outgoing SMTP traffic which means we need to use something other than nodemailer.

I had a choice between sendgrid and AWS SES and sendgrid seemed a lot simpler and was free for the level of traffic that I
expected so I have used that for now.

Make sure to save your SENDGRID_API_KEY as an environment variable.

for strapi if the instance goes down go to the instance 

cd modern-software-strapi
strapi start
