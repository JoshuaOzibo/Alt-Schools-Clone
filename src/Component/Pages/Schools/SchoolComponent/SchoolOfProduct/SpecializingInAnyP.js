import React from 'react';
import { useState } from 'react';
//#01427a
  //#01b3ef
const SpecializingInAny = () => {
  const [ShowProductDesign, SetShowProductDesign] = useState(true);
const [ProductMarketing, setProductMarketing] = useState(false);
const [ProductManagemant, setProductManagemant] = useState(false);

const ClickProductDesign =() =>{
  SetShowProductDesign(true)
  setProductMarketing(false);
  setProductManagemant(false);
}
const ClickProductMarketing =() =>{
  SetShowProductDesign(false)
    setProductMarketing(true);
    setProductManagemant(false);

}
const ClickShowProductDesign =() =>{
  SetShowProductDesign(false)
    setProductMarketing(false);
    setProductManagemant(true);
}
//#01427a
  //#01b3ef
  return (
    <div className=' w-full px-5 overflow-hidden py-10'>
        <h2 className='md:text-4xl text-center pb-10 font-medium text-[#01427a] text-2xl'>Specialise in any of the following School of Product.</h2>

        <div className='flex md:w-[80%] p-2 container justify-center py-5 m-auto'>
             <button onClick={ClickProductDesign} className='border hover:bg-[#0092c3] text-[#01427a] hover:text-[#fff] rounded-md sm:px-8 p-2 font-semibold py-4' >Product Design</button>
            <button onClick={ClickProductMarketing } className='border hover:bg-[#0092c3] text-[#01427a] hover:text-[#fff] rounded-md sm:px-8 p-2 font-semibold py-4'>Product Marketing</button>
            <button onClick={ClickShowProductDesign} className='border hover:bg-[#0092c3] text-[#01427a] hover:text-[#fff] rounded-md sm:px-8 p-2 font-semibold py-4'>Product Managemant</button>
        </div>

        <div className=' lg:flex justify-between rounded-lg w-full md:w-[80%] p-5 m-auto bg-[#01427a] py-10'>
        { ShowProductDesign && <h2 className='font-bold hidden text-white lg:flex pb-3 md:text-3xl text-2xl'>Product Design</h2>}
        { ProductMarketing && <h2 className='font-bold hidden text-white lg:flex pb-3 md:text-3xl text-2xl'>Product Marketing</h2>}
        { ProductManagemant && <h2 className='font-bold hidden text-white lg:flex pb-3 md:text-3xl text-2xl'>Product Managemant</h2>}
            <div className='lg:w-[60%] w-full'>
            { ShowProductDesign && <div className=''>
            <h2 className='font-bold text-[#fff] pb-3 lg:hidden md:text-3xl text-2xl'>Product Design</h2>
                <p className='text-white'>
                Product designers are creative masterminds. This course will take you through the basic 
                principles of designing products that address user needs and align with business goals. 
                Product design involves the entire process of researching and identifying user problems, 
                crafting a solution to address these deficiencies and validating this solution with the 
                end-users
                </p>
            </div>}
            
           {ProductMarketing && <div>
            <h2 className='font-bold text-white pb-3 lg:hidden md:text-3xl text-2xl'>Product Marketing</h2>
                <p className='text-white'>
                Product Marketing is one of the highly sought after and lucrative non-code 
                tech skills. It sits at the intersection of product, sales and marketing. 
                Product marketers are product promoters. This means that they develop 
                unique campaign ideas to market a company’s products, services or overall 
                brand identity. It also entails masterful communication both internally 
                and externally within the organization. This program will take you through 
                how to develop a compelling positioning and multilayered messaging for a 
                product or product line, supporting the marketing funnel, managing 
                product-focused campaigns, organizing successful product launches, and 
                providing powerful sales enablement to empower the company to reach it’s 
                financial goals among others. You will be trained by top Marketing experts 
                through practical, real-world examples and clear explanations.
                </p>
            </div>}

            {ProductManagemant && <div>
                <h2 className='font-bold text-white pb-3 lg:hidden md:text-3xl text-2xl'>Product Managemant</h2>
                <p className='text-white'>
                Product managers are solution oriented. They are able to identify customer needs
                 and the business objectives such products will fulfill. By the end of this course 
                 you would have learnt the varying role of a Product Manager through different 
                 types and sizes of companies, the Product Life Cycle and how it applies to every 
                 product, the best practices of the work of product management - spanning market 
                 intelligence, strategy, new product development, and lifecycle management. 
                 In conclusion you will be able to take strong steps toward becoming a more 
                 strategic and impactful product manager.
                </p>
            </div>}
            </div>
        </div>
    </div>
  )
}

export default SpecializingInAny