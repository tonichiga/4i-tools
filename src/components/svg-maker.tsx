const DEFAULT_BASE_PATH = "/images/sprite.svg#";

const SvgMaker = (
  name: string,
  className?: string,
  basePath = DEFAULT_BASE_PATH
) => {
  return (
    <svg className={className}>
      <use href={`${basePath}${name}`}></use>
    </svg>
  );
};

export default SvgMaker;
