interface IContact {
  // ユーザID
  user_id: number;
  // ユーザ名
  user_name: string;
  // ユーザ名（カナ）
  user_name_kana: string;
  // ユーザ生年月日
  user_birthday: string;
  // ユーザ関係性
  user_relationship: number;
  // 住所・郵便番号
  address_zip_code: string;
  // 住所・都道府県
  address_prefecture: string;
  // 住所・市区町村
  address_city: string;
  // 住所・丁目番地
  address_street: string;
  // 電話番号
  phone_number: string;
  // 携帯電話番号
  mobile_phone_number: string;
  // メールアドレス
  mail_address: string;
  // 非表示フラグ（0: 表示, 1: 非表示）
  hidden_flg: number;
  // 備考（メモ）
  memo: string;
}

export default IContact;
