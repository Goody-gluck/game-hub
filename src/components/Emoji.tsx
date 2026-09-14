import bullsEye from '../assets/bulls-eye.webp';
import thumbsUp from '../assets/thumbs-up.webp';
import meh from '../assets/meh.webp';
import { Image, type ImageProps } from '@chakra-ui/react';

interface Props {
    rating: number;
}
const Emoji = ({ rating }: Props) => {
    if(rating < 3) return null;

    // the below is called an index signature, we are telling typescript compiler that this object can have any number of properties with string keys and string values. This is useful when we want to create a mapping between a set of keys and values, but we don't know the exact keys at compile time.
    const emojiMap: { [key: number]: ImageProps } = {
        3: {src: meh, alt: 'meh', boxSize: '25px'},
        4: {src: thumbsUp, alt: 'recommended', boxSize: '25px'},
        5: {src: bullsEye, alt: 'exceptional', boxSize: '35px'},
    }
  return (
    <Image {...emojiMap[rating]} boxSize={'25px'} marginTop={3} />
  )
}

export default Emoji