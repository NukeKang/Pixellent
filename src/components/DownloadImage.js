import React from 'react';

import { FaDownload } from 'react-icons/fa';

import useStore from '../store/store';
import exportAsImage from '../utils/exportAsImage';

import Button from './common/Button';
const DownloadImage = () => {
  const { gridRef } = useStore();
  return (
    <Button onClick={() => exportAsImage(gridRef.current, 'pixelImage')}>
      <FaDownload />
    </Button>
  );
};

export default DownloadImage;
