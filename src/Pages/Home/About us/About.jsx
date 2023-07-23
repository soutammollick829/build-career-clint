
import { Slide } from 'react-awesome-reveal';
import aboutImg from '../../../assets/about image/mimi-thian-vdXMSiX-n6M-unsplash.jpg';
const About = () => {
    return (
        <div className='lg:flex justify-center gap-10 mt-20 mx-10 mb-20'>
            <div className='lg:w-1/2'>
                <Slide>
                <img className='rounded-2xl' src={aboutImg} alt="image" />
                </Slide>
            </div>
            <div className='lg:w-1/2'>
                <h2 className='text-2xl font-semibold border-b-4 border-[#ee5253] w-28 mb-5 mt-10 lg:mt-0'>About us</h2>
                <p>Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut  quis nostrud <span className='text-[#ee5253] font-semibold'>Top collages</span> ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.in vulputate velit esse molestie consequat.</p>
                <br />
                <p>Accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.<span className='text-[#ee5253] font-semibold'>Admission</span> cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</p>
            </div>
        </div>
    );
};

export default About;