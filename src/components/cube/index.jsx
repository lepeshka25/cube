import React from 'react';
import './style.css'

const Cube = () => {
  (function () {
    var rotateY = 0,
      rotateX = 0;

    document.onkeydown = function (e) {
      if (e.keyCode === 37) rotateY -= 4
      else if (e.keyCode === 38) rotateX += 4
      else if (e.keyCode === 39) rotateY += 4
      else if (e.keyCode === 40) rotateX -= 4

      document.querySelector('.cube').style.transform =
        'rotateY(' + rotateY + 'deg)'+
        'rotateX(' + rotateX + 'deg)';
    }
  })();

  return (
    <div className='container'>
      <div className="cube">
        <div className="item front">
          <img src="https://wallpapershome.ru/images/wallpapers/sakura-3840x2160-4k-hd-rozoviy-vesna-cveti-10302.jpg" alt=""/>
        </div>
        <div className="item back">
          <img src="https://p4.wallpaperbetter.com/wallpaper/683/259/770/sakura-tree-kyoto-hd-wallpaper-preview.jpg" alt=""/>
        </div>
        <div className="item right">
          <img src="https://images6.alphacoders.com/106/thumb-1920-1064067.jpg" alt=""/>
        </div>
        <div className="item left">
          <img src='https://p4.wallpaperbetter.com/wallpaper/683/259/770/sakura-tree-kyoto-hd-wallpaper-preview.jpg' alt=""/>
        </div>
        <div className="item top">
          <img src="https://wallpaper.dog/large/20492872.jpg" alt=""/>
        </div>
        <div className="item bottom">
          <img src="https://img.wallpapersafari.com/desktop/1536/864/86/43/cflJmW.jpg" alt=""/>
        </div>
      </div>
    </div>
  );
};

export default Cube;