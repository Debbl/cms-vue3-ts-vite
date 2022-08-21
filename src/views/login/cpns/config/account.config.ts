import type { FormRules } from 'element-plus';

// 用户名 密码 校验规则
const rules: FormRules = {
  username: [
    { required: true, message: '请输入用户名' },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '用户名格式不正确',
    },
  ],
  password: [
    { required: true, message: '请输入密码' },
    { pattern: /^[a-z0-9]{5,}/, message: '密码格式不正确' },
  ],
};

export { rules };
