import Contact from '../classes/Contact';

const contactList: Contact[] = [];
const contactListRawJson: { contactList: Contact[] } = JSON.parse(
  JSON.stringify(require('./mockDataJson/contactList.json'))
);

const contactListJson: Contact[] = contactListRawJson.contactList;

for (let i = 0; i < contactListJson.length; i += 1) {
  const contactInfo = new Contact(
    Number(contactListJson[i].user_id),
    contactListJson[i].user_name,
    contactListJson[i].user_name_kana,
    contactListJson[i].user_birthday,
    Number(contactListJson[i].user_relationship),
    contactListJson[i].address_zip_code,
    contactListJson[i].address_prefecture_code,
    contactListJson[i].address_prefecture_name,
    contactListJson[i].address_city,
    contactListJson[i].address_street,
    contactListJson[i].phone_number,
    contactListJson[i].mobile_phone_number,
    contactListJson[i].mail_address,
    Number(contactListJson[i].hidden_flg),
    contactListJson[i].memo
  );
  contactList.push(contactInfo);
}

export default contactList;
