import BoxClass from '@/components/contenedor/boxClass'
import { fromCallback } from 'cypress/types/bluebird'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <header className='contenedor_header'>
        <div className='title'>
          <h1>Aulas DDLA</h1>
        </div>
      </header>
      <div className='contenedor-aulas'>
        <BoxClass 
          imagen='sopa'
          type='jpg'
          title='Aulas 1' 
          description='Aulas ddla con Erica'>
        </BoxClass>
        <BoxClass 
          imagen='aula2'
          title='Aulas 2' 
          type='jpeg'
          description='Aulas ddla con Aysan'>
        </BoxClass>
        <BoxClass 
          imagen='aula1'
          title='Aulas 3'
          type='webp'
          description='Aulas ddla con Tridi'>
        </BoxClass>
      </div>
    </main>
  )
}
