import Link from 'next/link';
import cn from 'classnames';

const classes = {
  title: cn('text-4xl font-bold mb-4 text-center lg:text-left'),
  parragraph: cn('text-xl font-normal mb-4 text-center lg:text-left'),
  item: cn('flex flex-col items-center lg:items-start'),
};

export const InfoSection = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full m-auto md:max-w-lg lg:w-1/2 gap-8">
      <article className={classes.item}>
        <h2 className={classes.title}>Haz parte de nuestros sponsors</h2>
        <p className={classes.parragraph}>Apoyanos, crezcamos juntos, mejoremos este comunidad entre todos.</p>
        <Link href="/sponsors" className="btn btn-primary">
          Nuestros planes para sponsors.
        </Link>
      </article>
      <article className={classes.item}>
        <h2 className={classes.title}>Queremos escuchar sobre ti</h2>
        <p className={classes.parragraph}>Siempre estamos buscando charlistas, si quieres postular una charla, haz click en el botón</p>
        <a href="https://github.com/barranquillajs/Meetups/issues" target="_blank" rel="noreferrer" className="btn btn-primary">
          Postular charla
        </a>
      </article>
    </section>
  );
};
