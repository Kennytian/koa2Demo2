const logger = (format) => {
  const formatted = format || ':method ":url"';
  return async (ctx, next) => {
    const str = formatted.replace(':method', ctx.method).replace(':url', ctx.url);
    console.log('logger:', str);
    await next();
  };
};

export default logger;
