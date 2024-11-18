import { GithubLogo, LinkedinLogo,  } from '@phosphor-icons/react'

export function Redes(){
    return (
        <div>
            <div>
                <ul className='flex flex-row gap-3 py-5'>
                    
                    <li><a href="https://github.com/Joaopedromartins21" target='_blank'><GithubLogo className='size-8 hover:scale-110 transition-all hover:text-green' /></a></li>
                    <li><a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-aguiar-martins-a45a3120b/" target='_blank'><LinkedinLogo className='size-8 hover:scale-110 transition-all hover:text-green' /></a></li>
                
                </ul>
            </div>
        </div>
    )
}