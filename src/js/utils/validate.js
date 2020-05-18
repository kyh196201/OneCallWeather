const makeError = (msg, name, code) => {
  const err = new Error(msg);
  err.name = name;
  if (code) {
    err.code = code;
  }
  return err;
};

const validateString = (text) => {
  if (!text || typeof text !== "string") {
    const err = makeError(
      `값을 정확히 입력해주세요! 값 : ${text}`,
      "ParameterError",
      null
    );
    throw err;
  }
  return true;
};

const validate = {
  selector: (selector) => {
    validateString(selector);
    return true;
  },
  tag: (tagName) => {
    validateString(tagName);
    if (
      document.createElement(tagName).toString() ===
      "[object HTMLUnknownElement]"
    ) {
      const err = makeError(
        `태그 이름에 오류가 있습니다. 값 : ${tagName}`,
        "TagNameError"
      );
      throw err;
    }
    return true;
  },
};

export { validate, makeError };
