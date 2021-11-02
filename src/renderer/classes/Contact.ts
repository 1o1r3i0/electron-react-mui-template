import IContact from '../interface/IContact';

class Contact implements IContact {
  user_id!: number;

  user_name!: string;

  user_name_kana!: string;

  user_birthday!: string;

  user_relationship!: number;

  address_zip_code!: string;

  address_prefecture_code!: string;

  address_prefecture_name!: string;

  address_city!: string;

  address_street!: string;

  phone_number!: string;

  mobile_phone_number!: string;

  mail_address!: string;

  hidden_flg!: number;

  memo!: string;

  constructor(
    user_id: number,
    user_name: string,
    user_name_kana: string,
    user_birthday: string,
    user_relationship: number,
    address_zip_code: string,
    address_prefecture_code: string,
    address_prefecture_name: string,
    address_city: string,
    address_street: string,
    phone_number: string,
    mobile_phone_number: string,
    mail_address: string,
    hidden_flg: number,
    memo: string
  ) {
    this.user_id = user_id;
    this.user_name = user_name;
    this.user_name_kana = user_name_kana;
    this.user_birthday = user_birthday;
    this.user_relationship = user_relationship;
    this.address_zip_code = address_zip_code;
    this.address_prefecture_code = address_prefecture_code;
    this.address_prefecture_name = address_prefecture_name;
    this.address_city = address_city;
    this.address_street = address_street;
    this.phone_number = phone_number;
    this.mobile_phone_number = mobile_phone_number;
    this.mail_address = mail_address;
    this.hidden_flg = hidden_flg;
    this.memo = memo;
  }
}

export default Contact;
