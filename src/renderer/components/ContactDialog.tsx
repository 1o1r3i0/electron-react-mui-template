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
  onClickDeleteConfirmButton: (user_id: string) => void;
};

const ContactDialog = (props: Props) => {
  const { contactInfo } = props;
  const { isDialogOpen } = props;
  const { onClose } = props;
  const { onClickDeleteConfirmButton } = props;

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
            <IconButton aria-label="delete" disabled>
              <PermContactCalendarOutlinedIcon color="primary" />
            </IconButton>
            {contactInfo.userName}
          </Typography>
          <Typography
            variant="caption"
            component="div"
            style={{ marginLeft: '40px' }}
          >
            {contactInfo.userNameKana}
          </Typography>
          <Typography variant="body1" component="div">
            <span style={{ marginRight: '15px' }}>
              <IconButton aria-label="delete" disabled>
                <PhoneOutlinedIcon color="primary" />
              </IconButton>
              <a href={`tel:${contactInfo.phoneNumber}`}>
                {contactInfo.phoneNumber}
              </a>
            </span>
            <span>
              <IconButton aria-label="delete" disabled>
                <PhoneIphoneOutlinedIcon color="primary" />
              </IconButton>
              <a href={`tel:${contactInfo.mobilePhoneNumber}`}>
                {contactInfo.mobilePhoneNumber}
              </a>
            </span>
          </Typography>
          <Typography variant="body1" component="div">
            <IconButton aria-label="delete" disabled>
              <EmailOutlinedIcon color="primary" />
            </IconButton>
            <a href={`mailto:${contactInfo.mailAddress}`}>
              {contactInfo.mailAddress}
            </a>
          </Typography>
          <Typography variant="body1" component="div">
            <IconButton aria-label="delete" disabled>
              <HouseOutlinedIcon color="primary" />
            </IconButton>
            <button
              type="button"
              className="link-style-btn"
              onClick={() => {
                window.open(
                  `https://maps.google.co.jp/maps?q=${
                    contactInfo.addressZipCode +
                    contactInfo.addressPrefectureName +
                    contactInfo.addressCity +
                    contactInfo.addressStreet
                  }`,
                  'GoogleMap',
                  'width=1280,height=720,noopener'
                );
                return false;
              }}
            >
              <span style={{ marginRight: '5px' }}>
                〒{contactInfo.addressZipCode}
              </span>
              {contactInfo.addressPrefectureName}
              {contactInfo.addressCity}
              {contactInfo.addressStreet}
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
        <Tooltip title="削除">
          <IconButton
            aria-label="delete"
            onClick={() => {
              onClickDeleteConfirmButton(contactInfo.userId);
            }}
          >
            <DeleteIcon color="error" />
          </IconButton>
        </Tooltip>
        <Tooltip title="編集">
          <IconButton aria-label="edit" color="primary">
            <EditIcon />
          </IconButton>
        </Tooltip>
      </DialogActions>
    </Dialog>
  );
};

export default ContactDialog;
