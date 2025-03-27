declare module '@hr-forte/legacy' {
  import { FC } from 'react';

  export const App: FC;

  export const bootstrap:
    | LifeCycleFn<ExtraProps>
    | Array<LifeCycleFn<ExtraProps>>;
  export const mount: LifeCycleFn<ExtraProps> | Array<LifeCycleFn<ExtraProps>>;
  export const unmount:
    | LifeCycleFn<ExtraProps>
    | Array<LifeCycleFn<ExtraProps>>;
  export const update: LifeCycleFn<ExtraProps> | Array<LifeCycleFn<ExtraProps>>;
}
