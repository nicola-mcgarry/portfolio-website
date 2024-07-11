import { Button } from '@mui/material';
import React from 'react';
import { IoMdDownload } from "react-icons/io";

const OpenCV: React.FC = () => {
    const pdfUrl = 'https://drive.google.com/file/d/1Y7Bt0jW27CmT-zu1AVtw95kOE4rVvwbi/view?usp=drive_link';

    const openCvNewTab = (url: string) => {
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.target = '_blank';

        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
    };

    return (
        <Button className='btn btn-primary mt-3 mb-3 me-3 text-capitalize' onClick={() => openCvNewTab(pdfUrl)}>
            <IoMdDownload className='me-1' /> Download CV
        </Button>
    );
};

export default OpenCV;