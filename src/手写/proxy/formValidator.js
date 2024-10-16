const formRules = {
  username: [
    { type: "isString", message: "Username must be a string", condition: {} },
    {
      type: "isLength",
      message: "Username must be between 5 and 15 characters",
      condition: { min: 5, max: 15 },
    },
  ],
  password: [
    { type: "isString", message: "Password must be a string", condition: {} },
    {
      type: "isLength",
      message: "Password must be at least 8 characters",
      condition: { min: 8 },
    },
    {
      type: "matches",
      message: "Password must contain at least one uppercase letter",
      condition: /[A-Z]/,
    },
  ],
  email: [
    { type: "isString", message: "Email must be a string", condition: {} },
    { type: "isEmail", message: "Invalid email format", condition: {} },
  ],
};

const Validator = (rules) => {
  return new Proxy(
    {},
    {
      set(target, property, value) {
        const rule = rules[property];
        if (rule) {
          for (const validation of rule) {
            const { type, message, condition } = validation;

            debugger;

            // 使用Reflect进行验证
            const  = 
            const isValid = Reflect.get();

            if (!isValid) {
              console.error(`Validation failed for ${property}: ${message}`);
              return false;
            }
          }
        }
        // 符合规则，设置值
        target[property] = value;
        return true;
      },
    }
  );
};


// 使用表单验证器
const formValidator = Validator(formRules);

// 模拟表单数据
const formData = {
  username: 'john_doe',
  password: 'SecurePass123',
  email: 'john.doe@example.com',
};

// 验证表单数据
for (const field in formData) {
  formValidator[field] = formData[field];
}
