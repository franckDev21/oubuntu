import Accordeon from '@/components/uikit/Accordeon';
import React, { FC } from 'react'

type FAQBlockProps = {
  className?: string;
}

const FAQBlock:FC<FAQBlockProps> = ({ className = '' }) => {
  return (
    <div className={`${className} py-20`}>
      <h1 className='text-center font-bold text-text text-2xl uppercase mb-10'>Questions frequemment posees</h1>

      <div className="space-y-6">
        <Accordeon className='px-40' title="C'est quoi Oubuntu ?">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta illo maiores, eveniet sequi eum nam ullam harum nostrum odio molestiae, dolor vel molestias nobis tenetur fugiat veniam. Autem, sunt!
        </Accordeon>
        <Accordeon className='px-40' title="La procedure pour être vendeur c'est quoi ?">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta illo maiores, eveniet sequi eum nam ullam harum nostrum odio molestiae, dolor vel molestias nobis tenetur fugiat veniam. Autem, sunt!
        </Accordeon>
        <Accordeon className='px-40' title="Où êtes vous situer ?">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta illo maiores, eveniet sequi eum nam ullam harum nostrum odio molestiae, dolor vel molestias nobis tenetur fugiat veniam. Autem, sunt!
        </Accordeon>
        <Accordeon className='px-40' title="Pourquoi choisir Oubuntu ?">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta illo maiores, eveniet sequi eum nam ullam harum nostrum odio molestiae, dolor vel molestias nobis tenetur fugiat veniam. Autem, sunt!
        </Accordeon>
        <Accordeon className='px-40' title="Comment télécharger l'application mobile ?">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta illo maiores, eveniet sequi eum nam ullam harum nostrum odio molestiae, dolor vel molestias nobis tenetur fugiat veniam. Autem, sunt!
        </Accordeon>
        <Accordeon className='px-40' title="Comment fonctionne le service d'acompagnement ?">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta illo maiores, eveniet sequi eum nam ullam harum nostrum odio molestiae, dolor vel molestias nobis tenetur fugiat veniam. Autem, sunt!
        </Accordeon>
      </div>
    </div>
  )
}

export default FAQBlock