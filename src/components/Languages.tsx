import React, { use, useState, type Dispatch, type SetStateAction } from 'react';
import type { ILanguageTypes } from '../Types/languagetypes';
import LanguageCard from './languages/LanguageCard';
import { toast } from 'react-toastify';

interface LanguageProps {
    usersPromise: Promise<ILanguageTypes[]>;
    stack: ILanguageTypes[];
    setstack: Dispatch<SetStateAction<ILanguageTypes[]>>
}

const Languages = ({usersPromise,stack,setstack }: LanguageProps) => {
    // useState imported and declared to store selected card empty aray.

    // const [stack, setstack] = useState<ILanguageTypes[]>([]);

    const languages = use(usersPromise); 
    // kept usersPromise(passed from App.tsx) into languages(inside languages.tsx)
    
    const handleAddtoStack = (language:ILanguageTypes) => {
        // console.log("Clicked add t cart",language);
        setstack([...stack,language]);
        toast.success(`${language.name} added to the stack`)

    }
    return <div className='flex m-30 gap-5'>
            <div className='grid grid-cols-3 gap-4 width-[70%]'>{ 
            // map third bradket enclosed

                languages.map((language:ILanguageTypes,ind:number) => {

            return (
                <div className="card bg-base-70 w-75 shadow-sm">
                    <div className='flex justify-between'>
                          <div className='h-16 w-16 ml-5 mt-3'>
                        <img
                        src={language.icon}
                        alt="shoe" />
                    
                        </div>
                        <p className='text-[#0EA5E9] bg-blue-100 {} border border-b-slate-500 rounded-2xl px-1 py-1 mb-6 mr-3 mt-4'>{language.badge}</p>
                        </div>

                    <div className="card-body">
                        <h2 className="card-title">{language.name}</h2>
                        <p className='text-[#64748B]'>{language.description}</p>
                        <div className="card-actions">
                            <div className='flex justify-between container'>
                                <div><p className='  rounded-2xl bg-[#F1F5F9]'>{language.category}</p></div>
                                <p className=' pl-4  text-[#64748B]'>{language.difficulty}</p>
                                <p className=''>⭐ {language.rating}</p>
                            </div>
                        <button onClick={()=>handleAddtoStack(language)} className="w-full bg-black rounded-[10px] btn btn-primary">Add to Stack</button>
                        </div>
                    </div>
                    </div>
            )

                })
                }
            </div>


                <div className="card card-side bg-base-100 shadow-sm h-80 w-70 bg-[#F1F5F9]">

                    <div className="card-body">
                        <h2 className="card-title font-bold text-[23px]">Your Stack</h2>
                        <p>{stack.length} technology selected</p>
                        <div className='card-actions justify-center'>
                    <button className="btn btn-primary w-full rounded-[10px] text-[#D82C20] border-[#ED8C85] bg-white">Remove All</button>
                        </div>
                    </div>
                    </div>
                            

        </div>


};

export default Languages;