# generate pagination program

### 功能
> 通过显示页码长度，总页数，当前页码生成分页数组

### 用法
```javascript
let pagination;
 
pagination = generatePagination({
  showPageCount: 10,
  currentPage: 6,
  pageCount: 20
})

// [ 1, '...', 4, 5, 6, 7, 8, 9, '...', 20 ]
```

### 参数说明
* showPageCount 要显示页面数量
* currentPage 当前页码
* pageCount 总页数
