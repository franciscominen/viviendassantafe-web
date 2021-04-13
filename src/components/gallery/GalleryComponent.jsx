import React from 'react';
import "./styles.scss";
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'assets/img/gallery/1.svg',
    thumbnail: 'assets/img/gallery/1.svg',
  },
  {
    original: 'assets/img/gallery/2.svg',
    thumbnail: 'assets/img/gallery/2.svg',
  },
  {
    original: 'assets/img/gallery/3.svg',
    thumbnail: 'assets/img/gallery/3.svg',
  },
  {
    original: 'assets/img/gallery/4.svg',
    thumbnail: 'assets/img/gallery/4.svg',
  },
  {
    original: 'assets/img/gallery/5.svg',
    thumbnail: 'assets/img/gallery/5.svg',
  },
  {
    original: 'assets/img/gallery/6.svg',
    thumbnail: 'assets/img/gallery/6.svg',
  },
  {
    original: 'assets/img/gallery/7.svg',
    thumbnail: 'assets/img/gallery/7.svg',
  },
  {
    original: 'assets/img/gallery/8.svg',
    thumbnail: 'assets/img/gallery/8.svg',
  },
  {
    original: 'assets/img/gallery/9.svg',
    thumbnail: 'assets/img/gallery/9.svg',
  },
  {
    original: 'assets/img/gallery/10.svg',
    thumbnail: 'assets/img/gallery/10.svg',
  },
  {
    original: 'assets/img/gallery/11.svg',
    thumbnail: 'assets/img/gallery/11.svg',
  },
  {
    original: 'assets/img/gallery/12.svg',
    thumbnail: 'assets/img/gallery/12.svg',
  },
  {
    original: 'assets/img/gallery/13.svg',
    thumbnail: 'assets/img/gallery/13.svg',
  },
  {
    original: 'assets/img/gallery/14.svg',
    thumbnail: 'assets/img/gallery/14.svg',
  },
  {
    original: 'assets/img/gallery/15.svg',
    thumbnail: 'assets/img/gallery/15.svg',
  },
  {
    original: 'assets/img/gallery/16.svg',
    thumbnail: 'assets/img/gallery/16.svg',
  },
  {
    original: 'assets/img/gallery/17.svg',
    thumbnail: 'assets/img/gallery/17.svg',
  },
  {
    original: 'assets/img/gallery/18.svg',
    thumbnail: 'assets/img/gallery/18.svg',
  },
  {
    original: 'assets/img/gallery/19.svg',
    thumbnail: 'assets/img/gallery/19.svg',
  },
  {
    original: 'assets/img/gallery/20.svg',
    thumbnail: 'assets/img/gallery/12.svg',
  },
  {
    original: 'assets/img/gallery/21.svg',
    thumbnail: 'assets/img/gallery/21.svg',
  }
];

const GalleryComponent = () => {
  return (
    <>
      <ImageGallery items={images} />
    </>
  )
}

export default GalleryComponent