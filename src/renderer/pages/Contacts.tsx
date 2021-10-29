import { withRouter } from 'react-router-dom';
import ContactTables from '../components/ContactTables';

function Contacts() {
  return (
    <div>
      <ContactTables />
    </div>
  );
}

export default withRouter(Contacts);
