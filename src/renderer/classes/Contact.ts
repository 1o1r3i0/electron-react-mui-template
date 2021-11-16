import IContact from '../interface/IContact';

class Contact implements IContact {
  userId!: string;

  userName!: string;

  userNameKana!: string;

  userBirthday!: string;

  userRelationship!: number;

  addressZipCode!: string;

  addressPrefectureCode!: string;

  addressPrefectureName!: string;

  addressCity!: string;

  addressStreet!: string;

  phoneNumber!: string;

  mobilePhoneNumber!: string;

  mailAddress!: string;

  hiddenFlg!: number;

  memo!: string;

  constructor(
    userId: string,
    userName: string,
    userNameKana: string,
    userBirthday: string,
    userRelationship: number,
    addressZipCode: string,
    addressPrefectureCode: string,
    addressPrefectureName: string,
    addressCity: string,
    addressStreet: string,
    phoneNumber: string,
    mobilePhoneNumber: string,
    mailAddress: string,
    hiddenFlg: number,
    memo: string
  ) {
    this.userId = userId;
    this.userName = userName;
    this.userNameKana = userNameKana;
    this.userBirthday = userBirthday;
    this.userRelationship = userRelationship;
    this.addressZipCode = addressZipCode;
    this.addressPrefectureCode = addressPrefectureCode;
    this.addressPrefectureName = addressPrefectureName;
    this.addressCity = addressCity;
    this.addressStreet = addressStreet;
    this.phoneNumber = phoneNumber;
    this.mobilePhoneNumber = mobilePhoneNumber;
    this.mailAddress = mailAddress;
    this.hiddenFlg = hiddenFlg;
    this.memo = memo;
  }
}

export default Contact;
