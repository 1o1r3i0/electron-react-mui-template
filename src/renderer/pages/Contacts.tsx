import { withRouter } from 'react-router-dom';
import { useState } from 'react';
import ContactDialog from '../components/ContactDialog';
import ContactTables from '../components/ContactTables';
import contactList from '../mockData/getMockDataContactList';
import Contact from '../classes/Contact';

const mockDataContactList: Contact[] = contactList;

function Contacts() {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [contactInfo, setContactInfo] = useState<Contact>(
    mockDataContactList[0]
  );

  const onDialogButtonClick = (index: number) => {
    setContactInfo(mockDataContactList[index]);
    setDialogOpen(!isDialogOpen);
  };

  const dialogClose = () => {
    setDialogOpen(!isDialogOpen);
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
      />
    </div>
  );
}

export default withRouter(Contacts);
