import { ButtonContained, FluidContainer } from '@makinox/makinox-ui';
import cn from 'classnames';

export const InfoSection = () => {
  const classes = {
    title: cn('text-2xl mb-1 text-center md:text-left'),
    parragraph: cn('text-base mb-2 text-center md:text-left'),
    item: cn('w-full md:w-96 rounded-md p-4'),
  };
  return (
    <section className={FluidContainer()}>
      <div className="flex justify-center flex-col md:flex-row md:justify-around pt-20">
        <article className={cn(classes.item, 'bg-primary-50')}>
          <h2 className={classes.title}>Queremos escuchar de ti</h2>
          <p className={classes.parragraph}>
            Si siempre estamos buscando charlistas, por favor haz click en el siguiente link si quieres postular una charla
          </p>
          <div className="flex justify-center md:justify-start">
            <a href="https://forms.gle/sjuHXjPZ28Rt7sfE6" target="_blank" rel="noreferrer" className={`${ButtonContained()} px-4`}>
              Postular charla
            </a>
          </div>
        </article>
        <article className={classes.item}>
          <h2 className={classes.title}>Haz parte de nuestros sponsors</h2>
          <p className={classes.parragraph}>Apoyanos, crezcamos juntos, mejoremos este comunidad entre todos.</p>
          <div className="flex justify-center md:justify-start">
            <a href="mailto:barranquillajsx@gmail.com" target="_blank" rel="noreferrer" className={ButtonContained()}>
              Mas informacion
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};
