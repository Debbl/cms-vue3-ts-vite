import type { FormRules } from "element-plus";

// 用户名 密码 校验规则
const rules: FormRules = {
  phoneNumber: [
    { required: true, message: "请输入手机号" },
    {
      pattern: /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/,
      message: "手机号格式不正确",
    },
  ],
  verifyCode: [
    { required: true, message: "请输入验证码" },
    { pattern: /^[a-z0-9]{5}/, message: "验证码格式不正确" },
  ],
};

export { rules };
