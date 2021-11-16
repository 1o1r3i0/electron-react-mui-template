import Contact from '../classes/Contact';

const contactList: Contact[] = [];
const contactListRawJson: { contactList: Contact[] } = JSON.parse(
  JSON.stringify(require('./mockDataJson/contactList.json'))
);

const contactListJson: Contact[] = contactListRawJson.contactList;

for (let i = 0; i < contactListJson.length; i += 1) {
  console.log(contactListJson[i].userId);
  const contactInfo = new Contact(
    contactListJson[i].userId,
    contactListJson[i].userName,
    contactListJson[i].userNameKana,
    contactListJson[i].userBirthday,
    Number(contactListJson[i].userRelationship),
    contactListJson[i].addressZipCode,
    contactListJson[i].addressPrefectureCode,
    contactListJson[i].addressPrefectureName,
    contactListJson[i].addressCity,
    contactListJson[i].addressStreet,
    contactListJson[i].phoneNumber,
    contactListJson[i].mobilePhoneNumber,
    contactListJson[i].mailAddress,
    Number(contactListJson[i].hiddenFlg),
    contactListJson[i].memo
  );
  contactList.push(contactInfo);
}

export default contactList;
