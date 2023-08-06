import cn from 'classnames';

const classes = {
  circles: cn('rounded-full absolute'),
  yellow: cn('bg-[#F2D903] blur-[150px]'),
  orange: cn('bg-[#F9CE68] blur-[200px]'),
};

export const GradientBackground = () => (
  <section className="absolute pointer-events-none h-screen w-full -z-10 container left-0 right-0 mx-auto hidden lg:block">
    <div className={cn(classes.circles, classes.yellow, 'w-[770px]  h-[617px] top-[-10%] left-[-15%]  opacity-30')} />
    <div className={cn(classes.circles, classes.orange, 'w-[1000px] h-[927px] top-[25%]  right-[-30%] opacity-40 hidden md:block')} />
    <div className={cn(classes.circles, classes.yellow, 'w-[400px]  h-[400px] top-[75%]  left-[-20%]  opacity-30 hidden md:block')} />
    <div className={cn(classes.circles, classes.orange, 'w-[800px]  h-[800px] top-[105%] left-[15%]   opacity-30 hidden md:block')} />
    <div className={cn(classes.circles, classes.yellow, 'w-[300px]  h-[300px] top-[170%] left-[-15%]  opacity-80 hidden md:block')} />
  </section>
);
