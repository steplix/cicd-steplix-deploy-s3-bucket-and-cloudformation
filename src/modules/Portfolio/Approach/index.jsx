import ChipColorFilled from '@/common/components/Chip/ChipColorFilled';
import Title from '@/common/components/Title/Gradient';

export const ApproachSection = ({ children, framework, technology }) => {
  return (
    <section className="flex flex-col gap-6 mountain-portfolio" id="how-we-deal-with-it">
      <div className="mt-4">
        <Title underlineFixed content="¿Cómo lo abordamos?" size="text-[26px]" />
      </div>
      <div className="flex flex-col xl:flex-row pb-8">
        <div className="flex items-center gap-4 mb-8">
          <span className="font-poppins text-[13px] font-medium text-purple">
            Marco de trabajo:
          </span>
          {children}
        </div>
        <div className="flex flex-wrap gap-2 mb-10">
          {framework.map((icon) => {
            return (
              <ChipColorFilled
                key={icon.iconName}
                background="bg-white"
                iconColor="text-blue"
                iconName={icon.iconName}
                label={icon.label}
                type="medium"
              />
            );
          })}
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-poppins text-[13px] font-medium text-purple">Tecnología:</span>
          <div className="flex flex-wrap gap-6 mb-10">
            {technology.map((img) => {
              return (
                <div key={img.alt}>
                  <img alt={img.alt} src={img.imageUrl} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
