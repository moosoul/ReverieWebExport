export const getImgSize = async (
  imgUrl: string
): Promise<{ width: number; height: number }> => {
  // 创建对象
  const img = new Image()

  // 改变图片的src
  img.src = imgUrl

  // 判断是否有缓存
  if (img.complete) {
    return {
      width: img.width,
      height: img.height,
    }
  } else {
    return new Promise((resolve, reject) => {
      img.onload = () => {
        resolve({
          width: img.width,
          height: img.height,
        })
      }
    })
  }
}
