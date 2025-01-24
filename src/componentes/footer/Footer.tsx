import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import { ReactNode, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

function Footer() {

    let data = new Date().getFullYear()

    const { usuario } = useContext(AuthContext)

    let component: ReactNode

    if (usuario.token !== "") {
        component = (
            <>
                <div className="flex justify-center bg-blue-100 text-blue-600 mt-20">
                    <div className="container flex flex-col items-center py-4">
                        <p className='text-xl font-medium mt-4'>
                            Blog Pessoal Generation | Copyright: {data}
                        </p>
                        <p className='text-lg mt-2'>
                            Acesse nossas redes sociais:
                        </p>
                        <div className='flex gap-4 mt-4 stroke-current stroke-1 text-blue-600 ...'>
                            <LinkedinLogo size={48} weight='bold' />
                            <InstagramLogo size={48} weight='bold' />
                            <FacebookLogo size={48} weight='bold' />
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            {component}
        </>
    )
}

export default Footer