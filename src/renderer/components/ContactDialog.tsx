import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
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
        <Typography
          variant="h5"
          component="div"
          className="dialog-header-typography"
        >
          連絡先詳細
        </Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography variant="h6" component="div">
            <IconButton aria-label="delete" disabled color="primary">
              <PermContactCalendarOutlinedIcon />
            </IconButton>
            {contactInfo.user_name}
          </Typography>
          <Typography
            variant="caption"
            component="div"
            style={{ marginLeft: '40px' }}
          >
            {contactInfo.user_name_kana}
          </Typography>
          <Typography variant="body1" component="div">
            <span style={{ marginRight: '15px' }}>
              <IconButton aria-label="delete" disabled color="primary">
                <PhoneOutlinedIcon />
              </IconButton>
              <a href={`tel:${contactInfo.phone_number}`}>
                {contactInfo.phone_number}
              </a>
            </span>
            <span>
              <IconButton aria-label="delete" disabled color="primary">
                <PhoneIphoneOutlinedIcon />
              </IconButton>
              <a href={`tel:${contactInfo.mobile_phone_number}`}>
                {contactInfo.mobile_phone_number}
              </a>
            </span>
          </Typography>
          <Typography variant="body1" component="div">
            <IconButton aria-label="delete" disabled color="primary">
              <EmailOutlinedIcon />
            </IconButton>
            <a href={`mailto:${contactInfo.mail_address}`}>
              {contactInfo.mail_address}
            </a>
          </Typography>
          <Typography variant="body1" component="div">
            <IconButton aria-label="delete" disabled color="primary">
              <HouseOutlinedIcon />
            </IconButton>
            <button
              type="button"
              className="link-style-btn"
              onClick={() => {
                window.open(
                  `https://maps.google.co.jp/maps?q=${
                    contactInfo.address_zip_code +
                    contactInfo.address_prefecture_name +
                    contactInfo.address_city +
                    contactInfo.address_street
                  }`,
                  'GoogleMap',
                  'width=1280,height=720,noopener'
                );
                return false;
              }}
            >
              <span style={{ marginRight: '5px' }}>
                〒{contactInfo.address_zip_code}
              </span>
              {contactInfo.address_prefecture_name}
              {contactInfo.address_city}
              {contactInfo.address_street}
            </button>
          </Typography>
          {contactInfo.memo !== '' && (
            <Typography variant="body1" component="div">
              備考：{contactInfo.memo}
            </Typography>
          )}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Edit">
          <IconButton aria-label="edit" color="primary">
            <EditIcon />
          </IconButton>
        </Tooltip>
      </DialogActions>
    </Dialog>
  );
};

export default ContactDialog;
