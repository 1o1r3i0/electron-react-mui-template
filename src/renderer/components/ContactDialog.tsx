/* eslint-disable react/destructuring-assignment */
// import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';
import Contact from '../classes/Contact';

type Props = {
  isDialogOpen: boolean;
  contactInfo: Contact;
  onClose: () => void;
};

const ContactDialog = (props: Props) => {
  const { contactInfo } = props;
  const { isDialogOpen } = props;
  const { onClose } = props;

  return (
    <Dialog open={isDialogOpen} onClose={onClose} maxWidth="lg" fullWidth>
      <DialogTitle>
        <Typography variant="h5" component="div">
          連絡先詳細
        </Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography variant="h6" component="div">
            {contactInfo.user_name}
          </Typography>
          <Typography variant="caption" component="div">
            {contactInfo.user_name_kana}
          </Typography>
          <Typography variant="body1" component="div">
            <span style={{ marginRight: '15px' }}>
              TEL：{contactInfo.phone_number}
            </span>
            <span>携帯：{contactInfo.mobile_phone_number}</span>
          </Typography>
          <Typography variant="body1" component="div">
            MAIL：{contactInfo.mail_address}
          </Typography>
          <Typography variant="body1" component="div">
            住所：〒{contactInfo.address_zip_code}
            {contactInfo.address_prefecture_name}
            {contactInfo.address_city}
            {contactInfo.address_street}
          </Typography>
          {contactInfo.memo !== '' && (
            <Typography variant="body1" component="div">
              備考：{contactInfo.memo}
            </Typography>
          )}
        </DialogContentText>
        {/* <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
        /> */}
      </DialogContent>
      <DialogActions>
        {/* <Button onClick={dialogClose}>Cancel</Button>
        <Button onClick={dialogClose}>Subscribe</Button> */}
      </DialogActions>
    </Dialog>
  );
};

export default ContactDialog;
