import banner from '../assets/banner-stack.png'
import bannerstack from '../assets/banner-stack.png'
const Banner = () => {
    return (<> <div className='flex gap-4 container mx-auto'>
            <div className="container mx-auto mt-30 pl-10">
            <h2 className='text-5xl font-bold'>Build Your Ideal<br></br> 
            <span className='bg-linear-to-r from-orange-500 via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent font-bold text-5xl'>Development Stack</span> </h2>
            <p className='my-4 text-[#8a8c91]'>Explore frontend,backend,database and tooling options,<br></br> compare them side by side,and put together the stack that fits your next<br></br> project.</p>
            <div className='flex gap-4'>
                <a href='' className="bg-linear-to-r from  from-[#F97316] to-[#EC4899] pt-2 px-5 rounded-md" > Explore Technologies</a>
                <a href='' className=" rounded-md px-13 pt-2 pb-3  border-2 border-[#E5E7EB] "  >Learn More</a>
{/*       7C3AED*/}
            </div>
        </div>

        <div className='w-180 mt-12 mr-30 '>
        <img src={bannerstack} ></img>
        </div>
    </div>

    </>

    );  
};

export default Banner;