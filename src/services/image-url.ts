import noImage from '@/assets/no-image-placeholder.webp';

// getting optimized images to avoid loading that takes time
const getCroppedImageUrl = (url: string) => {
    // becuase it is a static asset we want to deploy with the app, we can import it and use it as a fallback image when the url is null or undefined, instead of doing ..assets
    if(!url) return noImage;
    const target = 'media/';
    const index = url.indexOf(target) + target.length;
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
}

export default getCroppedImageUrl;