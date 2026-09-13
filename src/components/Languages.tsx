import React, { use } from 'react';
import type { ILanguageTypes } from '../Types/languagetypes';
import LanguageCard from './languages/LanguageCard';

interface LanguageProps {
    usersPromise: Promise<ILanguageTypes[]>;
}

const Languages = ({usersPromise}: LanguageProps) => {

    const languages = use(usersPromise); 
    // kept usersPromise(passed from App.tsx) into languages(inside languages.tsx)
    
    console.log(languages);
    return <div className='flex '>
            <div className='grid grid-cols-3 gap-4 m-30 width-[80%]'>{ 
            // map third bradket enclosed

                languages.map((language:ILanguageTypes,ind:number) => {

            return (
                <LanguageCard key={ind} language={language}></LanguageCard>
            )

                    
                })
                }
            </div>

            <div className=' my-30 width-[20%]'>
                <h2> right side</h2>
            </div>

        </div>


};

export default Languages;