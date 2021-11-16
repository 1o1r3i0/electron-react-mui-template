interface IContact {
  // ユーザID
  userId: string;
  // ユーザ名
  userName: string;
  // ユーザ名（カナ）
  userNameKana: string;
  // ユーザ生年月日
  userBirthday: string;
  // ユーザ関係性
  userRelationship: number;
  // 住所・郵便番号
  addressZipCode: string;
  // 住所・都道府県コード
  addressPrefectureCode: string;
  // 住所・都道府県名
  addressPrefectureName: string;
  // 住所・市区町村
  addressCity: string;
  // 住所・丁目番地
  addressStreet: string;
  // 電話番号
  phoneNumber: string;
  // 携帯電話番号
  mobilePhoneNumber: string;
  // メールアドレス
  mailAddress: string;
  // 非表示フラグ（0: 表示, 1: 非表示）
  hiddenFlg: number;
  // 備考（メモ）
  memo: string;
}

export default IContact;
