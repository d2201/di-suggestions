import "reflect-metadata";
import { container } from "tsyringe";
import applyMixins from "./utils/applyMixins";
import { Context } from "./utils/ctx";
import { LAZY_CONTEXT } from "./utils/ctx.decorator";

interface LazyContext extends Context {}

class LazyContext {}

applyMixins(LazyContext, [Context]);

const createCtx = async () => {
  const subContainer = container.createChildContainer();

  const ctxReference: Context = new LazyContext();

  subContainer.registerInstance<Context>(LAZY_CONTEXT, ctxReference);

  const createdCtx = subContainer.resolve(Context);
  Object.assign(ctxReference, createdCtx);

  return createdCtx.run();
};

// Abstraction for two requests coming in
Promise.all([createCtx(), createCtx()]);
