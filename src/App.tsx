import Img1 from './assets/1.png';
import Img2 from './assets/2.png';
import Img3 from './assets/3.jpeg';
import Img4 from './assets/4.png';
import Img5 from './assets/5.png';
import Img6 from './assets/6.png';
import Img7 from './assets/7.png';
import Img8 from './assets/8.png';
import Img9 from './assets/9.png';
import Img10 from './assets/10.png';
import { SingleTextContainer } from './components/middleText/SingleTextContainer';
import { TextTop } from './components/textTop/TextTop';
import { TextLeft } from './components/textLeft/TextLeft';
import { MiddleImg } from './components/middleImg/MiddleImg';
import { Price } from './components/price/Price';
import { data } from './constants';
import { useEffect, useState } from 'react';

export type DATATYPE = (typeof data)['data1'] & {
  priceMixed?: string;
  mixedTitle?: string;
};

export const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isMobile;
};

function App() {
  const isMobile = useIsMobile();

  return (
    <div className='page'>
      <SingleTextContainer
        imgLeft
        img={Img1}
        title='СЕЛЕКЦІЯ ПОСЛУГ'
        subtitle='ПЕРСОНАЛЬНОЇ СТИЛІСТКИ КРІСТІНИ ДУТЧАК'
      />
      <MiddleImg img={Img2} />
      <TextTop img={Img3} />
      <SingleTextContainer
        img={Img4}
        title={isMobile ? 'ПОСЛУГИ' : 'ПОСЛУГИ, ЯКІ НАДАЮ'}
      />
      <Price img={Img5} data={data.data1} />
      <Price img={Img6} data={data.data6} />
      <Price img={Img7} data={data.data7} />
      <Price img={Img8} data={data.data1} />
      <Price img={Img9} data={data.data1} />
      <TextLeft img={Img10} />
    </div>
  );
}

export default App;
