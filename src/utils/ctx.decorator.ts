import { inject } from "tsyringe";

export const LAZY_CONTEXT = Symbol("lazyContext");

export const InjectContext = () => inject(LAZY_CONTEXT);
