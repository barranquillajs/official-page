import { Icon, IconCatalog } from '@/components';
import cn from 'classnames';

const classes = {
  yellowIcon: cn('bg-primary text-stone-900 p-3 rounded-2xl'),
  analyticTitle: cn('text-3xl font-medium mt-20 mb-8 text-center lg:text-left'),
  analyticDivider: cn('flex flex-col items-center lg:items-start gap-8 lg:flex-row lg:justify-between'),
  analyticCard: cn('flex gap-4 items-start py-5 px-2 md:px-10 bg-base-100 rounded-md shadow-xl md:w-[470px] md:max-w-[470px] md:min-w-[470px]'),
  analyticCardTitle: cn('text-xl font-bold mb-1'),
  analyticCardText: cn('md:w-80 max-w-xs text-base font-normal'),
};

export const AnalyticsSection = () => (
  <>
    <section>
      <h2 className={classes.analyticTitle}>Nuestras iniciativas</h2>
      <div className={classes.analyticDivider}>
        <article className={classes.analyticCard}>
          <span className={classes.yellowIcon}>
            <Icon icon={IconCatalog.diamond} viewBox="0 0 24 24" width={24} height={24} />
          </span>
          <div>
            <h3 className={classes.analyticCardTitle}>Charlas mensuales</h3>
            <p className={classes.analyticCardText}>
              Son dos charlas de aproximadamente 40 minutos de duración, que se van a dar el mismo día. Estas charlas están propuestas por los
              miembros de la comunidad que quieren compartir su conocimiento.
            </p>
          </div>
        </article>
        <article className={classes.analyticCard}>
          <span className={classes.yellowIcon}>
            <Icon icon={IconCatalog.diamond} viewBox="0 0 24 24" width={24} height={24} />
          </span>
          <div>
            <h3 className={classes.analyticCardTitle}>Taller mensual</h3>
            <p className={classes.analyticCardText}>
              Es un taller práctico sobre alguna tecnología particular dictado por alguno de los expertos de la comunidad, el evento puede durar unas
              tres horas.
            </p>
          </div>
        </article>
      </div>
    </section>
    <section>
      <h2 className={classes.analyticTitle}>Estadísticas</h2>
      <div className={classes.analyticDivider}>
        <article className={classes.analyticCard}>
          <span className={classes.yellowIcon}>
            <Icon icon={IconCatalog.diamond} viewBox="0 0 24 24" width={24} height={24} />
          </span>
          <div>
            <h3 className={classes.analyticCardTitle}>Dos reuniones al mes</h3>
          </div>
        </article>
        <article className={classes.analyticCard}>
          <span className={classes.yellowIcon}>
            <Icon icon={IconCatalog.diamond} viewBox="0 0 24 24" width={24} height={24} />
          </span>
          <div>
            <h3 className={classes.analyticCardTitle}>Mas de 70 asistentes a cada evento</h3>
          </div>
        </article>
      </div>
    </section>
  </>
);
