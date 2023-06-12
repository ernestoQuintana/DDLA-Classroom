import BoxClass from '@/components/contenedor/boxClass'
import '../styles/aulas.css'
import FooterSection from '@/layouts/footer'
import Encabezado from '@/layouts/header'


export default function Home() {
  return (
    <div>
      <Encabezado />
      <main>
        <div className='contenedor-principal'>
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
        </div>
      </main>
      <FooterSection />
    </div>
  )
}
