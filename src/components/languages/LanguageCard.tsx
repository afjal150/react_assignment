import React, { useState } from 'react';
import type { ILanguageTypes } from '../../Types/languagetypes';




const LanguageCard = ({language}:{language: ILanguageTypes}) => {

    const [stack, setstack] = useState<ILanguageTypes[]>([]);

    const handleAddtoStack = (language:ILanguageTypes) => {
        // console.log("Clicked add t cart",language);
        setstack([...stack,language])
    }
    console.log(stack,"stack");

    return (
        <div className="card bg-base-80 w-86 shadow-sm">
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
                                <div><p className=' pl-2 rounded-2xl bg-[#F1F5F9]'>{language.category}</p></div>
                                <p className=' pl-5  text-[#64748B]'>{language.difficulty}</p>
                                <p className=''>⭐ {language.rating}</p>
                            </div>
                        <button onClick={()=>handleAddtoStack(language)} className="w-full bg-black rounded-[10px] btn btn-primary">Add to Stack</button>
                        </div>
                    </div>
                    </div>
    );
};

export default LanguageCard;