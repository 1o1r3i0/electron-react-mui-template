import { withRouter } from 'react-router-dom';
import Typography from '@mui/material/Typography';

function AddContacts() {
  return (
    <div>
      <Typography variant="h6" gutterBottom component="div">
        新規作成
      </Typography>
    </div>
  );
}

export default withRouter(AddContacts);
