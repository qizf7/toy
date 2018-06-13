const expect = require('chai').expect;

const validate = require('../validateString');

const {singleValidate, sequenceVlidate} = validate;

describe.only('validateString', function() {
  let validArr = [{
      value: '123',
      validations: [
        {
          msg: '请输入',
          method: 'require'
        },
        {
          msg: '身份证号错误',
          method: 'identity'
        },
        {
          msg: '请输入英文',
          method: 'en'
        }
      ]
    },
    {
      value: 'abc',
      validations: [
        {
          msg: '请输入',
          method: 'require'
        },
        {
          msg: '身份证号错误',
          method: 'identity'
        },
        {
          msg: '请输入英文',
          method: 'en'
        }
      ]
    }]
  it('type: single', function() {
    let errors = validate(validArr);
    expect(errors).to.be.deep.equal(['身份证号错误', '请输入英文']);
  });

  it('type: multiple', function() {
    let errors = validate(validArr, {type: 'multiple'});
    expect(errors).to.be.deep.equal([
      ['身份证号错误', '请输入英文'],
      ['身份证号错误']
    ]);
  });
});
