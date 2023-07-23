import serviceImg from '../../../assets/other/459c2276d5117b2447f9f8e1e3e69d24.png';
const Services = () => {
  return (
    <div className="text-center mt-32 mb-32">
      <div className="stats shadow bg-slate-600 rounded-none text-white -mb-28">
        <div className="stat hover:bg-[#ee5253]">
          <div className="text-secondary">
            
          </div>
          <div className="">Downloads</div>
          <div className="stat-value">31K</div>
          <div className="">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat bg-[#ee5253]">
          <div className="text-secondary">
            
          </div>
          <div className="">New Users</div>
          <div className="stat-value">4,200</div>
          <div className="">↗︎ 400 (22%)</div>
        </div>

        <div className="stat hover:bg-[#ee5253]">
          <div className="text-secondary">
            
          </div>
          <div className="">New Registers</div>
          <div className="stat-value">1,200</div>
          <div className="">↘︎ 90 (14%)</div>
        </div>
      </div>
      <div className='lg:flex justify-center items-center bg-slate-800 h-[650px] gap-'>
        <div className='mt-28 lg:mt-40'>
            <img src={serviceImg} alt="image" />
        </div>
        <div className='text-white'>
            <h1 className='text-2xl lg:text-3xl font-bold'>WHY CHOOSE ADMISSION HERE?</h1>
            <p className='text-3xl hover:text-[#ee5253]'>- Online learning content</p>
            <p className='text-2xl hover:text-[#ee5253]'>- Faster, effective implement</p>
            <p className='text-xl hover:text-[#ee5253]'>- Better acceptance among</p>
            <p className='text-lg hover:text-[#ee5253]'>- Virtual Live Classroom</p>
            <p className='text-base hover:text-[#ee5253]'>- SAP certification</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
