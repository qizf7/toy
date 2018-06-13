/**
 * unit test.
 * @author Qizhong Fang <qizhong.fang@outlook.com>
 */

const expect = require('chai').expect;
const generatePagination = require('../generatePagination');

describe('generatePagination', function() {
  const ELLIPSIS = '...';

  it('页码数小于显示页数，显示所有页码', function() {
    let pagination = generatePagination({
      showPageCount: 10,
      currentPage: 5,
      pageCount: 9
    })
    expect(pagination).to.be.deep.equal([
      1,2,3,4,5,6,7,8,9
    ]);
  });
  it('页码数等于显示页数，显示所有页码', function() {
    let pagination = generatePagination({
      showPageCount: 10,
      currentPage: 9,
      pageCount: 10
    })
    expect(pagination).to.be.deep.equal([
      1,2,3,4,5,6,7,8,9,10
    ]);
  });
  it('总页数大于显示页数，当前页 <= 显示页数／2，只显示末尾省略号补位', function() {
    let pagination = generatePagination({
      showPageCount: 10,
      currentPage: 5,
      pageCount: 20
    })
    expect(pagination[pagination.length -2]).to.be.equal(ELLIPSIS);
    expect(pagination[1]).to.not.equal(ELLIPSIS);

  });
  it('总页数大于显示页数，当前页 >= 总页数 - 显示页数/2，只显示前面省略号补位', function() {
    let pagination = generatePagination({
      showPageCount: 10,
      currentPage: 15,
      pageCount: 20
    })
    expect(pagination[1]).to.be.equal(ELLIPSIS);
    expect(pagination[pagination.length -2]).to.not.equal(ELLIPSIS);
  });
  it('总页数大于显示页数，当前页 > 显示页数／2 && 当前页 < 总页数 - 显示页数/2，显示前后省略号补位', function() {
    let pagination = generatePagination({
      showPageCount: 10,
      currentPage: 6,
      pageCount: 20
    })
    expect(pagination[1]).to.be.equal(ELLIPSIS);
    expect(pagination[pagination.length -2]).to.be.equal(ELLIPSIS);
  });

});
