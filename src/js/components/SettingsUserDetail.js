import { makeError } from "../utils/validate.js";

function SettingsUserDetail({ $target }) {
  if (!(this instanceof SettingsUserDetail)) {
    throw makeError(
      "New 키워드 없이 실행했습니다. In SettingsUserDetail",
      "New키워드에러"
    );
  }
  try {
    this.$target = $target;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export default SettingsUserDetail;
