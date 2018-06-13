/**
 * 生成页码数组
 * @author Qizhong Fang <qizhong.fang@outlook.com>
 * @version 0.0.1
 */

/**
 * 生成带省略号的页码数组
 * @param {Number} showPageCount - 显示页码数量
 * @param {Number} currentPage - 当前页码
 * @param {Number} pageCount - 总页面数
 * @returns {Array} 页码数组
 */
function generatePagination({
  showPageCount = 10,
  currentPage = 1,
  pageCount = 10
} = {}) {
  if (showPageCount < 1 || currentPage < 1 || pageCount < 1) {
    throw new Error('Pagination options can not be negative.');
    return;
  }
  if(currentPage > pageCount){
    throw new Error('Current page can not greater than page count.');
    return;
  }
  const ELLIPSIS = '...';
  let pages = [],
      omit = pageCount - showPageCount,
      omitLeft, omitRight;
  let showPageMedian = Math.floor(showPageCount / 2);

  if (pageCount > showPageCount) {
    if (currentPage > showPageMedian) {
      omitLeft = Math.min(currentPage - showPageMedian, omit);
      omitRight = omit - omitLeft;
    } else {
      omitLeft = 0;
      omitRight = omit;
    }
    for (let i = 1; i <= pageCount; i++) {
      if (omitLeft > 0) {
        if(i > 1 && i < omitLeft + 3) {
          continue;
        }
      }
      if (omitRight > 0) {
        if(i < pageCount && i > pageCount - omitRight - 2) {
          continue;
        }
      }
      pages.push(i);
    }
    if (omitLeft > 0) {
      pages.splice(1, 0, ELLIPSIS);
    }
    if (omitRight > 0) {
      pages.splice(pages.length - 1, 0, ELLIPSIS);
    }
    return pages;
  } else {
    for (let i = 1; i <= pageCount; i++) {
      pages.push(i);
    }
  }
  return pages;
}

module.exports = generatePagination;
