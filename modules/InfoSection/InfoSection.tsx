import { ButtonContained, FluidContainer } from '@makinox/makinox-ui';
import cn from 'classnames';

export const InfoSection = () => {
  const classes = {
    title: cn('text-2xl mb-1'),
    parragraph: cn('text-base mb-2'),
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
          <a href="#" className={`${ButtonContained()} px-4`}>
            Postular charla
          </a>
        </article>
        <article className={classes.item}>
          <h2 className={classes.title}>Haz parte de nuestros sponsors</h2>
          <p className={classes.parragraph}>Apoyanos, crezcamos juntos, mejoremos este parrafo para las empresas</p>
          <a href="#" className={ButtonContained()}>
            Mas informacion
          </a>
        </article>
      </div>
    </section>
  );
};
