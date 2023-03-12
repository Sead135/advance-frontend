import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Loader.module.scss';

interface LoaderProps {
	className?: string;
}

export const Loader = ({ className }: LoaderProps) => (
  <div className={classNames(classes.Loader, {}, [className])}>
    <div className={classNames(classes.LoaderInner, {}, [])}>
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);
