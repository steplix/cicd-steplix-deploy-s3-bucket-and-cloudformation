export const CardBody = ({ space, title, description, children }) => {
  return (
    <div className='w-full p-2'>
      <div className={space}>{children}</div>
      <h3 className={`${space} text-black text-2xl font-bold mb-2`}>{title}</h3>
      <p className={`text-black text-sm`}>{description}</p>
    </div>
  );
};
