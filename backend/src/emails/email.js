const sgMail=require('@sendgrid/mail')
sgMail.setApiKey(process.env.SEND_GRID_SECRET)
const sendAlertMail=({email,name,severity,description,title})=>{
    console.log("adf:",email,name,description)
    sgMail.send({
        to:'12213128@nitkkr.ac.in',
        from:'abhishekchaurasia0786@gmail.com',
        subject:`Alert ${title}`,
        // text:`${description}`,
        html:`<h1>A disaster is coming up,${name}</h1>
        <h2>Details are as follow:</h2>
        <p>${title}</p>
        <p>${description}</p>
        <p>severity:${severity}  (1-10)</p>
        `

    })
}

module.exports={
  sendAlertMail
}