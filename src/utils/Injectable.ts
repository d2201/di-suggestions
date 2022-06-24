import { injectable, InjectionToken, Lifecycle, scoped } from "tsyringe";
import { applyDecorators } from "./applyDecorators";

export const Injectable = () =>
  applyDecorators(scoped(Lifecycle.ContainerScoped), injectable);
