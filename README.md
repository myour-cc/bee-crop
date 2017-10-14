# bee-crop
传统的图片裁剪是每裁剪一次，就需要存储对应的图片资源，当裁剪比较频繁时会造成大量的资源浪费。解决此问题，可以仅存储裁剪坐标数据，如此一来，无论源图片被裁剪多少次，图片资源永远唯一，避免了资源的浪费。

一种方法是在服务器端实现，坐标信息拼接进图片的`url`里面，后端服务返回所需的图片。

另一种方法是在客户端（web）实现，利用`canvas`生成裁剪图片

## 引入
- npm

```bash
npm install bee-crop
# or
cnpm install bee-crop
# or
yarn add bee-crop
```

```javascript
import 'bee-crop'
```

- script

```html
<script src="https://unpkg.com/bee-crop"></script>
```
## 参数
| 属性     | 类型     | 解释             |
| :----- | :----- | :------------- |
| src    | string | 源图片链接          |
| x      | number | 裁剪相对于源图片`x`轴距离 |
| y      | number | 裁剪相对于源图片`y`轴距离 |
| width  | number | 截取宽度           |
| height | number | 截取高度           |

## 使用
```javascript
BeeCrop({
  "src": "https://fengyuanchen.github.io/cropperjs/images/picture.jpg",
  "x": 128,
  "y": 72,
  "width": 1024,
  "height": 576
}).then((base64) => {
  document.querySelector('img').src = base64
})
```

## 案例
[example](https://codepen.io/dasoncheng/pen/mBGGgM)

## 更多
需要添加功能或者存在 `bug` 请提交 [`issues`](https://github.com/myour-cc/bee-crop/issues)，在空余时间会尽快处理。
