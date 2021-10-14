import React from 'react';
import ReactImageGallery from 'react-image-gallery';
import './News.style.scss';

const NewsPage = () => {

    const images = [
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
    ];

    return (
        <div className='NewsPage'>
            <div className='TitleHolder'>
                <h2>
                    School News
                </h2>
            </div>
            <div className='NewsImageHolder'>
                <ReactImageGallery items={images} />
            </div>
        </div>
    )
}

export default NewsPage;
