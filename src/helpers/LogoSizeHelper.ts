 export function toDataURL(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      var reader = new FileReader();
      reader.onloadend = function () {
        callback(reader.result);
      };
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
  }

  export const handleLogoSizeLimitation = (base64) => {
    // Setup Error on higher size of 128px
    var sizeOf = require('image-size');
    var base64Data = base64.split(';base64,').pop();
    var img = Buffer.from(base64Data, 'base64');
    var dimensions = sizeOf(img);

    // Only proceed if image is equal to or less than 128
    if (dimensions.width > 128 || dimensions.height > 128) {
      console.log('Image size check failed... returning');
      return {
        success: 0,
        info: 'Image size check failed, Image should be 128X128PX',
      };
    }

    console.log("Image verification",base64Data.charAt(0));
    if (base64Data.charAt(0) === '/') {
      return {
        success: 1,
        info: 'Image checks passed',
      };
    } else if (base64Data.charAt(0) === 'i') {
      return {
        success: 1,
        info: 'Image checks passed',
      };
    } else {
      return {
        success: 0,
        info: 'Image extension should be jpg or png',
      };
    }
  };