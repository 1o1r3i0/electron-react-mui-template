import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import BlockIcon from '@mui/icons-material/Block';
import CheckIcon from '@mui/icons-material/Check';
import { IconButton, Tooltip, Typography } from '@mui/material';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Slide direction="up" ref={ref} {...props} />;
});

type Props = {
  userId: string;
  isDeleteConfirmDialogOpen: boolean;
  onClose: () => void;
  onClickDeleteButton: (userId: string) => void;
};

export default function DeleteConfirmDialog(props: Props) {
  const { userId } = props;
  const { isDeleteConfirmDialogOpen } = props;
  const { onClose } = props;
  const { onClickDeleteButton } = props;

  return (
    <div>
      <Dialog
        open={isDeleteConfirmDialogOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          <Typography variant="h5" component="div" color="error">
            削除確認
          </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            削除してよろしいでしょうか。
            <br />
            <Typography variant="caption" component="div">
              （※一度削除したデータは閲覧できなくなります。）
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Tooltip title="キャンセル">
            <IconButton aria-label="cancel" onClick={onClose}>
              <BlockIcon color="action" />
            </IconButton>
          </Tooltip>
          <Tooltip title="実行">
            <IconButton
              aria-label="cancel"
              onClick={() => {
                onClickDeleteButton(userId);
              }}
            >
              <CheckIcon color="error" />
            </IconButton>
          </Tooltip>
        </DialogActions>
      </Dialog>
    </div>
  );
}
