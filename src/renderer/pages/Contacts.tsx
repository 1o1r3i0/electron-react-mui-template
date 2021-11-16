import { withRouter } from 'react-router-dom';
import { useState } from 'react';
import ContactDialog from '../components/ContactDialog';
import ContactTables from '../components/ContactTables';
import DeleteConfirmDialog from '../components/DeleteConfirmDialog';
import contactList from '../mockData/getMockDataContactList';
import Contact from '../classes/Contact';

function Contacts() {
  const mockDataContactList: Contact[] = contactList;
  let userId = '';
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [isDeleteConfirmDialogOpen, setDeleteConfirmDialogOpen] =
    useState(false);
  const [contactInfo, setContactInfo] = useState<Contact>(
    mockDataContactList[0]
  );

  const onDialogButtonClick = (index: number) => {
    setContactInfo(mockDataContactList[index]);
    setDialogOpen(!isDialogOpen);
  };

  const onClickDeleteConfirmButton = (targetUserId: string) => {
    userId = targetUserId;
    setDialogOpen(!isDialogOpen);
    setDeleteConfirmDialogOpen(!isDeleteConfirmDialogOpen);
  };

  const dialogClose = () => {
    setDialogOpen(!isDialogOpen);
  };

  const deleteConfirmDialogClose = () => {
    setDeleteConfirmDialogOpen(!isDeleteConfirmDialogOpen);
  };

  return (
    <div>
      <ContactTables
        mockDataContactList={mockDataContactList}
        onClick={onDialogButtonClick}
      />
      <ContactDialog
        isDialogOpen={isDialogOpen}
        contactInfo={contactInfo}
        onClose={dialogClose}
        onClickDeleteConfirmButton={onClickDeleteConfirmButton}
      />
      <DeleteConfirmDialog
        userId={userId}
        isDeleteConfirmDialogOpen={isDeleteConfirmDialogOpen}
        onClose={deleteConfirmDialogClose}
        onClickDeleteButton={deleteConfirmDialogClose}
      />
    </div>
  );
}

export default withRouter(Contacts);
