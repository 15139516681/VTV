/*
 * @Description: eslint 校验
 * @Author: ZYH
 * @Date: 2021-08-18 23:38:38
 */
module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ['plugin:vue/essential', 'airbnb-base', 'plugin: prettier/recommended'],
    parserOptions: {
        ecmaVersion: 12,
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    plugins: ['vue', '@typescript-eslint'],
    rules: {
        'no-console': true,
        'no-restricted-syntax': [
            'error',
            {
                selector:
                    "CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
                message: 'Unexpected property on console object was called',
            },
        ],
    },
};
