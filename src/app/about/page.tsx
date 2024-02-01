import Image from '@/components/Image'
import avatar from '@/assets/1701737429891.jpeg'

const About = () => {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Acerca
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8">
              <Image
                src={avatar}
                alt="avatar"
                width={192}
                height={192}
                className="h-48 w-48 rounded-full"
              />
            <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">{'Alexis Sanchez'}</h3>
            <div className="text-gray-500 dark:text-gray-400">{'Fullstack Developer'}</div>
            <div className="text-gray-500 dark:text-gray-400">{'Freelance'}</div>
          </div>
          <div className="prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2">
            <p className="text-gray-500 dark:text-gray-400 mb-2">
              {'Soy un desarrollador de aplicaciones con experiencia en Node.js, React y React Native. Desde 2016 he desarrollado más de 9 proyectos en producción, entre los que destacan Tokn1, EllieCare, Ionic, Alma Productiva, Aloha, Meixter y Gigget.'}
            </p>
            <p className="text-gray-500 dark:text-gray-400 mb-2">
              {'Mi experiencia abarca tecnologías como NestJS, Express, MongoDB, Redis, GraphQL, API REST, programación reactiva, hooks, componentes funcionales, Docker y CI/CD (DevOps básico).'}
            </p>
            <p className="text-gray-500 dark:text-gray-400 mb-2">
              {'Me apasiona trabajar bajo principios SOLID y Clean Architecture, y siempre estoy en busca de nuevas formas de mejorar mis habilidades y conocimientos en el desarrollo de aplicaciones.'}
            </p>
            <p className="text-gray-500 dark:text-gray-400 mb-2">
              {'En particular, me enorgullece haber participado en el desarrollo de aplicaciones como Tokn1, Ellie Care, Ionica, Alma Productiva App, Aloha App, Aloha Web, Meixter App, Meixter Web y Gigget App. '}
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              {'Estoy comprometido con la creación de aplicaciones de alta calidad y escalables que sean intuitivas y satisfagan las necesidades de los usuarios. Además de mi experiencia técnica, también tengo habilidades en la resolución de problemas y trabajo en equipo, lo que me permite colaborar efectivamente en entornos de desarrollo ágiles y multidisciplinarios. Si tienes alguna pregunta o estás interesado en trabajar conmigo, no dudes en contactarme. ¡Gracias por visitar mi perfil de LinkedIn!'}
            </p>
          </div>
        </div>
      </div>
  )
}

export default About;