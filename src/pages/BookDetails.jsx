
import React from 'react';
import { Link } from 'react-router';

const BookDetails = () => {
    return (
        <div className='border-2 container mx-auto h-300 my-20 flex lg:flex-row flex-col justify-center gap-4 pt-8'>

            <div className='lg:w-[30%] w-[95%] h-[95%]  lg:h-[60%] '>
                <img
                    className='w-full h-full rounded-sm shadow-4xl shadow-amber-200  '
                    src="https://th.bing.com/th/id/OIP.PoJkOCVEIeVPuLPCFpZliwHaLG?w=118&h=180&c=7&r=0&o=7&pid=1.7&rm=3" alt="" />
            </div>
            <div className='lg:w-[49%] w-full border-2 border-red-400  '>
                <div className=''>
                    <h2 className='text-[1.5rem] font-medium mb-2 '>Star Wars Lightsaber Forge Yoda Electronic Lightsaber</h2>
                    <p className='text-[16px] text-[#FF005E] font-medium mb-2 '>Author:Alauddin Al Azad</p>
                    <p className='text-[16px] mb-2'>Category:Programming</p>
                    <div className='flex flex-row gap-2 text-gray-400'>
                        <span>0 star</span>
                        <span>0 book</span>
                    </div>

                    <div className='my-2'>
                        <h3 className='text-2xl font-semibold'>Your Details</h3>
                        <p className='font-medium my-2'>Name:Alauddin Al Azad</p>
                        <p className='font-medium mb-4'>Email:alaudinf92@gmail.com</p>
                    </div>
                    <Link className='btn bg-blue-600 text-white w-full rounded-xl'> Browwed Now</Link>
                </div>
<div>
                <h2 className='text-xl my-2'>Details:</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse eaque vitae placeat repellat, inventore qui dolore totam ea incidunt tempora recusandae, ipsum tenetur eos voluptas! Inventore perferendis veniam sit dicta error sint corporis quidem dolore rem, iure recusandae hic iste, sequi est, a qui enim? Quis iusto officiis sed eaque! Magni, distinctio, itaque adipisci dignissimos, voluptate repudiandae veritatis dolorem repellat ipsa rem a ullam. Aliquam, minima eum eligendi alias quibusdam expedita quos magni in incidunt? Hic praesentium laborum numquam dicta nostrum? Inventore placeat exercitationem non porro nam, perferendis tempore cumque iste ea est impedit iusto labore doloribus veritatis quidem tempora odio similique qui vel dolores blanditiis explicabo consequuntur. Exercitationem, porro. Quia optio soluta labore provident voluptatum aliquam nobis repudiandae ullam, possimus consequatur, in enim quas quos, saepe earum sequi mollitia accusamus! Perspiciatis mollitia sapiente natus in tenetur minus earum ipsa, voluptatum eius perferendis est sequi vitae, voluptas aperiam, iusto consequatur accusantium aspernatur veniam esse! Illum magnam, quis beatae eos minus vero error nobis soluta inventore, qui itaque provident culpa odio natus expedita voluptas dolore, commodi totam atque iure quaerat. Tempora beatae deserunt ut maiores odio laboriosam tenetur, quam mollitia sed reiciendis commodi earum dicta adipisci eaque, autem at? Autem facere alias in, sunt, eaque dolorem laudantium illum porro molestias doloribus fugiat natus similique. Earum id facilis nobis laborum, quia quo sint vero dolorum exercitationem delectus labore at tenetur sunt soluta ratione modi eum! Explicabo in accusamus debitis at molestias corrupti possimus. Id molestiae voluptate in maxime quidem. Optio possimus dicta atque rerum et delectus modi, illo quisquam. Sed ea provident ullam laudantium iste, nisi ut nobis iusto consectetur, eos animi, officiis assumenda. Sint cupiditate quas iste perferendis consequatur soluta nihil at, amet ducimus, nobis harum aut doloremque repudiandae maiores? Saepe distinctio accusamus mollitia earum quis excepturi aliquid, ut aperiam iure.</p>
            </div>
            </div>
            
        </div>
    )
};

export default BookDetails;