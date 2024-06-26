import { useState,} from "react";
import { Dialog, Box, Typography, styled, InputBase, TextField, Button } from "@mui/material";
import {  Close, DeleteOutline } from "@mui/icons-material";
import useApi from "../hooks/useApi";
import { API_URLS } from "../services/api.urls";

const dialogStyle = {
    height: '90%',
    width: '80%',
    maxWidth: '90%',
    maxHeight: '90%',
    boxShadow: 'none',
    borderRadius: '10px 10px 0 0'
}

const Header = styled(Box) ({
    display: 'flex',
    justifyContent: "space-between",
    padding: '10px 15px',
    background: '#f2f6fc',
    '& > p' :{
        fontSize: 14,
        fontWeight: 500,
    }
});

const RecipientsWrapper = styled(Box) ({
        display: 'flex',
        flexDirection: 'column',
        padding: '0 15px',
        '& > div' : {
            fontSize: 14,
            borderBottom: '1px solid #F5F5F5',
            marginTop: 10
        }
})

const Footer = styled(Box) ({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 15px',
})

const SendButton = styled(Button)({
    background: '#0B57D0',
    color: '#fff',
    fontWeight: 500,
    textTransform: 'none',
    borderRadius: 18,
    width: 100
})

const ComposeMail = ({ openDialog, setOpenDialog }) => {
    const [data, setData] = useState({});
    const sentEmailService = useApi(API_URLS.saveSentEmail);

    const config = {
            Host : "smtp.elasticemail.com",
            Username : process.env.REACT_APP_USERNAME,
            Password : process.env.REACT_APP_PASSWORD,
            Port: 2525,
        }

    const closeComposeMail = (e) => {
        e.preventDefault();

        setOpenDialog(false);

    }

    const sendMail = (e) => {
            e.preventDefault();

     if (window.Email) {
        window.Email.send({
            ...config,
            To : data.to,
            From : "arthanariselvam7099@gmail.com",
            Subject : data.subject,
            Body : data.body
        }).then(
          message => alert(message)
        );
    }
    const payload = {
        to: data.to,
        from: "arthanariselvam7099@gmail.com",
        subject: data.subject,
        body: data.body,
        data: new Date(),
        image: '',
        name: 'Arthanari Selvam',
        starred: false,
        type: 'sent'
    }

    sentEmailService.call(payload);

    if (!sentEmailService.error) {
        setOpenDialog(false);
        setData({});
    } else {
        
    }
    
        setOpenDialog(false);
    }

    const onValueChange = (e) => {
        setData ({ ...data, [e.target.name]: e.target.value })
        console.log(data);
    }

    return (
        <Dialog
         open={openDialog}
         PaperProps={{ sx: dialogStyle }}
         
        >
            <Header>
                <Typography>New Message</Typography>
                <Close fontSize="small" onClick={(e) => closeComposeMail(e)}/>
            </Header>
            <RecipientsWrapper>
                <InputBase placeholder="Recipients" name="to" onChange={(e) => onValueChange(e)}/>
                <InputBase placeholder="Subject"  name="subject" onChange={(e) => onValueChange(e)}/>
            </RecipientsWrapper>
            <TextField 
                   multiline
                   rows={14}
                   sx={{ '& .MuiOutlinedInput-notchedOutline': { border: 'none'}}}
                   onChange={(e) => onValueChange(e)}
                   name="body"
            />
            <Footer>
                <SendButton onClick={(e) => sendMail(e)}>Send</SendButton>
                <DeleteOutline onClick={() => setOpenDialog(false)} />
            </Footer>
        </Dialog>
    )

}
export default ComposeMail;